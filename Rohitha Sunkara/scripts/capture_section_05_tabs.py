import asyncio
import os
from playwright.async_api import async_playwright

ARTIFACT_DIR = r"C:\Users\SAKSHAM\.gemini\antigravity\brain\4f275801-4ce7-49c6-88e9-164c42e15068"

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page(viewport={"width": 1440, "height": 900})
        await page.goto("http://localhost:3001", wait_until="networkidle")
        await page.wait_for_timeout(1500)
        
        # Scroll to Section 05
        acting_el = await page.query_selector("#acting")
        if acting_el:
            box = await acting_el.bounding_box()
            if box:
                # Scroll to show the video and capabilities
                await page.evaluate(f"window.scrollTo(0, {box['y'] + 250})")
                await page.wait_for_timeout(1000)
                await page.screenshot(path=os.path.join(ARTIFACT_DIR, "section_05_tab1_dialogue.png"))
                
                # Click Jewelry tab
                jewelry_btn = await page.query_selector("button:has-text('Jewelry Atelier')")
                if jewelry_btn:
                    await jewelry_btn.click()
                    await page.wait_for_timeout(1000)
                    await page.screenshot(path=os.path.join(ARTIFACT_DIR, "section_05_tab2_jewelry.png"))
                    
        await page.close()
        await browser.close()
        print("Done!")

asyncio.run(main())
