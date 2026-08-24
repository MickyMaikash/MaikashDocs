# Logical Operators in Python

Logical operators help you combine conditions and make decisions in your Python programs. They are commonly used in `if` statements, loops, and filters.

## 1. What are logical operators?

Python has three main logical operators:

- `and` - returns `True` if both conditions are `True`
- `or` - returns `True` if at least one condition is `True`
- `not` - reverses the result of a condition

## 2. `and` operator

Use `and` when you want all conditions to be true.

```python
age = 25
has_id = True

print(age >= 18 and has_id)   # True
print(age < 18 and has_id)    # False
```

### Example

```python
user_logged_in = True
is_admin = False

if user_logged_in and is_admin:
    print("Access granted")
else:
    print("Access denied")
```

## 3. `or` operator

Use `or` when any one of the conditions is enough.

```python
is_student = True
is_teacher = False

print(is_student or is_teacher)   # True
print(is_teacher or False)        # False
```

### Example

```python
day = "Sunday"

if day == "Saturday" or day == "Sunday":
    print("It is a weekend")
else:
    print("It is a weekday")
```

## 4. `not` operator

Use `not` to reverse a condition.

```python
is_raining = False

print(not is_raining)   # True
print(not True)         # False
```

### Example

```python
password_correct = False

if not password_correct:
    print("Please enter the correct password")
```

## 5. Combining multiple conditions

You can combine several logical expressions together.

```python
age = 22
has_permission = True
is_verified = True

if age >= 18 and has_permission and is_verified:
    print("You can continue")
else:
    print("Access not allowed")
```

## 6. Short-circuit behavior

Python evaluates logical expressions efficiently. It stops as soon as the result is known.

```python
def check():
    print("Checked")
    return True

print(False and check())   # check() is not called
print(True or check())    # check() is not called
```

## 7. Logical operators with non-boolean values

In Python, logical operators can work with values that are not strictly `True` or `False`.

```python
name = ""
print(name or "Guest")   # Guest
```

Here, empty strings are treated as falsey values.

## 8. Common truthy and falsy values

The following values are considered falsey in Python:

- `False`
- `0`
- `0.0`
- `""` (empty string)
- `[]` (empty list)
- `{}` (empty dictionary)
- `None`

Everything else is considered truthy.

## 9. Important note

Unlike some other languages, `and` and `or` in Python do not always return `True` or `False`. They may return one of the operands.

```python
print(5 and 3)   # 3
print(0 or 7)   # 7
```

## 10. Practice examples

```python
# Example 1
x = 10
print(x > 5 and x < 20)   # True

# Example 2
y = 0
print(y == 0 or y > 5)    # True

# Example 3
z = 8
print(not (z % 2 == 0))  # False
```

## Summary

Logical operators are powerful tools for controlling the flow of your program:

- `and` needs all conditions to be true
- `or` needs at least one condition to be true
- `not` reverses a condition

With practice, you will use them often in real Python programs.
