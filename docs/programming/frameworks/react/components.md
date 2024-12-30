# Components

The core building block of React-driven user interface is a _Component_.
Everything is a component at some level. Each component has logic and
appearance. The appearance is written in
[JSX](https://www.w3schools.com/react/react_jsx.asp), which stands for
_JavaScript XML_.

- React components always start with a _capital letter_.
- All tags in React components must close, XHTML-style. This includes `img` and
  `br` tags.
- A React component must always return one tag. A component that has multiple
  tags must be wrapped in _something_, even if it's just `<></>`
- The HTML `class` property is represented with `className` instead

The `<></>` syntax is short-form for `Fragment`. The longer form is required if
you ever need to pass props.

### Dynamic Data

Curly brackets are used to escape back into JavaScript.

```jsx
return <h1>{user.name}</h1>;
```

(See [Displaying Data](https://react.dev/learn#displaying-data) for more complex
examples)

We can conditionally render sections by escaping with curly brackets and using
ternary operators.

```jsx
// Show if true
<div>
  { loggedIn && (
    <p>Hi there, {user.name}</p>
  )}
</div>

// if-else
<div>
  { loggedIn ? (
    <p>Hi there, {user.name}</p>
  ) : (
    <p>You are not logged in</p>
  )}
</div>
```

### Lists

Lists should always have a `key` attribute, which is used to keep track of what
a particular child actually is.

```jsx
users.map((user) => <li key={user.id}>{user.name}</li>);
```

Keys must be unique amongst their siblings, and must not change.

Avoid using the array index for the key. If the list ever needs to be
rearranged, then the key will change.

_Further reading: [Rendering Lists](https://react.dev/learn/rendering-lists)_

### State

[`useState`](https://react.dev/reference/react/useState) can be used to track
state. The two returned values must be set using `const`.

```jsx
// value, and function used to set the value
const [user, setUser] = useState(initialValue);
```

State is local to the component. If you want to share state, pull the state up
higher in the component hierarchy.

### Events

```jsx
function MyComponent() {
  // Yes, this is a function inside a function. JavaScript is weird like that.
  function handleClick() {
    console.log("Got it");
  }

  return <button onClick={handleClick}>Click me</button>;
}
```

### Props

Properties (props) are declared in the function. Bonus points for typedef'ing
them.

```jsx
interface UserDetailsProps {
  name: string;
  age: number;
  status: "Single" | "It's complicated" | "In a relationship" | undefined;
}

function UserDetails({ name, age, status }: Readonly<UserDetailsProps>) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p className="text-sm">
        {age} years old &em; {status}
      </p>
    </div>
  );
}
```

Props are _always_ a single object passed into the component, but are commonly
accessed via
[destructuring](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Unpacking_fields_from_objects_passed_as_a_function_parameter).
This is optional but recommended; if there's a reason to, you could just work
directly with the props parameter.

```jsx
function UserDetails(props) {}
```

Defaults can be set when destructuring. The default value is used _only_ when
the value is `undefined`. Other values, including `null` or `0` will be accepted
as-is.

```jsx
function UserDetails({ age = 42 }) {}
```

Props can be passed to children using
[spread syntax](../../languages/javascript/spread.md), but is generally a sign
that you're doing something wrong.

Props are _immutable_. If a prop changes, then the component will need to be
rerendered by the parent component. `setState` can be used for internal
component memory, if needed.

### Children

The contents of a component can be accessed using the `children` prop. This is a
prop like any other value that you might pass in.
