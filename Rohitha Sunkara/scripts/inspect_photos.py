import os
import glob
from PIL import Image

files = glob.glob(r"d:\Recks\frd-Rohitha-Sunkara\public\rohitha\photo_*.jpg")
res = []
for f in files:
    try:
        with Image.open(f) as img:
            w, h = img.size
            size = os.path.getsize(f)
            base = os.path.basename(f)
            num = int(base.split('_')[1].split('.')[0])
            res.append((num, base, w, h, size))
    except Exception as e:
        pass

res.sort(key=lambda x: x[0])
print(f"Total photos analyzed: {len(res)}")
print("\nTop 30 photos with highest resolution:")
by_res = sorted(res, key=lambda x: x[2]*x[3], reverse=True)
for item in by_res[:30]:
    print(f"{item[1]}: {item[2]}x{item[3]} ({round(item[4]/1024, 1)} KB)")

print("\nFirst 30 photos sequential:")
for item in res[:30]:
    print(f"{item[1]}: {item[2]}x{item[3]} ({round(item[4]/1024, 1)} KB)")
