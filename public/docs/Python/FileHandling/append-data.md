# Appending Data to a File in Python

Appending data means adding new text to the end of an existing file without removing or overwriting the file's current content.

## Why use append mode

- Use append mode when you want to preserve existing file data.
- Useful for logs, history records, or adding new entries.
- The file pointer moves to the end of the file automatically.

## How it is done

In Python, open the file with mode `"a"` or `"a+"`.

- `"a"`: append text only. If the file does not exist, it is created.
- `"a+"`: append and read. You can read and add new data.

Example:

```python
with open('example.txt', 'a') as file:
    file.write('New line of data\n')
```

If the file already contains content, the new text is written after the existing content.

## Notes

- `write()` does not add a newline automatically, so include `\n` if needed.
- `with` ensures the file is closed automatically after writing.
- Append mode does not erase existing data.

## Example with multiple lines

```python
lines = ['First log\n', 'Second log\n']
with open('log.txt', 'a') as file:
    file.writelines(lines)
```

This approach is common for files that need to keep accumulating data over time.
