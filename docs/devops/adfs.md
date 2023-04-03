---
aliases:
  - ADFS
---

# Active Directory Federation Service

ADFS is Microsoft's identity provider service built on top of Active Directory.

An ADFS server's metadata can be found, by default, at
`https://<domain>/federationmetadata/2007-06/federationmetadata.xml`[^1].
Federation metadata can be easily parsed out with a
[CyberChef recipe](/devops/cyberchef.md#ADFS).

[^1]:
    https://social.technet.microsoft.com/Forums/windows/en-US/24a33c1b-b802-4a60-8863-eaca22e8d52e/what-is-the-default-federation-metadata-url
