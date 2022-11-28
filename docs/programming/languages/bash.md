# Bash Shell

- [The Art of Command Line](https://github.com/jlevy/the-art-of-command-line)
  ([HN](https://news.ycombinator.com/item?id=33726831))
- [Bash-Oneliner](https://onceupon.github.io/Bash-Oneliner/)
- [Shell Script Best
  Practices](https://sharats.me/posts/shell-script-best-practices/), Shrikant
  Sharat Kandula ([HN](https://news.ycombinator.com/item?id=33354286))

Useful tips:
- You can split on input by specifying an [internal field
  separator](http://en.wikipedia.org/wiki/Internal_field_separator) (IFS), then
  reading in content via the `read` command.
  ```bash
  IFS=';' read -ra ADDR <<< "$IN"
  for i in "${ADDR[@]}"; do
    # process "$i"
  done
  ```
- [ShellCheck](https://www.shellcheck.net/),
  ([GitHub](https://github.com/koalaman/shellcheck)) can be used as a linter for
  shell scripts.
