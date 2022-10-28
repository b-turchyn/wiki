---
tags:
  - Communication
  - SaaS
  - Software
---
# Discord

Interesting Discord bots:
- [CouchBot](https://couch.bot/) sends notifications when someone goes live on a
  livestreaming platform. This seems to be one of the few that can do YouTube
  live streams properly rather than just a new YouTube video (Mee6 has that
  problem).
- [Mee6](https://mee6.xyz) seems to be one of the better moderation bots.
  There's some features I wish it had, but overall it seems fine. Has a free and
  premium offering.
- [Scryfall](https://scryfall.com/bots) has bots for both Discord and Slack for
  retrieving information on [Magic: The Gathering](games/mtg/index.md) cards.
- [Statbot](https://statbot.net) collects stats on messages sent, active users,
  voice chat person-hours, etc. Has a free and premium offering.

Useful Discord tools:
- [HammerTime](https://hammertime.cyou/) generates Discord time tags so that the
  date and/or time you enter will be in the correct time zone for the reader.

## API Libraries

- [shardlab/Discordrb](https://github.com/shardlab/discordrb) for
  [Ruby](/programming/languages/ruby.md). Currently lacks support for Scheduled
  Events, but [a (stale?) PR is
  open](https://github.com/shardlab/discordrb/pull/152) to add them.
- [discordjs/discord.js](https://github.com/discordjs/discord.js) for
  [Node.js](/programming/languages/node.md). Seems to have a defect where
  scheduled event events don't come through until there's been a message sent in
  a guild.
  - [Official website](https://discord.js.org)
  - [discord.js guide](https://discordjs.guide/)
