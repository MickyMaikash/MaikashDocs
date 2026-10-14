# ✍️ Jetpack Compose — Text & Typography

Text is one of the most commonly used UI components in Jetpack Compose. The `Text()` composable displays text, and we can customize its appearance using properties such as color, font size, font style, font weight, shadows, gradients, and overflow behavior.

---

## Basic Text Styling

The `Text()` composable provides several properties for changing the appearance of text.

### Example

```kotlin
@Composable
fun SimpleText() {
    Box(
        modifier = Modifier
            .fillMaxSize()
            .background(colorResource(R.color.purple_200)),
        contentAlignment = Alignment.Center
    ) {
        Text(
            text = "Hello ${stringResource(R.string.Developer_Name)}",
            color = Color.Blue,
            fontSize = 30.sp,
            fontStyle = FontStyle.Italic,
            fontWeight = FontWeight.Bold,
            style = TextStyle(
                shadow = Shadow(
                    color = Color.Green,
                    blurRadius = 8f
                )
            )
        )
    }
}
```

### Understanding the Properties

- `text` — specifies the text to display.
- `color` — sets the text color.
- `fontSize` — sets the font size. The `sp` unit is used for scalable text.
- `fontStyle` — controls the font style, such as `FontStyle.Italic`.
- `fontWeight` — controls the thickness of the text, such as `FontWeight.Bold`.
- `style` — accepts a `TextStyle` object for additional text styling.
- `shadow` — adds a shadow behind the text.
- `blurRadius` — controls how blurred the shadow appears.

### Important Points

You can use a resource from `colors.xml` for the background while using a built-in Compose color for the text.

For example:

```
.background(colorResource(R.color.purple_200))
```

And:

```
color = Color.Blue
```

Both approaches are valid. Resource colors are useful when you want to keep colors defined separately from your Kotlin code.

---

## Font Style vs Font Weight

These properties control different aspects of text appearance.

| Property     | Purpose                           | Example            |
| ------------ | --------------------------------- | ------------------ |
| `fontStyle`  | Changes the style of the font     | `FontStyle.Italic` |
| `fontWeight` | Changes the thickness of the font | `FontWeight.Bold`  |
| `fontSize`   | Changes the size of the text      | `30.sp`            |
| `color`      | Changes the text color            | `Color.Blue`       |

Example:

```kotlin
Text(
    text = "Jetpack Compose",
    fontSize = 28.sp,
    fontStyle = FontStyle.Italic,
    fontWeight = FontWeight.Bold,
    color = Color.Blue
)
```

The text will be large, bold, italic, and blue.

---

## Applying a Shadow to Text

A shadow can make text visually stand out from its background.

```kotlin
Text(
    text = "Shadow Text",
    style = TextStyle(
        shadow = Shadow(
            color = Color.Green,
            blurRadius = 8f
        )
    )
)
```

Here:

- `TextStyle()` defines additional text styling.
- `Shadow()` configures the shadow.
- `color` specifies the shadow color.
- `blurRadius` controls the amount of blur.

You can experiment with different shadow colors and blur values to see how the text changes.

---

## Creating Colorful Text With a Gradient

Jetpack Compose allows us to apply a gradient brush to part of a text string using `buildAnnotatedString()`, `SpanStyle()`, and `withStyle()`.

### Example

```kotlin
@Composable
fun ColorfulText() {

    val rainbowColors = listOf(
        Color.Blue,
        Color.Green,
        Color.Yellow,
        Color.Red,
        Color.Magenta,
        Color.Cyan
    )

    Box(
        modifier = Modifier.fillMaxSize(),
        contentAlignment = Alignment.Center
    ) {
        Text(
            text = buildAnnotatedString {
                append("Do not allow people to dim your shine\n")

                withStyle(
                    SpanStyle(
                        brush = Brush.linearGradient(
                            colors = rainbowColors
                        )
                    )
                ) {
                    append("Because they are blinded!")
                }

                append("\nTell them to put sunglasses on.")
            }
        )
    }
}
```

### Understanding the Code

- `listOf()` creates a list of colors.
- `Brush.linearGradient()` creates a linear gradient using the supplied colors.
- `buildAnnotatedString()` builds a string that can contain differently styled sections.
- `append()` adds text to the string.
- `withStyle()` applies a style to the text added inside its block.
- `SpanStyle()` defines the style for a particular section of text.
- `brush` applies the gradient to that section.

