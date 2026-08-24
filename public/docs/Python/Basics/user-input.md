# User Input in Python

User input allows a program to receive information from the user while running.

Python uses the `input()` function to take input.

## Using input()

Example:

```python
name = input("Enter your name: ")

print(name)
```

Output:

```
Enter your name: Alex
Alex
```

The program waits until the user enters a value.

---

# Input Always Returns String

The `input()` function always returns data as a string.

Example:

```python
age = input("Enter your age: ")

print(type(age))
```

Output:

```
<class 'str'>
```

---

# Taking Integer Input

Convert input into an integer using `int()`.

Example:

```python
age = int(input("Enter your age: "))

print(age)
```

---

# Taking Float Input

Use `float()` for decimal values.

Example:

```python
price = float(input("Enter price: "))

print(price)
```

---

# Taking Multiple Inputs

Multiple values can be taken using `split()`.

Example:

```python
a, b = input("Enter two numbers: ").split()

print(a)
print(b)
```

Input:

```
10 20
```

Output:

```
10
20
```

---

# Converting Multiple Inputs

Example:

```python
a, b = map(int, input("Enter numbers: ").split())

print(a + b)
```

Input:

```
5 10
```

Output:

```
15
```

---

# Example Program

## Calculate User Age

```python
birth_year = int(input("Enter birth year: "))

current_year = 2026

age = current_year - birth_year

print("Your age is:", age)
```

---

# Common Mistakes

### Forgetting Type Conversion

Incorrect:

```python
num = input("Enter number: ")

print(num + 5)
```

Correct:

```python
num = int(input("Enter number: "))

print(num + 5)
```

---

# Practice Questions

1. Take the user's name and print a greeting.
2. Take two numbers and calculate their sum.
3. Take length and width and calculate area of a rectangle.
4. Take temperature in Celsius and convert it to Fahrenheit.

---

# Summary

The `input()` function allows Python programs to interact with users and create dynamic applications.