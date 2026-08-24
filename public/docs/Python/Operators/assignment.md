# Python Assignment Operator

The assignment operator in Python is used to store values in variables.

## Basic Usage

- `=` assigns the value on the right to the variable on the left.

Example:

```python
x = 10
y = "Hello"
```

After these statements:
- `x` contains `10`
- `y` contains `"Hello"`

## Reassigning Values

Variables can be updated with new values:

```python
x = 5
x = x + 2  # x now becomes 7
```

## Compound Assignment Operators

Python supports shorthand assignment operators that combine an operation with assignment:

- `+=` adds and assigns: `x += 3` is the same as `x = x + 3`
- `-=` subtracts and assigns: `x -= 2` is the same as `x = x - 2`
- `*=` multiplies and assigns: `x *= 4` is the same as `x = x * 4`
- `/=` divides and assigns: `x /= 2` is the same as `x = x / 2`
- `//=` floor divides and assigns
- `%=` modulus and assigns
- `**=` exponent and assigns

Example:

```python
count = 10
count += 5   # count is now 15
count *= 2   # count is now 30
```

## Notes

- Assignment does not create a copy for mutable objects; it binds a name to an object.
- Multiple variables can be assigned in one line:

```python
a = b = 0
```

- Python also supports tuple unpacking for assignment:

```python
x, y = 1, 2
```

## Summary

The assignment operator is a fundamental part of Python. Use `=` to assign values and compound operators like `+=` to update values concisely.