---
description: How to implement the Material 3 App Bars using Jetpack Compose
image: ./app-bars.og.png
tags:
  - Android
  - Kotlin
  - Jetpack Compose
  - Material Design
---

# App Bars

App bars sit either at the top or the bottom of your Android app and provide
useful context or key actions on a given screen. But what kind of app bar should
you use when?

## The Difference Between Top And Bottom App Bars

While they may sound the same, Top and Bottom App Bars serve different
purposes.

The top app bar serves three different purposes:

1. It's used to indicate _where your user is_ within your app. This is
   especially important if your app has many different screens to navigate
   through.
2. It provides the ability to navigate easily, either via a menu drawer or by
   going back a screen.
3. It provides easy access to a few key functions related to the screen, such as
   navigating to the current day in a calendar app.

The bottom app bar shares some of the same concepts but is generally used in
different scenarios:

1. The bottom app bar focuses on _providing easy access to actions_. Searching
   or deleting the item displayed are both examples of this.
2. The bottom app bar doesn't explicitly provide navigation access. Pressing a
   button on the bottom app bar isn't going to open up a navigation drawer, and
   probably isn't going to take you to another area of your app. It could
   however perform an action that requires a navigation to a related screen,
   such as forwarding an email. If you're looking to have navigation, instead
   consider a Navigation Bar.

As of Material 3, the Floating Action Bar is also available in the Bottom App
Bar, where in Material 2 it was external to it.

The bottom and top app bars do serve different purposes, but because of their
design it's absolutely possible to use both on the same screen should you have a
need to; the [Scaffold](../scaffold/index.md) supports this, and Material Design 3's guidelines
provide a specific use cases for it.

## Creating A Bottom App Bar

A Bottom App Bar is best positioned in a [Scaffold](../scaffold/index.md):

```kotlin
Scaffold(
  bottomBar = {
    BottomAppBar(
      actions = {}
    )
  }
)
```

![Bottom App Bar Example](./example-bottom-1.png)

The two variables you'll likely fill out are:

1. The `actions` variable (which has your standard buttons on the left) and
2. The `floatingActionBar` (which has a single big button on the right)

We'll visit how to set up these fields below.

## Creating A Top App Bar

A Top App Bar is best positioned in a [Scaffold](../scaffold/index.md):

```kotlin
Scaffold(
  topBar = {
    TopAppBar(
      title = { Text("Top App Bar Example") }
      navigationIcon = {
        IconButton(onClick = {}) {
          Icon(imageVector = Icons.Default.Menu, contentDescription = "Navigation Menu")
        }
      }
    )
  }
)
```

![Top App Bar Example](./example-top-1.png)

The `title` variable is the only required variable. Other variables you'll
likely fill out are:

1. The `actions` variable (which has your standard buttons on the right) and
2. The `navigationIcon` (which has navigation icon button on the left)

We'll visit how to set up these fields below.

### Top App Bar Variations

A Top App Bar can be created like we have above, but we can also use one of the
three additional variations that are provided to us:

1. [Center-Aligned Top App Bar](https://developer.android.com/reference/kotlin/androidx/compose/material3/package-summary#centeralignedtopappbar)
2. [Medium Top App Bar](https://developer.android.com/reference/kotlin/androidx/compose/material3/package-summary#mediumtopappbar)
3. [Large Top App Bar](https://developer.android.com/reference/kotlin/androidx/compose/material3/package-summary#largetopappbar)

These can each be implemented exactly the same as the Top App Bar, just by
swapping out the composable function you call:

```kotlin
CenterAlignedTopAppBar(title = { Text("One") })
MediumTopAppBar(title = { Text("One") })
LargeTopAppBar(title = { Text("One") })
```

## Actions

The `actions`, `navigationIcon`, and `floatingActionBar` variables all follow
the same format. Typically you'll set these as `IconButton()` components:

```kotlin
BottomAppBar(
  floatingActionButton = {
    // This `IconButton` structure works for actions and navigationIcon too!
    IconButton(click = { /* TODO */ }) {
      Icon(imageVector = Icons.Default.Menu)
    }
  }
)
```

## Customizing Colours

If you need to adjust a specific app bar, you can pass in customized colours via the `topAppBarColors()` and `bottomAppBarColors()` functions:

```kotlin
BottomAppBar(
  colors = bottomAppBarColors(
    containerColor = Color(0xfff4f1e4)
  )
)
```

This is not the approach you should typically take however. Implementing app bar colours directly on an app bar means you are adding colour overrides on _every_ app bar you have. This might be fine for a single screen app, but as your app grows this will become unwieldy and difficult to maintain if you need to make adjustments. 

Instead, consider changing the colours via `MaterialTheme`. The background of each app bar is a `Surface`, so we can change the surface container colour and have the app bar's background colour change too.

```kotlin
MaterialTheme(
  colorScheme = lightColorScheme(
    surface = Color(0xfff4f1e4)
  )
) {
  // The rest of my app
}
```

If you need the app bars to be different colours than the rest of your surfaces, at the very least have a helper function that provides everything in one place:

```kotlin
val myBottomAppBarColors get() = bottomAppBarColors(
  containerColor = Color(0xfff4f1e4)
)
BottomAppBar(
  colors = myBottomAppBarColors
) { }
```

Material Design offers a free theme builder that can help you customize your look with minimal effort and aligning to Material's 

## Further Resources

- [Bottom app bar &ndash; Material Design 3](https://m3.material.io/components/bottom-app-bar/overview)
- [Top app bar &ndash; Material Design 3](https://m3.material.io/components/top-app-bar/overview)
