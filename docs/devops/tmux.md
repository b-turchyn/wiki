---
tags:
  - Dev Tools
---

# Tmux

- Broadcast an email to all panes on the window: `setw synchronize-panes on`

## Session switcher with `fzf`

[(source)](https://news.ycombinator.com/item?id=31308099)

Requires tmux 3.2 and `fzf` to be installed

```
bind C-j display-popup -E "tmux list-sessions | sed -E 's/:.*$//' | grep -v \"^$(tmux display-message -p '#S')\$\" | fzf --reverse | xargs tmux switch-client -t"
```
