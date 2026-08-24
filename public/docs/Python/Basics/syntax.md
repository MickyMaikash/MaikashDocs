# Python Syntax

Python syntax refers to the set of rules that define how Python code is written and executed.

Python is designed to be simple and readable, which makes it easier for beginners to understand programming concepts.

---

# Python Statement

A statement is an instruction that Python executes.

Example:

```python
print("Hello Python")
```

Output:

```
Hello Python
```

In Python, each line usually represents a separate statement.

Example:

```python
name = "Alex"
age = 20

print(name)
print(age)
```

---

# Python Indentation

Indentation means adding spaces at the beginning of a line.

Python uses indentation to define blocks of code instead of using curly braces `{}` like some other programming languages.

Example:

```python
if 10 > 5:
    print("10 is greater than 5")
```

Output:

```
10 is greater than 5
```

The spaces before `print()` are required.

Incorrect:

```python
if 10 > 5:
print("Hello")
```

This will cause an error.

---

# Python Case Sensitivity

Python is case-sensitive.

This means uppercase and lowercase letters are treated as different.

Example:

```python
name = "Alex"
Name = "John"

print(name)
print(Name)
```

Output:

```
Alex
John
```

`name` and `Name` are two different variables.

---

# Writing Comments

Comments are used to explain code.

Python ignores comments during execution.

Example:

```python
# This is a comment

print("Learning Python")
```

Output:

```
Learning Python
```

---

# Python Variables

Variables are used to store data.

Example:

```python
name = "Python"
version = 3

print(name)
print(version)
```

Output:

```
Python
3
```

---

# Multiple Statements

Multiple statements can be written on separate lines.

Example:

```python
x = 10
y = 20

print(x + y)
```

Output:

```
30
```

Python also allows multiple statements in one line using `;`.

Example:

```python
x = 5; y = 10; print(x + y)
```

Output:

```
15
```

However, writing separate lines is recommended for better readability.

---

# Line Continuation

Long statements can be divided into multiple lines using `\`.

Example:

```python
total = 10 + 20 + 30 + \
        40 + 50

print(total)
```

Output:

```
150
```

---

# Python Blocks

A block of code contains multiple statements that belong together.

Example:

```python
if True:
    print("This is block one")
    print("Python uses indentation")
```

---

# Python Naming Rules

Python has rules for naming variables, functions, and classes.

Rules:

- Names can contain letters, numbers, and underscores.
- Names cannot start with numbers.
- Spaces are not allowed.
- Names are case-sensitive.
- Reserved keywords cannot be used.

Valid:

```python
student_name = "Alex"
age2 = 20
_total = 100
```

Invalid:

```python
2name = "Alex"
student name = "Alex"
```

---

# Python Keywords

Keywords are reserved words that have special meaning in Python.

Examples:

```
if
else
for
while
class
def
return
import
try
except
```

You cannot use keywords as variable names.

Incorrect:

```python
class = "Python"
```

---

# Python Syntax Errors

Syntax errors occur when Python rules are not followed.

Example:

Incorrect:

```python
print("Hello Python"
```

The closing bracket is missing.

Correct:

```python
print("Hello Python")
```

---

# Best Practices

Follow these practices while writing Python code:

- Use meaningful variable names.
- Maintain proper indentation.
- Write clean and readable code.
- Use comments when necessary.
- Follow Python naming conventions.

---

# Practice Questions

1. Write a Python program that prints your name.
2. Create three variables and display their values.
3. Write a program using proper indentation with an `if` statement.
4. Create a program that demonstrates comments.
5. Find and fix syntax errors in a Python program.

---

# Summary

Python syntax defines how Python programs are written. Important concepts include indentation, statements, variables, comments, keywords, and proper naming rules.

Understanding Python syntax is the first step toward writing clean and error-free programs.