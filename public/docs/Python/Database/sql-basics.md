# SQL Basics (SQLite + Python)

This short guide introduces SQL fundamentals using SQLite with Python. It's aimed at learners who want quick, practical examples and resources to get started.

## Why SQLite + Python
- SQLite is an embedded, zero-configuration SQL database included with Python (module: `sqlite3`).
- Great for learning SQL concepts and building small applications without installing a separate database server.

## Getting started
1. Python (3.6+) required. Most distributions include `sqlite3` in the standard library.
2. Create or open a database file:

```py
import sqlite3
conn = sqlite3.connect('example.db')  # creates file if not exists
cur = conn.cursor()
```

3. Always close the connection when done:

```py
conn.commit()
conn.close()
```

## Basic SQL commands
- CREATE TABLE — define a table and columns
- INSERT — add rows
- SELECT — query rows
- UPDATE — modify rows
- DELETE — remove rows
- CREATE INDEX — speed up queries on columns

## Example: Create, Insert, Query

```py
# create table
cur.execute('''
CREATE TABLE IF NOT EXISTS users (
	id INTEGER PRIMARY KEY,
	name TEXT NOT NULL,
	email TEXT UNIQUE
)''')

# insert rows
cur.execute("INSERT INTO users (name, email) VALUES (?, ?)", ("Alice", "alice@example.com"))
cur.executemany("INSERT INTO users (name, email) VALUES (?, ?)", [
	("Bob", "bob@example.com"),
	("Carol", "carol@example.com")
])
conn.commit()

# simple select
for row in cur.execute('SELECT id, name, email FROM users'):
	print(row)
```

## Query techniques
- Parameterized queries: use `?` placeholders (prevents SQL injection)
- Filtering: `WHERE` with `=`, `<`, `>`, `LIKE`, `IN`, `BETWEEN`
- Sorting: `ORDER BY column ASC|DESC`
- Pagination: `LIMIT <count> OFFSET <skip>`
- Aggregation: `COUNT()`, `SUM()`, `AVG()`, `MIN()`, `MAX()` with `GROUP BY`

## Transactions and error handling
- Use `conn.commit()` to save changes; `conn.rollback()` to undo on error.
- Use context managers:

```py
with sqlite3.connect('example.db') as conn:
	cur = conn.cursor()
	cur.execute('INSERT INTO users (name) VALUES (?)', ('Dave',))
	# commit happens automatically on successful exit
```

## Indexes and performance
- Create indexes for columns used frequently in `WHERE`/`JOIN`:
  `CREATE INDEX IF NOT EXISTS idx_users_email ON users(email)`
- Use EXPLAIN QUERY PLAN to inspect performance in SQLite.

## Common pitfalls
- SQLite is typeless: it uses dynamic typing—declared column types are advisory.
- Concurrent writes are limited; SQLite is best for single-writer or low-concurrency use.

## Learning resources
- Official SQLite docs: https://sqlite.org/docs.html
- Python sqlite3 docs: https://docs.python.org/3/library/sqlite3.html
- SQL tutorial: https://www.sqltutorial.org/
- Interactive practice: https://www.w3schools.com/sql/ and https://www.sqlbolt.com/

## Advanced Queries

### JOIN Operations
Join tables to combine data from multiple tables:

```py
# Create related tables
cur.execute('''CREATE TABLE IF NOT EXISTS orders (
	id INTEGER PRIMARY KEY,
	user_id INTEGER,
	product TEXT,
	amount REAL,
	FOREIGN KEY(user_id) REFERENCES users(id)
)''')

# INNER JOIN - returns matching rows from both tables
cur.execute('''SELECT users.name, orders.product, orders.amount
	FROM users
	INNER JOIN orders ON users.id = orders.user_id
''')

# LEFT JOIN - all rows from left table + matches from right
cur.execute('''SELECT users.name, COUNT(orders.id) as total_orders
	FROM users
	LEFT JOIN orders ON users.id = orders.user_id
	GROUP BY users.id
''')
```

### Subqueries
Use queries within queries:

