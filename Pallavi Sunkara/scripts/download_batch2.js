const fs = require('fs');
const https = require('https');
const path = require('path');

const OUTPUT_DIR = 'd:\\Recks\\FrndHelp\\public\\pallavi';

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadFile(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Status ${res.statusCode} for ${url}`));
      }
      res.pipe(file);
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
  const data = JSON.parse(fs.readFileSync('scripts/all_intercepted_api.json', 'utf8'));
  const batch2 = JSON.parse(data[2].text).result.items;

  console.log('Processing batch 2 items...');
  let photoIndex = 43;
  let reelIndex = 3;

  for (let i = 0; i < batch2.length; i++) {
    const item = batch2[i];
    if (item.type === 'video') {
      const v = item.media[0];
      const videoUrl = v.versions?.[0]?.url || v.url;
      const thumbUrl = v.thumbnailUrl || v.thumbnailUrlDownloadable;
      const destVideo = path.join(OUTPUT_DIR, `reel_${reelIndex}.mp4`);
      const destThumb = path.join(OUTPUT_DIR, `reel_${reelIndex}_thumb.jpg`);

      console.log(`Downloading reel_${reelIndex}.mp4 from:`, videoUrl.slice(0, 70));
      try {
        await downloadFile(videoUrl, destVideo);
        console.log(`Saved ${destVideo} (${fs.statSync(destVideo).size} bytes)`);
      } catch (e) {
        console.error(`Failed reel_${reelIndex}.mp4:`, e.message);
      }

      if (thumbUrl) {
        try {
          await downloadFile(thumbUrl, destThumb);
          console.log(`Saved ${destThumb}`);
        } catch (e) {}
      }
      reelIndex++;
    } else if (item.media && item.media.length > 0) {
      for (const m of item.media) {
        const photoUrl = m.versions?.[0]?.url || m.url;
        if (photoUrl) {
          const destPhoto = path.join(OUTPUT_DIR, `photo_${photoIndex}.jpg`);
          try {
            await downloadFile(photoUrl, destPhoto);
            console.log(`Saved photo_${photoIndex}.jpg (${fs.statSync(destPhoto).size} bytes)`);
            photoIndex++;
          } catch (e) {
            console.error(`Failed photo_${photoIndex}:`, e.message);
          }
        }
      }
    }
  }

  console.log(`Finished downloading. Total photos now up to ${photoIndex - 1}, reels up to ${reelIndex - 1}`);
})();
