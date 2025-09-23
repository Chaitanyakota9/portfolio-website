#!/bin/bash

echo "🌐 Cloud Deployment Options for Custom Domain"
echo "=============================================="
echo ""

echo "1️⃣  DIGITAL OCEAN (Recommended - $5/month)"
echo "   - Easy Docker deployment"
echo "   - Free SSL certificates"
echo "   - Custom domain support"
echo "   - Steps:"
echo "     a) Create Droplet with Docker"
echo "     b) Upload your code"
echo "     c) Run: docker-compose -f docker-compose.prod.yml up -d"
echo "     d) Point domain to your server IP"
echo ""

echo "2️⃣  AWS EC2 (Free tier available)"
echo "   - Launch EC2 instance"
echo "   - Install Docker"
echo "   - Deploy with docker-compose.prod.yml"
echo "   - Use Route 53 for domain management"
echo ""

echo "3️⃣  GOOGLE CLOUD (Free tier available)"
echo "   - Create Compute Engine instance"
echo "   - Deploy with Docker"
echo "   - Use Cloud DNS for domain"
echo ""

echo "4️⃣  VULTR ($2.50/month)"
echo "   - Similar to Digital Ocean"
echo "   - Very affordable"
echo ""

echo "5️⃣  RAILWAY (Free tier available)"
echo "   - Deploy directly from GitHub"
echo "   - Automatic SSL"
echo "   - Custom domain support"
echo ""

echo ""
echo "🎯 QUICK START (Digital Ocean):"
echo "1. Sign up at digitalocean.com"
echo "2. Create a Droplet with Docker pre-installed"
echo "3. SSH into your server"
echo "4. Clone your repository"
echo "5. Run: docker-compose -f docker-compose.prod.yml up -d"
echo "6. Point your domain to the server IP"
echo ""

echo "🔗 DOMAIN SETUP:"
echo "1. Buy domain (Namecheap, GoDaddy, Cloudflare)"
echo "2. Point DNS to your server IP"
echo "3. Get SSL certificate (Let's Encrypt - FREE)"
echo ""

echo "📋 Files created for you:"
echo "   - docker-compose.prod.yml (Production config)"
echo "   - nginx.prod.conf (SSL-ready nginx config)"
echo "   - deploy-cloud.sh (This script)"



