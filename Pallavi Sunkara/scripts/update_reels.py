with open('components/ReelsShowcase.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Update titles and locations
old_reels = '''  const reels: ReelItem[] = [
    {
      id: "reel-1",
      title: "Runway Stride & Drape",
      videoSrc: "/pallavi/reel_1.mp4",
      posterSrc: "/pallavi/reel_1_thumb.jpg",
      plays: "58.4K",
      likes: 2620,
      comments: 39,
      audio: "Runway Audio • @pallaviiii124",
      location: "Hyderabad Fashion Week",
      permalink: "https://www.instagram.com/reel/DTIaiqmkd35/",
    },
    {
      id: "reel-2",
      title: "Studio 360 Turn & Lighting",
      videoSrc: "/pallavi/reel_2.mp4",
      posterSrc: "/pallavi/reel_2_thumb.jpg",
      plays: "74.1K",
      likes: 3370,
      comments: 51,
      audio: "Studio Production • Frame Us",
      location: "The Aarna Studio",
      permalink: "https://www.instagram.com/reel/Dd9P7oFzKKd/",
    },
    {
      id: "reel-3",
      title: "Couture Pleat Discipline",
      videoSrc: "/pallavi/reel_3.mp4",
      posterSrc: "/pallavi/reel_3_thumb.jpg",
      plays: "42.8K",
      likes: 2190,
      comments: 34,
      audio: "Cinematic Score • @pallaviiii124",
      location: "South Film Studios",
      permalink: "https://www.instagram.com/reel/DYkEPF7KXGy/",
    },
  ];'''

new_reels = '''  const reels: ReelItem[] = [
    {
      id: "reel-1",
      title: "Celebration Gala & Poise",
      videoSrc: "/pallavi/reel_1.mp4",
      posterSrc: "/pallavi/reel_1_thumb.jpg",
      plays: "58.4K",
      likes: 2620,
      comments: 39,
      audio: "Golden Celebration • @pallaviiii124",
      location: "Golden Studio Production",
      permalink: "https://www.instagram.com/reel/DTIaiqmkd35/",
    },
    {
      id: "reel-2",
      title: "Temple Silk Drape & Emerald Jewels",
      videoSrc: "/pallavi/reel_2.mp4",
      posterSrc: "/pallavi/reel_2_thumb.jpg",
      plays: "74.1K",
      likes: 3370,
      comments: 51,
      audio: "MUA @anareddy_makeovers",
      location: "Soiree Hyderabad",
      permalink: "https://www.instagram.com/reel/Dd9P7oFzKKd/",
    },
    {
      id: "reel-3",
      title: "Avant-Garde Silver Oxidized Look",
      videoSrc: "/pallavi/reel_3.mp4",
      posterSrc: "/pallavi/reel_3_thumb.jpg",
      plays: "42.8K",
      likes: 2190,
      comments: 34,
      audio: "Forehead Curls • @pallaviiii124",
      location: "Hyderabad Cinema Studios",
      permalink: "https://www.instagram.com/reel/DYkEPF7KXGy/",
    },
  ];'''

content = content.replace(old_reels, new_reels)
content = content.replace(
    'className="w-full h-full object-cover"',
    'className="w-full h-full object-cover object-[center_15%]"'
)

with open('components/ReelsShowcase.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print('SUCCESSFULLY UPDATED ReelsShowcase.tsx')
