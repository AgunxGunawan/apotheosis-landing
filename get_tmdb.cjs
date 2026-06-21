const https = require('https');

const options = {
  hostname: 'www.themoviedb.org',
  port: 443,
  path: '/tv/213606-bai-lian-cheng-shen/images/backdrops?language=en-US',
  method: 'GET',
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
  }
};

const req = https.request(options, (res) => {
  let body = '';
  res.on('data', (d) => { body += d; });
  res.on('end', () => {
    // Regex to find background images
    const regex = /<a class="image" href="\/t\/p\/original([^"]+)"/g;
    let match;
    const urls = [];
    while ((match = regex.exec(body)) !== null) {
      urls.push("https://image.tmdb.org/t/p/original" + match[1]);
    }
    console.log(urls.slice(0, 5));
  });
});

req.on('error', (e) => {
  console.error(e);
});

req.end();
