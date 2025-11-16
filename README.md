# Portfolio with Animated Shader Hero

A stunning portfolio website featuring an interactive WebGL shader-based hero section built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Interactive WebGL Shader Background**: Beautiful, performant animated shader effects powered by WebGL 2.0
- **Smooth Animations**: Fade-in animations and transitions for a polished user experience
- **Fully Responsive**: Optimized for all screen sizes from mobile to desktop
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Modern utility-first styling with custom animations
- **shadcn/ui Structure**: Component architecture following shadcn/ui best practices
- **GitHub Pages Deployment**: Automated deployment via GitHub Actions

## 🛠️ Technologies

- **React 19** - Latest React with modern features
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **WebGL 2.0** - Hardware-accelerated graphics
- **PostCSS** - CSS processing

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/GoosieGav/GoosieGav.github.io.git
cd GoosieGav.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 🏗️ Build

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## 📁 Project Structure

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── src/
│   ├── components/
│   │   └── ui/
│   │       └── animated-shader-hero.tsx  # Main hero component
│   ├── App.tsx                 # Main application component
│   ├── main.tsx               # Application entry point
│   └── index.css              # Global styles
├── vite.config.ts             # Vite configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
└── package.json               # Dependencies and scripts
```

## 🎨 Using the Hero Component

The `animated-shader-hero` component is located in `src/components/ui/` and can be easily customized:

```tsx
import Hero from "@/components/ui/animated-shader-hero";

function App() {
  return (
    <Hero
      trustBadge={{
        text: "Your trust badge text",
        icons: ["✨", "🚀", "⭐"]
      }}
      headline={{
        line1: "Your First Line",
        line2: "Your Second Line"
      }}
      subtitle="Your compelling subtitle text goes here..."
      buttons={{
        primary: {
          text: "Get Started",
          onClick: () => console.log('Primary action')
        },
        secondary: {
          text: "Learn More",
          onClick: () => console.log('Secondary action')
        }
      }}
      className="custom-class" // optional
    />
  );
}
```

### Component Props

- `trustBadge` (optional): Display a trust badge with text and icons
- `headline`: Two-line headline for the hero section
- `subtitle`: Descriptive subtitle text
- `buttons` (optional): Primary and secondary call-to-action buttons
- `className` (optional): Additional CSS classes

## 🚀 Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup GitHub Pages

1. Go to your repository settings on GitHub
2. Navigate to **Settings > Pages**
3. Under "Build and deployment":
   - Source: **GitHub Actions**
4. The site will automatically deploy when you push to the `main` branch

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will:
- Build the project
- Deploy to GitHub Pages
- Make it available at `https://goosiegav.github.io/`

## 📝 Why `/components/ui` Directory?

The `/components/ui` directory structure is important because:

1. **shadcn/ui Convention**: Follows the standard shadcn/ui component organization
2. **Separation of Concerns**: UI components are separate from feature components
3. **Reusability**: Components in `ui/` are designed to be reused across projects
4. **Path Aliases**: Configured with `@/` alias for clean imports
5. **Scalability**: Easy to add more UI components as the project grows

## 🎯 Customization

### Changing Colors

The hero component uses Tailwind CSS classes. You can customize colors by modifying:
- Gradient colors in the headline
- Button colors and hover effects
- Background effects and overlays

### Modifying Animations

Animation keyframes are defined in the component's `<style>` tag. You can adjust:
- Animation duration
- Delay timing
- Easing functions

### Shader Effects

The shader source code is in the `defaultShaderSource` constant at the end of the `animated-shader-hero.tsx` file. You can modify the GLSL code to create different visual effects.

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues or pull requests.

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Credits

- Shader effects by Matthias Hurrle (@atzedent)
- Built with React, TypeScript, and Tailwind CSS
- Component structure inspired by shadcn/ui

---

Made with ❤️ by [GoosieGav](https://github.com/GoosieGav)
