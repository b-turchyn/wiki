# sed

- Replacing content in a file or the output of a command:

  ```bash
  sed 's/find/replace/' file

  ./some-output | sed 's/find/replace/'
  ```

  Add `-i` to edit the file in-place (or `-i<suffix>` to make a backup before
  editing).

  ([source](https://www.theunixschool.com/2014/08/sed-examples-remove-delete-chars-from-line-file.html))
