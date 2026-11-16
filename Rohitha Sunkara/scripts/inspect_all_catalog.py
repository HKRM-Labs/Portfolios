import json

with open(r"d:\Recks\frd-Rohitha-Sunkara\public\rohitha\profile.json", "r", encoding="utf-8") as f:
    data = json.load(f)

print(f"Total posts: {len(data['catalog'])}")
for i, p in enumerate(data['catalog'], 1):
    clean_cap = p['caption'].encode('ascii', 'ignore').decode().replace('\n', ' ')
    print(f"Post {i:2d} | Type: {p['type']:8s} | Files: {p['files']} | Likes: {p['likes']:5d} | Cap: {clean_cap[:80]}")
