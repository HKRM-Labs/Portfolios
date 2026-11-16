import re
from PIL import Image

with open('components/EditorialGallery.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

items = re.findall(r'id:\s*"([^"]+)",\s*type:\s*"([^"]+)",\s*title:\s*"([^"]+)",\s*category:\s*"([^"]+)",\s*tag:\s*"([^"]+)",\s*mediaSrc:\s*"([^"]+)"', text)

for item in items:
    id_, type_, title, cat, tag, media = item
    print(f'{id_} | {type_} | {title} | {tag} | {media}')
    if type_ == 'post':
        path = 'public' + media
        try:
            with Image.open(path) as img:
                print(f'   -> Size: {img.size}, Aspect Ratio: {img.size[0]/img.size[1]:.2f}')
        except Exception as e:
            print(f'   -> Error: {e}')
