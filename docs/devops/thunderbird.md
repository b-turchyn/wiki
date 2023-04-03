---
tags:
  - Tools
---

# Mozilla Thunderbird

## Addons

### DKIM Verifier

[[source]](https://addons.thunderbird.net/En-us/thunderbird/addon/dkim-verifier/)

In order to get the DKIM verifier to work correctly, I needed to use the
[libunbound](https://github.com/lieser/dkim_verifier/wiki/DNS) library. The
Javascript library has a number of limitations, namely that:

- Connections must be over TCP, not UDP
- DNSSEC is not supported
