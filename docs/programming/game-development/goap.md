---
description: A system for building articifical intelligence systems in games
---

# Goal-Oriented Action Planning

Goal-Oriented Action Planning, or _GOAP_, is a system for building AIs in games.
An AI is given a list of _goals_ and a list of _actions_. The algorithm
determines what the AI's goal is and then a set of actions that will achieve the
desired goal.

GOAP can have this nice organic feel to it, but can be computationally
expensive. It's also complex to implement, relative to Behaviour Trees or a
State Machine. It does scale up to lots of goals and actions, however. State
Machines, for example, grow exponentially as it grows in complexity.

## Resources

- [Goal-Oriented Action Planning: Ten Years of AI Programming](https://www.youtube.com/watch?v=gm7K68663rA),
  YouTube
  - This is a high-level overview of how GOAP works from a 2015 GDC talk from
    Chris Conway, Peter Higley, and Eric Jacopin.

### Implementation Tutorials

- \[Godot]
  [Intro to Goal Oriented Action Planning](https://www.youtube.com/watch?v=LhnlNKWh7oc)
- \[Unity]
  [GOAP Implementation Tutorial Playlist](https://www.youtube.com/playlist?list=PLi-ukGVOag_1DCBZG1rRg_SpiyI6I5Qcr)
  - This was alright, but there was some inconsistencies in the videos. There
    was a lot of "do this", but I prefer "here's a problem, and here's the
    solution" tutorials.
