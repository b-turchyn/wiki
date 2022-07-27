---
tags:
  - Language
---
# Java

- [Baeldung](https://www.baeldung.com) continues to be one of the best online
  resources for Java and Spring developers. Their content is very well written.

## Jackson

- [Custom (De)serializers with
  Jackson](https://www.baeldung.com/jackson-serialize-dates), Baeldung
- [Ignoring unknown properties globally](https://stackoverflow.com/q/14343477),
  StackOverflow

## JPA

JPA is Java's built-in persistence mapper. It's all annotation-driven.

- [Java Persistence book](https://en.m.wikibooks.org/wiki/Java_Persistence)

## Mocking

Mockito is my preferred mocking library. It does support static mocking when
required, although static code is a code smell and a sign something should be
refactored.

_See: [Mocking Static Methods With
Mockito](https://www.baeldung.com/mockito-mock-static-methods), Baeldung_

Example:
```java
// The static mock is scoped within the try statement. Neat!
try (MockedStatic<MyClass> myClass = mockStatic(MyClass.class)) {
  myClass.when(MyClass::performOperation).thenReturn("foo");
  myClass.when(() -> MyClass.withArguments("foo")).thenReturn("bar");
}
```

### One-to-One Mappings



## Spring

- [Custom MVC
  Validations](https://www.baeldung.com/spring-mvc-custom-validator), Baeldung
- [Swagger 2 with Spring REST
  API](https://www.baeldung.com/swagger-2-documentation-for-spring-rest-api),
  Baeldung
