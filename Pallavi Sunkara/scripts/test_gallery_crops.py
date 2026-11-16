from PIL import Image

# Let's test the visual crop of photo_4, photo_8, photo_10, photo_16 with 308x373 box (ratio 0.825) and object-position 25% or 30%
for name, pos_y in [
    ('photo_4.jpg', 0.28), # poolside: face starts at row 472 out of 1440
    ('photo_8.jpg', 0.20), # hair artistry & zari blouse
    ('photo_10.jpg', 0.25), # wine sequin saree
    ('photo_16.jpg', 0.20), # yellow saree
]:
    img = Image.open('public/pallavi/' + name)
    w, h = img.size
    target_ratio = 308 / 373 # 0.8257
    img_ratio = w / h # ~0.75
    
    # img is narrower than target_ratio (0.75 < 0.825)
    # So width is 100% (w), and height is w / target_ratio
    crop_h = int(w / target_ratio)
    crop_w = w
    
    top = int((h - crop_h) * pos_y)
    top = max(0, min(top, h - crop_h))
    
    cropped = img.crop((0, top, crop_w, top + crop_h))
    cropped.thumbnail((308, 373))
    cropped.save(f'C:/Users/SAKSHAM/.gemini/antigravity/brain/4f275801-4ce7-49c6-88e9-164c42e15068/preview_{name}.png')
    print(f'{name}: cropped to {crop_w}x{crop_h} from y={top} -> saved preview_{name}.png')
