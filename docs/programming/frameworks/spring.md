---
tags:
  - Java
---
# Spring

## MSSQL Connectivity with NTLM on Non-Windows Hosts

You need the following pieces of information:
- Username
- Password
- Server host and port (usually 1433)
- Database name
- Server SPN

```properties
spring.datasource.url=jdbc:sqlserver://<host>:<port>;databaseName=<dbname>;authenticationScheme=NTLM;integratedSecurity=true;serverSpn=<spn>
spring.datasource.username=<username>
spring.datasource.password=<password>
```

- You may also need to append `integratedSecurity=true` to
  `spring.datasource.url` if you get an error like `unable to find valid
  certification path to requested target` (or fix the certificate path
  properly).
- Unless you have a good reason to (you probably don't), append `encrypt=true`
  to the data source URL.


## Links
- [Spring Website](https://spring.io)
- [Using NTLM Authentication to connect to SQL
  Server](https://learn.microsoft.com/en-us/sql/connect/jdbc/using-ntlm-authentication-to-connect-to-sql-server?source=recommendations&view=sql-server-ver16),
  Microsoft

