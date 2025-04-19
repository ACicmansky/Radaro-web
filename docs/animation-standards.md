# RADARO Website Animation Standards

## Core Animation Principles

### Timing & Easing
- **Standard Duration**: 0.5s for main animations, 0.2s for hover effects, 0.1s for tap effects
- **Standard Easing**: "easeOut" for most animations (smooth acceleration)
- **Delay Patterns**: Stagger children by 0.1s, sequential elements by 0.2s

### Motion Patterns
- **Entrance Animations**: Elements enter from below (y: 20 → 0) with fade-in
- **Hover Effects**: Subtle scale increase (scale: 1 → 1.05) with shadow enhancement
- **Active/Tap Effects**: Slight scale decrease (scale: 1 → 0.98)
- **Micro-interactions**: Keep subtle and purposeful (avoid distracting animations)

## Standard Animation Components

### MotionWrapper
For single element animations with standard animations:
```tsx
<MotionWrapper 
  direction="up" 
  delay={0.2} 
  hover={true}
  tap={true}
>
  {children}
</MotionWrapper>
```

### ScrollReveal
For revealing elements as they enter the viewport:
```tsx
<ScrollReveal 
  direction="up" 
  delay={0.2} 
  threshold={0.1}
>
  {children}
</ScrollReveal>
```

### StaggerContainer
For animating multiple child elements with a staggered delay:
```tsx
<StaggerContainer 
  delay={0.2} 
  staggerChildren={0.1}
>
  {children} {/* Children must have variants defined */}
</StaggerContainer>
```

## Section-Specific Standards

### Hero Section
- Logo: Fade in and float down (y: -50 → 0)
- Title: Staggered characters or words
- Buttons: Slide up with delay after title

### Project Section
- Cards: Staggered entrance with hover scaling
- Section title: Fade in slightly before cards
- Carousel controls: Consistent hover effects

### Services Section
- Cards: Staggered entrance with hover lift
- Icons: Subtle spring animation on entrance
- Text: Fade in after icon appears

### Testimonials
- Quote: Fade in with slight scale
- Attribution: Fade in after quote
- Controls: Match Project carousel controls

### Footer
- Elements: Staggered fade in from sides
- Social icons: Consistent hover/tap effects

## Performance Guidelines
- Use `transform-gpu` for hardware acceleration
- Set `will-change-transform` only for actively animated elements
- Use `viewport={{ once: true }}` for one-time animations to reduce resource usage
- Keep simultaneous animations to a minimum (especially on mobile)
- Test performance on low-end devices
