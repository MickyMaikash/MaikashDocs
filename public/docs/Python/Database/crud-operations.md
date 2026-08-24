# CRUD operations in SQLite with Python
This document shows how to perform Create, Read, Update and Delete (CRUD) operations using the built-in sqlite3 module in Python. Each section includes a function implementation and an example of how to call it.
Prerequisites
- Python 3.x (sqlite3 is included in the standard library)
Connecting to a database
- The database is a file (e.g. data.db). If it doesn't exist, SQLite creates it when connecting.
Example connect helper:
```python
import sqlite3
from typing import Tuple, Any

def get_connection(db_path: str = "data.db") -> sqlite3.Connection:
	conn = sqlite3.connect(db_path)
	# return rows as dictionaries (optional)
	conn.row_factory = sqlite3.Row
	return conn
```

Create table (schema)

Create a simple table named users with id, name and email.

```python
def create_users_table(conn: sqlite3.Connection) -> None:
	sql = """
	CREATE TABLE IF NOT EXISTS users (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	name TEXT NOT NULL,
	email TEXT UNIQUE NOT NULL
	)
	"""
	with conn:
	conn.execute(sql)

# Usage
# conn = get_connection()
# create_users_table(conn)
```

CRUD functions

1) Create (Insert)

Function to insert a user. Returns the inserted row id.

```python
def create_user(conn: sqlite3.Connection, name: str, email: str) -> int:
	sql = "INSERT INTO users (name, email) VALUES (?, ?)"
	cur = conn.cursor()
	try:
		with conn:
			cur.execute(sql, (name, email))
			return cur.lastrowid
	finally:
		cur.close()

# Example
# user_id = create_user(conn, "Alice", "alice@example.com")
```

2) Read (Retrieve)

Get a single user by id and get all users.

```python
def get_user_by_id(conn: sqlite3.Connection, user_id: int) -> dict | None:
	sql = "SELECT id, name, email FROM users WHERE id = ?"
	cur = conn.cursor()
	try:
		cur.execute(sql, (user_id,))
		row = cur.fetchone()
		return dict(row) if row else None
	finally:
		cur.close()

def get_all_users(conn: sqlite3.Connection) -> list[dict]:
	sql = "SELECT id, name, email FROM users ORDER BY id"
	cur = conn.cursor()
	try:
		cur.execute(sql)
		rows = cur.fetchall()
		return [dict(r) for r in rows]
	finally:
		cur.close()

# Example
# user = get_user_by_id(conn, user_id)
# users = get_all_users(conn)
```

3) Update

Update a user's name and/or email. Returns number of affected rows.

```python
def update_user(conn: sqlite3.Connection, user_id: int, name: str | None = None, email: str | None = None) -> int:
	fields: list[str] = []
	params: list[Any] = []
	if name is not None:
		fields.append("name = ?")
		params.append(name)
	if email is not None:
		fields.append("email = ?")
		params.append(email)
	if not fields:
		return 0
	params.append(user_id)
	sql = f"UPDATE users SET {', '.join(fields)} WHERE id = ?"
	cur = conn.cursor()
	try:
		with conn:
			cur.execute(sql, tuple(params))
			return cur.rowcount
	finally:
		cur.close()

# Example
# update_count = update_user(conn, user_id, name="Alice Smith")
```

4) Delete

Delete a user by id. Returns number of deleted rows.

```python
def delete_user(conn: sqlite3.Connection, user_id: int) -> int:
	sql = "DELETE FROM users WHERE id = ?"
	cur = conn.cursor()
	try:
		with conn:
			cur.execute(sql, (user_id,))
			return cur.rowcount
	finally:
		cur.close()

# Example
# deleted = delete_user(conn, user_id)
```

Using the functions together (example script)

```python
def example_flow():
	conn = get_connection("example.db")
	create_users_table(conn)

	# Create
	alice_id = create_user(conn, "Alice", "alice@example.com")

	# Read
	print(get_user_by_id(conn, alice_id))
	print(get_all_users(conn))

	# Update
	update_user(conn, alice_id, name="Alice Johnson")
	print(get_user_by_id(conn, alice_id))

	# Delete
	delete_user(conn, alice_id)
	print(get_user_by_id(conn, alice_id))

	conn.close()

if __name__ == "__main__":
	example_flow()
```

Best practices and notes
- Use parameterized queries (placeholders ? ) to avoid SQL injection.
- Use the Connection as a context manager (with conn:) to commit/rollback automatically.
- Use UNIQUE constraints (e.g. on email) when appropriate and handle IntegrityError.
- Close cursors or use them in short-lived scope.
- For multi-threading, consider sqlite3.connect(..., check_same_thread=False) and proper synchronization.

Common errors
- sqlite3.IntegrityError: raised on constraint violations (e.g. unique). Handle with try/except.
- sqlite3.OperationalError: SQL syntax or file locking issues.

This file provides a compact, practical example set you can adapt to your application.

```
