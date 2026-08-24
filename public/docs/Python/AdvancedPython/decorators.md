# Python Decorators

Decorators are a way to modify or extend the behavior of a function or method without changing its actual code. A decorator is itself a function that takes another function as an argument, wraps it, and returns a new function.

## What decorators are used for

- Add logging around a function call
- Check permissions or authentication
- Measure execution time
- Cache results
- Validate input or output
- Apply the same behavior to many functions

## Why decorators are used

- Keep code clean by separating core logic from supporting behavior
- Avoid repeating the same code in many places
- Make behavior reusable and composable
- Make it easy to apply cross-cutting concerns like logging, access control, and timing

## Basic example

```python
def my_decorator(func):
    def wrapper(*args, **kwargs):
        print("Before calling function")
        result = func(*args, **kwargs)
        print("After calling function")
        return result
    return wrapper

@my_decorator
def say_hello(name):
    print(f"Hello, {name}")

say_hello("Alice")
```

In this example, `@my_decorator` wraps `say_hello`, adding behavior before and after the function runs.

## Summary

Decorators are used to enhance functions in a reusable way. They are especially useful when you want to add extra behavior to many functions without repeating code.