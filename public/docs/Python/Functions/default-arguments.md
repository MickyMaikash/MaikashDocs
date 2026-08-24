# Python Function Default Arguments

Default arguments allow a Python function to be called with fewer arguments than it is defined to accept.

## Syntax

```python
def function_name(param1, param2=default_value):
    # function body
```

If `param2` is not passed when the function is called, it uses `default_value`.

## Example

```python
def greet(name, message="Hello"):
    print(f"{message}, {name}!")

# Call with both arguments
greet("Alice", "Hi")   # Output: Hi, Alice!

# Call with only required argument
greet("Bob")            # Output: Hello, Bob!
```

## Rules

- Default arguments must come after non-default arguments.
- The default value is evaluated once when the function is defined, not each time it is called.

## Mutable default values

Avoid using mutable objects like lists or dictionaries as default values unless you intentionally want shared state.

```python
def add_item(item, items=[]):
    items.append(item)
    return items

print(add_item(1))  # [1]
print(add_item(2))  # [1, 2]   # same list reused
```

Safer pattern:

```python
def add_item(item, items=None):
    if items is None:
        items = []
    items.append(item)
    return items
```

## Use cases

- Provide common default behavior.
- Make function calls shorter and cleaner.
- Keep backward compatibility when adding new parameters.

## Summary

Default arguments make Python functions flexible by providing fallback values when callers omit optional parameters.