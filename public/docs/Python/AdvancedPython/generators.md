# Generators in Python

## What are Generators?

Generators are a type of iterable in Python that allow you to create iterators in a simple and elegant way. They use the `yield` keyword to produce values one at a time, instead of returning all values at once like regular functions.

A generator function looks like a normal function but uses `yield` instead of `return` to produce values.

### Example:

```python
def simple_generator():
    yield 1
    yield 2
    yield 3

# Using the generator
for value in simple_generator():
    print(value)  # Output: 1, 2, 3
```

## Key Characteristics

- **Lazy Evaluation**: Generators produce values on-demand, not all at once
- **Memory Efficient**: They don't store all values in memory; only the current value
- **State Preservation**: Generators remember their state between calls
- **Iterable**: Can be used in loops and with built-in functions like `next()`

## Why Use Generators?

### 1. **Memory Efficiency**
Instead of creating a list with millions of items, generators produce one item at a time:

```python
# Without generator (memory intensive)
def get_numbers(n):
    result = []
    for i in range(n):
        result.append(i)
    return result

# With generator (memory efficient)
def get_numbers_gen(n):
    for i in range(n):
        yield i
```

### 2. **Performance**
Generators are faster for large datasets because they don't need to create and store entire collections:

```python
import sys

# List (stores all values)
list_nums = list(range(1000000))
print(f"List size: {sys.getsizeof(list_nums)} bytes")

# Generator (lazy evaluation)
gen_nums = (x for x in range(1000000))
print(f"Generator size: {sys.getsizeof(gen_nums)} bytes")
```

### 3. **Infinite Sequences**
Generators allow you to work with infinite sequences without memory issues:

```python
def infinite_counter():
    count = 0
    while True:
        yield count
        count += 1

# Can use it without consuming infinite memory
counter = infinite_counter()
print(next(counter))  # 0
print(next(counter))  # 1
print(next(counter))  # 2
```

### 4. **Pipeline Processing**
Chain generators together to process data in stages:

```python
def read_data():
    for i in range(5):
        yield i

def double(numbers):
    for n in numbers:
        yield n * 2

def add_ten(numbers):
    for n in numbers:
        yield n + 10

# Chain them together
result = add_ten(double(read_data()))
for value in result:
    print(value)  # 10, 12, 14, 16, 18
```

### 5. **Working with Large Files**
Process large files line by line without loading everything into memory:

```python
def read_large_file(file_path):
    with open(file_path) as f:
        for line in f:
            yield line.strip()

# Process line by line
for line in read_large_file('huge_file.txt'):
    process(line)
```

## Generator Expressions

Similar to list comprehensions but use parentheses and are generators:

```python
# List comprehension (creates entire list)
list_comp = [x**2 for x in range(5)]

# Generator expression (lazy evaluation)
gen_exp = (x**2 for x in range(5))

print(list(gen_exp))  # [0, 1, 4, 9, 16]
```

## Benefits Summary

| Aspect | Regular Function | Generator |
|--------|------------------|-----------|
| Memory | Stores all values | One value at a time |
| Speed | Slower for large data | Faster initial execution |
| Use Case | Small datasets | Large/infinite datasets |
| Execution | Eager | Lazy |

## When to Use Generators

- Working with large datasets
- Processing streams of data
- Reading large files
- Creating infinite sequences
- Building data pipelines
- When memory is a constraint
- When you need lazy evaluation

Generators are a powerful feature in Python that help you write cleaner, more efficient code!