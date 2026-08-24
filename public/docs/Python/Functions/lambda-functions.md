# Python Lambda Functions

A `lambda` function is a small anonymous function created with the `lambda` keyword. It can take any number of arguments but has only one expression. The result of that expression is returned automatically.

## Syntax

```python
lambda arguments: expression
```

## Example

```python
add = lambda x, y: x + y
print(add(3, 5))  # Output: 8
```

## How to use lambda functions

- As a short function for simple operations.
- With built-in functions like `map()`, `filter()`, and `sorted()`.
- When a function is needed briefly and does not need a name.

### Example with `map()`

```python
numbers = [1, 2, 3, 4]
squares = list(map(lambda x: x * x, numbers))
print(squares)  # Output: [1, 4, 9, 16]
```

### Example with `filter()`

```python
numbers = [1, 2, 3, 4, 5, 6]
evens = list(filter(lambda x: x % 2 == 0, numbers))
print(evens)  # Output: [2, 4, 6]
```

### Example with `sorted()`

```python
pairs = [(2, 'b'), (1, 'a'), (3, 'c')]
sorted_pairs = sorted(pairs, key=lambda item: item[0])
print(sorted_pairs)  # Output: [(1, 'a'), (2, 'b'), (3, 'c')]
```

## Why use lambda functions

- Concise: write small functions in one line.
- Useful for quick, temporary functions.
- Good for passing simple behavior to higher-order functions.

## When not to use lambda

- If the function is complex or needs multiple expressions.
- If readability is more important than brevity.
- If the function should be reused in multiple places.

## Notes

- Lambda functions are not a replacement for normal functions.
- They are best for simple, short operations.
- For more complex logic, use a normal `def` function.
