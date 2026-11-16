from PIL import Image

tests = [
    ('photo_8.jpg', 0.20),
    ('photo_16.jpg', 0.20),
    ('photo_4.jpg', 0.28),
    ('photo_10.jpg', 0.25),
    ('photo_1.jpg', 0.50),
    ('photo_17.jpg', 0.50),
    ('photo_12.jpg', 0.20),
    ('photo_26.jpg', 0.25),
]

target_ratio = 300 / 375 # 0.80

for name, pos_y in tests:
    img = Image.open('public/pallavi/' + name)
    w, h = img.size
    img_ratio = w / h
    if img_ratio > target_ratio: # wider than target
        crop_w = int(h * target_ratio)
        crop_h = h
        left = int((w - crop_w) * 0.5)
        top = 0
    else: # taller than target
        crop_w = w
        crop_h = int(w / target_ratio)
        left = 0
        top = int((h - crop_h) * pos_y)
        top = max(0, min(top, h - crop_h))
    
    print(f'{name} ({w}x{h}) -> crop {crop_w}x{crop_h} at top={top} ({top/h*100:.1f}%), visible height = {crop_h/h*100:.1f}%')