```py
# Find users who spent more than average
cur.execute('''SELECT name FROM users WHERE id IN (
	SELECT user_id FROM orders
	WHERE amount > (SELECT AVG(amount) FROM orders)
)''')

# Use subquery in FROM clause
cur.execute('''SELECT * FROM (
	SELECT user_id, COUNT(*) as purchase_count FROM orders GROUP BY user_id
) WHERE purchase_count > 2
''')
```

### UNION and UNION ALL
Combine results from multiple queries:

```py
# UNION removes duplicates, UNION ALL keeps them
cur.execute('''
SELECT name FROM users WHERE id < 5
UNION
SELECT name FROM users WHERE id > 3
''')
```

## Data Types in SQLite

| Type | Description | Examples |
|------|-------------|----------|
| NULL | Missing/unknown value | None in Python |
| INTEGER | Signed integers | 42, -100, 0 |
| REAL | Floating-point numbers | 3.14, -2.5 |
| TEXT | Text strings | "hello", 'world' |
| BLOB | Binary data | Images, files, serialized objects |

```py
# Type affinity example
cur.execute('''CREATE TABLE IF NOT EXISTS mixed_types (
	id INTEGER PRIMARY KEY,
	int_col INTEGER,
	real_col REAL,
	text_col TEXT,
	blob_col BLOB
)''')

# SQLite is flexible with types
cur.execute("INSERT INTO mixed_types (int_col, text_col) VALUES (42, 'text')")
cur.execute("INSERT INTO mixed_types (int_col, text_col) VALUES ('100', 200)")  # converts
```

## Constraints and Data Integrity

```py
cur.execute('''CREATE TABLE IF NOT EXISTS employees (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	name TEXT NOT NULL,
	email TEXT UNIQUE NOT NULL,
	age INTEGER CHECK(age >= 18),
	salary REAL DEFAULT 0.0,
	department TEXT NOT NULL
)''')

# AUTOINCREMENT automatically increments id
# NOT NULL ensures column has a value
# UNIQUE prevents duplicate values
# CHECK validates data (age >= 18)
# DEFAULT sets default value if not provided
# PRIMARY KEY uniquely identifies each row
```

## Aggregate Functions and GROUP BY

```py
# Count total rows
cur.execute("SELECT COUNT(*) FROM users")
print(cur.fetchone())

# Sum, average, min, max
cur.execute('''SELECT 
	SUM(amount) as total,
	AVG(amount) as average,
	MIN(amount) as minimum,
	MAX(amount) as maximum
FROM orders''')

# GROUP BY with HAVING
cur.execute('''SELECT user_id, COUNT(*) as orders, SUM(amount) as total
	FROM orders
	GROUP BY user_id
	HAVING SUM(amount) > 100
''')

# DISTINCT to remove duplicates
cur.execute("SELECT DISTINCT category FROM products")
```

## String and Math Operations

```py
# String functions
cur.execute("SELECT name FROM users WHERE name LIKE 'A%'")  # starts with A
cur.execute("SELECT UPPER(name) FROM users")  # uppercase
cur.execute("SELECT LOWER(name) FROM users")  # lowercase
cur.execute("SELECT LENGTH(name) FROM users")  # string length
cur.execute("SELECT SUBSTR(name, 1, 3) FROM users")  # substring

# Math functions
cur.execute("SELECT ABS(-5), ROUND(3.7), RANDOM() % 100")
```

## Date and Time Functions

```py
# Current date/time
cur.execute("SELECT DATE('now')")  # 2024-01-15
cur.execute("SELECT TIME('now')")  # 14:30:45
cur.execute("SELECT DATETIME('now')")  # 2024-01-15 14:30:45

# Date arithmetic
cur.execute("SELECT DATE('now', '+7 days')")  # 7 days from now
cur.execute("SELECT DATE('now', '-1 month')")  # 1 month ago
cur.execute("SELECT STRFTIME('%Y-%m-%d', '2024-01-15')")  # format dates
```

## CRUD Operations - Full Examples

### CREATE
```py
cur.execute('''CREATE TABLE IF NOT EXISTS products (
	id INTEGER PRIMARY KEY,
	name TEXT NOT NULL,
	category TEXT,
	price REAL NOT NULL,
	stock INTEGER DEFAULT 0,
	created_at DATETIME DEFAULT CURRENT_TIMESTAMP
)''')
conn.commit()
```

