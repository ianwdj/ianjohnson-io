#!/usr/bin/env python3
"""Generate starter textures for the notebook site (no copyrighted photos).

Outputs:
  board.jpg  -- warm kraft board for the cover
  desk.jpg   -- warm wood desk surface

CSS layers these over solid color fallbacks, so regenerating or swapping in a
real photo is safe. Run:  python3 assets/textures/_generate.py
"""
from PIL import Image, ImageChops, ImageFilter, ImageEnhance, ImageDraw
import os

HERE = os.path.dirname(os.path.abspath(__file__))


def soft(base, noise_l, amount=1.0):
    """Apply a mid-gray luminance map over base via soft-light (subtle texture)."""
    n = ImageEnhance.Contrast(noise_l).enhance(amount).convert("RGB")
    return ImageChops.soft_light(base, n)


def board():
    W, H = 1200, 1600
    base = Image.new("RGB", (W, H), (194, 168, 120))  # --kraft #C2A878
    fine = Image.effect_noise((W, H), 26).convert("L")
    coarse = (Image.effect_noise((W // 6, H // 6), 60)
              .resize((W, H), Image.BILINEAR)
              .filter(ImageFilter.GaussianBlur(5)))
    mottle = ImageChops.blend(fine, coarse.convert("L"), 0.55)
    # faint vertical fiber so it reads as pressed board, not flat noise
    fiber = (Image.effect_noise((W, 12), 40)
             .resize((W, H), Image.BILINEAR)
             .filter(ImageFilter.GaussianBlur(1)).convert("L"))
    img = soft(base, mottle, 1.15)
    img = soft(img, fiber, 0.6)
    # gentle corner darkening (vignette) for a photographed-object feel
    vig = Image.new("L", (W, H), 0)
    d = ImageDraw.Draw(vig)
    d.ellipse([-W * 0.25, -H * 0.25, W * 1.25, H * 1.25], fill=255)
    vig = vig.filter(ImageFilter.GaussianBlur(120))
    dark = ImageEnhance.Brightness(img).enhance(0.9)
    img = Image.composite(img, dark, vig)
    img.save(os.path.join(HERE, "board.jpg"), quality=82, optimize=True)


def desk():
    W, H = 1600, 1200
    base = Image.new("RGB", (W, H), (110, 74, 44))  # warm walnut
    # vertical grain streaks (varies fast along X, smooth along Y)
    grain = (Image.effect_noise((W, 10), 72)
             .resize((W, H), Image.BILINEAR)
             .filter(ImageFilter.GaussianBlur(1)).convert("L"))
    fine = Image.effect_noise((W, H), 16).convert("L")
    mottle = (Image.effect_noise((W // 8, H // 8), 55)
              .resize((W, H), Image.BILINEAR)
              .filter(ImageFilter.GaussianBlur(8)).convert("L"))
    tex = ImageChops.blend(ImageChops.blend(grain, fine, 0.4), mottle, 0.35)
    img = soft(base, tex, 1.25)
    # a few darker grain lines + plank seams
    d = ImageDraw.Draw(img, "RGBA")
    for x in range(60, W, 47):
        a = 26 if x % 94 else 40
        d.line([(x, 0), (x, H)], fill=(40, 24, 12, a), width=1)
    for y in range(0, H, 360):
        d.line([(0, y), (W, y)], fill=(30, 18, 9, 70), width=2)
    img = img.filter(ImageFilter.GaussianBlur(0.4))
    img.save(os.path.join(HERE, "desk.jpg"), quality=80, optimize=True)


if __name__ == "__main__":
    board()
    desk()
    print("wrote board.jpg, desk.jpg to", HERE)
