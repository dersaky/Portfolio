# Dmytro's Portfolio

Modern portfolio website built with Vue 3, TypeScript, and TailwindCSS.

## Features

- 🎨 **Modern Design**: Clean, minimalist dark theme with beautiful animations
- 📱 **Responsive**: Optimized for desktop and mobile devices
- ⚡ **Fast**: Built with Vite for lightning-fast development and builds
- 🎭 **Animations**: Smooth fade-in animations on scroll
- 🎯 **TypeScript**: Full type safety and better development experience
- 🎨 **TailwindCSS**: Utility-first CSS framework for rapid styling

## Tech Stack

- **Frontend**: Vue 3 (Composition API)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Build Tool**: Vite
- **Icons**: Emoji icons for simplicity

## Project Structure

```
src/
├── components/
│   ├── Header.vue      # Hero section with name and title
│   ├── About.vue       # About me section
│   ├── Skills.vue      # Skills and technologies
│   ├── Projects.vue    # Featured projects
│   └── Contacts.vue    # Contact information and form
├── App.vue             # Main app component with navigation
├── main.ts             # Application entry point
└── style.css           # Global styles and TailwindCSS imports
```

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd MyResyme
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Customization

### Personal Information

Update the following files with your personal information:

1. **src/components/Header.vue**: Update name and title
2. **src/components/About.vue**: Update description and skills
3. **src/components/Skills.vue**: Update skills list and proficiency levels
4. **src/components/Projects.vue**: Add your actual projects
5. **src/components/Contacts.vue**: Update contact links and information

### Contact Links

In `src/components/Contacts.vue`, update:
- Telegram: Replace `@your_telegram_username` with your actual username
- GitHub: Replace `@your_github_username` with your actual username
- Email: Replace `your.email@example.com` with your actual email

### Colors and Styling

The color scheme can be customized in `tailwind.config.js`:
- Primary colors (blue theme)
- Dark theme colors
- Animation settings

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `src/App.vue`
3. Add navigation link in the navigation menu

## Performance Features

- **Lazy Loading**: Components load as needed
- **Optimized Images**: Placeholder system for project images
- **Smooth Scrolling**: CSS-based smooth scrolling
- **Intersection Observer**: Animations trigger on scroll

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Feel free to reach out if you have any questions or suggestions!

- Telegram: [@your_telegram_username](https://t.me/your_telegram_username)
- GitHub: [@your_github_username](https://github.com/your_github_username)
- Email: your.email@example.com
