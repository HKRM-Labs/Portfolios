from PIL import Image

img = Image.open('public/pallavi/photo_4.jpg')
print('Dimensions:', img.size)
# Save a thumbnail so we can check
img.thumbnail((400, 533))
img.save('C:/Users/SAKSHAM/.gemini/antigravity/brain/4f275801-4ce7-49c6-88e9-164c42e15068/scratch_photo_4_thumb.png')

img8 = Image.open('public/pallavi/photo_8.jpg')
img8.thumbnail((400, 500))
img8.save('C:/Users/SAKSHAM/.gemini/antigravity/brain/4f275801-4ce7-49c6-88e9-164c42e15068/scratch_photo_8_thumb.png')

img10 = Image.open('public/pallavi/photo_10.jpg')
img10.thumbnail((400, 533))
img10.save('C:/Users/SAKSHAM/.gemini/antigravity/brain/4f275801-4ce7-49c6-88e9-164c42e15068/scratch_photo_10_thumb.png')

img16 = Image.open('public/pallavi/photo_16.jpg')
img16.thumbnail((400, 533))
img16.save('C:/Users/SAKSHAM/.gemini/antigravity/brain/4f275801-4ce7-49c6-88e9-164c42e15068/scratch_photo_16_thumb.png')

print('Thumbnails saved successfully')
