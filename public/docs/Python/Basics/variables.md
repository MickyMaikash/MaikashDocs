# Variables in Python

Variables are used to store data values in a program.

A variable is like a container that holds information.

## Creating Variables

Python does not require declaring variable types.

Example:

```python
name = "Python"
age = 25

print(name)
print(age)
```

Output:

```
Python
25
```

## Variable Naming Rules

Variable names must follow these rules:

- Must start with a letter or underscore.
- Cannot start with a number.
- Can contain letters, numbers, and underscores.
- Cannot contain spaces.
- Python variables are case-sensitive.

Valid examples:

```python
name = "Alex"
_age = 20
student1 = "John"
```

Invalid examples:

```python
1name = "Alex"
student name = "John"
```

## Multiple Variable Assignment

Python allows assigning multiple values at once.

Example:

```python
x, y, z = 10, 20, 30

print(x)
print(y)
print(z)
```

## Assigning Same Value

Example:

```python
a = b = c = 100

print(a)
```

Output:

```
100
```

## Changing Variable Value

Variables can be updated anytime.

Example:

```python
age = 20

age = 21

print(age)
```

Output:

```
21
```

## Variable Data Types

Variables can store different types of data.

Example:

```python
name = "Alex"
age = 20
height = 5.8
```

## Checking Variable Type

Use the `type()` function.

Example:

```python
x = 10

print(type(x))
```

Output:

```
<class 'int'>
```

## Summary

Variables are essential in programming because they allow us to store, modify, and reuse data.