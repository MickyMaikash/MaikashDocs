# Comments in Python

Comments are lines of code that Python ignores during execution.

They are used to explain code and make programs easier to understand.

## Why Use Comments?

Comments help developers:

- Explain complex logic
- Make code readable
- Debug programs
- Document code

## Single Line Comments

Single line comments start with the `#` symbol.

Example:

```python
# This is a comment

print("Hello Python")
```

Output:

```
Hello Python
```

## Comment After Code

Comments can also be written after a statement.

Example:

```python
x = 10  # storing value 10

print(x)
```

## Multi-Line Comments

Python does not have a special multi-line comment syntax.

However, triple quotes are commonly used.

Example:

```python
"""
This is a multi-line comment.
It can contain multiple lines.
"""

print("Python")
```

## Comments for Documentation

Comments can describe what a function or code block does.

Example:

```python
# Function to add two numbers

def add(a, b):
    return a + b
```

## Good Comment Practices

- Write meaningful comments.
- Avoid explaining obvious code.
- Keep comments updated.
- Use comments to explain why, not what.

Bad:

```python
x = 10 # Assign 10 to x
```

Good:

```python
# Maximum number of login attempts allowed
attempts = 3
```

## Summary

Comments improve code readability and help other developers understand your program.