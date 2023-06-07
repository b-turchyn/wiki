---
description: Building web apps to be as performant as possible
---

# Web Performance

## Reference Material

- [Lighthouse Performance Scoring](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring/)
  - Lighthouse provides a numeric score at the end, but what is that based on?
    These docs provide context.
  - Total Blocking Time (TBT) is currently (as of June 2023) weighted the
    highest at 30% of the score.

## Tooling

- [Unlighthouse](https://unlighthouse.dev/)
  - Uses Google Lighthouse to scan your whole site, but multithreads it based on
    your multicore CPU
  - Provides a static report at the end
  - Great for taking a look at every page to see if there are consistent or
    one-off problems
  - `npx unlighthouse --site <your-site>` to run immediately (from their
    [Getting Started](https://unlighthouse.dev/guide/getting-started) docs)
