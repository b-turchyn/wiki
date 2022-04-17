---
title: Git
tags:
  - Tool
---
# Git

## Aliases

Aliases are managed through [oh-my-zsh](/devops/oh-my-zsh).

* `gcl`: Clone
* `gl`: Pull
* `gp`: Push
* `gst`: Git Status
* `gc`: Commit

## Push A Specific Commit

```bash
git push origin <commit-id>:<branch>
```

## Submodules

### Adding A Submodule

```bash
git submodule add <repo-url> <directory>
```

### Cloning A Repository With Submodules

```bash
git clone <repo-url>
cd <repo>
git submodule update --init
```

### Updating Submodules When Pulling

```bash
git pull --recurse-submodules
```
