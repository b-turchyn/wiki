# Javascript Modules

> A module is just a bit of code encapsulated in a file, and exported to another
> file.

CommonJS as ESmodules are the two main Javascript module systems. CommonJS was
the initial implementation which worked on [Node](programming/languages/node.md)
applications only. ESmodules were introduced with ES6 (2015).

## CommonJS (CJS)

CommonJS looks like the following:

```javascript
// add.js module
const add = function (a, b) {
  return a + b;
};
// Provides `add` as the single function to be returned
module.exports = add;

// index.js
const add = require("./add.js");

console.log(add(1, 2)); // 3
```

Multiple functions and more complex data can be returned by assigning an object
instead of a single function to `module.exports`:

```javascript
// math.js module; assume `add` and `subtract` are implemented functions
module.exports = {
  add: add,
  subtract: subtract,
};

// index.js
const math = require("./math.js");
math.add(1, 2);
math.subtract(3, 2);
```

CommonJS module files can have the `.cjs` extension to explicitly denote them as
a CommonJS module.

## ESmodules (ESM)

ESmodules, in their `package.json`, have an attribute of `"type": "module"`
added to them.

The syntax for ESmodules, while similar in structure to CommonJS, is different.
Taking the example from CommonJS, the code would look as follows:

```javascript
// add.js module
const add = function (a, b) {
  return a + b;
};
// Provides `add` as the single function to be returned
export { add };

// index.js
import { add } from "./add.js";

console.log(add(1, 2)); // 3
```

Multiple functions can be imported from the same module, assuming they were
exported by that module.

```javascript
import { add, subtract } from "./math.js";
```

Imports can be renamed for local use if there's a naming conflict.

```javascript
import { add as mathAdd } from "./math.js";

console.log(mathAdd(1, 2));
```

All exports can be imported and attached to an object.

```javascript
import * as math from "./math.js";

console.log(math.add(1, 2));
```

A _default export_ can be provided too, which can be imported without
destructuring.

```javascript
// math.js
export default add;

// index.js
import add from "./math.js";
```

An ESmodule can be used in a web browser if a `type` attribute is declared on
the `<script>` tag. Note that in order to do this, your HTML needs to be served
from a web server. If it is loaded from your filesystem (i.e. via the `file:///`
protocol), you will get a [CORS](programming/cors.md) error.

```html
<script src="./math.js" type="module"></script>
```

Aside: the simplest Node-based way of doing this is to init a project in the
directory with `npm init -y` and serving it with `npx serve`.

This approach to loading modules can definitely work, but the general consensus
is to use a bundler like Webpack to reduce the number of HTTP requests.

## Universal Module Definition (UMD)

UMD is an API for having Javascript modules run anywhere (server or client).
It's typically used in bundlers in the event that [ESmodules](#esmodules-esm)
are not available.

- [UMD](https://github.com/umdjs/umd/), GitHub

## Asynchronous Module Definition (AMD)

AMD is a frontend, asynchronous module definition.

- [AMD documentation](https://requirejs.org/docs/whyamd.html), via
  [RequireJS](https://requirejs.org/)
