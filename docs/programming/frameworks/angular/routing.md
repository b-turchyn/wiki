---
title: Angular Routing
tags:
  - Angular
  - Framework
---

# Routing

The Angular router is the standardized way of navigating between pages within an
Angular application.

[ExtraOptions](https://angular.io/api/router/ExtraOptions) is used to provide
extra configuration to your router.

## Displaying 404 Not Found Error Pages

The recommended way of handling this is to have a wildcard route listed on your
routes that will handle all Page Not Found errors.

```typescript
const routes: Routes = [
  { path: "/", component: HomePageComponent },
  { path: "**", component: PageNotFoundComponent },
];
```

For other routing errors, the `errorHandler` attribute on `ExtraOptions` can be
used (see: [Handling Routing Errors](#Handling%20Routing%20Errors))

## Handling Routing Errors

When handling routing errors other than a 404 page (which should be handled as
described [above](#Displaying%20404%20Not%20Found%20Error%20Pages)), use
`errorHandler`. In the
[documentation](https://angular.io/api/router/ExtraOptions#errorHandler), this
is described as an instance of
[@angular/core ErrorHandler](https://angular.io/api/core/ErrorHandler), but this
should actually be an instance of
[@angular/router ErrorHandler](https://github.com/angular/angular/blob/ae18f00023417cb9480c04791747f97b6265f1f1/packages/router/src/router.ts#L226).
In short, this is a function of signature `(error: any): any`, _not_ an
ErrorHandler class object. This also means that you don't have access to
dependency injection, which makes handling errors here -- short of logging them
to a system like Sentry or Honeybadger -- challenging.

## References

- [Angular Routing](https://angular.io/guide/routing-overview)
- [@angular/router ExtraOptions (v10)](https://v10.angular.io/api/router/ExtraOptions)
