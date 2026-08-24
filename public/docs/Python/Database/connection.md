# SQLite Connection in Python

## What is a connection?
A connection is an object that represents a link between your Python program and a SQLite database file. It allows your code to execute SQL commands, read data, write data, and manage transactions.

## Why connections are important
- Open a database file or create it if it does not exist.
- Execute SQL queries and commands.
- Control transactions with commit and rollback.
- Close the database safely when work is done.

## Connecting to SQLite in Python
Python includes the `sqlite3` module in the standard library. Use it like this:

```python
import sqlite3

conn = sqlite3.connect('example.db')
```

This creates a connection object `conn` to the file `example.db`.

## Common connection actions

### Create a cursor
A cursor is used to execute SQL statements.

```python
cursor = conn.cursor()
```

### Execute SQL

```python
cursor.execute('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT)')
```

### Insert data

```python
cursor.execute("INSERT INTO users (name) VALUES (?)", ('Alice',))
```

### Query data

```python
cursor.execute('SELECT id, name FROM users')
rows = cursor.fetchall()
for row in rows:
    print(row)
```

### Commit changes
After making changes, save them with `commit()`.

```python
conn.commit()
```

### Rollback
If an error happens, revert changes using `rollback()`.

```python
conn.rollback()
```

### Close connection
Always close the connection when finished.

```python
conn.close()
```

## Connection modes and options

### In-memory database
Use `:memory:` to create a temporary database stored in RAM.

```python
conn = sqlite3.connect(':memory:')
```

### Detect text type
Use `detect_types` to control type detection.

```python
conn = sqlite3.connect('example.db', detect_types=sqlite3.PARSE_DECLTYPES)
```

### Row factory
Use `row_factory` to get rows as dictionaries.

```python
conn.row_factory = sqlite3.Row
```

## Example: full workflow

```python
import sqlite3

conn = sqlite3.connect('example.db')
conn.row_factory = sqlite3.Row
cursor = conn.cursor()

cursor.execute('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT)')
cursor.execute('INSERT INTO users (name) VALUES (?)', ('Alice',))
conn.commit()

cursor.execute('SELECT id, name FROM users')
for row in cursor.fetchall():
    print(row['id'], row['name'])

conn.close()
```

## Summary
A SQLite connection in Python is the gateway between your script and a SQLite database file. Use it to run SQL commands, control transactions, and close the database cleanly. For learning, practice opening a connection, creating tables, inserting rows, querying data, and closing the connection.