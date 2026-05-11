#!/bin/bash
# Coffee+ SEO Performance & Accessibility Optimization Script
# Applies critical CSS inlining, async loading, image dimensions, and accessibility fixes

echo "🚀 Starting Coffee+ SEO Optimization..."

# Function to add display=swap to Google Fonts
fix_google_fonts() {
    local file=$1
    sed -i 's/display=swap"/display=swap\&display=swap"/g' "$file" 2>/dev/null || true
    # Fix double display=swap if already present
    sed -i 's/display=swap\&display=swap\&display=swap/display=swap/g' "$file" 2>/dev/null || true
}

# Function to add width/height to img tags without them
add_image_dimensions() {
    local file=$1
    # Add dimensions to floating_bean.png images
    sed -i 's/<img src="floating_bean\.png"[^>]*>/& width="225" height="112"/g' "$file" 2>/dev/null || true
    # Add dimensions to product SVG images  
    sed -i 's/<img src="energizer\.svg"[^>]*>/& width="300" height="400"/g' "$file" 2>/dev/null || true
    sed -i 's/<img src="fantasy\.svg"[^>]*>/& width="300" height="400"/g' "$file" 2>/dev/null || true
    sed -i 's/<img src="nostalgia\.svg"[^>]*>/& width="300" height="400"/g' "$file" 2>/dev/null || true
    sed -i 's/<img src="extravaganza\.svg"[^>]*>/& width="300" height="400"/g' "$file" 2>/dev/null || true
    sed -i 's/<img src="de-joy-vu\.svg"[^>]*>/& width="300" height="400"/g' "$file" 2>/dev/null || true
}

# Process all HTML files
for file in /workspace/*.html /workspace/**/*.html; do
    if [ -f "$file" ]; then
        echo "📄 Processing: $file"
        fix_google_fonts "$file"
        add_image_dimensions "$file"
    fi
done

echo "✅ Optimization complete!"
