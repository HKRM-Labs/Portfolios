import asyncio
import os
from playwright.async_api import async_playwright

async def test_mobile():
    chrome_path = r'C:\Program Files\Google\Chrome\Application\chrome.exe'
    
    async with async_playwright() as p:
        browser = await p.chromium.launch(
            executable_path=chrome_path,
            args=['--no-sandbox']
        )
        
        # Test iPhone 14 viewport (390x844)
        page = await browser.new_page(
            viewport={'width': 390, 'height': 844},
            user_agent='Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1'
        )
        
        print('Testing mobile viewport 390x844 on http://localhost:3000...')
        await page.goto('http://localhost:3000', wait_until='networkidle')
        await asyncio.sleep(1)
        
        # Check for any element causing horizontal overflow
        scroll_width = await page.evaluate('document.documentElement.scrollWidth')
        client_width = await page.evaluate('document.documentElement.clientWidth')
        print(f'Viewport width: {client_width}px, Scroll width: {scroll_width}px')
        if scroll_width > client_width:
            print(f'WARNING: Horizontal overflow detected by {scroll_width - client_width}px!')
        else:
            print('SUCCESS: Zero horizontal overflow on mobile!')
            
        out_dir = r'C:/Users/SAKSHAM/.gemini/antigravity/brain/4f275801-4ce7-49c6-88e9-164c42e15068'
        
        # Screenshot Hero on mobile
        await page.screenshot(path=os.path.join(out_dir, 'mobile_hero.png'))
        print('Captured mobile_hero.png')
        
        # Scroll to Reels Showcase
        await page.locator('#reels').scroll_into_view_if_needed()
        await asyncio.sleep(1)
        await page.screenshot(path=os.path.join(out_dir, 'mobile_reels.png'))
        print('Captured mobile_reels.png')
        
        # Scroll to Bento Vault
        await page.locator('#gallery').scroll_into_view_if_needed()
        await asyncio.sleep(1)
        await page.screenshot(path=os.path.join(out_dir, 'mobile_bento.png'))
        print('Captured mobile_bento.png')
        
        # Scroll to QR section
        await page.locator('#follow').scroll_into_view_if_needed()
        await asyncio.sleep(1)
        await page.screenshot(path=os.path.join(out_dir, 'mobile_qr.png'))
        print('Captured mobile_qr.png')

        await browser.close()

asyncio.run(test_mobile())
