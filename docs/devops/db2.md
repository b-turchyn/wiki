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

Useful links:
- [Stack Overflow issue](https://stackoverflow.com/q/46367851)
- [IBM Support
  page](https://www.ibm.com/support/pages/javaiofilenotfoundexception-thrown-apache-tomcat-application-server-ibm-data-server-driver-jdbc-and-sqlj)
