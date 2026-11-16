import asyncio
import os
from playwright.async_api import async_playwright

ARTIFACT_DIR = r"C:\Users\SAKSHAM\.gemini\antigravity\brain\4f275801-4ce7-49c6-88e9-164c42e15068"

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        
        # 1. Desktop
        page = await browser.new_page(viewport={"width": 1440, "height": 900})
        await page.goto("http://localhost:3001", wait_until="networkidle")
        await page.wait_for_timeout(2000)
        
        # Capture Hero
        await page.screenshot(path=os.path.join(ARTIFACT_DIR, "rohitha_hd_hero.png"))
        
        # Scroll to Acting Section
        acting_el = await page.query_selector("#acting")
        if acting_el:
            await acting_el.scroll_into_view_if_needed()
            await page.wait_for_timeout(1000)
            await page.screenshot(path=os.path.join(ARTIFACT_DIR, "rohitha_hd_acting.png"))
            
        # Scroll to Reels Section
        reels_el = await page.query_selector("#reels")
        if reels_el:
            await reels_el.scroll_into_view_if_needed()
            await page.wait_for_timeout(1000)
            await page.screenshot(path=os.path.join(ARTIFACT_DIR, "rohitha_hd_reels.png"))

        # Scroll to Bento Gallery
        gallery_el = await page.query_selector("#gallery")
        if gallery_el:
            await gallery_el.scroll_into_view_if_needed()
            await page.wait_for_timeout(1000)
            await page.screenshot(path=os.path.join(ARTIFACT_DIR, "rohitha_hd_gallery.png"))

        # Scroll to Comp Card
        compcard_el = await page.query_selector("#compcard")
        if compcard_el:
            await compcard_el.scroll_into_view_if_needed()
            await page.wait_for_timeout(1000)
            await page.screenshot(path=os.path.join(ARTIFACT_DIR, "rohitha_hd_compcard.png"))
            
        await page.close()
        
        # 2. Mobile
        mobile_page = await browser.new_page(viewport={"width": 390, "height": 844}, is_mobile=True)
        await mobile_page.goto("http://localhost:3001", wait_until="networkidle")
        await mobile_page.wait_for_timeout(1500)
        await mobile_page.screenshot(path=os.path.join(ARTIFACT_DIR, "rohitha_hd_mobile_hero.png"))
        
        reels_m = await mobile_page.query_selector("#reels")
        if reels_m:
            await reels_m.scroll_into_view_if_needed()
            await mobile_page.wait_for_timeout(1000)
            await mobile_page.screenshot(path=os.path.join(ARTIFACT_DIR, "rohitha_hd_mobile_reels.png"))
            
        await mobile_page.close()
        await browser.close()
        print("Screenshots taken successfully!")

asyncio.run(main())
