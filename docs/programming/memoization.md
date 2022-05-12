# Memoization

Memoization is a technique for performance optimization. It is, essentially,
calculating a value once and then caching it within an object for the duration
of its use.

Memoization comes from the Latin word "memorandum", meaning "to be remembered".

(Sourced from [Jason Swett's
post](https://www.codewithjason.com/ruby-memoization/) on memoization)
```ruby
class Product

  def price
    expensive_calculation
  end

  def memoized_price
    @memoized_price || expensive_calculation
  end
  
  def expensive_calculation
    sleep 1
    500
  end
end
```
