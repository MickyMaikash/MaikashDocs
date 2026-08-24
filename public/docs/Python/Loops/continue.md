# Python `continue` Statement

The `continue` statement is used inside loops to skip the rest of the current iteration and move on to the next iteration.

## Behavior

- In a `for` loop or `while` loop, `continue` stops the current iteration.
- The loop then evaluates the next iteration normally.
- It does not terminate the loop entirely.

## Syntax

```python
continue
```

## Example with `for`

```python
for i in range(1, 6):
    if i == 3:
        continue
    print(i)
```

Output:

```
1
2
4
5
```

## Example with `while`

```python
n = 0
while n < 5:
    n += 1
    if n % 2 == 0:
        continue
    print(n)
```

Output:

```
1
3
5
```

## Use cases

- Skip processing for a specific condition
- Avoid nested `if` statements
- Simplify loop flow when some values should be ignored
