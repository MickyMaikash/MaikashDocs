# Python `if-else` Conditional Statement

## Overview

The `if-else` statement lets your program choose between two paths based on a condition.

- `if` checks a condition.
- `else` runs when the condition is false.

## Syntax

```python
if condition:
    # code when condition is true
else:
    # code when condition is false
```

## Example

```python
x = 10
if x > 5:
    print("x is greater than 5")
else:
    print("x is not greater than 5")
```

Output:

```
x is greater than 5
```

## Notes

- The condition should evaluate to `True` or `False`.
- Indentation is required in Python.
- The `else` block is optional; you can use an `if` alone.

## Example with user input

```python
number = int(input("Enter a number: "))
if number % 2 == 0:
    print("Even number")
else:
    print("Odd number")
```

This document is a simple reference for learning how to use `if-else` in Python.
