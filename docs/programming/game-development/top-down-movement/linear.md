# Linear Acceleration and Deceleration

Instead of just having [basic movement](./basic.md), we can easily add some
acceleration. Linear acceleration can be easily added by adding a set number per
physics frame.

```gdscript
## This character will always accelerate or decelerate at a constant rate. Once
## it gets to the top or bottom speed, velocity remains constant.

extends CharacterBody2D

## The maximum speed allowed, in pixels per second
@export var max_speed: float = 200.0
## Acceleration as a form of [code]pixels/s²[/code]. [br]
## Everywhere we use this, we also multiply by [param delta]. To keep the code clean, we
## could choose to not do this, however since the goal of this example is to be a bit
## more accurate to physics, and acceleration is usually "distance per second squared",
## it felt better to leave it in.
@export var acceleration: float = 500.0

func _physics_process(delta: float) -> void:
	var direction: Vector2 = _direction()

	# Are we trying to move in a direction? If so, accelerate by the "adjusted acceleration" amount
	if direction != Vector2.ZERO:
		velocity += direction * _adjusted_acceleration(delta)
	else:
		# Reduce the length of our velocity vector by a linear amount each frame, based on our
		# "adjusted acceleration". If this number ever goes into the negative, we'd reverse direction
		# and we'd "flicker" back and forth every physics frame, so let's make sure we never
		# go into the negative.
		var new_length = max(0, velocity.length() - _adjusted_acceleration(delta))
		velocity = velocity.normalized() * new_length

	# Don't exceed the maximum speed
	velocity = velocity.limit_length(max_speed)

	move_and_slide()

func _adjusted_acceleration(delta: float) -> float:
	return acceleration * delta

func _direction() -> Vector2:
	return Input.get_vector("left", "right", "up", "down")
```

Here's a more Godot-focused approach (or at least, game engines with a
`Vector2.move_toward()` function):

`move_toward()` takes care of the previous implementation's range limits. We
never go below 0, and we never go above `max_speed`. Since `_direction()` will
return `Vector2.ZERO` when we're not inputting anything, this will also
decelerate us.

If we wanted separate acceleration and deceleration, we'd need an if-else block
to detect that and apply the correct value.

```gdscript
extends CharacterBody2D

## The maximum speed allowed, in pixels per second
@export var max_speed: float = 200.0


## Acceleration as a form of [code]pixels/s²[/code]. [br]
## Everywhere we use this, we also multiply by [param delta]. To keep the code clean, we
## could choose to not do this, however since the goal of this example is to be a bit
## more accurate to physics, and acceleration is usually "distance per second squared",
## it felt better to leave it in.
@export var acceleration: float = 500.0


func _physics_process(delta: float) -> void:
	velocity = velocity.move_toward(_direction() * max_speed, acceleration * delta)

	move_and_slide()


func _direction() -> Vector2:
	return Input.get_vector("left", "right", "up", "down")
```
