# Game Loop

Game loops handle the physics and rendering of a game engine. In most game
engines, these are two different loops, with the physics being calculated at a
fixed rate and the rendering being done at a dynamic rate.
[Godot](./godot/index.md) does this.

If we don't have multiple game loops and are doing our physics and rendering in
the same loop, then there are a few options.

- A _fixed delta time_ approach is fine if the physics loop takes the same
  amount of time each time, but this isn't realistic. This doesn't work if
  there's VSYNC, running on a slow computer, or inconsistent physics processing
  time.
- _Variable delta time_ works around the variable refresh rate issue that a
  fixed delta time approach does. Due to floating point math and the inherent
  inaccuracies of it on computers, this results in physics that can vary
  slightly over time.
- A _semi-fixed timestep_ keeps track of how much time has passed and will
  calculate multiple physics frame per render, handling the scenario where
  physics frames start running behind. This can however result in the _spiral of
  death_.
  > What is the spiral of death? It’s what happens when your physics simulation
  > can’t keep up with the steps it’s asked to take. For example, if your
  > simulation is told: “OK, please simulate X seconds worth of physics” and if
  > it takes Y seconds of real time to do so where Y > X, then it doesn’t take
  > Einstein to realize that over time your simulation falls behind. It’s called
  > the spiral of death because being behind causes your update to simulate more
  > steps to catch up, which causes you to fall further behind, which causes you
  > to simulate more steps...
  >
  > -- Glenn Fiedler, _Fix Your Timestep!_
- An alternative is to advance the physics at a fixed rate when sufficient delta
  time has passed, but only in set increments. There will always be a
  "remainder" of time that will get passed to the next loop, but that's okay.
- One step further would be to interpolate between frames using that remainder
  of time. The example that Fiedler gives is when the display rate is 60Hz but
  the physics rate is 50Hz. Without interpolation, a rendered frame would
  occasionally have two physics frames.

## Sources

- [Fix Your Timestep!](https://www.gafferongames.com/post/fix_your_timestep/) by
  [Glenn Fiedler](https://gafferongames.com/)
