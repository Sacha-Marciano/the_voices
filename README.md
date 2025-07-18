# The Voices

A multilingual, modern React web application for "The Voices" – an innovative and unique event entertainment collective. Built with Vite, React, Tailwind CSS, and Material UI, the app showcases the group’s artists, concepts, media, and contact options in a visually engaging, mobile-friendly interface.

## Features

- **Multilingual Support:** English, French, and Hebrew, with easy language switching.
- **Dynamic Navigation:** Responsive navigation bar with clear links to all sections.
- **Home Page:** Introduction, artist highlights, concepts, videos, photo grid, and options overview.
- **Artists ("The Voices") Page:** Meet the team with bios and photos.
- **Concepts ("Formules") Page:** Explore different event concepts/formulas, each with images and details.
- **Options Page:** Discover add-on services (e.g., cocktail animation, cartoonist, violinist, dancers) with images and descriptions.
- **Pictures Gallery:** Interactive, scrollable gallery of event photos with modal viewing.
- **Videos Gallery:** Embedded YouTube videos of performances and teasers.
- **Contact Page:** Multilingual contact form powered by EmailJS for direct inquiries.
- **Consistent Branding:** Prominent logo and color scheme throughout.
- **Accessibility:** Keyboard navigation and responsive design for all devices.

## Tech Stack

- **Frontend:** React 18, React Router DOM 7, Vite
- **Styling:** Tailwind CSS, Material UI, Emotion
- **Media:** React Player for videos, custom image galleries
- **Forms:** EmailJS integration for contact
- **Linting:** ESLint with React and hooks plugins
- **Other:** Lucide React icons, PostCSS, Autoprefixer

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm

### Installation

```bash
git clone <your-repo-url>
cd the-voices
npm install
```

### Development

```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) to view the app.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Project Structure

```
src/
  components/    # Reusable UI components (Header, Footer, Navigation, SingerCard, etc.)
  contexts/      # React context for language switching
  config/        # Static data for navigation, descriptions, options, etc.
  pages/         # Main app pages (Home, Voices, Concepts, Options, Pictures, Videos, Contacts)
  App.jsx        # Main app layout and routing
  main.jsx       # App entry point
public/assets/   # Images for artists, concepts, options, gallery, and logo
```

## Customization

- **Languages:** Easily add or modify translations in `src/config/index.js`.
- **Media:** Add new images or videos to the `public/assets` directory and update config as needed.
- **Options/Concepts:** Update or expand available services in the config file.

## Contact

For questions or contributions, please use the contact form on the site or open an issue.
