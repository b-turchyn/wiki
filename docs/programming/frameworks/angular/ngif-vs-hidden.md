---
tags:
  - Angular
  - "*ngIf"
  - Angular-Directives
description: "*ngIf should almost always be used over [hidden]. This is why."
---

# *ngIf vs [hidden]

## A Primer On Angular HTML Syntax

Take the following HTML snippet from an Angular template:

```html
<input *ngIf="showInput" [value]="inputValue" class="messages" />
```

This has three attributes on it. Let's explain each one:

| Attribute | Purpose                                                                                                                                                                                                             |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `*ngIf`   | This is the shorthand form of the `ngIf` Angular directive. This is equivalent to `[ngIf]`. Angular treats the value as code, executes it, and if `true`, puts this `div` into the DOM.                             |
| `[value]` | This signifies that the value of the value HTML attribute should be determined by running the code in the value. In this case, the value of the input is the result of the `inputValue` attribute on the Component. |
| `class`   | An HTML attribute. Because this has no leading asterisk and is not wrapped in square brackets, this is an HTML literal. Angular does not acknowledge this in any way.                                               |

Note the difference between _Angular directives_ and _HTML attributes_. Angular
directives are evaluated by the Angular framework. HTML attributes are treated
as literal values and are effectively ignored.

## What Does ngIf Do?

`ngIf`, as mentioned above, is an Angular directive. This is evaluated when
running change detection. When truthy, the HTML element the directive is
attached to is put into the DOM at the specified location. Otherwise, _the HTML
element is removed from the DOM_. In other words, _it doesn't exist_. We'll come
back to this later.

Put another way, when `ngIf` evaluates to `false`, this element would not be
queryable using Javascript. This -- for reasons we'll cover later -- is a good
thing!

## What Does The Hidden Attribute Do?

`hidden` is a valueless HTML attribute. When present on an HTML element, the
element is not visible on the screen, but _is still present in the DOM_. This is
functionally equivalent to using the `display: none` CSS attribute.

To use the same analogy from `ngIf`, if the element is hidden, this element
_would still be queryable using Javascript_.

## So, Which Should I Use?

`ngIf`. (Almost) always `ngIf`.

Keeping the DOM clean makes things more efficient. First, there are fewer DOM
traversals required when accessing elements. This has both an Angular
performance improvement as well as a browser rendering improvement. The browser
still looks at the hidden elements, even if it doesn't show them. This is how
Bootstrap's `sr-only` class ("screenreader only") works!

## But I Need To Use A Query Selector To Access The Element On The Screen

If you find yourself in this situation, _you've almost certainly done something
wrong_. What do I mean by that?

The point of using frontend frameworks such as Angular is that it provides a
layer of abstraction around the maintenance of your DOM. You don't worry about
the adding and removing of elements. Instead, you tell Angular _when_ something
should be displayed, and Angular does the adding and removing for you. (This is
the power of declarative programming, which we can do in Java too, but that's a
story for another time).

When you write `<div *ngIf="foo">`, what you're really saying is "Hey Angular,
this section should be present when foo is true. Take care of that for me,
please!", and Angular is happy to oblige. If, on the other hand, we're directly
accessing HTML elements by something like `document.querySelector()`, we're now
doing Angular's job.

This is the key point here: _if you're directly interacting with the DOM, you're
actively working against Angular_.

This also means that the use of global variables such as `document` and `window`
are also code smells in Angular. Angular provides wrappers around those, which
means they can be mocked during your unit tests. Handy!

## But I Have A Valid Edge Case, I Swear! (When Should I Use Hidden?)

There may be conditions where you may have a valid condition. This probably
means that you're interacting with something outside of the Angular application.
This might be a valid option, but please be very, `very` careful about what we
do in those cases. Consider instead thinking "Angular should have a way to do
this!"

## But What About Nested Conditions?

What happens if you have nested `ngIf` statements? That's bad, right? Nope, it
still works fine, and in fact is more efficient.

In this case, the outer `ngIf` is evaluated first. Because it's `false`, there's
no reason to evaluate the inner contents, and so it's skipped. It's objectively
faster by having less conditions to evaluate.

```html
<div *ngIf="false"><div *ngIf="false"></div></div>
```

I can prove it, too.
[Run this Stackblitz](https://stackblitz.com/edit/stackblitz-starters-pfjn4y?devToolsHeight=33&file=src%2Fmain.ts),
and you'll see a console message show up for the inner DIV evaluation only if
the outer DIV is visible.
