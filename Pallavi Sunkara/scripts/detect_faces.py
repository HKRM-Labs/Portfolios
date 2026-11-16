import cv2
import os

face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')

for i in [1, 4, 8, 10, 12, 16, 17, 26, 43, 46, 50, 54, 58, 60]:
    path = f'public/pallavi/photo_{i}.jpg'
    if not os.path.exists(path):
        continue
    img = cv2.imread(path)
    h, w = img.shape[:2]
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    faces = face_cascade.detectMultiScale(gray, 1.1, 4)
    print(f'Photo {i} ({w}x{h}):')
    if len(faces) == 0:
        print('   No frontal face detected (profile or back/tilt)')
    for (fx, fy, fw, fh) in faces:
        center_y_pct = (fy + fh/2) / h * 100
        print(f'   Face at x={fx}, y={fy}, w={fw}, h={fh} -> Face center Y = {center_y_pct:.1f}%')
