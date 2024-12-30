# Spread Syntax

An interable like an array or string can be "spread" into multiple function
arguments or array elements.

```js
function concat(a, b, c) {
  return a + b + c;
}

const values = ["foo", "bar", "baz"];
console.log(concat(...values)); // 'foobarbaz'

const otherValues = ["bleep", ...values, "potato"];
assertEquals(["bleep", "foo", "bar", "baz", "potato"], otherValues);
```

## References

- [Spread syntax, MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
