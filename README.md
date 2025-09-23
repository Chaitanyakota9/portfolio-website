# Chaitanya Kota's AI & Deep Learning Portfolio

A modern, responsive portfolio showcasing AI and Deep Learning projects built with React, Vite, and Tailwind CSS.

## 🚀 Quick Deploy with Docker

### Prerequisites
- Docker installed on your system
- Docker Compose installed

### Deployment Steps

1. **Clone or navigate to the project directory**
   ```bash
   cd "cursor portfolio"
   ```

2. **Deploy using the automated script**
   ```bash
   ./deploy.sh
   ```

   Or manually with Docker Compose:
   ```bash
   docker-compose up --build -d
   ```

3. **Access your portfolio**
   - Open your browser and go to: http://localhost:3000

### Docker Commands

- **View logs**: `docker-compose logs -f`
- **Stop the application**: `docker-compose down`
- **Restart**: `docker-compose restart`
- **Rebuild and restart**: `docker-compose up --build -d`

## 🛠️ Development

### Local Development
```bash
npm install
npm run dev
```

### Build for Production
```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
├── src/
│   ├── App.jsx          # Main application component
│   ├── Portfolio.jsx    # Portfolio content
│   ├── main.jsx         # React entry point
│   └── index.css        # Global styles
├── Dockerfile           # Multi-stage Docker build
├── docker-compose.yml   # Docker Compose configuration
├── nginx.conf          # Nginx server configuration
├── deploy.sh           # Automated deployment script
└── package.json        # Dependencies and scripts
```

## 🐳 Docker Configuration

The project uses a multi-stage Docker build:
1. **Builder stage**: Installs dependencies and builds the React app
2. **Production stage**: Uses Nginx to serve the built static files

### Features
- ✅ Optimized production build
- ✅ Nginx with gzip compression
- ✅ Security headers
- ✅ SPA routing support
- ✅ Static asset caching
- ✅ Health check endpoint
- ✅ Automatic container restart

## 📝 License

MIT License - feel free to use this portfolio as a template for your own projects!

---

**Built with ❤️ using React, Vite, Tailwind CSS, and Docker**
