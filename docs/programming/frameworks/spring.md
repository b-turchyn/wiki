---
tags:
  - Java
---
# Spring

## Log Levels

```properties
# Default logging level
logging.level.root=INFO
# Specify logging level for a whole package
logging.level.<package>=DEBUG
# Specify logging level for a class
logging.level.<package>.<class>=WARN

###
# Log Groups
###
# Define a group
logging.group.foo=<package>, <package>, <package>.<class>
# Set logging level for the group
logging.level.foo=DEBUG
```


## MSSQL Connectivity with NTLM on Non-Windows Hosts

You need the following pieces of information:
- Username (in `user@domain` format)
- Password
- Server host and port (usually 1433)
- Database name
- [Server SPN](/devops/mssql.md#automatic-spn-registration)

```properties
spring.datasource.url=jdbc:sqlserver://<host>:<port>;databaseName=<dbname>;authenticationScheme=NTLM;integratedSecurity=true;serverSpn=<spn>
spring.datasource.username=<username>
spring.datasource.password=<password>
```

- You may also need to append `trustServerCertificate=true` to
  `spring.datasource.url` if you get an error like `unable to find valid
  certification path to requested target` (or fix the certificate path
  properly).
- Unless you have a good reason to (you probably don't), append `encrypt=true`
  to the data source URL.

## Validation

- [Validation in Spring
  Boot](https://www.geeksforgeeks.org/validation-in-spring-boot/), GeeksForGeeks


## Links
- [Spring Website](https://spring.io)
- [Using NTLM Authentication to connect to SQL
  Server](https://learn.microsoft.com/en-us/sql/connect/jdbc/using-ntlm-authentication-to-connect-to-sql-server?source=recommendations&view=sql-server-ver16),
  Microsoft
- [Setting the connection
  properties](https://learn.microsoft.com/en-us/sql/connect/jdbc/setting-the-connection-properties?view=sql-server-ver16),
  MSSQL
- [Logging in Spring Boot with
  SLF4J](https://stackabuse.com/guide-to-logging-in-spring-boot/)

