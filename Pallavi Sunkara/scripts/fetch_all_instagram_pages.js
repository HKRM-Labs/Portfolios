const puppeteer = require('d:\\Recks\\FrndHelp\\node_modules\\puppeteer-core');
const fs = require('fs');
const path = require('path');
const https = require('https');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

(async () => {
  console.log('Launching Chrome headful...');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: false,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-blink-features=AutomationControlled',
      '--window-size=1280,900'
    ]
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900 });

  const interceptedPosts = [];
  page.on('response', async (response) => {
    const url = response.url();
    if (url.includes('api-wh.anonyig.com') || url.includes('/api/v2/instagram/')) {
      try {
        const text = await response.text();
        console.log(`[API Response] ${url}`);
        interceptedPosts.push({ url, text });
      } catch (e) {}
    }
  });

  console.log('Navigating to anonyig.com/en1/instagram-profile-viewer/...');
  await page.goto('https://anonyig.com/en1/instagram-profile-viewer/', { waitUntil: 'networkidle2', timeout: 35000 });

  const inputSelector = '.search-form__input, input.search';
  await page.waitForSelector(inputSelector, { timeout: 15000 });
  await page.click(inputSelector);
  await page.type(inputSelector, 'pallaviiii124', { delay: 80 });

  console.log('Submitting search via Enter key...');
  await page.keyboard.press('Enter');

  console.log('Waiting for initial profile response (15 seconds)...');
  await new Promise(r => setTimeout(r, 15000));

  // Check what buttons exist on the page
  const pageState = await page.evaluate(() => {
    const buttons = Array.from(document.querySelectorAll('button, a')).map(b => b.innerText.trim());
    return {
      buttons: buttons.filter(b => b.length > 0 && b.length < 50),
      bodyTextSnippet: document.body.innerText.slice(0, 500)
    };
  });
  console.log('Page buttons after search:', pageState.buttons);

  // Check if there is a Reels tab or link
  const clickedReels = await page.evaluate(() => {
    const els = Array.from(document.querySelectorAll('button, a, div, span'));
    const r = els.find(e => e.innerText && e.innerText.trim().toLowerCase() === 'reels');
    if (r) {
      r.click();
      return true;
    }
    return false;
  });
  console.log('Clicked Reels?', clickedReels);
  if (clickedReels) {
    await new Promise(r => setTimeout(r, 8000));
  }

  // Click Load More repeatedly
  for (let step = 1; step <= 5; step++) {
    const clicked = await page.evaluate(() => {
      const els = Array.from(document.querySelectorAll('button, a'));
      const loadMore = els.find(e => e.innerText && /load more|show more|view more/i.test(e.innerText));
      if (loadMore) {
        loadMore.scrollIntoView();
        loadMore.click();
        return true;
      }
      return false;
    });

    if (clicked) {
      console.log(`Clicked Load More (step ${step})...`);
      await new Promise(r => setTimeout(r, 6000));
    } else {
      console.log(`No Load More button at step ${step}. Scrolling to bottom...`);
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      await new Promise(r => setTimeout(r, 4000));
    }
  }

  fs.writeFileSync('scripts/all_intercepted_api.json', JSON.stringify(interceptedPosts, null, 2));
  console.log(`Saved ${interceptedPosts.length} intercepted responses.`);

  await browser.close();
})();