### READ
```py
# Fetch one row
cur.execute("SELECT * FROM products WHERE id = ?", (1,))
row = cur.fetchone()
print(row)

# Fetch all rows
cur.execute("SELECT * FROM products")
rows = cur.fetchall()
for row in rows:
	print(row)

# Fetch with dictionary
cur.row_factory = sqlite3.Row  # Access columns by name
cur.execute("SELECT * FROM products WHERE price > ?", (50,))
for row in cur.fetchall():
	print(row['name'], row['price'])
```

### UPDATE
```py
# Update single row
cur.execute("UPDATE products SET price = ? WHERE id = ?", (99.99, 1))

# Update multiple rows
cur.execute("UPDATE products SET stock = stock - 1 WHERE category = ?", ('Electronics',))

# Update with calculation
cur.execute("UPDATE products SET price = price * 1.1 WHERE stock < 5")

conn.commit()
```

### DELETE
```py
# Delete specific row
cur.execute("DELETE FROM products WHERE id = ?", (1,))

# Delete with condition
cur.execute("DELETE FROM products WHERE price < 10 AND stock = 0")

# Delete all (use with caution!)
cur.execute("DELETE FROM products")

conn.commit()
```

## Error Handling and Validation

```py
import sqlite3

try:
	conn = sqlite3.connect('example.db')
	cur = conn.cursor()
	
	try:
		cur.execute("INSERT INTO users (name, email) VALUES (?, ?)", ("John", "john@example.com"))
		conn.commit()
	except sqlite3.IntegrityError as e:
		print(f"Integrity error: {e}")
		conn.rollback()
	except sqlite3.OperationalError as e:
		print(f"Operational error: {e}")
		conn.rollback()
finally:
	conn.close()
```

## Database Backup and Maintenance

```py
# Backup database
import shutil
shutil.copy('example.db', 'example_backup.db')

# Vacuum - optimize database
cur.execute("VACUUM")

# Check integrity
cur.execute("PRAGMA integrity_check")
result = cur.fetchone()
print("Database OK" if result[0] == "ok" else result)

# Get database info
cur.execute("PRAGMA table_info(users)")
for col in cur.fetchall():
	print(col)  # (cid, name, type, notnull, dflt_value, pk)
```

## Performance Optimization Tips

1. **Use indexes wisely:**
   ```py
   cur.execute("CREATE INDEX idx_users_email ON users(email)")
   cur.execute("CREATE INDEX idx_orders_user_id ON orders(user_id)")
   ```

2. **Batch operations:**
   ```py
   # Slower - multiple roundtrips
   for i in range(1000):
	   cur.execute("INSERT INTO logs VALUES (?)", (i,))
   
   # Faster - single batch
   cur.executemany("INSERT INTO logs VALUES (?)", [(i,) for i in range(1000)])
   conn.commit()
   ```

3. **Use transactions:**
   ```py
   conn.isolation_level = None  # Autocommit mode
   cur.execute("BEGIN")
   # ... multiple operations ...
   cur.execute("COMMIT")
   ```

4. **Analyze query plans:**
   ```py
   cur.execute("EXPLAIN QUERY PLAN SELECT * FROM users WHERE email = ?", ('test@example.com',))
   for row in cur.fetchall():
	   print(row)
   ```

## Real-World Example: Task Manager

```py
import sqlite3
from datetime import datetime

def init_db():
	conn = sqlite3.connect('tasks.db')
	cur = conn.cursor()
	cur.execute('''CREATE TABLE IF NOT EXISTS tasks (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		title TEXT NOT NULL,
		description TEXT,
		priority INTEGER CHECK(priority IN (1, 2, 3)),
		status TEXT DEFAULT 'pending',
		created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
		due_date DATE
	)''')
	conn.commit()
	return conn

def add_task(conn, title, description, priority, due_date=None):
	cur = conn.cursor()
	cur.execute('''INSERT INTO tasks (title, description, priority, due_date)
		VALUES (?, ?, ?, ?)''', (title, description, priority, due_date))
	conn.commit()
	return cur.lastrowid

def get_tasks(conn, status='pending'):
	cur = conn.cursor()
	cur.execute('''SELECT * FROM tasks WHERE status = ? ORDER BY priority DESC, due_date ASC''', (status,))
	return cur.fetchall()

def update_task_status(conn, task_id, new_status):
	cur = conn.cursor()
	cur.execute("UPDATE tasks SET status = ? WHERE id = ?", (new_status, task_id))
	conn.commit()

# Usage
conn = init_db()
add_task(conn, "Learn SQL", "Complete SQL basics course", 1, "2024-02-15")
add_task(conn, "Build project", "Create a database app", 2, "2024-02-20")
print(get_tasks(conn))
update_task_status(conn, 1, 'completed')
conn.close()
```

