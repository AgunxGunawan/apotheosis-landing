import urllib.request
import re

def get_wiki_image(url):
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        html = urllib.request.urlopen(req).read().decode('utf-8')
        match = re.search(r'<meta property="og:image" content="([^"]+)"', html)
        if match:
            img = match.group(1)
            return img
    except Exception as e:
        pass
    return None

cauldron = get_wiki_image('https://apotheosis.fandom.com/wiki/Dragon_Cauldron')
xun = get_wiki_image('https://apotheosis.fandom.com/wiki/Xun')
ning = get_wiki_image('https://apotheosis.fandom.com/wiki/Ning_Yudie')

print(f"Cauldron: {cauldron}")
print(f"Xun: {xun}")
print(f"Ning: {ning}")
