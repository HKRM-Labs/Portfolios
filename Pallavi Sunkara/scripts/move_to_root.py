import os
import subprocess

def move_files():
    # List all files currently in "Pallavi Sankara" tracked by git
    res = subprocess.run(["git", "ls-files", "Pallavi Sankara"], capture_output=True, text=True, check=True)
    files = res.stdout.strip().splitlines()
    
    print(f"Moving {len(files)} tracked files from 'Pallavi Sankara' to root...")
    for f in files:
        rel = f[len("Pallavi Sankara/"):]
        dest_dir = os.path.dirname(rel)
        if dest_dir and not os.path.exists(dest_dir):
            os.makedirs(dest_dir, exist_ok=True)
            
        # Use git mv
        cmd = ["git", "mv", "-f", f, rel]
        r = subprocess.run(cmd, capture_output=True, text=True)
        if r.returncode != 0:
            print(f"Error moving {f}: {r.stderr}")
            
    print("Done moving files to root.")

if __name__ == "__main__":
    move_files()
