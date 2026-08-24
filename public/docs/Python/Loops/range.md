# Python `range()` in Loops

In Python, `range()` is commonly used with loops to generate a sequence of numbers. It is especially useful with `for` loops.

## Basic usage

```python
for i in range(5):
    print(i)
```

Output:

```
0
1
2
3
4
```

This example uses `range(5)` to iterate from 0 up to, but not including, 5.

## Start and stop

You can specify both the start and stop values:

```python
for i in range(2, 6):
    print(i)
```

Output:

```
2
3
4
5
```

This iterates from 2 through 5.

## Step value

The third argument is the step size:

```python
for i in range(1, 10, 2):
    print(i)
```

Output:

```
1
3
5
7
9
```

A negative step can count backwards:

```python
for i in range(5, 0, -1):
    print(i)
```

Output:

```
5
4
3
2
1
```

## Common patterns

- `range(n)` loops `n` times from `0` to `n-1`.
- `range(start, stop)` loops from `start` to `stop-1`.
- `range(start, stop, step)` loops using `step` increments.

## Practical example

Use `range()` when you need a counter or numeric index:

```python
names = ["Alice", "Bob", "Charlie"]
for index in range(len(names)):
    print(index, names[index])
```

Output:

```
0 Alice
1 Bob
2 Charlie
```

## Notes

- `range()` returns an immutable sequence type.
- The stop value is excluded from the sequence.
- If only one argument is given, it is treated as the stop value.
