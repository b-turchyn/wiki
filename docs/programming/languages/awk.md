# awk

- [`sed`](/programming/languages/sed.md) is a similar program

- Sum up a list of numbers, 1 per line, outputting the list and the sum[^1]:
  ```awk
  <cmd> | awk '{ sum+=$1;print $1} END {print "Sum";print sum}'
  ```

Links:

- [What does $0=$2 in awk
  do?](https://kau.sh/blog/awk-1-oneliner-dollar-explanation/),  Kaushik Gopal
    ([HN](https://news.ycombinator.com/item?id=32969238))

[^1]: [Linux: sum a column of
  numbers](https://lovethepenguin.com/linux-sum-a-column-of-numbers-8fe1d039f9e6)
