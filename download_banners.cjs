const https = require('https');
const fs = require('fs');

const urls = {
  'season1.png': 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx150950-h1BekOOJ0YK0.png',
  'season2.jpg': 'https://s4.anilist.co/file/anilistcdn/media/anime/banner/174703-M6yq6D0SraEg.jpg',
  'season3.jpg': 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx195877-8ZwkzV0zsJI9.jpg'
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
