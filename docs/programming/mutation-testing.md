---
description: |
  Mutation testing changes your code and checks that at least one
  test fails. If it doesn't, then there's a gap in your tests
---

# Mutation Testing

Code coverage is a bad metric for evaluating code quality. We should stop using
it. Mutation testing isn't perfect, but it evaluates test strength, which is a
better metric. The main cost of mutation testing is that it's computationally
expensive and its execution time grows exponentially as your codebase grows.

I use [Pitest](https://pitest.org) for mutation testing my Java code. Pitest has
a Maven goal to target only files that have SCM-pending changes. Very useful for
cutting down on execution time.

Articles to read:

- [State of Mutation Testing at Google](https://research.google/pubs/state-of-mutation-testing-at-google/)
  - A coworker sent this to me
