# Type Casting in Python

Type casting is the process of converting one data type into another.

Python allows developers to convert values using built-in functions.

## Why Use Type Casting?

Sometimes we need to change the type of data to perform operations.

Example:

```python
age = "20"

print(type(age))
```

Output:

```
<class 'str'>
```

Here, `age` is stored as a string.

---

# Types of Type Casting

Python supports two types:

1. Implicit Type Casting
2. Explicit Type Casting

---

# Implicit Type Casting

Python automatically converts one data type into another.

Example:

```python
x = 10
y = 5.5

result = x + y

print(result)
```

Output:

```
15.5
```

Python automatically converts integer into float.

---

# Explicit Type Casting

Explicit casting is manually converting data types.

Common functions:

- int()
- float()
- str()
- bool()

---

# Converting String to Integer

Example:

```python
age = "25"

age = int(age)

print(age)
```

Output:

```
25
```

---

# Converting Integer to Float

Example:

```python
number = 10

result = float(number)

print(result)
```

Output:

```
10.0
```

---

# Converting Number to String

Example:

```python
age = 20

text = str(age)

print(text)
```

Output:

```
20
```

---

# Converting Values to Boolean

Example:

```python
x = 10

print(bool(x))
```

Output:

```
True
```

Empty values become False.

Example:

```python
print(bool(""))
```

Output:

```
False
```

---

# Common Mistakes

Incorrect:

```python
age = "20"

print(age + 5)
```

This gives an error because string and integer cannot be added.

Correct:

```python
age = int("20")

print(age + 5)
```

Output:

```
25
```

---

# Summary

Type casting allows Python programmers to convert values between different data types when required.