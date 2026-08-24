# Sets in Python

## What is a set?
A set is an unordered collection of unique items. Sets are useful when you need to store distinct values and perform membership tests, remove duplicates, or use mathematical set operations.

Key points:
- Items are unordered.
- Items must be immutable (like numbers, strings, tuples).
- Duplicate values are automatically removed.
- Sets are mutable: you can add or remove elements.

## Creating sets
You can create a set using curly braces or the `set()` constructor.

Examples:

```python
# create a set with values
a = {1, 2, 3, 4}

# create an empty set
b = set()

# set from a list or tuple
c = set([1, 2, 2, 3])  # result: {1, 2, 3}

d = set(("a", "b", "a"))  # result: {'a', 'b'}
```

Note: `{}` creates an empty dictionary, not a set.

## Basic operations on sets

### Membership test

```python
if 2 in a:
    print("2 is in the set")
```

### Add and remove items

```python
a.add(5)
a.discard(2)
a.remove(3)  # raises KeyError if 3 is not present
```

### Length and iteration

```python
print(len(a))
for item in a:
    print(item)
```

## Set operations
Sets support mathematical operations like union, intersection, difference, and symmetric difference.

```python
x = {1, 2, 3}
y = {2, 3, 4}

print(x | y)   # union: {1, 2, 3, 4}
print(x & y)   # intersection: {2, 3}
print(x - y)   # difference: {1}
print(x ^ y)   # symmetric difference: {1, 4}
```

### Methods for set operations

```python
print(x.union(y))
print(x.intersection(y))
print(x.difference(y))
print(x.symmetric_difference(y))
```

## Other useful set methods

- `x.copy()` - return a shallow copy of the set
- `x.clear()` - remove all items
- `x.pop()` - remove and return an arbitrary element
- `x.issubset(y)` - check if `x` is subset of `y`
- `x.issuperset(y)` - check if `x` is superset of `y`
- `x.isdisjoint(y)` - check if sets have no common elements 



## Summary
A Python set is a collection of unique, unordered values. Create sets with `{}` or `set()`, then use membership tests, add/remove methods, and built-in set operations to work with them efficiently.