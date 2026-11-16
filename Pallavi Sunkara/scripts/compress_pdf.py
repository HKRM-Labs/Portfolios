import fitz
import io
from PIL import Image
import os

doc = fitz.open('Pallavi Sankara/public/Pallavi_Sunkara_Portfolio.pdf')
print('Compressing images in PDF...')

processed_xrefs = set()

for page in doc:
    il = page.get_images()
    for img in il:
        xref = img[0]
        if xref in processed_xrefs:
            continue
        processed_xrefs.add(xref)
        
        try:
            base_image = doc.extract_image(xref)
            image_bytes = base_image["image"]
            image_ext = base_image["ext"]
            
            pil_img = Image.open(io.BytesIO(image_bytes))
            
            # If image is very large (> 1600px width/height), resize smoothly
            max_dim = 1400
            if pil_img.width > max_dim or pil_img.height > max_dim:
                pil_img.thumbnail((max_dim, max_dim), Image.Resampling.LANCZOS)
            
            # Re-encode to high-quality JPEG
            out_buf = io.BytesIO()
            if pil_img.mode in ('RGBA', 'P'):
                pil_img = pil_img.convert('RGB')
            pil_img.save(out_buf, format='JPEG', quality=84, optimize=True)
            new_bytes = out_buf.getvalue()
            
            if len(new_bytes) < len(image_bytes):
                # Update image stream in PDF
                doc.update_stream(xref, new_bytes)
        except Exception as e:
            pass

opt_path = 'Pallavi Sankara/public/Pallavi_Sunkara_Portfolio.pdf'
temp_out = 'Pallavi Sankara/public/temp_compressed.pdf'
doc.save(temp_out, garbage=4, deflate=True)
doc.close()

os.replace(temp_out, opt_path)
print('Optimized web PDF saved to:', opt_path)
print('Optimized size:', os.path.getsize(opt_path) / (1024*1024), 'MB')
