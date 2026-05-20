# Feature Grid Spec (3-column)

## Visual Description
- 3-column card grid below the hero
- Each card has a circular icon container, title, and description
- Subtle border, rounded corners, hover effect

## Structure
```
┌──────────────────────────────────────┐
│  Drive real-world outcomes by        │
│  automating commercial processes     │
│                                      │
│  ┌────────┐ ┌────────┐ ┌────────┐   │
│  │  Icon  │ │  Icon  │ │  Icon  │   │
│  │ Title  │ │ Title  │ │ Title  │   │
│  │ Desc   │ │ Desc   │ │ Desc   │   │
│  └────────┘ └────────┘ └────────┘   │
└──────────────────────────────────────┘
```

## Typography
- Section title: font-serif, 4xl→5xl, centered
- Section sub: text-muted-text
- Card title: text-lg, font-medium
- Card desc: text-sm, text-muted-text

## States
- Default: border-border/40
- Hover: border-border
- Card icon: bg-muted circle, 10x10
