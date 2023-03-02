# Spring Batch

## General Concepts

- In your code, you define a _Job_. That job gets created with a
  _JobBuilderFactory_.
- A _Job_ has one or more _Steps_. Each step is created with a
  _StepBuilderFactory_.
- A _Step_ could be either:
  - A _Tasklet_, which executes some arbitrary code
  - A series of chunked steps, each of which has an _ItemReader_,
    _ItemProcessor_, and _ItemWriter_.

## Tasklets versus Chunked

_[Baeldung Article On The Subject](https://www.baeldung.com/spring-batch-tasklet-chunk)_

A general rule for which to pick could be covered as:

- If you need to process a single item, use a _Tasklet_
- If you need to process multiple items iteratively, use a Chunked approach
