import base64
from pathlib import Path
from PIL import Image

def embed(png_path, svg_path):
    png = Path(png_path).read_bytes()
    b64 = base64.b64encode(png).decode("ascii")
    im = Image.open(png_path)
    w, h = im.size
    svg = (
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" '
        f'width="{w}" height="{h}" role="img" aria-label="Codryn">\n'
        f'  <!-- Colors match original PNG: structure + electric blue #0078F8 -->\n'
        f'  <image width="{w}" height="{h}" href="data:image/png;base64,{b64}"/>\n'
        f"</svg>\n"
    )
    Path(svg_path).write_text(svg, encoding="utf-8")
    print("wrote", svg_path, w, h)

embed(r"d:\P\public\logo-on-dark.png", r"d:\P\public\logo.svg")
embed(r"d:\P\public\logo.png", r"d:\P\public\logo-light.svg")
