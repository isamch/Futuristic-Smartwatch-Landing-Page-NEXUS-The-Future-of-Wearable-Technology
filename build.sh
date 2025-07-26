#!/bin/bash

# Format code
echo "Formatting code..."
npm run format

# Lint code
echo "Linting code..."
npm run lint

# Build for production
echo "Building for production..."
NODE_ENV=production npm run build:prod

# Copy assets
echo "Copying assets..."
cp -r public/dist/* dist/

# Clean up
echo "Cleaning up..."
rm -rf .cache
rm -rf node_modules/.cache

# Show build summary
echo "Build completed successfully!"
