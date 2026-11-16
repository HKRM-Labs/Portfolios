import cv2
import os
import glob
import json
from PIL import Image

MEDIA_DIR = r"d:\Recks\frd-Rohitha-Sunkara\public\rohitha"
PROFILE_PATH = os.path.join(MEDIA_DIR, "profile.json")

with open(PROFILE_PATH, "r", encoding="utf-8") as f:
    profile_data = json.load(f)

# Build file to post map
file_to_post = {}
for p in profile_data["catalog"]:
    for f in p["files"]:
        file_to_post[f] = p

face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')

photo_files = sorted(glob.glob(os.path.join(MEDIA_DIR, "photo_*.jpg")), 
                     key=lambda x: int(os.path.basename(x).split('_')[1].split('.')[0]))

results = []

for p_path in photo_files:
    fname = os.path.basename(p_path)
    img = cv2.imread(p_path)
    if img is None:
        continue
    h, w = img.shape[:2]
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    faces = face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=4, minSize=(60, 60))
    face_count = len(faces)
    
    post = file_to_post.get(fname, {})
    cap = post.get("caption", "").encode('ascii', 'ignore').decode().replace("\n", " ")
    
    results.append({
        "file": fname,
        "width": w,
        "height": h,
        "aspect": round(w / h, 2),
        "faces": face_count,
        "caption": cap[:60],
        "post_type": post.get("type", "")
    })

print(f"Total analyzed photos: {len(results)}")
solo_shots = [r for r in results if r["faces"] == 1]
print(f"Single-face solo shots: {len(solo_shots)}")
print("\n--- SOLO SHOTS PREVIEW ---")
for s in solo_shots:
    print(f"{s['file']:12s} | {s['width']}x{s['height']} | cap: {s['caption']}")

with open(os.path.join(MEDIA_DIR, "media_analysis.json"), "w", encoding="utf-8") as f:
    json.dump({"results": results, "solo": solo_shots}, f, indent=2)
