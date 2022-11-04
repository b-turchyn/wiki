---
tags:
  - Databases
---
# MySQL

## Differences between MySQL and MariaDB

- An official list, maintained by MariaDB, is located in their knowledgebase:
  [Compatibility &
  Differences](https://mariadb.com/kb/en/compatibility-differences/)

### SubSelects

MariaDB only sees references one level up from its current scope. For example,
the following will work in MySQL, but not in MariaDB:
```sql
SELECT posts.*,
  (WITH c AS (
    SELECT id
      FROM conversions
     WHERE post_id = posts.id) -- Problem: posts is not visible here in MariaDB
  SELECT count(*) FROM c) as conversion_count
  FROM posts;
```

This query is functionally equivalent and compatible with both MariaDB and
MySQL.
```sql
SELECT posts.*,
  (WITH c AS (
    SELECT id
      FROM conversions))
  SELECT count(*) FROM c WHERE post_id = posts.id) as conversion_count
  FROM posts;
```

This has come up in
[TryGhost/Ghost#15729](https://github.com/TryGhost/Ghost/issues/15729) where the
sub-sub-select has a UNION statement to combine the results of two tables
together.
