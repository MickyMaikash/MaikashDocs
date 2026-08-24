# Python Function Return Values

## Overview
A return value is the result that a function sends back to the caller. In Python, functions use the `return` statement to send values back after execution.

## Basic Syntax

```python
def function_name():
    return value
```

## Single Return Value

```python
def add(a, b):
    return a + b

result = add(5, 3)
print(result)  # Output: 8
```

## Multiple Return Values

Functions can return multiple values as a tuple:

```python
def get_coordinates():
    return 10, 20

x, y = get_coordinates()
print(x, y)  # Output: 10 20
```

## No Return Value

If no `return` statement is used, the function returns `None`:

```python
def greet(name):
    print(f"Hello, {name}!")

result = greet("Alice")
print(result)  # Output: None
```

## Returning Different Types

```python
def get_user_info():
    return "John", 25, True

name, age, active = get_user_info()
```

## Early Return

```python
def check_age(age):
    if age < 18:
        return "You are a minor"
    return "You are an adult"

print(check_age(15))  # Output: You are a minor
```

## Returning Collections

```python
def get_numbers():
    return [1, 2, 3, 4, 5]

numbers = get_numbers()
print(numbers)  # Output: [1, 2, 3, 4, 5]
```

## Key Points

- Use `return` to exit a function and send a value back
- A function can return any data type (int, string, list, dict, etc.)
- Multiple values are returned as a tuple
- Without `return`, functions implicitly return `None`
- `return` immediately stops the function execution