### How the Text Is Styled

```
Do not allow people to dim your shine
                 ↓
          Normal text

Because they are blinded!
                 ↓
          Gradient text

Tell them to put sunglasses on.
                 ↓
          Normal text
```

Only the text inside `withStyle()` receives the gradient.

> **Remember:** Use `buildAnnotatedString()` when you want different parts of one text to have different styles.

---

## Automatically Scrolling Text With `basicMarquee()`

Sometimes text is too long to display comfortably in the available space. The `basicMarquee()` modifier can make text scroll horizontally when it overflows.

### Example

```kotlin
@Composable
fun HorizontalScrollableText() {

    Box(
        modifier = Modifier.fillMaxSize(),
        contentAlignment = Alignment.Center
    ) {
        Text(
            text = "Welcome to Disney Land! Meet the most adventurous creatures on Earth. Dora the Destroyer",
            modifier = Modifier.basicMarquee(),
            fontSize = 40.sp
        )
    }
}
```

### Understanding the Code

- `Modifier.basicMarquee()` enables marquee scrolling when the text overflows.
- `fontSize = 40.sp` makes the text larger.
- `Box()` provides a container for positioning the text.

### Important Points

- Marquee scrolling is useful for long titles or announcements.
- The text needs to overflow the available space for scrolling to be useful.
- The actual scrolling behavior depends on the available layout space and marquee configuration.

---

## Limiting Text With `maxLines`

The `maxLines` property controls the maximum number of lines that a `Text()` composable can display.

```kotlin
Text(
    text = "This is a long description that may need several lines to display completely.",
    maxLines = 2
)
```

With `maxLines = 2`, the text is limited to two displayed lines.

---

## Handling Overflow With `TextOverflow.Ellipsis`

When text exceeds its available space, we can use `TextOverflow.Ellipsis` to indicate that some text has been omitted.

### Example

```kotlin
@Composable
fun OverflowingText() {
    Box(
        modifier = Modifier.fillMaxSize(),
        contentAlignment = Alignment.Center
    ) {
        Text(
            text = "Welcome to Disney Land! ".repeat(40),
            maxLines = 2,
            fontSize = 40.sp,
            overflow = TextOverflow.Ellipsis
        )
    }
}
```

### Understanding the Code

- `repeat(40)` repeats the string 40 times.
- `maxLines = 2` limits the displayed text to two lines.
- `overflow = TextOverflow.Ellipsis` displays an ellipsis when text is truncated.

The displayed text may look similar to:

```
Welcome to Disney Land! Welcome to
Disney Land! Welcome to Disney...
```

The exact truncation depends on the available width, font size, and text layout.

### `maxLines` vs `overflow`

| Property   | Purpose                                  |
| ---------- | ---------------------------------------- |
| `maxLines` | Limits how many lines are displayed      |
| `overflow` | Controls how overflowing text is handled |

> **Remember:** `maxLines` sets the limit, while `TextOverflow.Ellipsis` controls how omitted text is indicated.

---

## Previewing Text Composables

Use `@Preview` to inspect your text UI directly in Android Studio.

```kotlin
@Preview(showSystemUi = true)
@Composable
fun UiPreview() {
    OverflowingText()
}
```

You can replace `OverflowingText()` with `SimpleText()` or `ColorfulText()` to preview those composables instead.

---

## 🧠 Quick Revision

- `Text()` displays text.
- `fontSize` controls text size.
- `fontStyle` controls styles such as italics.
- `fontWeight` controls text thickness.
- `TextStyle` provides additional styling options.
- `Shadow` adds a shadow to text.
- `buildAnnotatedString()` builds text with multiple styles.
- `withStyle()` applies a style to a section of text.
- `Brush.linearGradient()` creates a linear gradient.
- `Modifier.basicMarquee()` enables scrolling for overflowing text.
- `maxLines` limits the displayed number of lines.
- `TextOverflow.Ellipsis` indicates truncated text.
- `@Preview` lets you inspect your UI in Android Studio.

---

## Final Takeaways

> **Memory trick:** `fontSize` → size, `fontWeight` → thickness, `fontStyle` → style, `maxLines` → line limit, `Ellipsis` → show omitted text.

