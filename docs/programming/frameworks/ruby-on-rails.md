# Ruby on Rails

Random notes:
- `attr_accessor` creates a getter and setter
- When using the `mysql2` gem, for database connectivity, setting the `host` to
  `localhost` in `config/database.yml` will make Rails attempt to connect to
  MySQL or MariaDB over a socket rather than a TCP connection. Use a loopback IP
  instead.
