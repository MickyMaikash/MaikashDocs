# Jetpack Compose — Fundamentals

## What Is a Composable Function?

A **Composable function** is a core building block of the UI in Jetpack Compose.

It defines a part of the user interface. We mark a function as composable using the `@Composable` annotation.

### Example

```kotlin
@Composable
fun Greet() {
    Text(
        text = "Hello Jetpack Compose"
    )
}
```

### Understanding the Code

- `@Composable` — marks the function as a composable function.
- `fun Greet()` — declares a function named `Greet`.
- `Text()` — displays text in the UI.
- `text = "Hello Jetpack Compose"` — specifies the text to display.

When `Greet()` is called from a suitable Compose UI context, it displays the text **Hello Jetpack Compose**.

> **Remember:** `@Composable` tells Jetpack Compose that a function participates in building the UI.

---

## How to Preview a Composable?

Jetpack Compose provides the `@Preview` annotation to preview a composable function directly in Android Studio without running the app on a device or emulator.

### Example

```kotlin
@Preview(showSystemUi = true)
@Composable
fun GreetPreview() {
    Greet()
}
```

### Understanding the Code

- `@Preview` — allows Android Studio to display a preview of the composable.
- `showSystemUi = true` — includes the system UI in the preview, such as the status bar and navigation area.
- `@Composable` — marks `GreetPreview()` as a composable function.
- `Greet()` — displays the UI defined by the `Greet` composable.

**Important:** `GreetPreview()` is primarily a preview entry point. The `@Preview` annotation itself does not automatically display this UI when the app runs normally.

---

## 🧠 Quick Revision

- A composable function is a core building block of Jetpack Compose UI.
- Use `@Composable` to mark a composable function.
- `Text()` displays text.
- `@Preview` lets you inspect a composable in Android Studio.
- `showSystemUi = true` includes the system UI in the preview.

---

## 📝 Practice

### 1 Create a Greeting

Create a composable function named `Welcome()` that displays `"Welcome to Android Development"`.
Create a preview function for `Welcome()` and enable the system UI.

### 2 Reuse a Composable

Create a composable named `GoodMorning()` that displays `"Good morning!"`. Then create a preview function that calls it.
