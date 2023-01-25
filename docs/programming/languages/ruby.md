---
tags:
  - Language
---
# Ruby

[Dev meeting logs](https://github.com/ruby/dev-meeting-log) are stored in
GitHub.

## Time Zones

_(Sourced from [Thoughtbot](https://thoughtbot.com/blog/its-about-time-zones))_

Do not use the following:
```ruby
* Time.now
* Date.today
* Date.today.to_time
* Time.parse("2015-07-04 17:05:37")
* Time.strptime(string, "%Y-%m-%dT%H:%M:%S%z")
```

Use the following instead:
```ruby
* Time.current
* 2.hours.ago
* Time.zone.today
* Date.current
* 1.day.from_now
* Time.zone.parse("2015-07-04 17:05:37")
* Time.strptime(string, "%Y-%m-%dT%H:%M:%S%z").in_time_zone
```

## Installing `pq` gem on Mac OS X

The Postgres gem requires the `postgresql` Homebrew package to be installed; the
command `pg_config` is requried to compile the `pg` gem.

```bash
# Install dependencies
brew install postgresql@14

# Run one of the following depending on how you are installing the gem
bundle # The preferred way
gem install pq
```
