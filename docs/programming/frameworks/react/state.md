# State in React

[React's documentation](https://react.dev/learn/thinking-in-react) provides some
good examples of what is and isn't state:

> - Does it remain unchanged over time? If so, it isn’t state.
> - Is it passed in from a parent via props? If so, it isn’t state.
> - Can you compute it based on existing state or props in your component? If
>   so, it definitely isn’t state!
>
> What’s left is probably state.

State is different than props. Props are passed from the parent to the child to
customize how the component looks or functions. State acts as the component's
memory.
