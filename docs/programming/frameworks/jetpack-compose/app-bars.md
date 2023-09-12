---
description: How to implement the Material 3 App Bars using Jetpack Compose
image: ./app-bars.og.png
---

# App Bars

App bars sit either at the top or the bottom of your Android app and provide useful context or key actions on a given screen. But what kind of app bar should you use when?

## The Difference Between Top And Bottom App Bars

While they may sound the same, Top and Bottom App Bars serve very different purposes.

The top app bar serves three different purposes:
1. It's used to indicate _where your user is_ within your app. This is especially important if your app has many different screens to navigate through.
2. It provides the ability to navigate easily, either via a menu drawer or by going back a screen.
3. It provides easy access to a few key functions related to the screen, such as navigating to the current day in a calendar app.

The bottom app bar shares some of the same concepts but is generally used in different scenarios:
1. The bottom app bar focuses on _providing easy access to actions_. Searching or deleting the item displayed are both examples of this.
2. The bottom app bar doesn't explicitly provide navigation access. Pressing a button on the bottom app bar isn't going to open up a navigation drawer, and probably isn't going to take you to another area of your app. It could however perform an action that requires a navigation to a related screen, such as forwarding an email. If you're looking to have navigation, instead consider a Navigation Bar.

As of Material 3, the Floating Action Bar is also available in the Bottom App Bar, where in Material 2 it was external to it.

## Creating A Bottom App Bar

A Bottom App Bar is best positioned in a _Scaffold_:

```kotlin
Scaffold(
  bottomBar = {
    BottomAppBar(
      actions = {}
    )
  }
)
```

![Bottom App Bar Example](./example-app-bars-bottom-1.png)

The two variables you'll likely fill out are:
1. The `actions` variable (which has your standard buttons on the left) and
2. The `floatingActionBar` (which has a single big button on the right)

We'll visit how to set up these fields below.

## Creating A Top App Bar

A Top App Bar is best positioned in a _Scaffold_:

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

![Top App Bar Example](./example-app-bars-top-1.png)

The `title` variable is the only required variable. Other variables you'll likely fill out are:
1. The `actions` variable (which has your standard buttons on the right) and
2. The `navigationIcon` (which has navigation icon button on the left)

We'll visit how to set up these fields below.

### Top App Bar Variations

A Top App Bar can be created like we have above, but we can also use one of the three additional variations that are provided to us:
1. [Center-Aligned Top App Bar](https://developer.android.com/reference/kotlin/androidx/compose/material3/package-summary#centeralignedtopappbar)
2. [Medium Top App Bar](https://developer.android.com/reference/kotlin/androidx/compose/material3/package-summary#mediumtopappbar)
3. [Large Top App Bar](https://developer.android.com/reference/kotlin/androidx/compose/material3/package-summary#largetopappbar)

These can each be implemented exactly the same as the Top App Bar, just by swapping out the composable function you call:

```kotlin
CenterAlignedTopAppBar(title = { Text("One") })
MediumTopAppBar(title = { Text("One") })
LargeTopAppBar(title = { Text("One") })
```

## Actions

The `actions`, `navigationIcon`, and `floatingActionBar` variables all follow the same format. Typically you'll set these as `IconButton()` components:

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