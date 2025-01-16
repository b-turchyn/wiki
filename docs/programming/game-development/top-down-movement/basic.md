# Basic Top-Down Movement

[Godot's documentation](https://docs.godotengine.org/en/stable/tutorials/2d/2d_movement.html#way-movement)
already has a good example of how to do this. Not much to refine here.

This assumes that there are four inputs already defined as "left", "right",
"up", and "down".

```gdscript
class_name BasicMovement
extends CharacterBody2D

## The maximum speed allowed, in pixels per second
@export var max_speed: float = 200.0

func _physics_process(_delta: float) -> void:
	var direction: Vector2 = _direction()

	velocity = direction * max_speed
	move_and_slide()

func _direction() -> Vector2:
	return Input.get_vector("left", "right", "up", "down")
```
