# Jetpack Compose — Accessing Resources

## What Are Resources?

Resources are files and values stored separately from Kotlin code in Android's `res` directory. They can include strings, colors, images, fonts, and other app assets.

Jetpack Compose provides functions to access these resources and use them in the UI.

Common resource functions:

- `stringResource()` — retrieves a string resource.
- `colorResource()` — retrieves a color resource.
- `painterResource()` — loads a drawable resource.

---

## Accessing String Resources

String resources allow us to store text separately from our Kotlin code, usually in `res/values/strings.xml`.

### Example

```kotlin
@Composable
fun AccessStringsResource() {
    Box(
        modifier = Modifier.fillMaxSize(),
        contentAlignment = Alignment.Center
    ) {
        Text(
            text = "Hello ${stringResource(R.string.Developer_Name)}",
            color = colorResource(R.color.orange)
        )
    }
}
```

### Understanding the Code

- `Box()` creates a layout container.
- `Modifier.fillMaxSize()` makes the `Box` fill the available space.
- `contentAlignment = Alignment.Center` centers the content inside the `Box`.
- `stringResource()` retrieves text from the app's string resources.
- `R.string.Developer_Name` references the string resource named `Developer_Name`.
- `colorResource()` retrieves a color resource.
- `R.color.orange` references the color resource named `orange`.
- `${...}` inserts the retrieved string into another string.

For example, if the string resource contains `"Developer"`, the displayed text becomes:

```
Hello Developer
```

### Resource Location

```txt
res/
└── values/
    ├── strings.xml
    └── colors.xml
```

The resource names in your Kotlin code must match the names defined in your Android resources.
---
## Accessing Image Resources

Images stored in the `drawable` resource directory can be loaded using `painterResource()` and displayed with `Image()`.

### Example

```kotlin
@Composable
fun AccessImageResource() {
    Box(
        modifier = Modifier.fillMaxSize(),
        contentAlignment = Alignment.Center
    ) {
        Image(
            painter = painterResource(R.drawable.headphone),
            contentDescription = "Headphone Image"
        )
    }
}
```

### Understanding the Code

- `Image()` displays an image in the UI.
- `painterResource()` loads a drawable resource.
- `R.drawable.headphone` references the image named `headphone`.
- `contentDescription` provides a description for accessibility services, such as screen readers.

### Resource Location

```
res/
└── drawable/
    └── headphone.png
```

For example, `headphone.png` is referenced as `R.drawable.headphone`, without the file extension.

---

## Using `@Preview`

The `@Preview` annotation lets you inspect a composable directly in Android Studio without running the app on a device or emulator.

### Example

```kotlin
@Preview(showSystemUi = true)
@Composable
fun ResourceAccessPreview() {
    AccessImageResource()
}
```

### Understanding the Code

- `@Preview` allows Android Studio to render the composable in its preview.
- `showSystemUi = true` includes the system UI in the preview.
- `ResourceAccessPreview()` calls `AccessImageResource()`, so the preview displays the headphone image.

You can also preview the string resource example:

```kotlin
@Preview(showSystemUi = true)
@Composable
fun StringResourcePreview() {
    AccessStringsResource()
}
```

---
## Common Resource Functions

| Function            | Purpose                                 |
| ------------------- | --------------------------------------- |
| `stringResource()`  | Retrieves a string resource             |
| `colorResource()`   | Retrieves a color resource              |
| `painterResource()` | Loads a drawable resource               |
| `@Preview`          | Previews a composable in Android Studio |

Android also supports other resource types, such as dimensions, fonts, and styles. You can explore those as you learn them.

## 🧠 Quick Revision

- Resources are stored in the Android `res` directory.
- `R.string.name` references a string resource.
- `R.color.name` references a color resource.
- `R.drawable.name` references a drawable resource.
- `stringResource()` retrieves text.
- `colorResource()` retrieves a color.
- `painterResource()` loads an image resource.
- `Box()` can position its content using `contentAlignment`.
- `Modifier.fillMaxSize()` fills the available space.
- `@Preview(showSystemUi = true)` previews a composable with the system UI.

## Final Takeaways

- Use string resources to keep reusable text separate from Kotlin code and support localization.
- Use drawable resources for images bundled with your app.
- Use color resources when you want to reference colors defined in your resources.
- Provide meaningful image descriptions when appropriate for accessibility.
- Use previews to inspect your UI quickly while developing.

> Memory trick: `stringResource()` → text, `colorResource()` → color, `painterResource()` → image.

## 📝 Practice

Try these exercises in order. Focus on understanding the problem and deciding how to solve it using the concepts you've learned.

### 1. Challenge — Welcome Screen

Create a composable named `WelcomeScreen()` that welcomes someone to your app.

Requirements:

- The welcome message must be stored in Android resources rather than written directly in the composable.
- The message should appear in the center of the screen.
- The screen should have a preview.

### 2. Challenge — Image Explorer

Choose an image from your `drawable` resources and display it on the screen.

Requirements:

- The image should have a meaningful accessibility description.
- Place the image in the center of the screen.
- Create a preview to check the result.

### 3. Challenge — Color Experiment

Create two versions of a simple text screen, each using a different color from your Android resources.

Requirements:

- Both versions should display the same text.
- Compare how the different colors affect the appearance.
- Decide which color works better for your text.
- comment out the worst version and keep the best version

### 4. Challenge — Developer Greeting

Create a screen that welcomes the user to Jetpack Compose and introduces a developer.

Requirements:

- Store the developer's name in Android resources.
- The greeting should include the developer's name.
- Display the greeting in the center of the screen.
- Add a preview to test your work.

> Note: Complete 5-7 After learning Column Layout
### 5. Challenge — Image Greeting

Create a screen that combines an image with a short greeting.

Requirements:

- Choose an appropriate image from your resources.
- The greeting should come from Android resources.
- The text should use a color defined in your resources.
- Center the content on the screen.
- Preview the screen with the system UI visible.

### 6. Challenge — Product Display

Choose a product image from your drawable resources, such as headphones, a phone, or a laptop.

Create a simple screen that displays the product and identifies it with a text label.

Requirements:

- Choose your own product and label.
- Use the resource and layout concepts you've learned.
- Make sure the product image has an appropriate accessibility description.
- Preview the result.

### 7. Mini Project — Developer Introduction

Build a screen that introduces you as a developer.

Your screen should communicate who you are and include a suitable profile image.

Requirements:

- The developer's name and greeting must come from Android resources.
- The screen should display text using a color from your resources.
- The content should be centered on the screen.
- Include a preview with the system UI visible.
- Keep the implementation within the Compose concepts you've learned so far.


## 🎯 UI Practice & References

Use these websites for visual inspiration.

- [Dribbble — Mobile App UI](https://dribbble.com/tags/mobile-app-ui): Explore general mobile interface designs.
- [Dribbble — Minimal Mobile Apps](https://dribbble.com/search/mobile-app): Find simple layouts to recreate.
- [Dribbble — Profile UI](https://dribbble.com/search/profile-mobile-app): Find profile and introduction screen ideas.


