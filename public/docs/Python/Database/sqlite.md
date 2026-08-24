# SQLite in Python

SQLite is a lightweight, file-based SQL database engine included with Python via the built-in sqlite3 module. It's ideal for small to medium applications, prototypes, testing, and learning SQL and database concepts.
## What is SQLite (in Python)

- A serverless, zero-configuration relational database stored in a single file (.db or .sqlite).
- Accessed in Python with the sqlite3 standard library module (no extra install required).
## Why use SQLite

- Easy setup: no database server to configure or run.
- Portable: the entire database is a single file that can be copied.
- Good for development, prototypes, desktop apps, small websites, and education.
- Fast for many read-heavy and simple write workloads.
## Limitations / Cons

- Not designed for high-concurrency write-heavy applications (database-level write locks).
- Lacks some advanced features found in full RDBMS (e.g., advanced replication, role-based security, some analytics features).
- File-based: corruption risk if storage or process crashes are mishandled.
## Pros

- Included with Python and simple to use.
- Low resource overhead.
- ACID-compliant (with proper transactions).
- SQL support for most common queries.
## Basic usage (quick example)

1. Connect and create a table:

```python
import sqlite3

conn = sqlite3.connect('example.db')  # creates file if missing
cur = conn.cursor()
cur.execute('''
CREATE TABLE IF NOT EXISTS users (
	id INTEGER PRIMARY KEY,
	name TEXT NOT NULL,
	email TEXT UNIQUE
)
''')
conn.commit()
```

2. Insert and query safely using parameters:

```python
cur.execute('INSERT INTO users (name, email) VALUES (?, ?)', ('Alice', 'alice@example.com'))
conn.commit()

cur.execute('SELECT id, name, email FROM users')
rows = cur.fetchall()
for r in rows:
	print(r)
```

3. Use context managers and close connection:

```python
with sqlite3.connect('example.db') as conn:
	cur = conn.cursor()
	cur.execute('SELECT COUNT(*) FROM users')
	print(cur.fetchone())
```

## Transactions and safety

- Use conn.commit() to persist changes, conn.rollback() to undo.
- Using the connection as a context manager auto-commits on success and rolls back on exceptions.
- For concurrent access, consider WAL mode: `PRAGMA journal_mode=WAL;` but be aware of limits.
## Using SQLite for learning demonstrations

- Ideal for teaching SQL: simple setup lets learners focus on queries, schema design, and transactions.
- Use example databases and small datasets to demo SELECT, JOIN, GROUP BY, and transactions.
- Combine with Jupyter notebooks for interactive SQL/Python demos (use ipython-sql or run sqlite3 queries via Python code).
- Show migration steps: schema changes, backups (copying the file), and simple ORM usage (e.g., SQLAlchemy) to illustrate abstraction layers.
## Tools and tips

- Use sqlite3 CLI or DB Browser for SQLite for visual exploration of the database file.
- For larger apps migrate to a server RDBMS (PostgreSQL, MySQL) when you need concurrency, scaling, or advanced features.

## Summary

SQLite in Python offers a simple, fast, and portable way to store relational data with minimal setup—excellent for learning, prototyping, and small projects. Be mindful of concurrency and feature limitations when designing production systems.


