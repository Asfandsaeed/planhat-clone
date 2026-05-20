# Planhat Design Tokens

## Fonts

| Usage | Font | Weights |
|-------|------|---------|
| Headings / Display | Geigy LL Duplex Var Variable Reg | 400 (variable) |
| Serif headings | Times Now SemiLight | 400 |
| Serif italic | Times Now Light Italic | 300 italic |
| UI / Navigation | Aeonik Extended SemiBold | 600 |
| UI / Body | Aeonik Medium | 500 |
| Serif text | GT Super Text Book | 350 |
| Serif text italic | GT Super Text Book Italic | 350 italic |
| Fallback UI | Inter | 300, 400, 500, 700, 900 |
| Mono | Fragment Mono / IBM Plex Mono / JetBrains Mono | 400 |

## Colors

### Primary Palette
- Background: #FFFFFF (light), #000000 (dark)
- Text Primary: rgb(0, 0, 0) — #000000
- Text Muted: rgb(87, 85, 81) — #575551
- Text Inverse: rgb(255, 255, 255) — #FFFFFF

### Semantic Colors
- Muted: rgb(87, 85, 81) / var(--token-39ea0503-6ae8-4d3d-a3b8-29c6cf0ec521)
- Border/Lines: rgba(0,0,0,0.1)
- Card Background: rgba(225,225,225,0) → rgba(241,241,241,0.72) (gradient)

### Gradients
- Card shimmer: linear-gradient with rgba(225,225,225,0) → rgba(241,241,241,0.72)

## Spacing
- Based on 8px grid system
- Section padding: ~120px (large)
- Container max-width: ~1200px

## Border Radius
- Cards: rounded (likely 12-16px)
- Buttons: rounded (8-12px)

## Effects
- Cards with subtle gradient overlays
- Light border strokes (0.5px) on cards
- Hover/focus ring: outline-ring
