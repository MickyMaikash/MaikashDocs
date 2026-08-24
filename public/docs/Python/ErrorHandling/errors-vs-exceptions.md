# Error vs Exception in Python

## What is an Error?
- An error is a problem detected by the Python interpreter.
- Errors often occur before the program runs or when the interpreter cannot understand the code.
- Common examples:
  - `SyntaxError`
  - `IndentationError`
  - `TabError`

## What is an Exception?
- An exception is an event that occurs during program execution and interrupts the normal flow.
- Exceptions can often be handled using `try` / `except` blocks.
- Common examples:
  - `ValueError`
  - `ZeroDivisionError`
  - `FileNotFoundError`
  - `TypeError`

## Key Difference
- Errors usually refer to problems in the code itself or issues detected by the interpreter.
- Exceptions refer to runtime conditions that can be caught and managed.
- In Python, most runtime issues are implemented as exceptions, while some syntax and compilation problems are called errors.

## Basic Error Handling
```python
try:
    x = int(input("Enter a number: "))
    print(10 / x)
except ValueError:
    print("Please enter a valid integer.")
except ZeroDivisionError:
    print("Cannot divide by zero.")
finally:
    print("Done.")
```

## Summary
- Use `try` / `except` to handle exceptions.
- Use `raise` to create custom exceptions.
- Remember: errors are often fatal issues detected before or during parsing, while exceptions are runtime events you can catch.
