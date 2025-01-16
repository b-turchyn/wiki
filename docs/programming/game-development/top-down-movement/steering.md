# Seek Steering Behaviour

_See also: [Steering Behaviour](../steering-behaviour.md)_

```gdscript
## This implements a basic seek steering function
## The original source material is from here:
##  https://www.gdquest.com/tutorial/godot/2d/top-down-movement/#smoother-movement-with-steering-behaviors
extends CharacterBody2D

## The maximum speed allowed, in pixels per second
@export var max_speed: float = 200.0
## This decides how much of the difference in current and target velocity we should be applying
## to the current velocity. A higher acceleration number means that we will apply a larger value.
## Valid values are between 0.0 and 1.0.[br]
## A value of [code]0.0[/code] means that you won't accelerate at all.
## A value of [code]1.0[/code] means that you'll accelerate instantaneously.
@export var acceleration_coefficient: float = .1


func _physics_process(delta: float) -> void:
	var direction: Vector2 = _direction()
	var target_velocity: Vector2 = direction * max_speed

	# (target_velocity - velocity) gives us the difference between the top velocity and the
	# current velocity. The bigger the difference between these, the faster we accelerate or
	# decelerate. The closer we get to the target velocity, the slower we accelerate.
	# When our direction is zero (i.e. no acceleration), then our target velocity is also zero.
	velocity += (target_velocity - velocity) * acceleration_coefficient
	_adjust_velocity(direction)
	velocity = velocity.limit_length(max_speed)

	print("Speed: %f" % velocity.length())
	move_and_slide()


func _direction() -> Vector2:
	return Input.get_vector("left", "right", "up", "down")


func _adjust_velocity(direction: Vector2) -> void:
	# If we're accelerating, add 0.1 to the velocity just so that we eventually hit the max speed.
	# Without this, we'll get closer and closer to max speed but never actually hit it.
	if direction != Vector2.ZERO:
		velocity += velocity.normalized() * 0.1
	# If we're decelerating and we're not yet stationary, then subtract 0.1 from the current
	# velocity, or at least get us to Vector2.ZERO
	elif velocity != Vector2.ZERO:
		velocity = velocity.normalized() * max(0, velocity.length() - 0.1)
```
