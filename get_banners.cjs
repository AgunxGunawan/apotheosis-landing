const https = require('https');

const data = JSON.stringify({
  query: `
  query {
    Page(page: 1, perPage: 10) {
      media(search: "Bai Lian Cheng Shen", type: ANIME) {
        id
        title {
          romaji
        }
        coverImage {
          extraLarge
        }
        bannerImage
      }
    }
  }
  `
});

const options = {
  hostname: 'graphql.anilist.co',
  port: 443,
  path: '/',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
};

const req = https.request(options, (res) => {
  let body = '';
  res.on('data', (d) => { body += d; });
  res.on('end', () => {
    console.log(JSON.stringify(JSON.parse(body), null, 2));
  });
});

req.on('error', (e) => {
  console.error(e);
});

req.write(data);
req.end();
