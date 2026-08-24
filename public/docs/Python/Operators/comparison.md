# Python Comparison Operators

Comparison operators are used to compare values. In Python, they return a boolean result: `True` or `False`.

## Common Comparison Operators

- `==`  : equal to
- `!=`  : not equal to
- `>`   : greater than
- `<`   : less than
- `>=`  : greater than or equal to
- `<=`  : less than or equal to
- `is`  : same object identity
- `is not` : not the same object identity
- `in`  : membership (element is in a sequence)
- `not in` : membership negation

## How to Use

Use comparison operators to check relationships between values. The result can be stored in a variable or used directly in control structures.

```python
x = 10
y = 20

print(x == y)   # False
print(x != y)   # True
print(x < y)    # True
print(x >= 10)  # True
```

## Identity vs Equality

- `==` checks whether the values are equal.
- `is` checks whether two references point to the same object.

```python
a = [1, 2, 3]
b = [1, 2, 3]
c = a

print(a == b)   # True (same contents)
print(a is b)   # False (different objects)
print(a is c)   # True (same object)
```

## Membership Operators

Use `in` and `not in` to test whether a value exists inside a sequence such as a list, tuple, string, or dictionary keys.

```python
numbers = [1, 2, 3, 4]
print(3 in numbers)      # True
print(5 not in numbers)  # True

text = "python"
print('y' in text)       # True
```

## Chained Comparisons

Python allows chaining comparisons for concise conditions.

```python
age = 25
print(18 <= age < 30)  # True
```

## Common Use Cases

Comparison operators are often used in:

- `if` statements
- loops
- functions returning boolean results
- data filtering and validation

```python
score = 85
if score >= 90:
    print("Excellent")
elif score >= 75:
    print("Good")
else:
    print("Keep practicing")
```

## Tips

- Use `==` and `!=` for numeric and value equality.
- Use `is` and `is not` for object identity, especially with `None`.
- Avoid using `is` to compare numbers or strings unless identity is intended.
- Use chaining to make comparisons more readable.
