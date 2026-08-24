# Python `break` Statement in Loops

The `break` statement stops the current loop immediately and transfers control to the statement following the loop.

## When to use `break`
- Inside a `for` or `while` loop.
- When a condition is met and you want to stop looping early.
- To avoid unnecessary iterations once the goal is reached.

## Syntax
```python
break
```

## Example with `while`
```python
count = 0
while True:
    if count == 3:
        break
    print(count)
    count += 1
```

Output:
```
0
1
2
```

## Example with `for`
```python
for number in range(1, 6):
    if number == 4:
        break
    print(number)
```

Output:
```
1
2
3
```

## Notes
- `break` only exits the innermost loop.
- In a loop with an `else` block, the `else` is skipped if `break` is executed.
- Use `break` when you want to end the loop immediately based on a condition.
