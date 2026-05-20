# Stats Section Spec

## Visual Description
- 4-column stat grid with large numbers
- Tab selector for "Operational efficiency" / "Revenue impact"
- Each stat has a large serif number and small label

## Structure
```
┌──────────────────────────────────────┐
│  Don't buy hypotheticals.           │
│         Buy outcomes.               │
│                                      │
│  [Operational efficiency] [Revenue]  │
│                                      │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐│
│  │ 34%  │ │+300  │ │900%  │ │ 21%  ││
│  │More..│ │Hrs...│ │Seat..│ │Less..││
│  └──────┘ └──────┘ └──────┘ └──────┘│
└──────────────────────────────────────┘
```

## Numbers
- font-serif, 5xl→6xl
- Links to case studies (firstup, globaldata, continu, macrobond)

## States
- Selected tab: bg-foreground text-background
- Unselected tab: text-muted-text
- Card hover: border-border
