---
tags:
  - Azure
---

# Conditional Access

Conditional access is functionality within Azure Active Directory that will
enforce varying levels of [authentication](devops/authentication.md)
requirements depending on where the user is logging in from.

Factors such as which device the user is using, what browser, and what location
can be factored into the decision. These are described as _signals_ in their
documentation.

Depending on the signals, more or less identity checks can be performed. If, for
example, a user is within an office campus, full access may be granted
automatically, but if a user is signing in from an unexpected country, access
may be blocked entirely.

# References

- https://docs.microsoft.com/en-us/azure/active-directory/conditional-access/
