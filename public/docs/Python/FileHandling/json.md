# JSON in Python File Handling

JSON (JavaScript Object Notation) is a common format for storing structured data. In Python, you can read and write JSON data to and from files using the built-in `json` module.

## Writing JSON to a File

1. Import the `json` module.
2. Prepare a Python object such as a dictionary or list.
3. Open a file in write mode.
4. Use `json.dump()` to write the object to the file.

```python
import json

data = {
    "name": "Alice",
    "age": 30,
    "languages": ["Python", "JavaScript", "SQL"],
    "active": True
}

with open('data.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=4)
```

- `indent=4` formats the JSON with indentation for readability.
- `encoding='utf-8'` ensures proper encoding when writing text files.

## Reading JSON from a File

1. Open the JSON file in read mode.
2. Use `json.load()` to parse the JSON content into a Python object.

```python
import json

with open('data.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

print(data['name'])
print(data['languages'])
```

## Storing JSON in File Handling

To store JSON in a file, you can use these common patterns:

- Save Python dictionaries, lists, or nested structures directly with `json.dump()`.
- Read the file later with `json.load()` to restore the original Python objects.
- Use modes `'w'` for writing and `'r'` for reading.
- Use `'a'` (append) carefully if you need to add additional JSON entries; typically, append mode requires manual handling of valid JSON structure.

### Example: Save and Load Configuration

```python
import json

config = {
    "theme": "dark",
    "version": 1.2,
    "features": {
        "autosave": True,
        "notifications": False
    }
}

with open('config.json', 'w', encoding='utf-8') as f:
    json.dump(config, f, indent=2)

with open('config.json', 'r', encoding='utf-8') as f:
    loaded_config = json.load(f)

print(loaded_config)
```

## Tips

- Use `json.loads()` and `json.dumps()` when working with JSON strings in memory.
- Use `json.dump()` and `json.load()` when working with files.
- Always handle file operations with `with open(...)` to ensure files are closed properly.
