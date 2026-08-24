# `pass` Statement in Loops

In Python, `pass` is a no-op statement. It does nothing and is used when a statement is required syntactically but no action is needed.

## Usage in Loops

You can use `pass` inside `for` or `while` loops when you want to keep the loop structure but do not want the loop body to perform any action yet.

### Example

```python
for i in range(5):
    if i == 2:
        pass
    else:
        print(i)
```

In this example, when `i` is `2`, the `pass` statement is executed and the loop continues without doing anything.

## Common use cases

- Placeholder for future code during development
- Keeping empty loop bodies valid
- Creating minimal loop structures while planning logic later

### Example with `while`

```python
count = 0
while count < 3:
    pass
    count += 1
```

This loop runs until `count` reaches `3`, but the `pass` itself does not change the behavior.
