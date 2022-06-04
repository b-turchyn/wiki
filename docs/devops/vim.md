# Vim

## Useful Plugins

### Vundle

My preferred Vim plugin manager

### Command-T

I swapped out [ctrlp.vim](https://github.com/ctrlpvim/ctrlp.vim) for
[Command-T](https://github.com/wincent/command-t).

Recommended changes:
- Set `let g:CommandTFileScanner = "git"`. This will fallback to the `find`
  option, but critically takes advantage of `.gitignore`.
