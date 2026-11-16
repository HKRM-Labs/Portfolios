p = 'Pallavi Sankara/components/StatsCompCard.tsx'
with open(p, 'r', encoding='utf-8') as f:
    c = f.read()

c = c.replace('<div className="flex items-center gap-3">', '<div className="flex flex-wrap items-center gap-3">')

with open(p, 'w', encoding='utf-8') as f:
    f.write(c)

print('SUCCESS: Updated StatsCompCard.tsx')
