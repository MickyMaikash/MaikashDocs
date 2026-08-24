# Python Function Arguments

A function in Python can accept values called arguments. Arguments let you pass data into a function so it can use that data inside its body.

## Function Definition and Arguments

```python
def add(a, b):
    return a + b

result = add(2, 3)
print(result)  # 5
```

- `a` and `b` are parameters in the function definition.
- `2` and `3` are arguments when calling the function.

## Types of Arguments in Python

1. Positional arguments
2. Keyword arguments
3. Default arguments
4. Variable-length arguments (`*args` and `**kwargs`)
5. Keyword-only arguments
6. Positional-only arguments (Python 3.8+)

### 1. Positional Arguments

Arguments are assigned based on their position in the call.

```python
def greet(name, message):
    print(f"{message}, {name}!")

greet('Alice', 'Hello')
```

### 2. Keyword Arguments

Arguments are passed with parameter names.

```python
greet(name='Bob', message='Hi')
```

### 3. Default Arguments

Parameters can have default values used when no argument is provided.

```python
def power(base, exponent=2):
    return base ** exponent

print(power(3))      # 9
print(power(2, 3))   # 8
```

### 4. Variable-length Arguments

Use `*args` for extra positional arguments and `**kwargs` for extra keyword arguments.

```python
def summary(*args, **kwargs):
    print('args:', args)
    print('kwargs:', kwargs)

summary(1, 2, 3, name='Alice', age=30)
```

### 5. Keyword-only Arguments

Use `*` in the signature to require keyword arguments after it.

```python
def configure(*, host='localhost', port=8080):
    print(host, port)

configure(host='127.0.0.1', port=8000)
```

### 6. Positional-only Arguments

Use `/` in the signature (Python 3.8+) to require arguments by position.

```python
def concat(a, b, /, sep=' '):
    return f"{a}{sep}{b}"

print(concat('Hello', 'World'))
```

## Function Argument Rules

- Positional-only parameters come first, then regular parameters, then `*args`, then keyword-only parameters, then `**kwargs`.
- Arguments are evaluated before the function call.
- Mutable default arguments should be used carefully.

## Common patterns

- Use positional arguments for simple calls.
- Use keyword arguments for clarity.
- Use default values for optional parameters.
- Use `*args` and `**kwargs` when you want flexible argument lists.

## Example: Complete Function

```python
def build_user(username, email, is_admin=False, *tags, **metadata):
    user = {
        'username': username,
        'email': email,
        'is_admin': is_admin,
        'tags': tags,
        'metadata': metadata,
    }
    return user

profile = build_user('nagma', 'nagma@example.com', True, 'python', 'learning', location='USA')
print(profile)
```

## Summary

- Arguments provide input to functions.
- Python supports many argument styles.
- Choose the right type for readability and flexibility.
- Practice writing functions with different argument types to learn how they work.