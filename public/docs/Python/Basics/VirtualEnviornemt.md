# Python Virtual Environment

A **virtual environment (`venv`)** creates an isolated Python environment for a project. It allows you to install project-specific libraries without affecting other Python projects or the system-wide Python installation.

This helps avoid **package and version conflicts** between different projects.

---

# To Start Virtual Environment in Python

> Run the following command in the terminal:

```bash
python -m venv venv
```

It will create a `venv` folder in your project directory.

For example, if your project is `ResumeAnalyzer`:

```text
ResumeAnalyzer/
└── venv/
```

## To Activate Virtual Environment

> Run the following command:

```bash
venv\Scripts\activate
```

When it is activated, you will see `(venv)` in the terminal:

```text
(venv) C:\yourPath>
```

## To Deactivate Virtual Environment

> Run this inside the terminal:

```bash
deactivate
```

**Remember:**

```text
Create     → python -m venv venv
Activate   → venv\Scripts\activate
Deactivate → deactivate
```
