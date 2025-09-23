#!/bin/bash

echo "🚀 Deploying Chaitanya's Portfolio with Docker..."

# Stop and remove existing containers
echo "📦 Stopping existing containers..."
docker-compose down

# Build and start the application
echo "🔨 Building and starting the application..."
docker-compose up --build -d

# Wait a moment for the container to start
echo "⏳ Waiting for the application to start..."
sleep 5

# Check if the container is running
if docker-compose ps | grep -q "Up"; then
    echo "✅ Portfolio deployed successfully!"
    echo "🌐 Your portfolio is now running at: http://localhost:3000"
    echo ""
    echo "📋 Useful commands:"
    echo "   View logs: docker-compose logs -f"
    echo "   Stop app:  docker-compose down"
    echo "   Restart:   docker-compose restart"
else
    echo "❌ Deployment failed. Check logs with: docker-compose logs"
    exit 1
fi

