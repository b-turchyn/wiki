#!/usr/bin/env bash

# Formats Markdown files using Prettier
npx prettier -w $(git ls-files -mo | grep -e "\\.md$")
