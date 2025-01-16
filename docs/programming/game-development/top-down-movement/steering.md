---
description:
  An implementation of 8-way, top-down movement using a basic steering function
  to govern acceleration and deceleration, explaining how it works and why.
tags:
  - 2D
  - Godot
  - Physics
  - Movement
---

# Top-Down Movement with a Seek Steering Function

_See also: [Steering Behaviour](../steering-behaviour.md)_

I sourced the original implementation of this from
[GDQuest's Top Down Movement tutorial](https://www.gdquest.com/tutorial/godot/2d/top-down-movement/#smoother-movement-with-steering-behaviors).
After a bit of extra research, this steering function seems to be a _Seek
steering function_.

Typically this would be used to seek out some far off spot, but there's nothing
stopping us from that far off spot being the maximum speed in the direction the
user specifies. That's how this works.

For deceleration, we simply seek to have our velocity vector be zero.

A problem with a basic implementation of this is that we get asymptotically
close to our max speed or being stationary; that is, we will get really close to
our max speed (or being completely stationary) but never hit that actual number.
For acceleration that _could_ be a problem, but for deceleration that's almost
guaranteed to be one. To combat this I added a small, arbitrary amount to the
velocity each time (using the `_adjust_velocity()` function) to nudge the
velocity in the right direction.

```gdscript
extends CharacterBody2D

## The maximum speed allowed, in pixels per second
@export var max_speed: float = 200.0
## This decides how much of the difference in current and target velocity we
## should be applying to the current velocity. A higher acceleration number
## means that we will apply a larger value. Valid values are between 0.0 and
## 1.0.[br]
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
