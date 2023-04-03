---
tags:
  - Databases
---

# MongoDB

- [Installing and Running on MacOS](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/)

## MongoDB With Spring Data

- Both the
  [`@Query`](https://docs.spring.io/spring-data/mongodb/docs/current/api/org/springframework/data/mongodb/repository/Query.html)
  and
  [`@Aggregation`](https://docs.spring.io/spring-data/mongodb/docs/current/api/org/springframework/data/mongodb/repository/Aggregation.html)
  annotations can be used to build queries, but the `@Aggregation` one provides
  access to more logic, such as limits and offsets (skip)
  ([source](https://stackoverflow.com/a/71888578), StackOverflow).
- Alternatively for pagination, a `Pageable` argument can be supplied.

## Useful Links

- [Query and Projection Operators](https://www.mongodb.com/docs/manual/reference/operator/query/)
  - I can never remember the various operators available when writing queries;
    here's the official reference.
