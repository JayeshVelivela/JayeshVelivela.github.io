#!/bin/bash

set -e

echo "This pushes the portfolio to GitHub Pages."
echo "Expected repository: https://github.com/JayeshVelivela/JayeshVelivela.github.io"
echo ""

if [ ! -d ".git" ]; then
  echo "This folder is not a Git repository because it likely came from a ZIP download."
  echo "Recommended:"
  echo "1. Clone https://github.com/JayeshVelivela/JayeshVelivela.github.io"
  echo "2. Copy these updated files into the clone"
  echo "3. Run this script from inside the cloned repository"
  exit 1
fi

if ! git remote get-url origin >/dev/null 2>&1; then
  git remote add origin https://github.com/JayeshVelivela/JayeshVelivela.github.io.git
fi

git status
git add .
git commit -m "Refresh portfolio site"
git push -u origin main

echo ""
echo "Done. Check the GitHub Actions tab for the Pages deployment."
