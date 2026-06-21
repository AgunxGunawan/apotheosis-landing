import urllib.request
import json

query = """
query {
  Page(page: 1, perPage: 10) {
    media(search: "Bai Lian Cheng Shen", type: ANIME) {
      id
      title {
        romaji
        english
      }
      coverImage {
        extraLarge
      }
      bannerImage
    }
  }
}
"""
url = 'https://graphql.anilist.co'
data = json.dumps({'query': query}).encode('utf-8')
req = urllib.request.Request(url, data=data, headers={'Content-Type': 'application/json', 'Accept': 'application/json'})

try:
    response = urllib.request.urlopen(req)
    res = json.loads(response.read().decode('utf-8'))
    for media in res['data']['Page']['media']:
        print(f"{media['title']['romaji']} ({media['title']['english']})")
        print(f"Cover: {media['coverImage']['extraLarge']}")
        print(f"Banner: {media.get('bannerImage')}")
        print('-'*20)
except Exception as e:
    print(e)
