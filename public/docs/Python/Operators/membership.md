# Python Membership Operators

Membership operators are used to test whether a value exists in a sequence, collection, or other iterable object.

## Operators

- `in` : Returns `True` when the value is present.
- `not in` : Returns `True` when the value is not present.

## Syntax

```python
value in iterable
value not in iterable
```

## Examples

### Lists

```python
fruits = ["apple", "banana", "cherry"]
print("apple" in fruits)      # True
print("grape" not in fruits) # True
```

### Strings

```python
text = "hello world"
print("hello" in text)       # True
print("bye" not in text)    # True
```

### Dictionaries

In dictionaries, membership checks keys, not values.

```python
scores = {"alice": 90, "bob": 82}
print("alice" in scores)     # True
print(90 in scores)          # False
```

## Use in conditionals

Membership operators are often used in `if` statements to make code clearer.

```python
username = "admin"
if username in allowed_users:
    print("Access granted")
else:
    print("Access denied")
```

## Notes

- The `in` operator works with lists, tuples, sets, dictionaries, strings, and other iterables.
- For dictionaries, it checks keys by default.
- `a not in b` is equivalent to `not (a in b)`.
