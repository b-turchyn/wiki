---
tags:
  - Databases
---
# DB2

The JDBC 4 driver for DB2 contains a reference to pdq.jar. This casuses a
FileNotFoundException to be thrown when loading the driver in Apache Tomcat. The
solutions offered by IBM Support are to either:
1. Manually modify the `MANIFEST.MF` file in the JAR to remove the `Class-Path:
   pdq.jar` line
2. Update Tomcat's `context.xml` to include the following:
  ```xml
  <Context>
    <!-- ... -->
    <JarScanner scanClassPath="false" />
    <!-- ... -->
  </Context>
  ```
  Note that this is not a surgical change and will impact all class path scanning.

## Open Connections

A few options:
- From the command line:
  ```bash
  db2 list applications
  ```
- As a query:
  ```sql
  SELECT * FROM sysibmadm.applications;
  ```
  The schema changed from `sysibm` to `sysibmadm` in DB2 v8.

Useful links:
- [Stack Overflow issue](https://stackoverflow.com/q/46367851)
- [IBM Support
  page](https://www.ibm.com/support/pages/javaiofilenotfoundexception-thrown-apache-tomcat-application-server-ibm-data-server-driver-jdbc-and-sqlj)

## Gotchas

- DB2's [isolation
  level](https://www.ibm.com/docs/en/db2/11.5?topic=issues-isolation-levels) is
  set through the whole query. When doing a
  [`UNION`](https://www.ibm.com/docs/en/db2/11.5?topic=operators-union-operator)
  or subselect, you cannot specify `WITH UR` within the middle of the statement;
  it _must_ be put at the end.

  Wrong:
  ```sql 
  SELECT * FROM foo WITH UR
   UNION
  SELECT * FROM bar WITH UR
   ORDER BY id
  ```

  Correct:
  ```sql 
  SELECT * FROM foo
   UNION
  SELECT * FROM bar
   ORDER BY id
    WITH UR
  ```
