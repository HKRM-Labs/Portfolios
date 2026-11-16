p = 'Pallavi Sankara/app/globals.css'
with open(p, 'r', encoding='utf-8') as f:
    c = f.read()

target = """html {
  background-color: var(--background);
  color: var(--foreground);
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: clip;
  max-width: 100vw;
}

body {
  overflow-x: clip;
  max-width: 100vw;
  width: 100%;
  position: relative;
  background-color: var(--background);
  color: var(--foreground);
  font-feature-settings: "cv02", "cv03", "cv04", "cv11";
}"""

replacement = """html {
  background-color: var(--background);
  color: var(--foreground);
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  background-color: var(--background);
  color: var(--foreground);
  font-feature-settings: "cv02", "cv03", "cv04", "cv11";
}"""

c_norm = c.replace('\r\n', '\n')
t_norm = target.replace('\r\n', '\n')
r_norm = replacement.replace('\r\n', '\n')

if t_norm in c_norm:
    c_norm = c_norm.replace(t_norm, r_norm, 1)
    with open(p, 'w', encoding='utf-8', newline='\n') as f:
        f.write(c_norm)
    print('SUCCESS: Updated globals.css')
else:
    print('Target not found in globals.css')
