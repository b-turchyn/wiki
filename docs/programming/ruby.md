---
tags:
  - Language
---
# Ruby

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
