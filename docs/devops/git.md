---
title: Git
tags:
  - Tool
---
# Git

Interesting reading about Git:

- [Git Notes: Git's Coolest, Most Unloved
  Feature](https://tylercipriani.com/blog/2022/11/19/git-notes-gits-coolest-most-unloved-feature/?ref=wiki.brianturchyn.net)
  by [Tyler Cipriani](https://tylercipriani.com/)

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

## Commit Signing

### Signing Commits

```bash
git config commit.gpgsign true
git config user.signingkey <key>
```

### Verifying Commits

```bash
git verify-commit <commit-ref>
```

When a commit is signed, the signature is outputted and returns error code 0.
When there's no signature on the commit, the command outputs nothing and returns
error code 1.

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
