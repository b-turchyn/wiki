# Scaffold

The Scaffold is the basic layout structure used on a screen.

```kotlin
Scaffold(
  topBar = { /* */ },
  bottomBar = { /* */ },
  snackbarHost = { /* */ },
  floatingActionButton = { /* */ }
) {
  /* Content */
}
```

On its own, the Scaffold doesn't show anything, but provides a frame for other components to hang off of.

A screen should have its content wrapped in a Scaffold. Your top and bottom [App Bars](../app-bars/index.md) can be put in this structure. If you have a `FloatingActionButton` without a bottom app bar, you can put it into the Scaffold structure too.

All other components should be put within the body of the Scaffold.

```kotlin
Scaffold {
  // Content
  Column { /* */ }
}
```

## References

- [Jetpack Compose, Material 3 Documentation](https://developer.android.com/reference/kotlin/androidx/compose/material3/package-summary#scaffold)
- [Understanding Layout, Material 3](https://m3.material.io/foundations/layout/understanding-layout/overview)