from PIL import Image

def test_crop(img_path, target_ratio, pos_y=0.0):
    img = Image.open(img_path)
    w, h = img.size
    img_ratio = w / h
    if img_ratio > target_ratio: # image is wider than target, crop left/right
        new_w = int(h * target_ratio)
        new_h = h
        left = (w - new_w) // 2
        top = 0
    else: # image is taller than target, crop top/bottom
        new_w = w
        new_h = int(w / target_ratio)
        left = 0
        top = int((h - new_h) * pos_y)
    crop_box = (left, top, left + new_w, top + new_h)
    return crop_box, (w, h)

print('Photo 4 (1080x1440):')
print('Old landscape crop (ratio 1.42, top):', test_crop('public/pallavi/photo_4.jpg', 1.42, 0.0))
print('New portrait crop (ratio 0.82, top):', test_crop('public/pallavi/photo_4.jpg', 0.82, 0.0))
print('New portrait crop (ratio 0.82, center 15%):', test_crop('public/pallavi/photo_4.jpg', 0.82, 0.15))

print('\nPhoto 8 (3276x4096):')
print('Old landscape crop (ratio 1.42, top):', test_crop('public/pallavi/photo_8.jpg', 1.42, 0.0))
print('New portrait crop (ratio 0.82, top):', test_crop('public/pallavi/photo_8.jpg', 0.82, 0.0))
