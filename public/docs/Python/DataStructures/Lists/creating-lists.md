# Python Lists - Complete Guide

## What is a List?

A list is a built-in Python data structure that stores multiple items in a single variable. Lists are **ordered**, **mutable** (can be changed), and allow **duplicate values**.

---

## Creating Lists

### Basic List Creation

```python
# Empty list
empty_list = []

# List with integers
numbers = [1, 2, 3, 4, 5]

# List with strings
fruits = ["apple", "banana", "orange"]

# Mixed data types
mixed = [1, "hello", 3.14, True, None]

# Using list() constructor
new_list = list()
```

### Accessing Elements

```python
fruits = ["apple", "banana", "orange"]

# Index from the beginning (0-based)
print(fruits[0])      # apple
print(fruits[1])      # banana

# Index from the end (negative indexing)
print(fruits[-1])     # orange
print(fruits[-2])     # banana
```

### Slicing Lists

```python
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

print(numbers[2:5])      # [2, 3, 4]
print(numbers[:3])       # [0, 1, 2]
print(numbers[5:])       # [5, 6, 7, 8, 9]
print(numbers[::2])      # [0, 2, 4, 6, 8]
print(numbers[::-1])     # [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
```

---

## Common List Methods

### 1. **append()** - Add a single element to the end

```python
fruits = ["apple", "banana"]
fruits.append("orange")
print(fruits)  # ['apple', 'banana', 'orange']
```

### 2. **extend()** - Add multiple elements

```python
fruits = ["apple", "banana"]
fruits.extend(["orange", "mango"])
print(fruits)  # ['apple', 'banana', 'orange', 'mango']
```

### 3. **insert()** - Add element at specific position

```python
fruits = ["apple", "banana", "orange"]
fruits.insert(1, "mango")
print(fruits)  # ['apple', 'mango', 'banana', 'orange']
```

### 4. **remove()** - Remove first occurrence of a value

```python
fruits = ["apple", "banana", "orange"]
fruits.remove("banana")
print(fruits)  # ['apple', 'orange']
```

### 5. **pop()** - Remove and return element at index

```python
fruits = ["apple", "banana", "orange"]
removed = fruits.pop(1)
print(removed)  # banana
print(fruits)   # ['apple', 'orange']

last = fruits.pop()  # Remove last element
print(last)     # orange
```

### 6. **clear()** - Remove all elements

```python
fruits = ["apple", "banana"]
fruits.clear()
print(fruits)  # []
```

### 7. **index()** - Find position of element

```python
fruits = ["apple", "banana", "orange"]
print(fruits.index("banana"))  # 1
```

### 8. **count()** - Count occurrences of element

```python
numbers = [1, 2, 2, 3, 2, 4]
print(numbers.count(2))  # 3
```

### 9. **sort()** - Sort list in place

```python
numbers = [3, 1, 4, 1, 5, 9]
numbers.sort()
print(numbers)  # [1, 1, 3, 4, 5, 9]

numbers.sort(reverse=True)
print(numbers)  # [9, 5, 4, 3, 1, 1]
```

### 10. **reverse()** - Reverse list in place

```python
numbers = [1, 2, 3, 4, 5]
numbers.reverse()
print(numbers)  # [5, 4, 3, 2, 1]
```

### 11. **copy()** - Create a shallow copy

```python
original = [1, 2, 3]
copied = original.copy()
copied.append(4)
print(original)  # [1, 2, 3]
print(copied)    # [1, 2, 3, 4]
```

---

## List Comprehension

List comprehension is a concise and elegant way to create lists. It's faster and more readable than using loops.

### Basic Syntax

```python
[expression for item in iterable]
```

### Simple Examples

```python
# Create a list of squares
squares = [x**2 for x in range(5)]
print(squares)  # [0, 1, 4, 9, 16]

# Create a list of even numbers
evens = [x for x in range(10) if x % 2 == 0]
print(evens)    # [0, 2, 4, 6, 8]

# String conversion
numbers = [1, 2, 3, 4, 5]
strings = [str(x) for x in numbers]
print(strings)  # ['1', '2', '3', '4', '5']
```

### With Conditions

```python
# Filter numbers greater than 5
numbers = [1, 3, 5, 7, 9, 2, 4, 6, 8]
filtered = [x for x in numbers if x > 5]
print(filtered)  # [7, 9, 6, 8]

# If-else in comprehension
numbers = [1, 2, 3, 4, 5]
result = ["even" if x % 2 == 0 else "odd" for x in numbers]
print(result)    # ['odd', 'even', 'odd', 'even', 'odd']
```

### Nested List Comprehension

```python
# Flatten a 2D list
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
flattened = [x for row in matrix for x in row]
print(flattened)  # [1, 2, 3, 4, 5, 6, 7, 8, 9]

# Create a 2D list
table = [[x*y for x in range(1, 4)] for y in range(1, 4)]
print(table)  # [[1, 2, 3], [2, 4, 6], [3, 6, 9]]
```

### Dictionary from List

```python
words = ["apple", "banana", "cherry"]
word_lengths = {word: len(word) for word in words}
print(word_lengths)  # {'apple': 5, 'banana': 6, 'cherry': 6}
```

---

## Key Takeaways

- Lists are **ordered, mutable collections**
- Use **indexing** (0-based) and **slicing** to access elements
- Master common **methods** like append, remove, sort, and reverse
- Use **list comprehension** for clean, efficient code
- Lists are versatile and essential for Python programming

---

## Practice Tips

1. Experiment with different list methods in the Python interactive shell
2. Practice list comprehension by converting loops to comprehensions
3. Try nested list comprehensions for working with multidimensional data
4. Remember: lists are mutable, so they can be modified after creation
