const https = require('https');
const fs = require('fs');

const urls = {
  'season1_hq.jpg': 'https://i.ytimg.com/vi/F2o3UeG7r9M/hq720.jpg',
  'season2_hq.jpg': 'https://i.ytimg.com/vi/_bY0R4h2GZE/hq720.jpg',
  'season3_hq.jpg': 'https://i.ytimg.com/vi/E5t1-tU0w4g/hq720.jpg'
};

for (const [filename, url] of Object.entries(urls)) {
  const file = fs.createWriteStream(`public/assets/images/story/${filename}`);
  https.get(url, function(response) {
    response.pipe(file);
    file.on('finish', function() {
      file.close(() => console.log(`Downloaded ${filename}`));
    });
  }).on('error', function(err) {
    fs.unlink(`public/assets/images/story/${filename}`, () => {});
    console.error(`Error downloading ${filename}: ${err.message}`);
  });
}
