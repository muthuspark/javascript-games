
#!/bin/bash

# Target directory
TARGET_DIR="/home/leopard/development/blogs/javascript-games/public/posts"

# Find only .png files (case-insensitive)
find "$TARGET_DIR" -type f -iname "*.png" | while read -r FILE; do
    # Get the directory of the file
    DIR=$(dirname "$FILE")
    
    # Define the new path
    NEW_NAME="$DIR/thumbnail.png"
    
    # Only rename if the file isn't already named thumbnail.png
    if [ "$FILE" != "$NEW_NAME" ]; then
        echo "Renaming: $FILE -> $NEW_NAME"
        mv "$FILE" "$NEW_NAME"
    fi
done

echo "Done."