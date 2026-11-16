import os
import glob
from PIL import Image, ImageDraw, ImageFont

MEDIA_DIR = r"d:\Recks\frd-Rohitha-Sunkara\public\rohitha"
ARTIFACT_DIR = r"C:\Users\SAKSHAM\.gemini\antigravity\brain\4f275801-4ce7-49c6-88e9-164c42e15068"

photos = sorted(glob.glob(os.path.join(MEDIA_DIR, "photo_*.jpg")), 
                key=lambda x: int(os.path.basename(x).split('_')[1].split('.')[0]))

print(f"Total photos: {len(photos)}")

batch_size = 16
for batch_idx in range(0, len(photos), batch_size):
    batch = photos[batch_idx : batch_idx + batch_size]
    cols = 4
    rows = (len(batch) + cols - 1) // cols
    cell_w, cell_h = 300, 400
    sheet = Image.new("RGB", (cols * cell_w, rows * cell_h), (255, 255, 255))
    draw = ImageDraw.Draw(sheet)
    
    for i, p_path in enumerate(batch):
        c = i % cols
        r = i // cols
        fname = os.path.basename(p_path)
        try:
            with Image.open(p_path) as img:
                img_thumb = img.convert("RGB")
                img_thumb.thumbnail((cell_w, cell_h - 40))
                
                # Center thumb in cell
                ox = c * cell_w + (cell_w - img_thumb.width) // 2
                oy = r * cell_h + (cell_h - 40 - img_thumb.height) // 2
                sheet.paste(img_thumb, (ox, oy))
                
                # Draw label
                lbl = fname
                draw.rectangle([c * cell_w, r * cell_h + cell_h - 35, (c + 1) * cell_w, (r + 1) * cell_h], fill=(245, 230, 240))
                draw.text((c * cell_w + 10, r * cell_h + cell_h - 28), lbl, fill=(180, 20, 90))
        except Exception as e:
            pass
            
    out_name = f"contact_sheet_{batch_idx // batch_size + 1}.jpg"
    sheet.save(os.path.join(ARTIFACT_DIR, out_name), quality=85)
    print(f"Saved {out_name}")
