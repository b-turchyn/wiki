---
aliases:
  - AuthN
tags:
  - Azure
---

# Authentication

Authentication is the process of establishing a user's _identity_. In other
words, it is _who_ they are.

Authentication is sometimes abbreviated to _AuthN_.

While it is related, it is not the same thing as
[authorization](devops/authorization.md).

## Multi-Factor Authentication

Authentication is based on one or more of the following factors:

- Something you _know_ (a password, PIN, security image, etc)
- Something you _have_ (a TOTP token generator like Authy, a Yubikey, etc)
- Something you _are_ (fingerprint or retina scans, etc)

Username and password logins are single-factor authentication. Multi-Factor
Authentication (MFA) adds a second factor of a different type. Two separate
checks of the same factor do _not_ count as MFA -- for example, a password and
security image are still both things you _know_ and are therefore still
single-factor.