- Use simple styling properties for everyday text.
- Use `TextStyle` when you need additional styling, such as shadows.
- Use annotated strings when different parts of one sentence need different styles.
- Use marquee scrolling for suitable long text.
- Use `maxLines` and `TextOverflow.Ellipsis` to handle long descriptions in limited space.
- Always preview your changes to see how the text looks.

---


# 📝 Practice

Complete these exercises in order. Start by experimenting with individual text properties, then combine what you've learned to create more expressive text designs.

### 1. Challenge — Style a Heading

Create a composable named `StyledHeading()` that displays a heading for your Android learning journey.

Requirements:

- Display `"My Android Journey"`.
- Make the text bold and italic.
- Choose a font size of `32.sp`.
- Choose a text color that suits the heading.
- Position the text in the center of the screen.
- Add a preview.

### 2. Challenge — Experiment With Text Shadows

Create a composable named `ShadowText()` that displays `"Keep Learning"` with a shadow effect.

Requirements:

- Experiment with different shadow colors.
- Try different `blurRadius` values.
- Observe how the shadow changes the appearance of the text.
- Choose the combination you like best.
- Preview your changes.

### 3. Challenge — Create a Gradient Phrase

Create a composable named `GradientText()` that displays the following sentence:

`"Dream Big, Work Hard, Stay Focused"`

Requirements:

- Apply a gradient to `"Work Hard"`.
- Keep the remaining words in their normal text style.
- Choose gradient colors that work well together.
- Preview the result.

### 4. Challenge — Build a Scrolling Message

Create a composable named `ScrollingMessage()` that displays a long message.

Requirements:

- Choose a sentence that is too long to fit comfortably in the available space.
- Experiment with different font sizes.
- Make the text scroll when it overflows.
- Observe how the font size affects the scrolling behavior.
- Preview the result.

### 5. Challenge — Handle Long Text

Create a composable named `LimitedText()` that displays a long description without showing all of it.

Requirements:

- Limit the displayed text to two lines.
- Show an ellipsis when the text is truncated.
- Experiment with different font sizes.
- Observe how the amount of visible text changes.
- Preview the result.

### 6. Challenge — Create a Developer Greeting

Create a composable named `DeveloperGreeting()` that welcomes someone to your app.

Requirements:

- Display a greeting retrieved from Android resources.
- Choose a background color from your resources.
- Style the text so the greeting is easy to read.
- Decide on a suitable font size, weight, and text color.
- Center the greeting on the screen.
- Add a preview.

### 7. Challenge — Build a Quote of the Day

Create a composable named `QuoteOfTheDay()` that displays a motivational quote.

Requirements:

- Choose a quote that inspires you.
- Highlight an important phrase with a gradient.
- Make the highlighted phrase bold.
- Add a shadow effect to the text.
- Choose a background color that complements the text.
- Center the content on the screen.
- Preview the result.

### 8. Challenge — Build a Text Styling Showcase

Create a composable named `TextStylingShowcase()` that displays `"Jetpack Compose"`.

Requirements:

- Make the text bold and italic.
- Experiment with font sizes and shadow effects.
- Choose a background color and text color that work well together.
- Center the text on the screen.
- Keep the showcase to a single `Text()` composable.
- Preview the result.

### 9. Mini Project — Motivational Text Screen

Create a composable named `MotivationalTextScreen()` that presents a motivational message in your own style.

Requirements:

- Write a short motivational sentence.
- Highlight one phrase using a gradient.
- Choose an appropriate font size and weight.
- Add a shadow effect.
- Choose a background color that complements the text.
- Center the content on the screen.
- Create a preview with the system UI visible.

### 10. Challenge — Scrolling vs. Ellipsis

Create two composables named `MarqueeExample()` and `EllipsisExample()` to demonstrate two different ways of handling long text.

Requirements:

- Use the same long sentence in both composables.
- Make the first example scroll when its text overflows.
- Make the second example display a maximum of two lines and truncate the remaining text with an ellipsis.
- Experiment with font sizes and compare the results.
- Preview each example separately.
- Write a short note explaining when you would prefer scrolling text and when you would prefer truncation.


## 🎯 UI Practice & References

Use these links for visual inspiration.

- [Dribbble — Typography](https://dribbble.com/tags/typography) — explore text-focused designs and heading styles.
- [Dribbble — Quote App UI](https://dribbble.com/search/quote-app) — find quote cards and motivational layouts.
- [Dribbble — Mobile App UI](https://dribbble.com/tags/mobile-app-ui) — explore general mobile screen designs.




