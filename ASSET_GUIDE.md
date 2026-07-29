# Conté Films — Media Asset Specification Guide

This guide outlines the production asset requirements for the Conté Films web application. To maintain Lighthouse performance above 90+ while preserving high-end visual fidelity, follow these encoding, resolution, and delivery guidelines.

---

## 1. Video Reel Assets (`/public/video/`)

### Cinematic Homepage Hero Reel
- **Location**: `/public/video/hero-reel.mp4` & `/public/video/hero-reel.webm`
- **Poster Image**: `/public/images/hero-poster.jpg`
- **Aspect Ratio**: 16:9
- **Resolution**: 1920x1080 (Desktop), 1080x1920 (Mobile vertical variant if needed)
- **Framerate**: 24fps or 30fps
- **Encoding**: H.264 (MP4) and VP9 (WebM)
- **Audio**: Muted by default, normalized to -14 LUFS if audio is un-muted
- **Target File Size**: < 8MB for web loop (compress via Handbrake/ffmpeg with CRF 24)

### Portfolio Video Lightbox Streams
Store production video reels or stream via Vimeo PRO / AWS CloudFront.
- **Resolution**: 4K UHD (3840x2160) or 1080p Master
- **Formats**: H.264 MP4 with AAC Audio (256 kbps)
- **Aspect Ratios**:
  - Landscape Cinema: 16:9
  - Architecture Vertical Reels: 9:16
  - Gallery Square Highlights: 1:1

---

## 2. Raster Imagery Assets (`/public/images/`)

### Hero & Featured Posters
- **Format**: WebP / AVIF (Primary), JPG fallback
- **Color Space**: sRGB
- **Compression**: 82% quality target

| Asset Key | Recommended Resolution | Description |
| :--- | :--- | :--- |
| `hero-poster.jpg` | 2560 x 1440 px | High-contrast cinematic dusk studio shot |
| `founder-stefan-jobe.jpg` | 1200 x 1500 px (4:5) | Editorial portrait of founder Stefan Jobe |
| `bts-production.jpg` | 1600 x 1000 px | Behind-the-scenes camera crew on location |
| `corporate-hero.jpg` | 1920 x 1080 px | Professional medical or corporate production frame |
| `real-estate-hero.jpg` | 1920 x 1080 px | Luxury twilight custom architectural estate |
| `events-hero.jpg` | 1920 x 1080 px | Dynamic keynote lighting presentation |

### Portfolio Case Study Thumbnails (`/public/images/projects/`)
- `kalos-residence-poster.jpg` (1920x1080 px)
- `atlanta-humane-poster.jpg` (1920x1080 px)
- `tremedy-health-poster.jpg` (1920x1080 px)
- `larkly-suncare-poster.jpg` (1920x1080 px)
- `dr-berant-event-poster.jpg` (1920x1080 px)
- `caesars-palace-poster.jpg` (1920x1080 px)
- `buckhead-art-poster.jpg` (1920x1080 px)

---

## 3. Brand Logotype & Vector SVGs (`/public/`)

- `favicon.ico`: 32x32 px ICO
- `logo-dark.svg`: Vector wordmark for dark mode (Soft White `#F5F3EE`)
- `logo-light.svg`: Vector wordmark for light mode (Near Black `#121212`)
- `og-image.jpg`: 1200x630 px OpenGraph social sharing card

---

## 4. Optimization Commands (ffmpeg example)

To optimize a raw MP4 video reel for web autoplay background:
```bash
ffmpeg -i input_master.mov -vcodec libx264 -crf 26 -preset slow -an -movflags +faststart hero-reel.mp4
```
