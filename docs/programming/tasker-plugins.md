---
description: "A comprehensive guide to developing integrations with Tasker"
image: ./tasker-plugins.og.webp
---

# Tasker Plugin Development

## How Actions Work

Tasker plugins require a number of classes to work, depending on what you're
trying to accomplish. At minimum, you will need a _helper_, _runner_, and a
_configuration activity_, but you may also need _input_ and _output_ classes.

### Runner

A _runner_ is responsible for performing the action defined by you, the
developer. When Tasker says "okay, perform the action", this is the code that is
executing.

All runners extend the
[TaskerPluginRunnerAction](https://github.com/joaomgcd/TaskerPluginSample/blob/master/taskerpluginlibrary/src/main/java/com/joaomgcd/taskerpluginlibrary/action/TaskerPluginRunnerAction.kt)
class, which Tasker invokes with an Intent.

### Helpers

### Input

### Output

### Config Activities

## Configuring Your Project

Your app requires the
[com.joaomgcd:taskerpluginlibrary](https://mvnrepository.com/artifact/com.joaomgcd/taskerpluginlibrary)
library in order to be a Tasker plugin. You will also need to grant your app the
`FOREGROUND_SERVICE` permission.

1. In your `/app/build.gradle.kts` (or `/app/build.gradle`) file, add the
   following dependency under the `dependencies` section:

```kotlin
dependencies {
  val taskerLibraryVersion = "0.4.9"
  implementation("com.joaomgcd:taskerpluginlibrary:$taskerLibraryVersion")
}
```

As of writing, the latest version is 0.4.9, but grab the latest version as shown
on Maven Central.

2. In your `/app/src/AndroidManifest.xml`, add the Foreground Service
   permission:

```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
  xmlns:tools="http://schemas.android.com/tools">

  <!-- Required for Tasker to launch actions -->
  <uses-permission android:name="android.permission.FOREGROUND_SERVICE" />
```

## Creating An Action

If you haven't already, consider reviewing [how actions work](#how-actions-work)
above.

As discussed above, an action has up to five parts:

1. _Input_
2. _Output_
3. An Activity for _configuring_ the action
4. A _helper_ that helps you interact with Tasker
5. The _runner_, which performs the action

We'll start with a plugin that creates no input and no output: Hello, World

### A No Input, No Output Action

Start with the runner class. Remember: the runner performs the action you wish
to automate.

#### The Runner

All action runners extend the
[TaskerPluginRunnerAction](https://github.com/joaomgcd/TaskerPluginSample/blob/master/taskerpluginlibrary/src/main/java/com/joaomgcd/taskerpluginlibrary/action/TaskerPluginRunnerAction.kt)
class, but the plugin also provides variants of this class for when you have no
output, no input, or neither. We'll use one of these.

```kotlin
// We first declare our new runner class. We have no output or input, so we
// use the helper class to keep our code cleaner.
class HelloWorldRunner : TaskerPluginRunnerActionNoOutputOrInput() {
  // Every runner must implement the `run` method. An input is always
  // passed in, but because we're not accepting any input, we can simply
  // ignore it.
  override fun run(context: Context, input: TaskerInput<Unit>): TaskerPluginResult<Unit> {
    // We're performing a Toast action here, but this could be any work you want
    Toast.makeText(context, "Hello, world!", LENGTH_LONG).show()

    // All actions need to return a value to Tasker, even if it's just a "this
    // worked" message. Without this, your plugin action will time out when
    // running and produce an error within Tasker (even if the action still
    // takes place!)
    return TaskerPluginResultSuccess()
  }
}
```

This code declares the runner, overrides the `run()` function, and implements
some basic "Hello, world".

Next, we need to build out our helper.

#### The Helper

All helpers extend the
[TaskerPluginConfigHelper](https://github.com/joaomgcd/TaskerPluginSample/blob/master/taskerpluginlibrary/src/main/java/com/joaomgcd/taskerpluginlibrary/config/TaskerPluginConfigHelper.kt)
class. Just like the runner, the library provides variants to simplify your
code.

The helper is the glue that ties your classes together, and is how your config
activity will communicate with Tasker. We use the helper to tell Tasker about
the inputs and outputs (if any), and how it should perform the action.

```kotlin
// This class declaration is a bit of a mess. We define our class as an
// extension of one of the variants, and then need to provide the type
// definition of our runner. The `config` input here is, again, required. This
//will be our configuration activity, which we'll create after this.
class HelloWorldHelper(config: TaskerPluginConfigNoInput) : TaskerPluginConfigHelperNoOutputOrInput<HelloWorldRunner>(config) {
  // A helper class has `runnerClass`, `inputClass`, and `outputClass`
  // constants defined, which reference each of those classes. Because we used
  // a helper variant, the `inputClass` and `outputClass` variables have been
  // set for us because they're not relevant, but we could extend a different
  // class and set them here when we're ready to accept input or provide output.
  override val runnerClass = HelloWorldRunner::class.java
}
```

Now that we've created our helper which associates everything together, we can
create our configuration activity.

#### The Config Activity

Even when your plugin does not have any output or input, a configuration
activity is required for Tasker. This logic is internal to Tasker itself I
believe so I'm not completely certain about this, but it seems that this
activity is invoked so that the Tasker helper can then provide the required
information back to Tasker.

This requires two steps. First we create the activity, then we define it in our
`AndroidManifest.xml`

All activities must implement either the
[TaskerPluginConfig](https://github.com/joaomgcd/TaskerPluginSample/blob/master/taskerpluginlibrary/src/main/java/com/joaomgcd/taskerpluginlibrary/config/TaskerPluginConfig.kt)
interface or its no-input variant, the latter of which we'll be using here.

```kotlin
class HelloWorldConfigActivity : AppCompatActivity(), TaskerPluginConfigNoInput {
  // TaskerPluginConfig requires its own reference to a context, so we simply
  // point it to the current application context
  override val context: Context get() = applicationContext
  // And here's where we associate the helper to this activity. We'll invoke a
  // method below which will send all of the info back to Tasker
  private val taskerHelper by lazy { HelloWorldHelper(this) }

  // Because we aren't taking in any input or displaying anything on the screen,
  // we don't need to inflate a layout or call Jetpack Compose's `setContent`;
  // we simply say "hey, Tasker, here's the details of this action"
  override fun onCreate(savedInstanceState: Bundle?) {
    // Required for all overrides
    super.onCreate(savedInstanceState)
    // Send the required info back to Tasker
    taskerHelper.finishForTasker()
  }
}
```

Finally, we now declare the intent within our Android manifest. Within
`/src/main/res/AndroidManifest.xml`, add a new activity under
`manifest > application`.

Update `android:name` to the relative class name of your _config activity_. The
example below assumes your activity is under the `.action` package.

```xml
<activity
    android:name=".action.HelloWorldConfigActivity"
    android:exported="true"
    android:icon="@mipmap/ic_launcher"
    android:label="Time Entry - Delete">
    <intent-filter>
        <action android:name="com.twofortyfouram.locale.intent.action.EDIT_SETTING" />
    </intent-filter>
</activity>

```

The _intent filter_ is required for Tasker to be able to detect your activity.

That's it! Hello World should now show up in Tasker and be able to be triggered.

## Samples and Library Source

The source code to the plugin library and a bunch of sample actions, events, and
conditions are all within the same
[GitHub repository](https://github.com/joaomgcd/TaskerPluginSample). `/app/`
contains the samples, and `/taskerpluginlibrary/` contains the library.

## Official Docs

- [Tasker's plugin library](https://tasker.joaoapps.com/pluginslibrary.html)
  page is buried under another page and isn't easy to find. The basics are
  covered here.
- [Tasker's official developer information](https://tasker.joaoapps.com/developers.html)
  might be useful to some, however it's generally recommended to just build
  plugins.
- This is, from what I can tell, deprecated and there's no reason to reference
  it. It recommends downloading a Java file at one point, which is no longer
  required with the Tasker plugin library:
  https://tasker.joaoapps.com/plugins.html
