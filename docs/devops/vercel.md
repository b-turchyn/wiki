# Vercel

- Silent Github deploys

  You can stop Vercel from commenting on each deploy by adding an option to
  `vercel.json` in the root of your repository:

  ```json
  {
    "github": {
      "silent": true
    }
  }
  ```

- [Redirect logic](https://vercel.com/guides/does-vercel-support-permanent-redirects)
  ```json
  {
    "redirects": [
      {
        "source": "/foo",
        "destination": "/bar"
      }
    ]
  }
  ```

([Source](https://vercel.com/docs/concepts/git/vercel-for-github#silence-github-comments))
