#!/bin/bash

#set -e

# === CONFIGURATION ===
REMOTE_USER="joriska"
REMOTE_HOST="162.55.254.31"
REMOTE_PATH="/public_html"               # Path on the SFTP server
LOCAL_BUILD_DIR="out"                    # Build output folder
HTACCESS_FILE=".htaccess"
IDENTITY_FILE="$HOME/.ssh/id_rsa"        # Only used if duck uses keys

# === Step 1: Build the site ===
echo "➡️ Building site..."
npm run build

# === Step 2: Delete everything remotely (via SFTP) ===
echo "🧹 Cleaning up remote directory: $REMOTE_PATH"

duck \
  --username "$REMOTE_USER" \
  --identity "$IDENTITY_FILE" \
  --delete "sftp://$REMOTE_HOST$REMOTE_PATH/*"

# === Step 3: Upload new site content ===
echo "📤 Uploading contents of $LOCAL_BUILD_DIR and $HTACCESS_FILE..."

duck \
  --username "$REMOTE_USER" \
  --identity "$IDENTITY_FILE" \
  --upload "sftp://$REMOTE_HOST$REMOTE_PATH"/ \
  "$LOCAL_BUILD_DIR"/* "$HTACCESS_FILE"

echo "✅ Deployment complete!"

