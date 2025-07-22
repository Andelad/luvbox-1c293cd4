#!/bin/bash

# Check if development server is already running on port 8080
if curl -s http://localhost:8080 > /dev/null 2>&1; then
    echo "✅ Development server is already running on http://localhost:8080"
    echo "🌐 You can access your app at: http://localhost:8080"
    echo ""
    echo "If you need to restart the server, run: npm run dev:restart"
else
    echo "🚀 Starting development server..."
    npm run dev
fi
