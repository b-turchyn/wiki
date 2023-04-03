---
title: Pipeline Design Pattern
description: |
  Description of the Pipeline design pattern with an example written in Java
---

# Pipeline

The Pipeline is a design pattern used to process data through a series of steps.
The input of one step is the output from the previous step, and thus the initial
input is passed along through the steps before outputting the finished result.

An analogy used on the Java Design Patterns website is that this is akin to an
assembly line.

One benefit of this pattern is the ability to dynamically build out a pipeline
based on your needs. For example, if a particular condition is true then three
additional steps can be included.

## Example

```java
/**
 * A Step describes just that: a <em>step</em> in the pipeline. The Input and
 * Output types are defined by the I and O generics for compile-time validation.
 *
 * A pipeline's steps do not have to have the same input and output types.
 */
interface Step<I, O> {
  O step(I input);
}

/**
 * A Pipeline is the entrypoint to one or more steps chained together. A
 * pipeline's execution is FIFO-based (first in, first out).
 */
class Pipeline<I, O> {
  private final Step<I, O> currentStep;

  public Pipeline(Step<I, O> currentStep) {
    this.currentStep = currentStep;
  }

  /**
   * Appends a {@link Step} to the end of the pipeline. This append action
   * creates a new instance of {@link Pipeline}; that is, an instance of
   * {@link Pipeline} is immutable.
   *
   * @returns a new instance of {@link Pipeline}
   */
  public <NewO> Step<I, NewO> add(Step<O, NewO> nextStep) {
    return new Pipeline<>(input -> nextStep.execute(currentStep.execute(input)));
  }

  /**
   * Execute the current pipeline with the inputted data. Runs through every
   * {@link Step}
   */
  public O execute(I input) {
    return currentStep.step(input);
  }
}

/**
 * Example implementation of a {@link Step}
 */
class LongToTimestampStep implements Step<Long, Timestamp> {
  public Timestamp step(Long input) {
    return new Timestamp(input);
  }
}

public class UsageExample {
  public static void main(String[] args) {
    // An example usage is below. Assume that we have defined these three steps
    // elsewhere.
    final Pipeline<Long, String> timestampPipeline =
        new Pipeline<>(new LongToTimestampStep())
        .add(new TimestampToFormattedDateStep());

    System.out.println(timestampPipeline.execute(1234567890L));
  }
}
```

## References

- [Pipeline](https://java-design-patterns.com/patterns/pipeline/), Java Design
  Patterns
- [The Pipeline Design Pattern](https://medium.com/@bonnotguillaume/software-architecture-the-pipeline-design-pattern-from-zero-to-hero-b5c43d8a4e60),
  Guillaume Bonnot
