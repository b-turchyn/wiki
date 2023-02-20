---
tags:
  - Tool
---

# Oh My Zsh!

This is a must-have toolchain on top of my ZSH environment, mainly because there
are so many handy plugins with nice aliases. Plus it looks nice.

If you ever get issues with a plugin complaining that it can't find a program,
check your `~/.zshrc` for when `oh-my-zsh` is sourced. In my case, I had
Homebrew's bin path sourced after oh-my-zsh was initialized, meaning it couldn't
find [Tmux](devops/tmux.md).
