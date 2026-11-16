import os
from PIL import Image, ImageDraw, ImageFont, ImageFilter

def create_og_image():
    # Standard OpenGraph Dimensions: 1200 x 630
    w, h = 1200, 630
    img = Image.new('RGB', (w, h), color='#120E12')
    
    # Background subtle ambient glow
    glow = Image.new('RGB', (w, h), color='#120E12')
    glow_draw = ImageDraw.Draw(glow)
    glow_draw.ellipse([700, 50, 1300, 600], fill='#351835')
    glow_draw.ellipse([-80, -80, 450, 450], fill='#261226')
    glow = glow.filter(ImageFilter.GaussianBlur(90))
    img = Image.blend(img, glow, 0.75)
    draw = ImageDraw.Draw(img)

    # Luxury outer hairline borders
    draw.rectangle([14, 14, w - 15, h - 15], outline='#3E2A3E', width=1)
    draw.rectangle([18, 18, w - 19, h - 19], outline='#241724', width=1)

    # Right side: Pallavi Sunkara's Authentic Portrait (avatar.jpg)
    avatar_path = 'public/pallavi/avatar.jpg'
    if not os.path.exists(avatar_path):
        print(f"Error: {avatar_path} not found!")
        return

    avatar = Image.open(avatar_path).convert('RGB')
    p_w, p_h = 510, 592
    
    # Center crop avatar to fit 510x592
    orig_w, orig_h = avatar.size
    crop_w = int(orig_h * (p_w / p_h))
    if crop_w > orig_w:
        crop_h = int(orig_w * (p_h / p_w))
        top = (orig_h - crop_h) // 2
        avatar_cropped = avatar.crop((0, top, orig_w, top + crop_h))
    else:
        left = (orig_w - crop_w) // 2
        avatar_cropped = avatar.crop((left, 0, left + crop_w, orig_h))
        
    avatar_resized = avatar_cropped.resize((p_w, p_h), Image.Resampling.LANCZOS)

    # Paste on right side
    paste_x = w - p_w - 19
    paste_y = 19
    img.paste(avatar_resized, (paste_x, paste_y))

    # Border between portrait and text side
    draw.line([(paste_x, paste_y), (paste_x, paste_y + p_h)], fill='#FAF3EB', width=2)

    # Smooth soft gradient blend on the left edge of portrait
    fade_w = 180
    gradient = Image.new('L', (fade_w, p_h), color=0)
    for x in range(fade_w):
        val = int(255 * (1.0 - (x / float(fade_w))))
        for y in range(p_h):
            gradient.putpixel((x, y), val)
    blend_color = Image.new('RGB', (fade_w, p_h), color='#120E12')
    img.paste(blend_color, (paste_x, paste_y), gradient)

    # Windows fonts
    font_badge = None
    font_name = None
    font_sub = None
    font_body = None
    font_handle = None

    for f_path in ['C:/Windows/Fonts/georgiab.ttf', 'C:/Windows/Fonts/timesbd.ttf', 'arialbd.ttf']:
        if os.path.exists(f_path):
            font_name = ImageFont.truetype(f_path, 52)
            break
            
    for f_path in ['C:/Windows/Fonts/georgia.ttf', 'C:/Windows/Fonts/times.ttf', 'arial.ttf']:
        if os.path.exists(f_path):
            font_badge = ImageFont.truetype(f_path, 15)
            font_sub = ImageFont.truetype(f_path, 25)
            font_body = ImageFont.truetype(f_path, 18)
            font_handle = ImageFont.truetype(f_path, 20)
            break

    if not font_name:
        font_name = font_badge = font_sub = font_body = font_handle = ImageFont.load_default()

    # Left Column: High-Fashion Editorial Typography
    # 1. Top Category Badge Pill
    draw.rectangle([65, 55, 360, 92], fill='#201520', outline='#E8A2B6', width=1)
    draw.text((80, 64), 'OFFICIAL EDITORIAL PORTFOLIO', fill='#E8A2B6', font=font_badge)

    # 2. Prominent Model & Actress Name
    draw.text((65, 125), 'PALLAVI SUNKARA', fill='#FAF3EB', font=font_name)

    # 3. Subtitle / Discipline
    draw.text((65, 200), 'Fashion Model & Actress', fill='#F4E5D4', font=font_sub)

    # 4. Editorial Highlights List
    bullets = [
        "Height: 5'7\" (170 cm) • Runway Direction",
        "Heritage Handlooms, Kanjeevaram & Bridal Couture",
        "Screen Poise & High-Fashion Campaign Looks",
        "Based in Hyderabad & Kurnool, India"
    ]
    y = 265
    for b in bullets:
        draw.text((65, y), "•  " + b, fill='#DCCDC0', font=font_body)
        y += 36

    # 5. Verified Instagram Box
    draw.rectangle([65, 455, 385, 515], fill='#2B1F2B', outline='#E8A2B6', width=1)
    draw.text((85, 473), 'INSTAGRAM: @pallaviiii124', fill='#FAF3EB', font=font_handle)

    # 6. Bottom accreditation
    draw.text((65, 555), 'Curated Agency Comp Card • 74+ Visual Vault Campaigns', fill='#A89587', font=font_badge)

    # Save outputs
    # 1. public/og-image.jpg
    img.save('public/og-image.jpg', quality=95, optimize=True)
    
    # 2. app/opengraph-image.jpg (Next.js automatically discovers this!)
    img.save('app/opengraph-image.jpg', quality=95, optimize=True)
    
    # 3. app/twitter-image.jpg
    img.save('app/twitter-image.jpg', quality=95, optimize=True)

    # 4. Brain artifact copy
    brain_dir = r'C:/Users/SAKSHAM/.gemini/antigravity/brain/4f275801-4ce7-49c6-88e9-164c42e15068'
    img.save(os.path.join(brain_dir, 'og_image_preview.jpg'), quality=95)

    print("SUCCESS: Generated 1200x630 official OpenGraph social share card with Pallavi Sunkara's authentic portrait!")

if __name__ == "__main__":
    create_og_image()
