with open('Pallavi Sankara/app/layout.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

text = text.replace(
    'selection:text-plum-950 film-grain`',
    'selection:text-plum-950 film-grain overflow-x-hidden max-w-full relative`'
)

with open('Pallavi Sankara/app/layout.tsx', 'w', encoding='utf-8') as f:
    f.write(text)

print('Updated layout.tsx with overflow-x-hidden')
