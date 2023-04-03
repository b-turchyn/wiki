# Ruby on Rails

Random notes:

- `attr_accessor` creates a getter and setter
- When using the `mysql2` gem, for database connectivity, setting the `host` to
  `localhost` in `config/database.yml` will make Rails attempt to connect to
  MySQL or MariaDB over a socket rather than a TCP connection. Use a loopback IP
  instead.

## `Psych::BadAlias: Unknown alias` error

Scenario: when starting a Rails application up, a
`Psych::BadAlias: Unknown alias: <something>` error shows up.

This can be caused by a few things:

- Typos in your 'config/database.yml' file. Double check your aliases are
  specified correctly.

  ```yaml
  default: &default
    adapter: mysql2
    pool: 5
    timeout: 5000
    encoding: utf8

  development: <<: *defaults # THIS IS A TYPO
  ```

- If you are running Ruby `>= 2.7.0`, Rails `>= 5, < 7`, check `Gemfile.lock`
  for the `psych` gem. Psych 4.0 introduced a breaking change for aliases.
  Create an entry in `Gemfile` to keep Psych in 3.x.
  ```rb
  gem 'psych', '< 4'
  ```

## Useful Gems

### Search

- [pg_search](https://github.com/Casecommons/pg_search)
  - `pg_search` and `ransack` can play nicely together per
    [this GitHub comment](https://github.com/activerecord-hackery/ransack/issues/1138#issuecomment-1281195941).
  - See:
    [Using custom scopes with Ransack gem in Rails](https://profilehunt.net/blog/using-custom-scopes-with-ransack-in-rails)
- [ransack](https://github.com/activerecord-hackery/ransack)
