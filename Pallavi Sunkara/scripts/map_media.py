import json
import re

with open(r'C:\Users\SAKSHAM\.gemini\antigravity\brain\4f275801-4ce7-49c6-88e9-164c42e15068\scratch\intercepted-api.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

posts = json.loads(data[1]['text'])['result']['items']

catalog = []
file_idx = 1
video_idx = 1

for p_idx, post in enumerate(posts):
    p_type = post.get('type')
    caption = post.get('caption', '').replace('\n', ' ')
    media = post.get('media', [])
    items_in_post = []
    for m_idx, m in enumerate(media):
        m_type = m.get('type')
        w = m.get('width')
        h = m.get('height')
        if m_type == 'video':
            item_name = f"reel_{video_idx}.mp4"
            video_idx += 1
        else:
            item_name = f"photo_{file_idx}.jpg"
            file_idx += 1
        items_in_post.append({'filename': item_name, 'type': m_type, 'width': w, 'height': h})
    
    catalog.append({
        'post_index': p_idx + 1,
        'post_type': p_type,
        'caption': caption,
        'media': items_in_post
    })

with open('scripts/media_catalog.json', 'w', encoding='utf-8') as f:
    json.dump(catalog, f, indent=2, ensure_ascii=False)

print(f"Catalog saved with {len(catalog)} posts and {file_idx-1} photos, {video_idx-1} videos!")
