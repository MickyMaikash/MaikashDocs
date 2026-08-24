# Python Functions

## What is a function?

A function is a block of reusable code that performs a specific task. In Python, functions help organize code into smaller pieces, making it easier to read, test, and maintain.

## Why use functions?

- Reuse code without copying it.
- Make programs easier to understand.
- Break a large task into smaller steps.
- Avoid repeating the same logic.
- Improve code structure and readability.

## How to create a function in Python

Use the `def` keyword, followed by the function name, parentheses, and a colon. Inside the function, add an indented block of code.

```python
def greet():
    print("Hello, welcome to Python functions!")
```

This creates a function named `greet`.

## Calling a function

After defining a function, call it by writing its name with parentheses.

```python
greet()
```

Output:

```
Hello, welcome to Python functions!
```

## Function with parameters

Functions can accept input values, called parameters, to work with different data.

```python
def add_numbers(a, b):
    total = a + b
    return total

result = add_numbers(5, 3)
print(result)
```

Output:

```
8
```

## Function with return value

The `return` statement sends a result back to the code that called the function.

```python
def square(x):
    return x * x

value = square(4)
print(value)
```

Output:

```
16
```

## Summary

- A function is a named block of code.
- Create functions with `def`.
- Use parameters to pass data.
- Use `return` to get results.
- Functions make Python code easier to read and reuse.