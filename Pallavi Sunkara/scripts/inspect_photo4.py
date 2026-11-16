from PIL import Image

img = Image.open('public/pallavi/photo_4.jpg')
w, h = img.size

# Save 3 vertical slices: top, middle, bottom
top = img.crop((0, 0, w, h // 3))
mid = img.crop((0, h // 3, w, 2 * (h // 3)))
bot = img.crop((0, 2 * (h // 3), w, h))

top.thumbnail((300, 300))
mid.thumbnail((300, 300))
bot.thumbnail((300, 300))

top.save('C:/Users/SAKSHAM/.gemini/antigravity/brain/4f275801-4ce7-49c6-88e9-164c42e15068/scratch_p4_top.png')
mid.save('C:/Users/SAKSHAM/.gemini/antigravity/brain/4f275801-4ce7-49c6-88e9-164c42e15068/scratch_p4_mid.png')
bot.save('C:/Users/SAKSHAM/.gemini/antigravity/brain/4f275801-4ce7-49c6-88e9-164c42e15068/scratch_p4_bot.png')

print('photo_4 slices saved')
