# Python `while` Loop

A `while` loop repeats a block of code as long as a condition is true. It is useful when you do not know the exact number of iterations before the loop starts.

## Syntax

```python
while condition:
    # code block
```

- `condition` is evaluated before each iteration.
- If the condition is `True`, the loop body runs.
- When the condition becomes `False`, the loop ends.

## Simple example

```python
count = 1
while count <= 5:
    print(count)
    count += 1
```

Output:

```
1
2
3
4
5
```

## How it works

1. Evaluate `condition`.
2. If `True`, execute the loop body.
3. Return to step 1.
4. If `False`, exit the loop.

## Common patterns

### Counting loop

```python
n = 5
i = 0
while i < n:
    print(i)
    i += 1
```

### Summing values

```python
total = 0
number = 1
while number <= 10:
    total += number
    number += 1
print(total)
```

## `break` and `continue`

- `break` stops the loop immediately.
- `continue` skips the rest of the current iteration and moves to the next one.

Example with `break`:

```python
while True:
    value = int(input("Enter a positive number: "))
    if value >= 0:
        break
    print("Try again")
print("You entered", value)
```

Example with `continue`:

```python
n = 0
while n < 10:
    n += 1
    if n % 2 != 0:
        continue
    print(n)
```

## Tips

- Always update the loop variable inside the loop to avoid infinite loops.
- Make sure the condition can become `False`.
- Use `while` for repeating until a condition changes, not just for a fixed number of times.

## Practice questions

1. Write a `while` loop that prints even numbers from `2` to `10`.
2. Use a `while` loop to calculate the sum of the first `n` positive integers, where `n` is a variable.
3. Write a `while` loop that counts how many digits are in a positive integer number.
4. Create a loop that asks the user for a password and stops only when the correct password is entered.
5. Use a `while` loop to print the multiplication table for `5` from `5 x 1` to `5 x 10`.

## Practice answers

1. 
```python
num = 2
while num <= 10:
    print(num)
    num += 2
```

2.
```python
n = 5
total = 0
count = 1
while count <= n:
    total += count
    count += 1
print(total)
```

3.
```python
number = 12345
digits = 0
while number > 0:
    number //= 10
    digits += 1
print(digits)
```

4.
```python
secret = "python123"
password = ""
while password != secret:
    password = input("Enter password: ")
print("Access granted")
```

5.
```python
i = 1
while i <= 10:
    print("5 x", i, "=", 5 * i)
    i += 1
```
