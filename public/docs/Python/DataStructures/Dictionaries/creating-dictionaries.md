# Python Dictionaries

## What is a Dictionary?

A dictionary in Python is an unordered collection of items. Each item is stored as a key-value pair. Keys are unique and are used to access the corresponding values. Dictionaries are mutable, so you can change, add, or remove items after creation.

Example:

```python
person = {
    "name": "Alice",
    "age": 30,
    "city": "London"
}
```

## How to Create a Dictionary

There are several ways to create dictionaries:

1. Using curly braces:

```python
my_dict = {"a": 1, "b": 2}
```

2. Using the `dict()` constructor:

```python
my_dict = dict(a=1, b=2)
```

3. From a list of tuples:

```python
my_dict = dict([("a", 1), ("b", 2)])
```

4. Creating an empty dictionary:

```python
empty_dict = {}
```

## Common Dictionary Methods

- `dict.keys()` - returns a view of keys
- `dict.values()` - returns a view of values
- `dict.items()` - returns a view of key-value pairs
- `dict.get(key, default)` - returns the value for `key` or `default` if key is not found
- `dict.update(other_dict)` - updates the dictionary with items from another dictionary
- `dict.pop(key, default)` - removes and returns value for `key`
- `dict.popitem()` - removes and returns the last inserted key-value pair
- `dict.clear()` - removes all items
- `dict.copy()` - returns a shallow copy of the dictionary
- `dict.setdefault(key, default)` - returns the value for `key`; if `key` is not present, inserts it with `default`

Example:

```python
person = {"name": "Alice", "age": 30}
keys = person.keys()
values = person.values()
items = person.items()
age = person.get("age")
person.update({"city": "London"})
```

## Nested Dictionary

A nested dictionary contains dictionaries as values. This is useful for representing structured data.

Example:

```python
users = {
    "user1": {
        "name": "Alice",
        "age": 30
    },
    "user2": {
        "name": "Bob",
        "age": 25
    }
}

print(users["user1"]["name"])  # Alice
```

You can access nested values using multiple keys, update nested dictionaries, and iterate through nested structures.

Example of modification:

```python
users["user1"]["city"] = "London"
```

## Summary

- Dictionary is a collection of key-value pairs.
- Keys must be unique and immutable.
- Dictionaries are mutable and can be created in different ways.
- Common methods help access, update, and modify data.
- Nested dictionaries allow data to be structured in multiple layers.
