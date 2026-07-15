# 🌸 Japan Tours — Premium React.js & CSS Experiential Landing Page

A pixel-perfect, highly aesthetic, experiential travel landing page built from scratch with **React.js**, **Vite**, and **Vanilla CSS**. This project showcases modern web design practices, containing custom-engineered animations, glassmorphic layouts, and responsive components designed to captivate visitors at first glance.


---

## 🌟 Key Features

*   **Premium Interactive Aesthetics**: Custom layout mirroring professional travel brochures, using a warm gold-highlighted dark theme and rich atmospheric image styling.
*   **Custom Intro Preloader**: A multi-stage entrance sequence showing staggered typographic reveals (`J-A-P-A-N`), smooth progress loaders, and transition fades.
*   **Staggered Entrance Sequence**: Smooth page-load motion where the navigation, backdrop branding, kimono lady silhouette, metrics cards, and booking controls reveal themselves sequentially on load.
*   **Viewport scroll reveals**: Custom viewport detection via `IntersectionObserver` that dynamically triggers slide-ins, fading, and structural changes on scroll.
*   **Dynamic SVG Timeline**: Itinerary path featuring a vertical connector line that grows dynamically down the screen as you scroll, with timeline nodes pulsing with glowing shadows.
*   **Micro-interactions**: Underline inputs that grow outwards from the center on focus, capsule buttons with custom glow states, and layered photo-cards that shift slightly on hover.
*   **Fully Responsive Architecture**: Responsive design systems that collapse cleanly into multi-column sheets, flex layouts, or single-column rows on mobile viewports.

---

## 🛠️ Tech Stack & Architecture

*   **Core**: React.js (v19)
*   **Bundler & Dev Environment**: Vite (v8)
*   **Styling**: Vanilla CSS (incorporating CSS Custom Properties/Variables for design tokens, flex layouts, grid layers, keyframe animations, and backdrops)
*   **Icons**: Lucide React
*   **Code Quality**: Checked and compiled via Rolldown/Vite with Zero warnings or compilation errors.

---

## 📂 Project Structure

```bash
Japan Tour/
├── public/
│   └── images/               # High-res atmospheric travel images
├── src/
│   ├── components/
│   │   ├── Header.jsx        # Navigation bar & Capsule Booking trigger
│   │   ├── Hero.jsx          # Backdrop, sliding cards, lady model, socials
│   │   ├── About.jsx         # Itinerary text & custom interactive timeline
│   │   ├── Included.jsx      # 4-column glassmorphic cards grid
│   │   └── ContactForm.jsx   # Underline inputs form & Footer links
│   ├── App.jsx               # App wrapper, Preloader, & Intersection Observer
│   ├── App.css               # Components, keyframes, scroll animations, responsive queries
│   ├── index.css             # CSS variable design tokens & global resets
│   └── main.jsx              # Application mount point
├── index.html                # Google Font links & DOM root
├── package.json              # Dependencies and scripts
└── vite.config.js            # Bundler configurations
```

---

## ⚡ Development & Installation

Follow these steps to set up the project locally:

### 1. Clone the repository
```bash
git clone https://github.com/your-username/japan-tours.git
cd japan-tours
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```
Open **`http://localhost:5173/`** in your browser to view the live build with Hot Module Replacement (HMR).

### 4. Create a production build
Verify build optimization and compile assets:
```bash
npm run build
```
The optimized bundle will be created inside the `dist/` directory.

---

## 💡 Code Highlights Showcase (For Recruiters)

### 1. Custom Viewport Intersection Observer
Instead of loading bulky animation libraries, viewport triggers are handled via a lightweight native observer in `App.jsx`:
```javascript
useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
  );

  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  animatedElements.forEach((el) => observer.observe(el));

  return () => animatedElements.forEach((el) => observer.unobserve(el));
}, []);
```

### 2. Dynamic Timeline Line Growth (CSS Variable Triggers)
The timeline line starts at height 0 and smoothly extends to 100% when the viewport observer adds the visibility class:
```css
.timeline-line {
  position: absolute;
  left: 50%;
  top: 0;
  width: 1px;
  background-color: rgba(255, 255, 255, 0.1);
  transform: translateX(-50%);
  height: 0;
  transition: height 2s cubic-bezier(0.16, 1, 0.3, 1);
}

.about-timeline-column.is-visible .timeline-line {
  height: 100%;
}
```

### 3. Micro-Interaction: Input Focus growing underline border
```css
.form-group {
  position: relative;
}

.form-group::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 1px;
  background-color: var(--color-gold);
  transition: width 0.3s ease, left 0.3s ease;
}

.form-group:focus-within::after {
  width: 100%;
  left: 0;
}
```
