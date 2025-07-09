# React Native

The native equivalent of React, letting you build native applications. Also
compiles down to web code. 

React Native seems similar to React in that it's just a rendering framework but
doesn't give you enough on its own to actually build a standalone app. React
requires something like Vite or Next.js, and React Native requires something
like Expo. Coming from [Angular](/programming/frameworks/angular), this always
felt really weird to me. Angular was very "batteries included"; React and React
Native are not.

## Safe Area View

As of 0.80, this is only available in iOS and not for Android nor web. They
don't crash on Android or web, but don't do anything except wrap with a `<div>`.

## Links

We can't really use `<a>` tags like we would in HTML or React. Instead we're
using [`<Text>`](https://reactnative.dev/docs/text) or
[`<Pressable>`](https://reactnative.dev/docs/pressable) components. For a basic
link, `<Text>` is probably fine but it has more limited styling options. 

Mobile and web render `<Pressable>` differently, so text inside of a pressable
will look bad on mobile without extra styling being added to it. The benefit
to `<Pressable>` is that styling can be more dynamic, reacting to being either
focused or pressed.

Always add `onPress`, `accessibilityRole="link"`, and `accessibilityLabel` props
to either component to be WCAG compliant.

Linking to a URL can be done with `onPress`:

```ts
import * as WebBrowser from 'expo-web-browser';

const onPress = async() => {
  if (Platform.OS === 'web') {
    window.open(url, '_blank', 'noopener,noreferrer');
  } else {
    await WebBrowser.openBrowserAsync(url);
  }
}
```

For testing these props:

- `accessibilityLabel` can be checked with `getByLabelText("text")`
- `accessibilityRole` can be checked with `getByRole("link")`
- `onPress` can be checked with `fireEvent.press(getByRole("link"))`

```jsx
const { getByRole, getByLabelText } = render(<ExternalLink url="https://wiki.brianturchyn.net">Testing</ExternalLink>)

getByRole("link")
getByLabelText("Testing")
fireEvent.press(getByRole("link"))
```

## Platform-Specific Testing

Jest lets you override the
[`Platform.OS`](https://reactnative.dev/docs/platform#os) property so that you
can test OS-specific logic.

```jsx
// link.tsx
const onPress = async() => {
  if (Platform.OS === 'web') {
    window.open(url, '_blank', 'noopener,noreferrer');
  } else {
    await WebBrowser.openBrowserAsync(url);
  }
}

// link-test.tsx
it("opens a URL on web", () => {
  jest.replaceProperty(Platform, 'OS', 'web');
  const { getByText } = render(<ExternalLink url="https://wiki.brianturchyn.net">Testing</ExternalLink>)
  const openSpy = jest.fn();
  const originalWindow = global.window;
  // @ts-ignore
  global.window = { open: openSpy };

  fireEvent.press(getByText("Testing"))

  expect(openSpy).toHaveBeenCalledWith("https://wiki.brianturchyn.net", "_blank", "noopener,noreferrer")

  global.window = originalWindow
})

it("opens a URL on android", () => {
  jest.replaceProperty(Platform, 'OS', 'android');
  const { getByText } = render(<ExternalLink url="https://wiki.brianturchyn.net">Testing</ExternalLink>)

  fireEvent.press(getByText("Testing"))

  await waitFor(() => {
    expect(WebBrowser.openBrowserAsync).toHaveBeenCalledWith("https://www.powerpay.ca")
  })
})
```
