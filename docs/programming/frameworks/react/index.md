# React

React seems to have three different key "groups" to consider:

1. [React](https://react.dev/), a "library for web and native user interfaces".
2. React DOM, which is a set of methods only supported for web applications
3. [React Native](https://reactnative.dev/), which is the native equivalent of
   React DOM

Anything on the UI in React is a [component](./components.md).

## Implementing a Design

React recommends[^1] taking the following 5-step process to implement a UI:

1. Break down the screen into a component hierarchy
2. Build a static version of the site
3. Figure out the minimum state required to represent the UI's state
4. Identify where state should live. In general, this would be the lowest common
   parent amongst all components that need access to the state.
5. Add inverse data flow. This essentially involves creating `onEvent` props
   that hook into the `set` methods from `useState`.

[^1]: [Thinking in React - React](https://react.dev/learn/thinking-in-react)

## References

- [Adding Interactivity - React](https://react.dev/learn/adding-interactivity)
