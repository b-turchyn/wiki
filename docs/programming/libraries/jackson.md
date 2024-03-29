---
tags:
  - Java
---

# Jackson

- Use the `@JsonValue` annotation for specifying what the JSON or XML value
  should be if it's not the same as the output as `#toString()`.

## Complex Deserialization

A use case for this was when I was serializing from an abstract class with
multiple implementations.[^1]

## Links

- [Custom (De)serializers with Jackson](https://www.baeldung.com/jackson-serialize-dates),
  Baeldung
- [Ignoring unknown properties globally](https://stackoverflow.com/q/14343477),
  StackOverflow

[^1]:
    [Getting Started with Custom Deserialization in Jackson](https://www.baeldung.com/jackson-deserialization),
    Baeldung
