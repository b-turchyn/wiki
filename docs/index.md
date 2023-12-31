---
sidebar_position: 0
title: 🏠 Home
description:
  "An ever-changing digital garden of notes and information I find interesting"
---

# Everything I Know

> "If it's worth caring about, it's worth writing down." --
> [Seth Godin](https://seths.blog/2022/07/a-good-spec/)

A collection of random notes.

My goal is for this to be my [digital garden](writing/digital-garden.md): a
curated collection of information that I find useful and beneficial to refer
back to. Maybe this information is useful to others.

I'm a big fan of learning in public. I will almost certainly make mistakes at
some point, and I will learn from others when they (hopefully) correct me. In
turn, I hope others read the information I've gathered here and get something
out of it.

Some articles you may find interesting:

- [My Workflow](workflow.md)

%import ../loc.txt%

## Contact

I can be found online in the following locations:

- [My personal website](https://brianturchyn.net), of which there's a weekly
  newsletter
- On [Twitter](https://twitter.com/btwritescode) and <a
  href="https://mastodon.social/@btwritescode" rel="me noopener noreferrer">Mastodon</a>
- On [GitHub](https://github.com/b-turchyn)

My identity can be verified through [Keybase](https://keybase.io/bturchyn).

## Customizations

- Math equation support[^1] via
  [`remark-math`](https://github.com/remarkjs/remark-math/) and
  [`rehype-katex`](https://github.com/remarkjs/remark-math/blob/main/packages/rehype-katex)
- ~~Overriding header IDs to match Obsidian's auto-complete style
  ([source](https://github.com/b-turchyn/wiki/blob/main/src/plugins/section-prefix.js))~~
  Disabled for now since I use [Vim](devops/vim.md) for editing this instead of
  [Obsidian](https://obsidian.md). Waiting for
  [GFM-style slugs to be supported](https://forum.obsidian.md/t/support-gfm-style-kebab-case-heading-slug-anchor-targets/30350)
- Smartypants support using
  [@silvenon/remark-smartypants](https://github.com/silvenon/remark-smartypants)
- Local search using
  [easyops-cn/docusaurus-search-local](https://github.com/easyops-cn/docusaurus-search-local)
- [Additional syntax highlighting](https://docusaurus.io/docs/markdown-features/code-blocks#supported-languages)
  added to theme configuration
- `utm_source` added to all external URLs via
  [brechtcs/rehype-urls](https://github.com/brechtcs/rehype-urls)

[^1]:
    [Instructions](https://docusaurus.io/docs/markdown-features/math-equations)

## Contributing

Feel free to add or amend as you feel is appropriate. While the primary consumer
of this is myself so I have my own reference, please don't let that dissuade you
from contributing if you feel like there's value.

The expectations:

- The code of conduct is simple: _don't be a dick_. Treat everyone with respect.
- Submit a PR with proposed changes. Please include why you think I should
  accept it.
- If you have any potential conflict of interest (such as you being the owner of
  the site you're submitting to a list), then divulge this in the PR.

Some notes for "future Brian":

- Clone the repository
- Run `git submodule update --init` to grab Obsidian config (if you have access
  😉)
- Contribute!

## Deployment

Deployment is driven automatically by Vercel. Handy.

## Usage

Unless otherwise specified, this work is licensed under a <a rel="license"
href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons
Attribution-ShareAlike 4.0 International License</a>.

<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img
alt="Creative Commons Licence"
src="https://i.creativecommons.org/l/by-sa/4.0/80x15.png" /></a>
