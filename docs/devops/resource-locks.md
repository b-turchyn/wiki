---
tags:
  - Azure
---
# Resource Locks

Resource locks are used in Azure Active Directory to prevent accidental
modification and deletion of critical resources. This resource could be a server
or access group.

The scenario that resource locks aim to prevent is if a sysadmin is cleaning up
unused groups that were unknowingly still in use.

Locks can be set to either prevent deletion (`CanNotDelete`), or prevent both
modification and deletion (`ReadOnly`).

Resource locks can also be used with Azure Blueprints to enforce certain
resource locks to always exist.
