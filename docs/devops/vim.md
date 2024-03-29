# Vim

## Patterns and Anti-Patterns

- Pressing motion keys multiple times should be avoided (i.e. `jjjjj`). Instead,
  opt for `[count]{motion}` (i.e. `5j`)
- Not mapping frequent operations to a shorter command with
  [`map`](https://vimhelp.org/map.txt.html#%3Amap).
  ```vim
  " Tabs
  map <Leader>tn :tabnext<CR>
  map <Leader>tp :tabprev<CR>
  map <Leader>tc :tabnew<CR>
  map <Leader>tf :tabfirst<CR>
  map <Leader>tl :tablast<CR>
  ```

## Useful Plugins

### Vundle

My preferred Vim plugin manager

### Command-T

I swapped out [ctrlp.vim](https://github.com/ctrlpvim/ctrlp.vim) for
[Command-T](https://github.com/wincent/command-t).

Note that when also using RVM, you need to run the `extconf.rb` file by
referencing the correct version of Ruby, which means using
`/usr/local/opt/ruby/bin/ruby extconf.rb` to call the right version.

Recommended changes:

- Set `let g:CommandTFileScanner = "git"`. This will fallback to the `find`
  option, but critically takes advantage of `.gitignore`.
- I mapped `<Leader>p` to `<Plug>(CommandT)` because I'm used to ctrlp.vim:
  ```vim
  nmap <silent> <Leader>p <Plug>(CommandT)
  ```

## Learning Tools

- [Vimified](https://www.vimified.com/)
  ([HN](https://news.ycombinator.com/item?id=32034625))

## Fun Stuff

- [tenderlove/initial-v](https://github.com/tenderlove/initial-v), a BMW shifter
  which controls which Vim mode you're in by triggering keyboard inputs
  - [HN comments](https://news.ycombinator.com/item?id=35004828)
- [alevchuk/vim-clutch](https://github.com/alevchuk/vim-clutch), a hardware
  pedal that will move you in and out of insert mode when you press and release
  the pedal

## References

- [My Dotfiles](https://github.com/b-turchyn/dotfiles), GitHub
- [Ben Orenstein – Write code faster: expert-level vim (Railsberry 2012)](https://www.youtube.com/watch?v=SkdrYWhh-8s),
  YouTube
- [Vim Help](https://vimhelp.org/) (although you should just use `:h`)
- [Your problem with Vim is that you don't grok vi](https://stackoverflow.com/a/1220118),
  StackOverflow
- [MacVim is Vim with more OS integration](https://stackoverflow.com/a/5894021)
- [A Vim Guide for Advanced Users](https://thevaluable.dev/vim-advanced/)
  - [HN Comments](https://news.ycombinator.com/item?id=33811705)
- [Vim Tips for the Intermediate Vim
    User](https://jemma.dev/blog/intermediate-vim-tips), by [Jemma
    Issroff](https://jemma.dev/)
- [Moving Blazingly Fast With The Core Vim
    Motions](https://www.barbarianmeetscoding.com/boost-your-coding-fu-with-vscode-and-vim/moving-blazingly-fast-with-the-core-vim-motions/),
    by [Jaime González García](https://www.barbarianmeetscoding.com/)
