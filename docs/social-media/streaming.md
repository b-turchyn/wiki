# Streaming

The best guide I've read for doing a coding stream is by
[Suz Hinton](https://twitter.com/noopkat).
([Archive.org snapshot](https://web.archive.org/web/20190225001622/https://medium.com/@suzhinton/my-twitch-live-coding-setup-b2516672fb21),
since the original post is no longer available). The screenshots of OBS are old,
but much of the fundamentals still apply. Suz's earlier article about
[lessons learned from streaming on Twitch](https://web.archive.org/web/20190226221418/https://medium.freecodecamp.org/lessons-from-my-first-year-of-live-coding-on-twitch-41a32e2f41c1)
is a good read for those who are looking at getting into streaming.

[Rob Muhlestein](https://linktr.ee/rwxrob) (rwxrob) has
[a nice page of lessons learned](https://rwxrob.github.io/bad-strimmer/) from
his experience streaming for both development and IRL content, and just
surviving streaming as a smaller content creator.

## Streaming Sites

- [Twitch](https://twitch.tv)
- [YouTube Studio](https://studio.youtube.com)
- I came across [Algora](https://tv.algora.io/) on Hacker News, which seems to
  be a streaming site heavily focused on development content

## Streaming Tools

- [Mix It Up Streaming Bot](https://mixitupapp.com/) - originated from the
  now-defunct Mixer streaming platform. Run locally, tie into the Twitch API
  directly.
- [OBS Studio](https://obsproject.com/) - The OG stream tool. Connects to all
  major streaming platforms. A must-use for any streamer.
- [NowPlaying](https://nowplaying.site/) - Browser source for streaming
  programs. Watches what you're currently playing in Spotify and shows a
  notification widget when the song changes.
  - [Stream-Free Music](music/stream-safe-music.md) has a list of artists and
    songs that are safe to play while streaming.
- [StreamElements](https://streamelements.com/) - I use this for a chat bot and
  for overlays.

### Stream Automation

- [Aitum](https://aitum.tv)
- [Lumia Stream](https://lumiastream.com/)
- [SAMMI](https://sammi.solutions/), formerly
  [LioranBoard 2](https://github.com/LioranBoard/LioranBoard-2-Official/releases)
- [Streamer.bot](https://streamer.bot/)

## Development Libraries

- [tmi.js](https://github.com/tmijs/tmi.js) - Javascript library for the Twitch
  Messaging Interface
  - Version 1.x of this will stop functioning on February 18, 2023 for slash
    commands
    [per the developer announcement](https://discuss.dev.twitch.tv/t/deprecation-of-chat-commands-through-irc/40486).

## OBS Plugins

Below are several plugins I use, including replacements for plugins that are in
StreamFX. This now becomes useful as now only StreamFX's stable releases are
available for download for free and the last stable release was for OBS 27.

- [Vertical](https://aitum.tv/#vertical) - Adds a vertical canvas to OBS
  along-side your regular horizontal one.
  - [GitHub](https://github.com/Aitum/obs-vertical-canvas/)
- [blur-filter](https://prgitchell/blur-filter) - Extracts the blur filter from
  StreamFX
- [obs-3d-effect](https://github.com/exeldro/obs-3d-effect) - Provides a 3D
  effect filter, replacing the StreamFX one
- [obs-source-clone](https://github.com/exeldro/obs-source-clone) - Provides the
  StreamFX equivalent of the Source Mirror
- [obs-shaderfilter](https://github.com/exeldro/obs-shaderfilter) - Provides
  shader support, replacing the StreamFX filter

## Stream Assets

- [PixelPro](https://pixelpro.io/)
- [Visuals by Impulse](https://visualsbyimpulse.com/)
  - They have a bunch of semi-custom stuff available for generation on their
    site with no Photoshop/After Effects required. Neat.
- [Nerd or Die](https://nerdordie.com/)
  - I've bought two packs from them, and their support team is fairly
    responsive. Their pre-made packs don't always work great with Mac OS out of
    the box since the text boxes they use are on the Windows version of OBS
    Studio only.
  - There are lots of coupon codes available online for discounts on their
    products.
