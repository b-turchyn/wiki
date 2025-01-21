---
tags:
  - "Top-Down Movement"
  - ResearchNeeded
---

# Asteroids-Style Movement

Asteroids-style movement is also known as "rotation + movement". Left and right
controls the character's rotation, and up and down control acceleration in the
direction being held.

## Basic Implementation

This is based on
[the example from the Godot documentation](https://docs.godotengine.org/en/stable/tutorials/2d/2d_movement.html#rotation-movement)

```gdscript
extends CharacterBody2D

## Rotation speed in radians per second
@export var rotation_speed: float = PI / 1.5
## Linear acceleration in pixels per second squared.
@export var acceleration: float = 300.0

func _physics_process(delta: float) -> void:
	var rotation_direction: float = Input.get_axis("left", "right")
	var forward_direction: float = Input.get_axis("down", "up")

	rotation += rotation_direction * rotation_speed * delta
	velocity += transform.x * forward_direction * _adjusted_acceleration(delta)

func _adjusted_acceleration(delta: float) -> float:
	return acceleration * delta
```

**Why use `transform.x`?** This value always represents the right-hand side of
the node, regardless of rotation. If your character scene is set up so that the
character's "front" is facing to the right, this will work great.

For more details on this, read the following guides, both from the Godot
documentation:

- [Vector math](https://docs.godotengine.org/en/stable/tutorials/math/vector_math.html#doc-vector-math)
- [Matrices and Transforms](https://docs.godotengine.org/en/stable/tutorials/math/matrices_and_transforms.html)

This is all driven off of the
[Transform2D](https://docs.godotengine.org/en/stable/classes/class_transform2d.html)
class.

> a vector pointing in the body's "forward" direction
>
> -- Godot documentation

## Linear Acceleration

This feels much closer to the actual
[Asteroids game](<https://en.wikipedia.org/wiki/Asteroids_(video_game)>).
Velocity is maintained when there's no input.

The approach to linear velocity is similar to [the 8-way movement implementation](./linear.md).

```gdscript
extends CharacterBody2D

## Rotation speed in radians per second
@export var rotation_speed: float = PI / 1.5
## Linear acceleration in pixels per second squared.
@export var acceleration: float = 300.0

func _physics_process(delta: float) -> void:
	var rotation_direction: float = Input.get_axis("left", "right")
	var forward_direction: float = Input.get_axis("down", "up")

	rotation += rotation_direction * rotation_speed * delta
	velocity += transform.x * forward_direction * _adjusted_acceleration(delta)

func _adjusted_acceleration(delta: float) -> float:
	return acceleration * delta
```