## Common SQL Mistakes to Avoid

1. **Forgetting to commit:**
   ```py
   # WRONG - changes not saved
   cur.execute("INSERT INTO users (name) VALUES (?)", ("John",))
   
   # RIGHT
   cur.execute("INSERT INTO users (name) VALUES (?)", ("John",))
   conn.commit()
   ```

2. **Not using parameterized queries (SQL injection):**
   ```py
   # WRONG - vulnerable to SQL injection
   name = "'; DROP TABLE users; --"
   cur.execute(f"SELECT * FROM users WHERE name = '{name}'")
   
   # RIGHT - safe
   cur.execute("SELECT * FROM users WHERE name = ?", (name,))
   ```

3. **Incorrect type handling:**
   ```py
   # WRONG - mixing types
   cur.execute("SELECT * FROM users WHERE id = '" + str(user_id) + "'")
   
   # RIGHT - let SQLite handle types
   cur.execute("SELECT * FROM users WHERE id = ?", (user_id,))
   ```

4. **Not handling NULL properly:**
   ```py
   # WRONG
   cur.execute("SELECT * FROM users WHERE email = NULL")
   
   # RIGHT
   cur.execute("SELECT * FROM users WHERE email IS NULL")
   ```

## Quick Exercises

1. **Create a complete inventory system:**
   - Categories table (id, name)
   - Products table (id, category_id, name, price, stock)
   - Track stock movements with triggers or manual logging
   - Query: Find low-stock items by category

2. **Build a blog database:**
   - Users table (id, username, email, created_at)
   - Posts table (id, user_id, title, content, published_at)
   - Comments table (id, post_id, user_id, text, created_at)
   - Queries: Posts with comment count, user's recent posts, trending posts

3. **Implement a school grading system:**
   - Students table (id, name, email, enrollment_date)
   - Courses table (id, name, instructor, credits)
   - Enrollments table (student_id, course_id)
   - Grades table (enrollment_id, assignment, score)
   - Calculate GPA, class rankings, course statistics

4. **Create a social network database:**
   - Users, Posts, Likes, Follows tables
   - Query: Feed (posts from followed users), mutual friends, top posts

## Primary and Foreign Keys

- **Primary Key:** A unique identifier for each row in a table. Typically defined on a single column (e.g., id) and enforces uniqueness and NOT NULL.

	Example:

	```sql
	CREATE TABLE users (
			id INTEGER PRIMARY KEY,
			username TEXT NOT NULL,
			email TEXT
	);
	```

- **Foreign Key:** A column (or set of columns) that references the primary key of another table to enforce referential integrity.

	Example:

	```sql
	CREATE TABLE posts (
			id INTEGER PRIMARY KEY,
			user_id INTEGER,
			title TEXT,
			content TEXT,
			FOREIGN KEY(user_id) REFERENCES users(id)
	);
	```

- **Notes:**
	- SQLite enforces foreign keys only when PRAGMA foreign_keys = ON; (enable in your connection).
	- Use composite primary/foreign keys for many-to-many join tables when needed.

## Tips for Production Use

- **Don't use SQLite for:**
  - High-concurrency applications (multiple writers)
  - Large datasets (100GB+)
  - Multi-process applications
  
- **Do use SQLite for:**
  - Desktop applications
  - Mobile apps (on device storage)
  - Single-writer applications
  - Development and testing
  - Low to medium traffic web apps

- **Upgrade to PostgreSQL or MySQL when:**
  - Concurrent write operations are critical
  - Data size exceeds available disk
  - Complex replication is needed
  - Advanced permissions required

---
Comprehensive SQL reference with SQLite and Python for learning, building, and optimizing databases. Happy coding!
```
