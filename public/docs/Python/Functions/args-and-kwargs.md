# Args and Kwargs in Python

## Overview

`*args` and `**kwargs` are special syntax in Python that allow functions to accept a variable number of arguments. They are commonly used when you don't know in advance how many arguments a function will receive.

- **`*args`**: Allows a function to accept any number of non-keyword (positional) arguments
- **`**kwargs`**: Allows a function to accept any number of keyword arguments

## Why Use Args and Kwargs?

### Benefits:
1. **Flexibility**: Functions can accept varying numbers of arguments
2. **Code Reusability**: Write generic functions that work with different argument counts
3. **Cleaner Code**: Avoid defining multiple functions with similar logic
4. **API Design**: Create more flexible and scalable function interfaces

## Understanding *args

### What is *args?

`*args` allows a function to accept any number of positional arguments. The arguments are passed as a **tuple** inside the function.

### Syntax:
```python
def function_name(*args):
    # args is a tuple containing all positional arguments
    pass
```

### Example:
```python
def sum_numbers(*args):
    total = 0
    for num in args:
        total += num
    return total

print(sum_numbers(1, 2, 3))           # Output: 6
print(sum_numbers(1, 2, 3, 4, 5))    # Output: 15
print(sum_numbers(10))                # Output: 10
```

### Unpacking with *args:
```python
def print_args(*args):
    for i, arg in enumerate(args):
        print(f"Argument {i}: {arg}")

print_args("Hello", "World", 42)
# Output:
# Argument 0: Hello
# Argument 1: World
# Argument 2: 42
```

## Understanding **kwargs

### What is **kwargs?

`**kwargs` allows a function to accept any number of keyword arguments. The arguments are passed as a **dictionary** inside the function.

### Syntax:
```python
def function_name(**kwargs):
    # kwargs is a dictionary containing all keyword arguments
    pass
```

### Example:
```python
def print_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

print_info(name="Alice", age=25, city="New York")
# Output:
# name: Alice
# age: 25
# city: New York
```

### Dictionary Access:
```python
def create_user(**kwargs):
    return {
        "username": kwargs.get("username", "guest"),
        "role": kwargs.get("role", "user"),
        "email": kwargs.get("email", "not provided")
    }

user = create_user(username="john_doe", role="admin")
print(user)
# Output: {'username': 'john_doe', 'role': 'admin', 'email': 'not provided'}
```

## Combining *args and **kwargs

You can use both `*args` and `**kwargs` in the same function. The order matters:

### Syntax:
```python
def function_name(regular_arg, *args, **kwargs):
    pass
```

### Example:
```python
def make_pizza(size, *toppings, **details):
    print(f"Size: {size}")
    print(f"Toppings: {toppings}")
    print(f"Details: {details}")

make_pizza("large", "pepperoni", "mushrooms", "onions", 
           delivery=True, tip=5)
# Output:
# Size: large
# Toppings: ('pepperoni', 'mushrooms', 'onions')
# Details: {'delivery': True, 'tip': 5}
```

## Order of Parameters

When combining regular parameters, `*args`, and `**kwargs`, follow this order:

```python
def function(regular_args, *args, **kwargs):
    pass
```

### Example:
```python
def process_data(name, age, *hobbies, **metadata):
    print(f"Name: {name}")
    print(f"Age: {age}")
    print(f"Hobbies: {hobbies}")
    print(f"Metadata: {metadata}")

process_data("Bob", 30, "reading", "gaming", 
             country="USA", job="Developer")
# Output:
# Name: Bob
# Age: 30
# Hobbies: ('reading', 'gaming')
# Metadata: {'country': 'USA', 'job': 'Developer'}
```

## Unpacking with * and **

You can also use `*` and `**` when calling functions to unpack iterables and dictionaries.

### Unpacking Lists/Tuples with *:
```python
def add(a, b, c):
    return a + b + c

numbers = [1, 2, 3]
result = add(*numbers)  # Unpacks list as arguments
print(result)  # Output: 6
```

### Unpacking Dictionaries with **:
```python
def greet(name, age, city):
    print(f"{name} is {age} years old and lives in {city}")

info = {"name": "Charlie", "age": 28, "city": "Boston"}
greet(**info)  # Unpacks dictionary as keyword arguments
# Output: Charlie is 28 years old and lives in Boston
```

## Key Takeaways

| Concept | Type | Passed As | Example |
|---------|------|-----------|---------|
| `*args` | Variable positional arguments | Tuple | `def func(*args)` |
| `**kwargs` | Variable keyword arguments | Dictionary | `def func(**kwargs)` |
| Unpacking with `*` | Unpack iterable into arguments | - | `func(*list_items)` |
| Unpacking with `**` | Unpack dictionary into keyword arguments | - | `func(**dict_items)` |

## Common Use Cases

1. **Wrapper Functions**: Creating decorators and wrappers that pass arguments to inner functions
2. **API Functions**: Building flexible APIs that accept various parameters
3. **Data Processing**: Functions that process variable amounts of data
4. **Print Functions**: Creating custom print-like functions with flexible output

### Wrapper Example:
```python
def my_decorator(*args, **kwargs):
    print("Before function call")
    # Call some function with args and kwargs
    result = some_function(*args, **kwargs)
    print("After function call")
    return result
```

## Best Practices

- Use descriptive names for regular parameters when possible
- Use `*args` and `**kwargs` only when necessary
- Document your functions clearly to show what types of arguments they accept
- Consider using type hints with `*args` and `**kwargs` for clarity

```python
from typing import Any

def flexible_function(*args: Any, **kwargs: Any) -> None:
    """
    A flexible function that accepts any arguments.
    
    Args:
        *args: Variable length positional arguments
        **kwargs: Variable length keyword arguments
    """
    pass
```