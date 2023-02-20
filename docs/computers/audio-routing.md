# Audio Routing

Internal audio routing on computers seems to generally be a pain.

## Mac OS

The best option I've found for [Mac](computers/mac.md) is
[Loopback](https://rogueamoeba.com/loopback/). It's easy to use with a
drag-and-drop interface and seems to allow you to connect any source to any
destination, including virtual destinations. The only drawback is the price; as
of February 2023, it's priced at $104 USD, however this seems like a valuable
purchase if you need to be able to do this.

For Intel-based Macs, [Soundflower](https://github.com/mattingalls/Soundflower)
is an option. It was originally developed by Rogue Amoeba (the same company who
makes Loopback), but was open sourced.

[BlackHole Audio Loopback Driver](https://github.com/ExistentialAudio/BlackHole)
gives you a virtual audio cable to route to. This can be useful for some things,
however your app must be able to route to different outputs, and not all apps
support this. Spotify, for example, will only route to your default output.

Elgato's Wave Link software offers some of this functionality too, but requires
hardware.
