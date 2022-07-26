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

## References

- [My Dotfiles](https://github.com/b-turchyn/dotfiles), GitHub
- [Ben Orenstein – Write code faster: expert-level vim (Railsberry
  2012)](https://www.youtube.com/watch?v=SkdrYWhh-8s), YouTube
- [Vim Help](https://vimhelp.org/) (although you should just use `:h`)
- [Your problem with Vim is that you don't grok
  vi](https://stackoverflow.com/a/1220118), StackOverflow
