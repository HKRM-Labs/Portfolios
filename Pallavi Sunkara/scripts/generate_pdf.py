import asyncio
import os
from playwright.async_api import async_playwright

async def generate_portfolio_pdf():
    chrome_path = r'C:\Program Files\Google\Chrome\Application\chrome.exe'
    print(f'Using Chrome executable at: {chrome_path}')
    
    async with async_playwright() as p:
        browser = await p.chromium.launch(
            executable_path=chrome_path,
            args=['--no-sandbox', '--disable-setuid-sandbox']
        )
        
        # High-res A4 viewport simulation
        page = await browser.new_page(viewport={'width': 1280, 'height': 1800})
        
        url = 'http://localhost:3000/portfolio-pdf'
        print(f'Navigating to {url}...')
        await page.goto(url, wait_until='networkidle', timeout=30000)
        
        # Scroll through entire page to ensure all lazy images are loaded
        print('Scrolling page to ensure all images load...')
        for _ in range(8):
            await page.mouse.wheel(0, 1500)
            await asyncio.sleep(0.5)
        
        await page.evaluate('window.scrollTo(0, 0)')
        await asyncio.sleep(1.5)
        
        dest_pdf = os.path.abspath('Pallavi Sankara/public/Pallavi_Sunkara_Portfolio.pdf')
        print(f'Generating PDF to {dest_pdf}...')
        
        await page.pdf(
            path=dest_pdf,
            format='A4',
            print_background=True,
            margin={'top': '0px', 'bottom': '0px', 'left': '0px', 'right': '0px'},
            prefer_css_page_size=False,
        )
        
        # Also copy to root public if needed
        if os.path.exists('public'):
            import shutil
            shutil.copy(dest_pdf, 'public/Pallavi_Sunkara_Portfolio.pdf')
        
        size_mb = os.path.getsize(dest_pdf) / (1024 * 1024)
        print(f'SUCCESS: PDF generated! File size: {size_mb:.2f} MB')
        
        await browser.close()

asyncio.run(generate_portfolio_pdf())
