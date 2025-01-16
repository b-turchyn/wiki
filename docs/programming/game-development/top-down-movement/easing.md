---
description:
  An implementation of 8-way, top-down movement using an easing function
  to govern acceleration and deceleration, explaining how it works and why.
tags:
  - 2D
  - Godot
  - Physics
  - Movement
---

# Top-Down Movement with Ease-Driven Acceleration

```gdscript
extends CharacterBody2D

@export var max_speed: float = 200.0
@export var easing: float = 3.0 # 3.0 # Moderate ease in
## How many seconds does it take to hit the top of the "ease curve"?
@export var acceleration_time: float = 3.0
## How fast can we accelerate when at peak acceleration?
@export var max_acceleration: float = 200.0

## A value between 0.0 and [code]acceleration_time[/code]. How far along the
## easing curve are you?
var _linear_acceleration_position: float = 0.0
var _linear_deceleration_position: float = 0.0

func _physics_process(delta: float) -> void:
	var direction: Vector2 = _direction()
	# Calculate our acceleration position and the easing value
	# If we're moving in a forward direction, apply the "forward mechanics"
	# If we're moving backwards, apply the "breaking mechanics"
	if direction != Vector2.ZERO and _is_moving_forward(direction):
		# Slowly accumulate acceleration in this counter. The higher the counter goes, the greater the acceleration
		_linear_acceleration_position = min(_linear_acceleration_position + delta, acceleration_time)
		_linear_deceleration_position = 0.0
		var acceleration = max_acceleration * ease(_linear_acceleration_position / acceleration_time, easing)
		
		velocity = velocity.move_toward(direction * max_speed, acceleration)
	else:
		_linear_acceleration_position = 0.0
		_linear_deceleration_position = min(_linear_deceleration_position + delta, acceleration_time)
		var deceleration = max_acceleration * ease(_linear_deceleration_position / acceleration_time, easing)
		
		velocity = velocity.move_toward(Vector2.ZERO, deceleration)
		
	move_and_slide()

func _is_moving_forward(direction: Vector2) -> bool:
	return direction.normalized().dot(velocity.normalized()) >= 0
	
func _direction() -> Vector2:
	return Input.get_vector("left", "right", "up", "down")
```
