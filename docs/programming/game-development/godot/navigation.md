---
description: |
  Information on how to logically move nodes around a scene in Godot using both built-in and custom code.
---

# Navigation in Godot

References in the official docs:

- [Using NavigationAgents](https://docs.godotengine.org/en/stable/tutorials/navigation/navigation_using_navigationagents.html)
- [NavigationAgent2D](https://docs.godotengine.org/en/stable/classes/class_navigationagent2d.html)

Other places to learn from:

- [This tutorial series by GDQuest](https://www.gdquest.com/tutorial/godot/2d/intro-to-steering-behaviors/)
  covers steering behaviours. It's written for Godot 3, but the principles still
  seem solid (still working through it). You'll have to mentally translate from
  Godot 3 code to Godot 4 code in some areas.

## Navigation overview

### Navigation Server

- A server holds different navigation maps. Each map consists of multiple
  regions. Each region holds navigation mesh data.

Everything seems to interact with the navigation server. `NavigationRegion2D` is
just a helper to define a region.

### Navigation Obstacles

Obstacles _do not impact pathfinding_. They only impact _avoidance_. A
navigation agent will still attempt to pathfind directly through an obstacle. If
your agent doesn't have avoidance enabled, then obstacles do nothing.

### Defining Navigation Regions

A `NavigationPolygon` can be used to define an area that can be navigated to.
This is used internally within `NavigationRegion2D`.

Tilesets use `NavigationPolygon`s internally for navigation layers:

> The TileSet Editor creates and uses this resource internally when defining
> tile navigation areas.
> [[Source](https://docs.godotengine.org/en/stable/tutorials/navigation/navigation_introduction_2d.html#:~:text=The%20TileSet%20Editor%20creates%20and%20uses%20this%20resource%20internally%20when%20defining%20tile%20navigation%20areas.)]

So, based on this, if you want to put an area in a tilemap area that a
navigation agent should path around, then you need to have a tile that handles
this. You can't put a node on top that has a `NavigationObstacle` on it and
expect your navigation agent to find its way around it.

Navigation regions need to be _baked_ before they can be used.

When working with scene collections on your tile map, each scene in the tile set
needs to have its own `NavigationRegion2D` created with the navigable regions
defined. You don't paint them on in the Tile Set drawer like you do with an
atlas. Additionally, also set the Agent Radius to 0 so that the agent can pass
over into the new region, or just make the region big enough that it's a
non-issue ¯\\\_(ツ)\_/¯.

### Navigation Polygons

Geometry on a navigation polygon can be defined by drawing points on your 2D
scene.

How the polygon gets baked depends on its configuration:

- Navigation decides what should remove areas from the navigation polygon.
  - _Parsed Geometry Type_ defaults to _Meshes and Static Colliders_.
    - A mesh counts as one of `Polygon2D`, `MeshInstance2D`,
      `MultiMeshInstance2D`, or a `TileMap`. The tile map one means that any
      scenes used in a scene collection are treated as a mesh, regardless of
      what kind of scene it is!
    - A static collider counts as a `StaticBody2D` or a `TileMap` collider. (I
      think this refers to "Use Kinematic Bodies" being enabled, but I'm not
      sure).
  - _Parsed Collision Mask_ will only show up if we're considering static
    bodies. This controls which 2D layers will be considered. A node on Layer 3
    will be ignored if this collision mask disables Layer 3.
  - By default, _only nodes that are children of the navigation region will be
    considered for the navigation polygon_. This can be worked around by setting
    _Source Geometry Mode_ to either _Group With Children_ or _Group Explicit_.
