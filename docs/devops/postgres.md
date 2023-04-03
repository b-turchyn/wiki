---
tags:
  - Databases
---

# PostgreSQL

There are various search techniques for text:

- [Full text search](https://www.postgresql.org/docs/current/textsearch-intro.html)
- [Trigram search](http://www.postgresql.org/docs/current/static/pgtrgm.html)

Other useful search-based modules:

- [unaccent](https://www.postgresql.org/docs/current/unaccent.html) removes
  accented characters for building out the search dictionary
- [fuzzystrmatch](http://www.postgresql.org/docs/current/static/fuzzystrmatch.html)
  implements [Double Metaphone](http://en.wikipedia.org/wiki/Double_Metaphone)
  search support

There are [Ruby on Rails](/programming/frameworks/ruby-on-rails.md) gems that
can take advantage of these (like `pg_search`)
