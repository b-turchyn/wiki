---
description:
  A basic implementation of 8-way, top-down movement, explaining how it works
  and why.
tags:
  - 2D
  - Godot
  - Physics
  - Movement
---

# Basic Top-Down Movement

[Godot's documentation](https://docs.godotengine.org/en/stable/tutorials/2d/2d_movement.html#way-movement)
already has a good example of how to do this. Not much to refine here.

This assumes that there are four inputs already defined as "left", "right",
"up", and "down". It will work with both keyboard and controller inputs.

The result of this will be a character that doesn't have any "weight". That is,
they move exactly as much as the input specifies. When no input is provided, the
character instantly stops. This would be fine for lofi, 8- and 16-bit games, but
not suitable for anything with mass. For that, you'd want some sort of
acceleration, such as [a basic linear acceleration](./linear.md).

## The Code

```gdscript
extends CharacterBody2D

## The maximum speed allowed, in pixels per second
@export var max_speed: float = 200.0

func _physics_process(_delta: float) -> void:
	velocity = _direction() * max_speed
	move_and_slide()

func _direction() -> Vector2:
	return Input.get_vector("left", "right", "up", "down")
```

## Implementation Notes

- `_physics_process(float)` is used over `_process(float)` since this involves
  moving the character, and physics operations should be applied within the
  physics thread.
- I moved `Input.get_vector()`'s usage into a helper function because I can
  never remember which direction is which, but it doesn't save anything here.
- `move_and_slide()` takes into account delta time, and so your character will
  move at a consistent rate (even if your physics frames don't)
- This character will always move at top speed when using a keyboard for input.
  Using a controller, it's possible to move at less than maximum speed by not
  moving the joystick all the way to one direction. This could be addressed by
  normalizing the output of `Input.get_vector()`.
