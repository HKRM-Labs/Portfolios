const puppeteer = require('d:/Recks/FrndHelp/node_modules/puppeteer-core');
const fs = require('fs');
const https = require('https');
const http = require('http');
const path = require('path');

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const client = url.startsWith('https') ? https : http;
    client.get(url, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        return downloadFile(response.headers.location, dest).then(resolve).catch(reject);
      }
      if (response.statusCode !== 200) {
        return reject(new Error(`Failed to download: status ${response.statusCode}`));
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

(async () => {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  const interceptedData = [];
  page.on('response', async (res) => {
    const url = res.url();
    if (url.includes('api-wh.anonyig.com') || url.includes('api.anonyig.com') || url.includes('/api/')) {
      try {
        const json = await res.json();
        interceptedData.push({ url, status: res.status(), json });
      } catch (e) {}
    }
  });

  console.log('Navigating to AnonyIG...');
  await page.goto('https://anonyig.com/en1/instagram-profile-viewer/', { waitUntil: 'networkidle2' });

  // Type username
  await page.type('input', 'pallaviiii124');
  await new Promise(r => setTimeout(r, 1000));

  // Find search button
  const buttons = await page.$$('button');
  for (const b of buttons) {
    const txt = await page.evaluate(el => el.innerText, b);
    if (/search/i.test(txt)) {
      console.log('Found search button, clicking...');
      await b.click();
      break;
    }
  }

  // Wait for initial load
  console.log('Waiting for initial response...');
  await new Promise(r => setTimeout(r, 12000));

  console.log('Intercepted API calls count:', interceptedData.length);
  fs.writeFileSync('scripts/anonyig_intercepted.json', JSON.stringify(interceptedData, null, 2));

  // Check buttons / tabs on page
  const pageButtons = await page.evaluate(() => {
    const elements = Array.from(document.querySelectorAll('button, a, div[role="tab"]'));
    return elements.map(el => ({ text: el.innerText.trim(), tag: el.tagName, className: el.className }));
  });
  console.log('Relevant page buttons:', pageButtons.filter(b => /reel|post|load|more|video/i.test(b.text)));

  // Click on "Reels" tab if it exists
  const reelsTab = await page.evaluate(() => {
    const els = Array.from(document.querySelectorAll('button, a, div'));
    const found = els.find(el => el.innerText && el.innerText.trim().toLowerCase() === 'reels');
    if (found) {
      found.click();
      return true;
    }
    return false;
  });
  console.log('Clicked Reels tab?', reelsTab);

  if (reelsTab) {
    await new Promise(r => setTimeout(r, 8000));
  }

  // Check for "Load More" button and click it repeatedly
  let loadMoreClicks = 0;
  while (loadMoreClicks < 6) {
    const clicked = await page.evaluate(() => {
      const els = Array.from(document.querySelectorAll('button, a'));
      const btn = els.find(el => el.innerText && /load more/i.test(el.innerText));
      if (btn) {
        btn.click();
        return true;
      }
      return false;
    });
    if (!clicked) {
      console.log('No more "Load More" button found.');
      break;
    }
    loadMoreClicks++;
    console.log(`Clicked "Load More" (click ${loadMoreClicks})...`);
    await new Promise(r => setTimeout(r, 5000));
  }

  // Extract all media download links from DOM
  const mediaElements = await page.evaluate(() => {
    const results = [];
    // Check download links or video/img sources
    const links = Array.from(document.querySelectorAll('a[download], a[href*="cdninstagram"], a[href*="media.anonyig.com"], video source, video, img[src*="cdninstagram"]'));
    links.forEach(el => {
      const href = el.href || el.src;
      const download = el.getAttribute('download') || '';
      const isVideo = el.tagName === 'VIDEO' || el.tagName === 'SOURCE' || href.includes('.mp4');
      results.push({ href, download, isVideo, tag: el.tagName });
    });
    return results;
  });

  console.log('Found media elements in DOM:', mediaElements.length);
  fs.writeFileSync('scripts/anonyig_media.json', JSON.stringify({ mediaElements, interceptedCount: interceptedData.length }, null, 2));

  await browser.close();
  console.log('Done exploring AnonyIG.');
})();
