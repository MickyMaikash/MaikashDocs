# Writing Files in Python

When working with files in Python, you can write text data using the built-in `open()` function and file methods like `write()` and `writelines()`.

## Basic steps

1. Open the file with a write mode.
2. Write content to the file.
3. Close the file or use a `with` statement to handle it automatically.

## File modes for writing

- `w` : Open the file for writing. Create a new file or truncate an existing file.
- `a` : Open the file for appending. Add new content at the end without deleting existing data.
- `x` : Create a new file and open it for writing. Fail if the file already exists.
- `w+` : Open the file for reading and writing. Truncate existing file.
- `a+` : Open the file for reading and appending.

## Writing with `write()`

```python
file_path = 'example.txt'

with open(file_path, 'w', encoding='utf-8') as file:
    file.write('Hello, world!\n')
    file.write('This is a new line.\n')
```

- `open(..., 'w')` opens the file in write mode.
- `encoding='utf-8'` ensures proper character encoding.
- `write()` writes a string to the file.
- Use `\n` for line breaks.

## Appending to an existing file

```python
with open(file_path, 'a', encoding='utf-8') as file:
    file.write('Append this line.\n')
```

- `a` mode keeps existing content and adds new text at the end.

## Writing multiple lines with `writelines()`

```python
lines = [
    'First line.\n',
    'Second line.\n',
    'Third line.\n'
]

with open(file_path, 'w', encoding='utf-8') as file:
    file.writelines(lines)
```

- `writelines()` writes a list of strings to the file.
- Remember to include newline characters if you want separate lines.

## Manual open and close

```python
file = open(file_path, 'w', encoding='utf-8')
file.write('Write something here.\n')
file.close()
```

- Always close the file when done if not using `with`.

## Common tips

- Use `with open(...) as file:` to auto-close files and avoid resource leaks.
- If you write non-string data, convert it to a string first: `file.write(str(data))`.
- Use `a` mode to preserve existing content.
- Use `w` mode to start with a fresh file.

## Example: Writing a list of items

```python
items = ['apple', 'banana', 'cherry']

with open('fruits.txt', 'w', encoding='utf-8') as file:
    for item in items:
        file.write(item + '\n')
```

This document covers the basic file writing workflows in Python and can be used as a learning resource.