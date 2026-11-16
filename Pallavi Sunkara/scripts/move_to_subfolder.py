import os
import shutil
import subprocess

target_dir = 'Pallavi Sankara'
os.makedirs(target_dir, exist_ok=True)

# List of items to move
items_to_move = [
    'app',
    'components',
    'public',
    'scripts',
    'package.json',
    'package-lock.json',
    'tsconfig.json',
    'tailwind.config.ts',
    'postcss.config.js',
    'next.config.mjs',
    'next-env.d.ts',
    'README.md',
    '.agents',
    '.gitattributes'
]

# 1. First move git-tracked items using git mv
for item in items_to_move:
    if os.path.exists(item):
        cmd = ['git', 'mv', item, f'{target_dir}/{item}']
        print('Running:', ' '.join(cmd))
        res = subprocess.run(cmd, capture_output=True, text=True)
        if res.returncode != 0:
            print(f'git mv error for {item}: {res.stderr}')
            # fallback to shutil.move
            dest = os.path.join(target_dir, item)
            shutil.move(item, dest)
            print(f'shutil moved {item} to {dest}')
        else:
            print(f'Successfully git moved {item}')

# 2. Copy .gitignore to target_dir/.gitignore
if os.path.exists('.gitignore'):
    shutil.copy('.gitignore', os.path.join(target_dir, '.gitignore'))
    print('Copied .gitignore into Pallavi Sankara')

# 3. Move untracked folders: node_modules and .next if they exist
for folder in ['node_modules', '.next']:
    if os.path.exists(folder):
        dest = os.path.join(target_dir, folder)
        print(f'Moving {folder} to {dest}...')
        try:
            shutil.move(folder, dest)
            print(f'Successfully moved {folder}')
        except Exception as e:
            print(f'Error moving {folder}: {e}')

print('All items moved into Pallavi Sankara')
