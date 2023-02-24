#!/usr/bin/env bash

# Formats Markdown files using Prettier
npx prettier -w $(git ls-files -mo $(git rev-parse --show-cdup || echo "./")docs/ | grep -e "\\.md$")
