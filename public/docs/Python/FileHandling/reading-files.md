# Reading Files in Python

Python makes reading files simple through built-in file handling functions. This guide covers the most common ways to read files and how to use them safely.

## 1. Open a File

Use `open()` to get a file object. The default mode is `'r'` for reading.

```python
file = open('example.txt', 'r', encoding='utf-8')
```

Common file modes:
- `'r'`: read text (default)
- `'rb'`: read binary
- `'r+'`: read and write

## 2. Read the Entire File

Use `read()` to get the full contents as a string.

```python
with open('example.txt', 'r', encoding='utf-8') as file:
    content = file.read()
    print(content)
```

`with` ensures the file is closed automatically.

## 3. Read Line by Line

Use `readline()` to read one line at a time.

```python
with open('example.txt', 'r', encoding='utf-8') as file:
    line = file.readline()
    while line:
        print(line, end='')
        line = file.readline()
```

## 4. Read All Lines into a List

Use `readlines()` to get a list of lines.

```python
with open('example.txt', 'r', encoding='utf-8') as file:
    lines = file.readlines()
    for line in lines:
        print(line, end='')
```

## 5. Iterate Directly Over the File

This is the most Pythonic and memory-efficient approach for large files.

```python
with open('example.txt', 'r', encoding='utf-8') as file:
    for line in file:
        print(line, end='')
```

## 6. File Methods

- `file.read(size)` reads up to `size` characters.
- `file.readline()` reads one line.
- `file.readlines()` returns all lines in a list.
- `file.close()` closes the file when not using `with`.

## 7. Encoding

Always specify `encoding='utf-8'` for text files unless you know a different encoding is required.

```python
with open('example.txt', 'r', encoding='utf-8') as file:
    content = file.read()
```

## 8. Common Tips

- Prefer `with open(...)` to avoid leaving files open.
- Use `strip()` when you need to remove newline characters from lines.
- For binary data, use `'rb'` mode.

```python
with open('image.png', 'rb') as file:
    data = file.read()
```

## 9. Example: Read and Print File Contents

```python
filename = 'example.txt'

with open(filename, 'r', encoding='utf-8') as file:
    for line in file:
        print(line.strip())
```

This covers the basic patterns for reading files in Python and helps build a reliable foundation for file handling.