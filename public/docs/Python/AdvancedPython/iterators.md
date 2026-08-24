# Iterators in Python

## What are Iterators?

An **iterator** is an object in Python that implements two methods:
- `__iter__()` - Returns the iterator object itself
- `__next__()` - Returns the next value from the sequence

Iterators allow you to traverse through all elements of a collection one at a time, without needing to know the underlying structure of the collection.

### Key Characteristics:
- **Lazy Evaluation**: Iterators generate values on-demand, not all at once
- **Stateful**: Keeps track of the current position in the sequence
- **Memory Efficient**: Generates one value at a time instead of storing all values in memory

## How Iterators Work

```python
# Creating an iterator from a list
my_list = [1, 2, 3, 4, 5]
iterator = iter(my_list)

# Getting next values
print(next(iterator))  # Output: 1
print(next(iterator))  # Output: 2
print(next(iterator))  # Output: 3

# When exhausted, raises StopIteration
# print(next(iterator))  # Would raise StopIteration after all elements
```

## Creating Custom Iterators

```python
class CountUp:
    def __init__(self, max):
        self.max = max
        self.current = 0
    
    def __iter__(self):
        return self
    
    def __next__(self):
        if self.current < self.max:
            self.current += 1
            return self.current
        else:
            raise StopIteration

# Using the custom iterator
counter = CountUp(3)
for num in counter:
    print(num)  # Output: 1, 2, 3
```

## Why Use Iterators?

### 1. **Memory Efficiency**
- Iterators don't store all values in memory at once
- Useful for large datasets or infinite sequences

```python
# Generator (a type of iterator)
def infinite_counter():
    num = 0
    while True:
        yield num
        num += 1

counter = infinite_counter()
print(next(counter))  # 0
print(next(counter))  # 1
```

### 2. **Lazy Evaluation**
- Computation happens only when needed
- Improves performance for expensive operations

```python
# Process only when needed
def process_large_file(filename):
    with open(filename) as f:
        for line in f:
            yield line.strip()

for line in process_large_file('huge_file.txt'):
    print(line)  # Processes one line at a time
```

### 3. **Clean and Readable Code**
- Enables `for` loops and iteration protocols
- Works with built-in functions like `map()`, `filter()`, `zip()`

```python
numbers = [1, 2, 3, 4, 5]
squared = map(lambda x: x**2, numbers)  # Returns an iterator

for result in squared:
    print(result)  # 1, 4, 9, 16, 25
```

### 4. **Chaining Operations**
- Easily combine multiple iterators
- Maintains simplicity without creating intermediate lists

```python
data = [1, 2, 3, 4, 5]
result = filter(lambda x: x > 2, map(lambda x: x * 2, data))

for item in result:
    print(item)  # 6, 8, 10
```

## Generators vs Iterators

**Generators** are a simpler way to create iterators using `yield`:

```python
# Iterator class approach
class Squares:
    def __init__(self, n):
        self.n = n
        self.i = 0
    
    def __iter__(self):
        return self
    
    def __next__(self):
        if self.i < self.n:
            result = (self.i + 1) ** 2
            self.i += 1
            return result
        raise StopIteration

# Generator approach (simpler)
def squares(n):
    for i in range(1, n + 1):
        yield i ** 2

for sq in squares(5):
    print(sq)  # 1, 4, 9, 16, 25
```

## Common Iterator Functions

| Function | Description |
|----------|-------------|
| `iter(obj)` | Returns an iterator object |
| `next(iterator)` | Returns the next value |
| `map()` | Applies function to all items |
| `filter()` | Filters items based on condition |
| `zip()` | Combines multiple iterables |
| `enumerate()` | Adds index to items |

## Summary

- **Iterators** provide a way to access elements sequentially
- **Memory efficient** - especially for large datasets
- **Lazy evaluation** - compute values on demand
- **Cleaner syntax** with for loops and comprehensions
- **Generators** simplify iterator creation

Mastering iterators is essential for writing efficient and Pythonic code!
