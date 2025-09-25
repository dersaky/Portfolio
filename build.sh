#!/bin/bash
set -e

echo "Starting build process..."

# Ensure node_modules/.bin is executable
chmod +x node_modules/.bin/* 2>/dev/null || true

# Try different build methods
if command -v npx >/dev/null 2>&1; then
    echo "Using npx..."
    npx vite build
elif [ -x "node_modules/.bin/vite" ]; then
    echo "Using direct vite binary..."
    node_modules/.bin/vite build
else
    echo "Using node to run vite..."
    node node_modules/vite/bin/vite.js build
fi

echo "Build completed successfully!"
