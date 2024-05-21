---
description: |
  Some samples and things I've learned while using Sonic-Pi to create
  music with code
---

# Sonic-Pi

## Examples

### Piano with Reverb and Arpegios

```ruby
live_loop :ticker do
  cue :tick
  sleep 4
do

# Define the chords we want to play, in order, using the `ring` command
chords = (ring
  chord(:E3, :m7, num_octaves: 2),
  chord(:E3, :m, num_octaves: 2)
)

live_loop :piano do
  # Without something to sync off of, `play_pattern_timed` will cause
  # this loop to drift over time unless the inter-note delay is accounted for
  sync :tick
  use_synth :piano
  with_fx :reverb, mix: 0.7, room: 0.8, damp: 0.7 do
    # Iterate through a different chord each time it's played
    play_pattern_timed chords.tick, 0.02 + rand(0.05), amp: 0.5
  end
end
```

<audio controls>
  <source type="audio/mp3" src="../samples/piano.mp3"></source>
  <source type="audio/ogg" src="../samples/piano.ogg"></source>
</audio>
