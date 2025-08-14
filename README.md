# Chaitanya Kota - AI & Deep Learning Portfolio

A modern, responsive portfolio website showcasing my work in AI, Deep Learning, and Computer Vision.

## 🚀 Features

- **Modern Design**: Clean, professional design with dark/light mode toggle
- **Responsive**: Fully responsive across all devices
- **Smooth Animations**: Powered by Framer Motion for engaging interactions
- **Fast Performance**: Built with Vite for optimal development and build times
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd chaitanya-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

## 🏗️ Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## 📁 Project Structure

```
├── src/
│   ├── App.jsx          # Main app component
│   ├── Portfolio.jsx    # Portfolio component
│   ├── main.jsx         # React entry point
│   └── index.css        # Global styles
├── photo.jpg            # Profile photo
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── postcss.config.js    # PostCSS configuration
```

## 🎨 Customization

### Personal Information
Update the following in `src/Portfolio.jsx`:
- Name and title
- Email and social links
- Projects and research papers
- Skills and tools

### Styling
- Colors: Modify the Tailwind classes (rose-500, fuchsia-600, etc.)
- Layout: Adjust the Container and grid components
- Animations: Customize Framer Motion animations

### Photo
Replace `photo.jpg` with your own profile photo. The image will automatically be styled with rounded corners and shadow effects.

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🌙 Dark Mode

The portfolio includes a built-in dark/light mode toggle that:
- Persists user preference
- Smoothly transitions between themes
- Automatically applies appropriate colors

## 🚀 Deployment

### Netlify
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### GitHub Pages
1. Add to package.json:
```json
{
  "homepage": "https://yourusername.github.io/your-repo-name",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Deploy: `npm run deploy`

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

Built with ❤️ by Chaitanya Kota
