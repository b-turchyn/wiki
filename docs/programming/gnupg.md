# GnuPG / GPG

- [This cheatsheet](https://devhints.io/gnupg) was useful for some basic usage,
  in particular extracting data out of a key using `gpg`.
- Extracting a key's ID can be done with `gpg -k --with-colons | cut -d ':' -f5`
  for the 5th field

## Troubleshooting

If the following error is received:

```
error: gpg failed to sign the data
fatal: failed to write commit object
```

...then [this StackOverflow article](https://stackoverflow.com/a/41054093) has a
number of diagnostic steps to find the root cause of the issue.
