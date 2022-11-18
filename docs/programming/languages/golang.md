---
---
# Golang

- Memory usage can be retrieved using
  [`runtime.ReadMemStats()`](https://pkg.go.dev/runtime#ReadMemStats) ([Sample
  Gist](https://gist.github.com/j33ty/79e8b736141be19687f565ea4c6f4226))
- Avoid moving data to the heap for a performance improvement. When assigning
  variables, if you can work with the reference to your data rather than copying
  it out, that reduces heap usage. 

  Compile your code with the `-gcflags=-m` look for occurrences of `moved to
  heap`. See if you can avoid that.
  ([source](https://hmarr.com/blog/go-allocation-hunting/),
  [HN](https://news.ycombinator.com/item?id=33594676))

## Learning Resources

- [Effective Go](https://go.dev/doc/effective_go)
  - Hasn't been updated since 2009, but the core concepts still remain. Does not
    account for things like `go mod` or any of the new language features.
- [Learn Go with Tests](https://quii.gitbook.io/learn-go-with-tests/)
- [Building a BitTorrent client from the ground up in
  Go](https://blog.jse.li/posts/torrent/), Jesse Li
  ([HN](https://news.ycombinator.com/item?id=33495328))

## Useful Frameworks

- [go-kit](https://github.com/go-kit/kit)
- [go-micro](https://github.com/go-micro/go-micro)

## Useful Libraries

- [cobra](https://github.com/spf13/cobra): CLI apps made easy
- [ent](https://github.com/ent/ent): Entity framework for Go
- [gin](https://github.com/gin-gonic/gin): HTTP library
- [migrate](https://github.com/golang-migrate/migrate): Database migrations
- [viper](https://github.com/spf13/viper): App configuration via files and flags
- By [Charm](https://charm.sh):
  - [Bubble Tea](https://github.com/charmbracelet/bubbletea)
  - [Lip Gloss](https://github.com/charmbracelet/lipgloss)

## Database Libraries

- DB2:
  - [ibmdb/go_ibm_db](https://github.com/ibmdb/go_ibm_db)
- MSSQL:
  - [denisenkom/go-mssqldb](https://github.com/denisenkom/go-mssqldb)
  - [microsoft/go-mssqldb](https://github.com/microsoft/go-mssqldb): Microsoft
    fork of the original project made by
    [denisenkom](https://github.com/denisenkom)

## Apps Written in Golang

- [Beehive](https://github.com/muesli/beehive)
