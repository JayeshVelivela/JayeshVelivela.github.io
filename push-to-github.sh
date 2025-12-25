#!/bin/bash

# Script to push to GitHub
# Replace YOUR_USERNAME with your GitHub username
# Replace REPO_NAME with your repository name (e.g., personal-website)

echo "Make sure you've created the repository on GitHub first!"
echo "Go to: https://github.com/new"
echo ""
read -p "Enter your GitHub username: " GITHUB_USERNAME
read -p "Enter your repository name: " REPO_NAME

git remote add origin https://github.com/${GITHUB_USERNAME}/${REPO_NAME}.git
git push -u origin main

echo "Done! Your code is now on GitHub."
echo "Next step: Deploy to Railway (see DEPLOY.md)"

