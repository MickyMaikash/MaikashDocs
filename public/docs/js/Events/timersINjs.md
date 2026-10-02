# ⏱️ JavaScript Timers — `setTimeout()` & `setInterval()`

JavaScript provides timer functions that allow code to run after a certain amount of time or repeatedly at a specific interval.

---

## `setTimeout()`

`setTimeout()` executes a function **once** after the specified delay.

### Syntax

```js
setTimeout(function, delay)
```

The delay is specified in **milliseconds**.

```text
1000 milliseconds = 1 second
2000 milliseconds = 2 seconds
```

### Example

```js
function sayMyName() {
    console.log("Maikash")
}

setTimeout(sayMyName, 2000)
```

The function runs once after approximately 2 seconds.
### Output
```txt
Maikash
```
---

## Passing a Function to `setTimeout()`

We can define a function separately and pass its reference to `setTimeout()`.

```js
function sayMyName() {
    console.log("Maikash")
}

setTimeout(sayMyName, 2000)
```

Notice that we write:

```js
setTimeout(sayMyName, 2000)
```

and not:

```js
setTimeout(sayMyName(), 2000)
```

The function reference is passed to `setTimeout()`, so the timer can call it later.

---

## Using `setTimeout()` to Change HTML

`setTimeout()` can also be used to modify elements after a delay.

### HTML

```html
<h1>Chai aur Code</h1>
```

### JavaScript

```js
const changeText = function () {
    document.querySelector("h1").innerHTML = "This text was changed"
}

setTimeout(changeText, 2000)
```

After approximately 2 seconds, the heading changes.

Before:

```text
Chai aur Code
```

After:

```text
This text was changed
```

---

## Storing the Timer Reference

`setTimeout()` returns a timer identifier.

We can store it in a variable:

```js
const h1change = setTimeout(changeText, 2000)
```

Now `h1change` refers to that scheduled timer.

This becomes useful when we want to cancel the timer.

---

## `clearTimeout()`

`clearTimeout()` cancels a scheduled `setTimeout()`.

### Syntax

```js
clearTimeout(timerReference)
```

Example:

```js
const h1change = setTimeout(changeText, 2000)

clearTimeout(h1change)
```

The `changeText` function will no longer run.

---

## Using a Button to Stop `setTimeout()`

We can combine DOM events with timers.

### HTML

```html
<h1>Chai aur Code</h1>

<button id="stop">Stop</button>
```

### JavaScript

```js
const changeText = function () {
    document.querySelector("h1").innerHTML = "This text was changed"
}

const h1change = setTimeout(changeText, 2000)

document.querySelector("#stop").addEventListener("click", function () {
    clearTimeout(h1change)

    console.log("STOPPED")
})
```

### How It Works

```text
Page loads
    ↓
setTimeout() starts
    ↓
Waits for 2 seconds
    ↓
If Stop is NOT clicked
    ↓
Heading changes
```

If the button is clicked before the timer fires:

```text
Page loads
    ↓
setTimeout() starts
    ↓
Stop button clicked
    ↓
clearTimeout(h1change)
    ↓
Timer cancelled
    ↓
Heading does not change
```

---

## `setInterval()`

`setInterval()` repeatedly executes a function at the specified interval.

### Syntax

```js
setInterval(function, interval)
```

The interval is specified in milliseconds.

```text
1000 milliseconds = 1 second
```

Example:

```js
setInterval(function () {
    console.log("Hello")
}, 2000)
```

The function runs repeatedly with an approximately 2-second interval between executions.

```text
2 seconds → Hello
2 seconds → Hello
2 seconds → Hello
2 seconds → Hello
...
```

Unlike `setTimeout()`, `setInterval()` does not automatically stop after the first execution.

---

## `clearInterval()`

`clearInterval()` stops a running interval.

### Syntax

```js
clearInterval(intervalReference)
```

Example:

```js
const intervalId = setInterval(function () {
    console.log("Running...")
}, 1000)

clearInterval(intervalId)
```

The interval is stopped.

Just like `clearTimeout()`, we pass the timer identifier returned by the timer function.

---

## Starting and Stopping an Interval

We can combine `setInterval()`, `clearInterval()`, and DOM events to create Start and Stop buttons.

### HTML

```html
<h1>Chai aur javascript</h1>

<button id="start">Start</button>
<button id="stop">Stop</button>
```

### JavaScript

```js
const sayDate = function (str) {
    let date = new Date()

    console.log(str, date.toLocaleString())
}

let intervalid

document.querySelector("#start").addEventListener("click", () => {

    if (!intervalid) {
        intervalid = setInterval(sayDate, 1000, "hi")
    }

})

document.querySelector("#stop").addEventListener("click", () => {

    clearInterval(intervalid)
    intervalid = null

})
```

Every second, the current date and time are printed.

Example:

```text
hi 10/2/2026, 7:00:01 PM
hi 10/2/2026, 7:00:02 PM
hi 10/2/2026, 7:00:03 PM
...
```

---

## 🔟 Understanding `intervalid`

First, we create a variable:

```js
let intervalid
```

Initially, it has the value:

```js
undefined
```

When `setInterval()` starts:

```js
intervalid = setInterval(sayDate, 1000, "hi")
```

`intervalid` stores the interval identifier.

