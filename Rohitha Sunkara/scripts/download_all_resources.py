import json
import os
import urllib.request
import time

API_JSON = r"d:\Recks\frd-Rohitha-Sunkara\all_rohitha_api.json"
OUTPUT_DIR = r"d:\Recks\frd-Rohitha-Sunkara\public\rohitha"

os.makedirs(OUTPUT_DIR, exist_ok=True)

with open(API_JSON, "r", encoding="utf-8") as f:
    raw_data = json.load(f)

# Extract user info
user_info = {}
for entry in raw_data:
    res = entry["data"].get("result", {})
    if "avatarUrlDownloadable" in res or "avatarUrl" in res:
        user_info = res
        break

def download_file(url, dest_path, retries=3):
    if not url:
        return False
    for attempt in range(retries):
        try:
            req = urllib.request.Request(
                url,
                headers={
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
                }
            )
            with urllib.request.urlopen(req, timeout=30) as resp, open(dest_path, "wb") as out_f:
                out_f.write(resp.read())
            return True
        except Exception as e:
            if attempt == retries - 1:
                print(f"Failed to download {dest_path}: {e}")
                return False
            time.sleep(1)

# 1. Download Avatar
print("--- 1. Downloading Avatar ---")
avatar_url = user_info.get("avatarUrlDownloadable") or user_info.get("avatarUrl")
if avatar_url:
    dest_avatar = os.path.join(OUTPUT_DIR, "avatar.jpg")
    dest_avatar_hd = os.path.join(OUTPUT_DIR, "avatar_hd.jpg")
    if download_file(avatar_url, dest_avatar):
        print(f"Downloaded avatar.jpg ({os.path.getsize(dest_avatar)} bytes)")
        download_file(avatar_url, dest_avatar_hd)

# 2. Extract unique posts
unique_items = []
seen_ids = set()
for entry in raw_data:
    for it in entry["data"].get("result", {}).get("items", []):
        iid = it.get("id")
        if iid and iid not in seen_ids:
            seen_ids.add(iid)
            unique_items.append(it)

print(f"\n--- 2. Processing {len(unique_items)} Unique Posts/Reels ---")

catalog = []
photo_idx = 1
reel_idx = 1

for item_num, it in enumerate(unique_items, 1):
    item_type = it.get("type")
    caption = it.get("caption") or ""
    likes = it.get("likeCount") or 0
    comments = it.get("commentCount") or 0
    permalink = it.get("permalink") or ""
    taken_at = it.get("takenAt")
    media_list = it.get("media", [])
    
    post_catalog_entry = {
        "id": it.get("id"),
        "type": item_type,
        "caption": caption,
        "likes": likes,
        "comments": comments,
        "permalink": permalink,
        "takenAt": taken_at,
        "files": []
    }
    
    if item_type == "video":
        m = media_list[0] if media_list else {}
        video_url = m.get("urlDownloadable") or m.get("url")
        thumb_url = m.get("thumbnailUrlDownloadable") or m.get("thumbnailUrl")
        
        # Check if versions has higher res
        if m.get("versions"):
            best_ver = max(m["versions"], key=lambda v: v.get("width", 0), default={})
            if best_ver.get("urlDownloadable"):
                video_url = best_ver.get("urlDownloadable")
            elif best_ver.get("url"):
                video_url = best_ver.get("url")

        dest_video = os.path.join(OUTPUT_DIR, f"reel_{reel_idx}.mp4")
        dest_thumb = os.path.join(OUTPUT_DIR, f"reel_{reel_idx}_thumb.jpg")
        
        print(f"[{item_num}/{len(unique_items)}] Reel {reel_idx}: {permalink}")
        dl_vid = download_file(video_url, dest_video)
        if dl_vid:
            vsize = os.path.getsize(dest_video)
            print(f"  -> Saved reel_{reel_idx}.mp4 ({vsize} bytes)")
            post_catalog_entry["files"].append(f"reel_{reel_idx}.mp4")
            
        dl_thumb = download_file(thumb_url, dest_thumb)
        if dl_thumb:
            tsize = os.path.getsize(dest_thumb)
            print(f"  -> Saved reel_{reel_idx}_thumb.jpg ({tsize} bytes)")
            post_catalog_entry["files"].append(f"reel_{reel_idx}_thumb.jpg")
            
        reel_idx += 1

    else:
        # Image or Carousel
        print(f"[{item_num}/{len(unique_items)}] {item_type.upper()} ({len(media_list)} slides): {permalink}")
        for slide_num, m in enumerate(media_list, 1):
            photo_url = m.get("urlDownloadable") or m.get("url")
            # Check versions for highest width
            if m.get("versions"):
                best_ver = max(m["versions"], key=lambda v: v.get("width", 0), default={})
                if best_ver.get("urlDownloadable"):
                    photo_url = best_ver.get("urlDownloadable")
                elif best_ver.get("url"):
                    photo_url = best_ver.get("url")
            
            dest_photo = os.path.join(OUTPUT_DIR, f"photo_{photo_idx}.jpg")
            if download_file(photo_url, dest_photo):
                psize = os.path.getsize(dest_photo)
                print(f"  -> Saved photo_{photo_idx}.jpg ({psize} bytes)")
                post_catalog_entry["files"].append(f"photo_{photo_idx}.jpg")
                photo_idx += 1
            else:
                print(f"  -> Failed slide {slide_num}")
                
    catalog.append(post_catalog_entry)

# 3. Save profile metadata
profile_meta = {
    "userInfo": user_info,
    "totalPosts": len(unique_items),
    "totalPhotosDownloaded": photo_idx - 1,
    "totalReelsDownloaded": reel_idx - 1,
    "catalog": catalog
}

with open(os.path.join(OUTPUT_DIR, "profile.json"), "w", encoding="utf-8") as f:
    json.dump(profile_meta, f, indent=2)

print("\n==========================================")
print(f"DOWNLOAD COMPLETE!")
print(f"Total photos downloaded: {photo_idx - 1}")
print(f"Total reels downloaded:  {reel_idx - 1}")
print(f"Metadata saved to: {os.path.join(OUTPUT_DIR, 'profile.json')}")
print("==========================================")
