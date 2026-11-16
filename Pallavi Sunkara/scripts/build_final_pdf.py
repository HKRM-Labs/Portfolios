import asyncio
import os
import io
import fitz
from PIL import Image
from playwright.async_api import async_playwright

async def generate_and_compress():
    chrome_path = r'C:\Program Files\Google\Chrome\Application\chrome.exe'
    
    async with async_playwright() as p:
        browser = await p.chromium.launch(
            executable_path=chrome_path,
            args=['--no-sandbox', '--disable-setuid-sandbox']
        )
        
        page = await browser.new_page(viewport={'width': 1280, 'height': 1800})
        url = 'http://localhost:3000/portfolio-pdf'
        print(f'Loading {url}...')
        await page.goto(url, wait_until='networkidle', timeout=30000)
        
        for _ in range(8):
            await page.mouse.wheel(0, 1500)
            await asyncio.sleep(0.4)
            
        await page.evaluate('window.scrollTo(0, 0)')
        await asyncio.sleep(1.2)
        
        raw_pdf = 'Pallavi Sankara/public/temp_raw.pdf'
        print('Rendering PDF with Chrome...')
        await page.pdf(
            path=raw_pdf,
            format='A4',
            print_background=True,
            margin={'top': '0px', 'bottom': '0px', 'left': '0px', 'right': '0px'}
        )
        await browser.close()
        
    print('Compressing images in generated PDF...')
    doc = fitz.open(raw_pdf)
    processed = set()
    for page in doc:
        for img in page.get_images():
            xref = img[0]
            if xref in processed:
                continue
            processed.add(xref)
            try:
                base = doc.extract_image(xref)
                pil_img = Image.open(io.BytesIO(base["image"]))
                if pil_img.width > 1400 or pil_img.height > 1400:
                    pil_img.thumbnail((1400, 1400), Image.Resampling.LANCZOS)
                buf = io.BytesIO()
                if pil_img.mode in ('RGBA', 'P'):
                    pil_img = pil_img.convert('RGB')
                pil_img.save(buf, format='JPEG', quality=84, optimize=True)
                new_bytes = buf.getvalue()
                if len(new_bytes) < len(base["image"]):
                    doc.update_stream(xref, new_bytes)
            except Exception:
                pass
                
    final_pdf = 'Pallavi Sankara/public/Pallavi_Sunkara_Portfolio.pdf'
    temp_opt = 'Pallavi Sankara/public/temp_opt.pdf'
    doc.save(temp_opt, garbage=4, deflate=True)
    doc.close()
    
    if os.path.exists(raw_pdf):
        os.remove(raw_pdf)
    os.replace(temp_opt, final_pdf)
    
    import shutil
    if os.path.exists('public'):
        shutil.copy(final_pdf, 'public/Pallavi_Sunkara_Portfolio.pdf')
        
    size_mb = os.path.getsize(final_pdf) / (1024 * 1024)
    print(f'SUCCESS! Final PDF saved to {final_pdf}: {size_mb:.2f} MB')

asyncio.run(generate_and_compress())
