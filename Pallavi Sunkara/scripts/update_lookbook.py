import re

with open('components/Lookbook.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

new_editorial_pieces = '''  const editorialPieces: EditorialPiece[] = [
    {
      id: "piece-1",
      title: "Royal Crimson South Indian Bridal Drape",
      category: "bridal",
      type: "video",
      mediaSrc: "/pallavi/reel_4.mp4",
      posterSrc: "/pallavi/reel_4_thumb.jpg",
      photographer: "Heritage Handloom Production",
      styling: "Bridal Zari & Maang Tikka",
      span: "col-span-12 sm:col-span-6 lg:col-span-4 aspect-[4/5]",
      likes: "32.4K",
      year: "2026",
    },
    {
      id: "piece-2",
      title: "Butterfly Hair Artistry & Zari Blouse",
      category: "beauty",
      type: "image",
      mediaSrc: "/pallavi/photo_8.jpg",
      posterSrc: "/pallavi/photo_8.jpg",
      photographer: "Makeover By Sobiya (@makeupbysobiya)",
      styling: "Embroidered Maroon Velvet & Zari",
      span: "col-span-12 sm:col-span-6 lg:col-span-4 aspect-[4/5]",
      likes: "18.9K",
      year: "2026",
    },
    {
      id: "piece-3",
      title: "Heritage Gold Silk Saree & Mogra Garland",
      category: "sarees",
      type: "image",
      mediaSrc: "/pallavi/photo_12.jpg",
      posterSrc: "/pallavi/photo_12.jpg",
      photographer: "The Aarna Studio (@the.aarnastudio)",
      styling: "Traditional South Indian Silk Drape",
      span: "col-span-12 sm:col-span-6 lg:col-span-4 aspect-[4/5]",
      likes: "19.5K",
      year: "2026",
    },
    {
      id: "piece-4",
      title: "Temple Silk Drape & Emerald Jewels",
      category: "sarees",
      type: "video",
      mediaSrc: "/pallavi/reel_2.mp4",
      posterSrc: "/pallavi/reel_2_thumb.jpg",
      photographer: "MUA Ana Reddy (@anareddy_makeovers)",
      styling: "Soiree Hyderabad (@soiree.hyd)",
      span: "col-span-12 sm:col-span-6 lg:col-span-4 aspect-[4/5]",
      likes: "28.3K",
      year: "2026",
    },
    {
      id: "piece-5",
      title: "Poolside Resort Summer Walk",
      category: "contemporary",
      type: "image",
      mediaSrc: "/pallavi/photo_4.jpg",
      posterSrc: "/pallavi/photo_4.jpg",
      photographer: "Casual Resort Shoot",
      styling: "Minimal White Slit Skirt & Black Tank",
      span: "col-span-12 sm:col-span-6 lg:col-span-4 aspect-[4/5]",
      likes: "14.2K",
      year: "2026",
    },
    {
      id: "piece-6",
      title: "Wine Sequin Evening Saree",
      category: "sarees",
      type: "image",
      mediaSrc: "/pallavi/photo_10.jpg",
      posterSrc: "/pallavi/photo_10.jpg",
      photographer: "Studio Hyderabad Fashion",
      styling: "Cocktail Glamour Drape",
      span: "col-span-12 sm:col-span-6 lg:col-span-4 aspect-[4/5]",
      likes: "16.8K",
      year: "2026",
    },
    {
      id: "piece-7",
      title: "Telugu Feature Screen Test Close-Up",
      category: "beauty",
      type: "image",
      mediaSrc: "/pallavi/photo_17.jpg",
      posterSrc: "/pallavi/photo_17.jpg",
      photographer: "South Cinema Production",
      styling: "Smokey Eyes & Dramatic Expression",
      span: "col-span-12 sm:col-span-6 lg:col-span-4 aspect-[4/5]",
      likes: "22.1K",
      year: "2026",
    },
    {
      id: "piece-8",
      title: "Avant-Garde Silver Oxidized Look",
      category: "contemporary",
      type: "video",
      mediaSrc: "/pallavi/reel_3.mp4",
      posterSrc: "/pallavi/reel_3_thumb.jpg",
      photographer: "Creative Studio Production",
      styling: "Forehead Curls & Statement Silver",
      span: "col-span-12 sm:col-span-6 lg:col-span-4 aspect-[4/5]",
      likes: "24.6K",
      year: "2026",
    },
    {
      id: "piece-9",
      title: "Golden Sunlight Yellow Saree Candid",
      category: "sarees",
      type: "image",
      mediaSrc: "/pallavi/photo_16.jpg",
      posterSrc: "/pallavi/photo_16.jpg",
      photographer: "Natural Sunlight Outdoor",
      styling: "Festive Silk & Candid Poise",
      span: "col-span-12 sm:col-span-6 lg:col-span-4 aspect-[4/5]",
      likes: "17.4K",
      year: "2026",
    },
    {
      id: "piece-10",
      title: "Goa Coastal Ocean & Cliffside Breeze",
      category: "contemporary",
      type: "image",
      mediaSrc: "/pallavi/photo_26.jpg",
      posterSrc: "/pallavi/photo_26.jpg",
      photographer: "Goa Monsoon Vacation Shoot",
      styling: "Coastal Resort Dress",
      span: "col-span-12 sm:col-span-6 lg:col-span-4 aspect-[4/5]",
      likes: "20.5K",
      year: "2026",
    },
    {
      id: "piece-11",
      title: "Natural Daylight Beauty Portrait",
      category: "beauty",
      type: "image",
      mediaSrc: "/pallavi/photo_1.jpg",
      posterSrc: "/pallavi/photo_1.jpg",
      photographer: "Portraiture Photography",
      styling: "Minimal Daylight & Candid Smile",
      span: "col-span-12 sm:col-span-6 lg:col-span-4 aspect-[4/5]",
      likes: "15.9K",
      year: "2026",
    },
    {
      id: "piece-12",
      title: "Sculpted Glow Makeup Portfolio",
      category: "beauty",
      type: "image",
      mediaSrc: "/pallavi/photo_5.jpg",
      posterSrc: "/pallavi/photo_5.jpg",
      photographer: "Makeup By Sobiya (@makeupbysobiya)",
      styling: "Hyderabad Glam Bridal Makeup",
      span: "col-span-12 sm:col-span-6 lg:col-span-4 aspect-[4/5]",
      likes: "25.2K",
      year: "2026",
    },
  ];'''

start = content.find('  const editorialPieces: EditorialPiece[] = [')
end = content.find('  const filteredPieces =')

if start != -1 and end != -1:
    content = content[:start] + new_editorial_pieces + '\n\n' + content[end:]
    # Now update object-cover in video and Image to include object-top
    old_video_class = 'className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"'
    new_video_class = 'className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-1000 ease-out"'
    content = content.replace(old_video_class, new_video_class)
    
    with open('components/Lookbook.tsx', 'w', encoding='utf-8') as f:
        f.write(content)
    print('SUCCESSFULLY UPDATED Lookbook.tsx')
else:
    print('ERROR: markers not found')
