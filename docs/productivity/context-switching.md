# Context Switching

While there seems to be some evidence<sup>where?</sup> that it is possible to
become skilled enough at two tasks to do both simultaneously and perform well,
the vast majority of research suggests that multitasking is less efficient than
focusing on one thing, and the act of context switching costs time. Less
efficient in this case means:

- Lower throughput -- less actual work gets done as the brain gets ready to work
  focus on a topic[^1]
- More mistakes -- because someone is focusing less on one single task, they are
  more likely to make mistakes on that task

## Research Statistics

- It seems generally agreed upon that it takes time to get back into a
  productive workflow after switching tasks

  - A joint report by Qatalog and Cornell University mentions an average of 9.5
    minutes[^2]
  - _Just In Agile_ states in their
    [Context Switching article](https://justinagile.com/context-switching/):

    > It takes the average person around 15 minutes of uninterrupted work to
    > reach total focus to perform a mentally challenging task

    This quote links a source, however this source does not provide any specific
    sources to back this up with, leaving it vague with "Studies have shown".

- Complex thought relies on using _System 2_ in your [brain](health/brain.md).
  - For a good primer, Veritasium's
    [The Science of Thinking](https://www.youtube.com/watch?v=UBVV8pch1dM) is a
    great video.

## Preventing Context Switching

- [Focus](productivity/focus.md)
- Prioritize what you need to get done. Urgent and important tasks first. The
  [Eisenhower Matrix](productivity/eisenhower-matrix.md) is a great, simple
  approach.
- Prevent distractions in the first place; turn off notifications, set yourself
  to "Do Not Disturb", book time in your calendar, close down programs you won't
  need, and put your phone outside of arm's reach
- Timebox your work. Use a technique such as
  [Pomodoro](productivity/pomodoro.md) to block off a unit of time (usually 25
  minutes) with a known break at the end.
- Set a [firm, specific, achievable goal](productivity/goals.md). For example,
  if you're working on a user story to build out a new form in an application,
  your goal could be to add the field, validation, and unit tests for that
  singular field.

In a workplace environment, meetings seem to have a significant, negative impact
on productivity, particularly if the meeting is not about your most important
task and if the meeting could have been an email.
[Tremendous](https://www.tremendous.com) has a blog post about their
[high-documentation, low meeting work culture](https://www.tremendous.com/blog/the-perks-of-a-high-documentation-low-meeting-work-culture/)
([HN comments](https://news.ycombinator.com/item?id=33707022)) that seems to
have a lot of promise.

## References

- [Human multitasking](https://en.wikipedia.org/wiki/Human_multitasking),
  Wikipedia
  ([permalink](https://en.wikipedia.org/w/index.php?title=Human_multitasking&oldid=1112363221))

[^1]:
    To draw on a computer-based analogy, this is the equivalent of having
    something in swap and moving into RAM or the L1/L2/L3 cache on a CPU. There
    is time spent doing that which could have been used on the actual work.
    Worth noting: within computer science, "swapping" and "context switching"
    are two different things.

[^2]:
    Potential conflict of interest here: Quatalog is a paid product specifically
    to make teams more productive. I need to dig into this research paper more.
