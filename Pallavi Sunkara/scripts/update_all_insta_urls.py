import os

old_urls = [
    "https://www.instagram.com/pallaviiii124?xtok=MWozaW5naGRpYmdmNg==",
    "https://www.instagram.com/pallaviiii124"
]
new_url = "https://www.instagram.com/pallaviiii124?utm_source=qr&psln=cWY1aWthYTA2NDl2"

# Files to update with new link
files_to_update = [
    'components/InstagramQRCard.tsx',
    'components/ReelsShowcase.tsx',
    'components/Navbar.tsx',
    'components/Hero.tsx',
    'components/Footer.tsx',
    'components/CompCardModal.tsx',
    'components/BookingCTA.tsx',
    'components/AchievementsMatrix.tsx',
    'components/EditorialGallery.tsx',
    'app/layout.tsx',
    'app/privacy/page.tsx',
    'app/terms/page.tsx',
    'README.md'
]

for file_path in files_to_update:
    if os.path.exists(file_path):
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Replace the xtok url first
        content = content.replace("https://www.instagram.com/pallaviiii124?xtok=MWozaW5naGRpYmdmNg==", new_url)
        
        # In specific places replace plain url if it is an href
        if file_path in ['app/privacy/page.tsx', 'app/terms/page.tsx', 'components/EditorialGallery.tsx']:
            content = content.replace('href="https://www.instagram.com/pallaviiii124"', f'href="{new_url}"')
            content = content.replace('permalink: "https://www.instagram.com/pallaviiii124"', f'permalink: "{new_url}"')
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f'Updated URLs in {file_path}')

print('All URLs updated.')
