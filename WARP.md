# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a modern React portfolio showcasing AI and Deep Learning projects. It's built with Vite, uses Tailwind CSS for styling, Framer Motion for animations, and features a comprehensive Docker deployment setup.

## Common Development Commands

### Development
```bash
# Install dependencies
npm install

# Start development server (localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Docker Deployment
```bash
# Quick deploy using automated script
./deploy.sh

# Manual Docker Compose deployment
docker-compose up --build -d

# View container logs
docker-compose logs -f

# Stop the application
docker-compose down

# Rebuild and restart
docker-compose up --build -d
```

### Useful Docker Commands
```bash
# Health check
docker-compose ps

# Container shell access
docker exec -it chaitanya-portfolio sh

# View nginx logs
docker exec chaitanya-portfolio cat /var/log/nginx/access.log
```

## Architecture & Project Structure

### Core Architecture
- **Frontend Framework**: React 18 with Vite as the build tool
- **Styling**: Tailwind CSS with dark mode support (class-based)
- **Animations**: Framer Motion for smooth transitions and scroll-based animations
- **Icons**: Lucide React for consistent iconography
- **Deployment**: Multi-stage Docker build with Nginx for production serving

### Key Files & Directories
```
├── src/
│   ├── App.jsx          # Main app wrapper (renders Portfolio component)
│   ├── Portfolio.jsx    # Main portfolio component with all sections
│   ├── main.jsx         # React entry point
│   └── index.css        # Global Tailwind CSS imports
├── Dockerfile           # Multi-stage build (Node.js → Nginx)
├── docker-compose.yml   # Container orchestration
├── nginx.conf          # Production server configuration
├── deploy.sh           # Automated deployment script
├── vite.config.js      # Vite configuration (port 3000, auto-open)
└── tailwind.config.js  # Tailwind with dark mode and Inter font
```

### Component Architecture
The portfolio is built as a single-page application with these main sections:
- **Hero Section**: Introduction with profile photo and CTA buttons
- **About Section**: Brief description and value proposition
- **Tools Section**: Tech stack organized by category
- **Research Section**: Published papers with IEEE links
- **Projects Section**: Featured AI/ML projects with problem-solution-impact format
- **Automations Section**: n8n workflow automation projects
- **Contact Section**: Email, social links, and CV downloads

### State Management
- Simple React state with `useState` for dark/light theme toggle
- Theme persistence through DOM class manipulation on `documentElement`
- No complex state management library needed due to simple requirements

## Key Technical Details

### Styling System
- **Tailwind CSS**: Utility-first with custom color scheme (rose/fuchsia gradients)
- **Dark Mode**: Class-based implementation (`dark:` prefixes)
- **Responsive Design**: Mobile-first with `sm:`, `md:`, `lg:` breakpoints
- **Custom Font**: Inter font family configured in Tailwind

### Animation Patterns
- **Framer Motion**: Used for entrance animations, scroll-triggered reveals, and hover effects
- **Common Animation Props**: `initial={{ opacity: 0, y: 20 }}`, `animate={{ opacity: 1, y: 0 }}`
- **Viewport Triggers**: `whileInView` for scroll-based animations with `viewport={{ once: true }}`

### Docker Production Setup
- **Multi-stage Build**: Node.js build stage → Nginx production stage
- **Security Headers**: XSS protection, content security policy, frame options
- **SPA Routing**: Nginx configured to handle React Router with `try_files`
- **Static Asset Caching**: 1-year cache for images, fonts, and build assets
- **Health Check**: `/health` endpoint for container monitoring

### Asset Management
- **Images**: Stored in root directory, imported directly into components
- **Static Files**: Public assets served from Vite's public directory
- **CV Files**: Expected at `/cv-en.pdf` and `/cv-de.pdf` in public directory

## Development Guidelines

### Adding New Projects
Projects are defined in the `projects` array in `Portfolio.jsx`. Each project should include:
- `title`: Project name
- `githubLink`: GitHub repository URL
- `demoLink`: Live demo URL (can be null)
- `tags`: Array of technology tags
- `image`: Imported image asset
- `problem`, `solution`, `impact`: Brief descriptions for each aspect

### Adding New Tool Categories
Tools are organized in the `tools` array with categories like "Core AI/ML", "Backend & APIs", etc. Each category contains a `skills` array.

### Styling Conventions
- Use Tailwind utility classes consistently
- Follow the existing color scheme (rose-500, fuchsia-600, neutral shades)
- Maintain responsive design patterns with mobile-first approach
- Use consistent spacing scales (p-4, py-2, gap-3, etc.)

### Animation Guidelines
- Keep animations subtle and purposeful
- Use consistent timing (0.4-0.6s duration)
- Implement staggered animations for lists with small delays (idx * 0.05)
- Always include `viewport={{ once: true }}` for performance

## Deployment Notes

### Environment Setup
- **Node Version**: 18+ (specified in Dockerfile)
- **Port Configuration**: Development runs on 3000, production Docker maps to 3000:80
- **Build Output**: Vite builds to `dist/` directory
- **Nginx Serving**: Production serves from `/usr/share/nginx/html`

### Docker Considerations
- Container name: `chaitanya-portfolio`
- Health check runs every 30 seconds
- Automatic restart policy: `unless-stopped`
- Production environment variable set automatically

This portfolio demonstrates modern React development practices with production-ready Docker deployment, making it suitable for both development and professional hosting environments.
