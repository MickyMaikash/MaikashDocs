# Data Types in Python

Data types define the type of data that a variable stores.

Python has several built-in data types that are used to store different kinds of values.

## Checking Data Type

The `type()` function is used to check the type of a value.

Example:

```python
x = 10

print(type(x))
```

Output:

```
<class 'int'>
```

## Built-in Data Types in Python

Python has the following commonly used data types:

| Data Type | Description | Example |
| --- | --- | --- |
| int | Integer numbers | 10 |
| float | Decimal numbers | 10.5 |
| str | Text values | "Python" |
| bool | True or False values | True |
| list | Collection of items | [1, 2, 3] |
| tuple | Ordered collection | (1, 2, 3) |
| set | Unordered collection | {1, 2, 3} |
| dict | Key-value pairs | {"name":"Alex"} |

---

# Numeric Data Types

Python supports three numeric types.

## Integer (int)

Integers are whole numbers without decimal points.

Example:

```python
age = 20

print(age)
```

Output:

```
20
```

## Float

Float values contain decimal numbers.

Example:

```python
price = 99.99

print(price)
```

Output:

```
99.99
```

## Complex

Complex numbers contain a real and imaginary part.

Example:

```python
x = 5 + 2j

print(x)
```

Output:

```
(5+2j)
```

---

# String Data Type

Strings store text values.

Strings are written inside quotes.

Example:

```python
name = "Python"

print(name)
```

Output:

```
Python
```

Strings can use:

```python
"Double quotes"
```

or

```python
'Single quotes'
```

---

# Boolean Data Type

Boolean stores either:

- True
- False

Example:

```python
is_active = True

print(is_active)
```

Output:

```
True
```

---

# List Data Type

Lists store multiple values in a single variable.

Example:

```python
colors = ["red", "green", "blue"]

print(colors)
```

Output:

```
['red', 'green', 'blue']
```

Lists are:

- Ordered
- Changeable
- Allow duplicate values

---

# Tuple Data Type

Tuples are similar to lists but cannot be changed after creation.

Example:

```python
numbers = (1, 2, 3)

print(numbers)
```

Output:

```
(1, 2, 3)
```

---

# Set Data Type

Sets store unique values.

Example:

```python
numbers = {1, 2, 3}

print(numbers)
```

Sets:

- Do not allow duplicates
- Are unordered

---

# Dictionary Data Type

Dictionaries store data in key-value pairs.

Example:

```python
student = {
    "name": "Alex",
    "age": 20
}

print(student)
```

Output:

```
{'name': 'Alex', 'age': 20}
```

---

# Summary

Python provides different data types to store different kinds of information. Understanding data types is important for writing effective Python programs.