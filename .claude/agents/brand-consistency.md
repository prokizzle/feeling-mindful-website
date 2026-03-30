Scan all .tsx files in src/app/ and src/components/ for color class usage inconsistencies.

The approved color system is defined in src/styles/tailwind.css:
- sage (primary green) — use for text, backgrounds, borders
- sand (warm neutral) — use for accents, highlights
- dawn (warm orange/red) — use for fitness-related accents
- dusk (purple) — use for IFS/mindfulness accents

Flag any usage of:
- neutral-* classes (should be sage-* in most cases)
- emerald-* classes (should be sage-* or dawn-*)
- amber-* classes (should be sand-* or dawn-*)
- Any hardcoded hex colors that don't match the palette

Report each finding with file path, line number, the offending class, and the suggested replacement.