So now it contains a value.

---

## Preventing Multiple Intervals

We use:

```js
if (!intervalid) {
    intervalid = setInterval(sayDate, 1000, "hi")
}
```

The condition checks whether an interval is already stored in `intervalid`.

If no interval is running:

```text
intervalid → undefined
!intervalid → true
```

So the interval starts.

If the interval is already running:

```text
intervalid → interval ID
!intervalid → false
```

So another interval is not created.

This prevents multiple intervals from running when the **Start** button is clicked repeatedly.

---

## Stopping and Resetting the Interval

When the Stop button is clicked:

```js
clearInterval(intervalid)
intervalid = null
```

First:

```js
clearInterval(intervalid)
```

stops the interval.

Then:

```js
intervalid = null
```

resets the variable.

This allows the Start button to create a new interval again.

```text
Start
  ↓
Interval starts
  ↓
intervalid contains ID
  ↓
Stop
  ↓
clearInterval()
  ↓
intervalid = null
  ↓
Start can create a new interval again
```

---

## `setTimeout()` vs `setInterval()`

| Function | Behavior |
|---|---|
| `setTimeout()` | Runs once after a delay |
| `clearTimeout()` | Cancels a scheduled timeout |
| `setInterval()` | Runs repeatedly at an interval |
| `clearInterval()` | Stops a running interval |

### Memory Trick

```text
setTimeout  → One time
clearTimeout → Stop timeout

setInterval → Repeatedly
clearInterval → Stop interval
```

---

## 🧠 Quick Revision

### `setTimeout()`

Runs a function once after a delay.

```js
setTimeout(function () {
    console.log("Hello")
}, 2000)
```

### `clearTimeout()`

Cancels a scheduled timeout.

```js
const timer = setTimeout(function () {
    console.log("Hello")
}, 2000)

clearTimeout(timer)
```

### `setInterval()`

Runs a function repeatedly.

```js
setInterval(function () {
    console.log("Hello")
}, 2000)
```

### `clearInterval()`

Stops a running interval.

```js
const interval = setInterval(function () {
    console.log("Hello")
}, 2000)

clearInterval(interval)
```

### `intervalid`

The variable can store the identifier returned by `setInterval()`.

```js
let intervalid

intervalid = setInterval(sayDate, 1000)
```

---

## 🔑 Key Takeaways

- `setTimeout()` schedules a function to run once after a delay.
- The delay is measured in milliseconds.
- `setTimeout()` returns a timer identifier.
- `clearTimeout()` cancels a scheduled timeout.
- `setInterval()` repeatedly runs a function at the specified interval.
- `setInterval()` also returns an interval identifier.
- `clearInterval()` stops a running interval.
- The interval identifier can be stored in a variable.
- `if (!intervalid)` can prevent multiple intervals from being created.
- Setting `intervalid = null` resets the variable after stopping the interval.
- DOM events can be used to start and stop timers.

---

## 📝 Practice

> Try these yourself without looking at the examples above. Use examples different from the examples above.

### 1 Delayed Message

Print `"Hello JavaScript"` after 3 seconds using `setTimeout()`.

---

### 2 Delayed Function

Create a function that prints your name and execute it after 2 seconds.

---

### 3 Change Heading

Create an `<h1>` and change its text after 4 seconds.

---

### 4 Change Paragraph

Create a paragraph and change its text after 3 seconds.

---

### 5 Change Style

Create a `<div>` and change its background color after 2 seconds.

---

### 6 Store Timer

Create a timeout and store its returned timer identifier in a variable.

---

### 7 Cancel Timer

Create a timeout and cancel it using `clearTimeout()` before it executes.

---

### 8 Stop Button

Create a button that cancels a scheduled heading change when clicked.

---

### 9 Repeating Message

Use `setInterval()` to print `"Running..."` every 2 seconds.

---

### 10 Counter

Create a counter that increases every second using `setInterval()`.

---

### 11 Stop Interval

Create a button that stops a running interval using `clearInterval()`.

---

### 12 Prevent Multiple Intervals

Create Start and Stop buttons. Make sure clicking Start multiple times does not create multiple intervals.

---

### 13 Reset Interval ID

Stop an interval and set its identifier variable to `null`.

---

### 14 Start Again

Create Start and Stop buttons where the interval can be stopped and started again.

---

### 15 Display Current Time

Use `setInterval()` to display the current time every second.

---

### 16 Mini Challenge

Create a page with:

- An `<h1>`
- A `Start` button
- A `Stop` button

When `Start` is clicked, start an interval that changes or updates something every second.

When `Stop` is clicked, stop the interval.

Make sure clicking `Start` repeatedly does not create multiple intervals.

---
### 17 Continuous Background Changer 🎨

> Create a page with **Start** and **Stop** buttons.

Requirements:
- When **Start** is clicked, continuously change the page's background color.
- Generate a **random color** each time.
- Change the color every **500ms** or **1 second**.
- When **Stop** is clicked, stop changing the background.
- Make sure clicking **Start** multiple times does **not create multiple intervals**.
- After stopping, the user should be able to click **Start** again to restart the color changer.

**Hint:**  
Use `setInterval()`, `clearInterval()`, and `Math.random()`.

**Bonus:**  
Display the current background color's HEX value somewhere on the page.