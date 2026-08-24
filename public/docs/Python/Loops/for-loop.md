# Python for Loop

A `for` loop is used to repeat a block of code for each item in a sequence such as a list, tuple, string, or range.

## Why use a for loop?

A `for` loop is helpful when you want to:

- repeat code a fixed number of times
- iterate through items in a collection
- process each element one by one

## Basic syntax

```python
for item in iterable:
    # code to execute
    print(item)
```

- `for` starts the loop
- `item` is a variable that stores the current value
- `in` tells Python where to get values from
- `iterable` can be a list, string, tuple, dictionary, or range

## Example 1: Loop through a list

```python
fruits = ["apple", "banana", "cherry"]

for fruit in fruits:
    print(fruit)
```

Output:

```text
apple
banana
cherry
```

## Example 2: Loop through a string

```python
word = "Python"

for char in word:
    print(char)
```

## Example 3: Use `range()`

```python
for i in range(5):
    print(i)
```

Output:

```text
0
1
2
3
4
```

## Example 4: Loop with `enumerate()`

```python
colors = ["red", "green", "blue"]

for index, color in enumerate(colors):
    print(index, color)
```

This gives both the position and the value.

## Example 5: Loop through a dictionary

```python
student_scores = {"Alice": 90, "Bob": 85}

for name, score in student_scores.items():
    print(name, score)
```

## Important points

- Indentation is very important.
- The loop body must be indented.
- A `for` loop can be combined with `break`, `continue`, and `else`.

## `break` in a for loop

```python
for number in range(1, 10):
    if number == 5:
        break
    print(number)
```

## `continue` in a for loop

```python
for number in range(1, 6):
    if number == 3:
        continue
    print(number)
```

## `else` in a for loop

```python
for number in range(1, 4):
    print(number)
else:
    print("Loop finished")
```

## Common uses of for loops

- printing all items in a list
- calculating the sum of numbers
- checking values in a collection
- repeating actions a known number of times

## Practice Questions

1. What is the correct syntax of a `for` loop in Python?
2. Which built-in function is commonly used with a `for` loop to generate numbers?
3. What will be printed by this code?

```python
for x in [1, 2, 3]:
    print(x)
```

4. What will be printed by this code?

```python
for i in range(3):
    print(i)
```

5. Which of these is an iterable?
   - a) `10`
   - b) `"hello"`
   - c) `5.7`
   - d) `True`

6. Write a `for` loop that prints each character in the word `"Python"`.

## Answers

1. `for item in iterable:`
2. `range()`
3. `1`, `2`, `3`
4. `0`, `1`, `2`
5. `b) "hello"`
6. A loop such as:

```python
for char in "Python":
    print(char)
```
