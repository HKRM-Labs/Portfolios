import asyncio
import os
from playwright.async_api import async_playwright

ARTIFACT_DIR = r"C:\Users\SAKSHAM\.gemini\antigravity\brain\4f275801-4ce7-49c6-88e9-164c42e15068"

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page(viewport={"width": 1440, "height": 900})
        await page.goto("http://localhost:3001", wait_until="networkidle")
        await page.wait_for_timeout(2000)
        
        # Scroll to Section 05
        acting_el = await page.query_selector("#acting")
        if acting_el:
            await acting_el.scroll_into_view_if_needed()
            await page.wait_for_timeout(1000)
            await page.screenshot(path=os.path.join(ARTIFACT_DIR, "section_05_dialogue_delivery.png"))
            
            # Click Jewelry tab
            jewelry_btn = await page.query_selector("button:has-text('Jewelry Atelier')")
            if jewelry_btn:
                await jewelry_btn.click()
                await page.wait_for_timeout(1000)
                await page.screenshot(path=os.path.join(ARTIFACT_DIR, "section_05_jewelry_atelier.png"))
                
        await page.close()
        
        # Mobile view
        mobile_page = await browser.new_page(viewport={"width": 390, "height": 844}, is_mobile=True)
        await mobile_page.goto("http://localhost:3001", wait_until="networkidle")
        await mobile_page.wait_for_timeout(1500)
        acting_m = await mobile_page.query_selector("#acting")
        if acting_m:
            await acting_m.scroll_into_view_if_needed()
            await mobile_page.wait_for_timeout(1000)
            await mobile_page.screenshot(path=os.path.join(ARTIFACT_DIR, "section_05_mobile.png"))
            
        await mobile_page.close()
        await browser.close()
        print("Captured Section 05 screenshots successfully!")

asyncio.run(main())
