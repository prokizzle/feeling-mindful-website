---
name: update-branding
description: Update the Feeling Mindful Labs logo across all contexts — favicon, apple-touch-icon, PWA icons, Logo component. Takes a source image path as argument.
disable-model-invocation: true
---

# Update Branding

Replace the FM logomark across all size variants.

## Arguments
- Source image path (1024x1024 PNG recommended)

## Steps

1. **Copy source** to `public/images/logos/fm-logomark.png`

2. **Generate sizes** using `sips` (macOS):
   ```bash
   sips -z 16 16 <source> --out /tmp/fm-16.png
   sips -z 32 32 <source> --out /tmp/fm-32.png
   sips -z 180 180 <source> --out public/apple-touch-icon.png
   sips -z 192 192 <source> --out public/icon-192.png
   sips -z 512 512 <source> --out public/icon-512.png
   ```

3. **Create favicon.ico** using ImageMagick:
   ```bash
   magick /tmp/fm-16.png /tmp/fm-32.png public/favicon.ico
   ```

4. **Copy to src/app/favicon.ico** as well (Next.js uses this)

5. **Verify** the Logo component at `src/components/Logo.tsx` references `fm-logomark.png`

6. **Commit** with message: `chore: update FM logomark`
