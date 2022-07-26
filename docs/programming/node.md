# Node.js

- Global packages aren't available via `require()` unless the `NODE_PATH`
  environment variable is set. ([source](https://stackoverflow.com/a/14515868))
- HTTPS requests on the server are generally recommended to be done with a
  third-party library. Axios seems to be one of the most popular.
  ([source](https://stackoverflow.com/a/58035674))
