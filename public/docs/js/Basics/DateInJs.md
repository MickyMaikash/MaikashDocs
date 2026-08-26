# Dates in JavaScript

> **Date** is a built-in JavaScript object used to work with dates and times.

> The `Date` object can be used to create, display, compare, and extract different parts of dates and times.

> The datatype of a `Date` object is `object`.

---

## Creating a Date

### Creating the Current Date and Time

> to create a Date object containing the current date and time, we can use `new Date()`.

**Example**

```js
let myDate = new Date()

console.log(myDate)
console.log(typeof myDate)
```

**Output**

```text
2026-08-26T05:00:48.680Z
object
```

> The exact output will be different because `new Date()` gives the current date and time when the code runs.

---

### Date.toISOString()

> `toISOString()` converts the date into a string using the ISO 8601 format.

> The format is:

```text
YYYY-MM-DDTHH:mm:ss.sssZ
```

**Example**
```js
let myDate = new Date()

console.log(myDate.toISOString())
```

**Output**
```text
2026-08-26T05:01:43.528Z
```

> `toISOString()` represents the date and time in **UTC**, not local time.

> Because India is `UTC+5:30`, the time shown by `toISOString()` can appear earlier than the local time.

---

### Date.toDateString()

> `toDateString()` returns only the date part in a readable format.

> The format is:

```text
Day Month Date Year
```

**Example**

```js
let myDate = new Date()

console.log(myDate.toDateString())
```

**Output**

```text
Wed Aug 26 2026
```

---

### Date.toLocaleString()

> `toLocaleString()` returns the date and time according to the user's local formatting rules.

**Example**

```js
let myDate = new Date()

console.log(myDate.toLocaleString())
```

**Output**

```text
26/8/2026, 10:33:17 am
```

> The exact format can be different depending on the system's locale.

---

### Date.toString()

> `toString()` converts the Date object into a readable string containing the date, time, and timezone information.

**Example**

```js
let myDate = new Date()

console.log(myDate.toString())
```

**Output**

```text
Wed Aug 26 2026 10:33:46 GMT+0530 (India Standard Time)
```

---

### Date.toLocaleDateString()

> `toLocaleDateString()` returns only the date according to the local formatting rules.

**Example**

```js
let myDate = new Date()

console.log(myDate.toLocaleDateString())
```

**Output**

```text
26/8/2026
```

---

### Date.toJSON()

> `toJSON()` returns the date in the same ISO-style string representation used when converting a Date object to JSON.

**Example**

```js
let myDate = new Date()

console.log(myDate.toJSON())
```

**Output**

```text
2026-08-26T05:04:31.231Z
```

---

### Date.toLocaleTimeString()

> `toLocaleTimeString()` returns only the time according to the local formatting rules.

**Example**

```js
let myDate = new Date()

console.log(myDate.toLocaleTimeString())
```

**Output**

```text
10:34:55 am
```

---

### typeof Date

> A Date created using `new Date()` is an object.

**Example**

```js
let myDate = new Date()

console.log(typeof myDate)
```

**Output**

```text
object
```

---

# Creating a Specific Date

### Using Year, Month, and Date

> we can create a specific date by passing the year, month, and date to `new Date()`.

> Important: when using numbers, JavaScript counts months from `0`.

> `0` = January

> `1` = February

> `2` = March

> `3` = April

> and so on.

**Example**

```js
let newDate = new Date(2023, 0, 23)

console.log(newDate.toDateString())
```

**Output**

```text
Mon Jan 23 2023
```

> Here `0` represents January.

---

### Creating a Date with March

> because JavaScript starts counting months from `0`, `2` represents March.

**Example**

```js
let sDate = new Date(2023, 2, 23)

console.log(sDate.toDateString())
```

**Output**

```text
Thu Mar 23 2023
```

> `2` = March.

---

### Creating Date with Time

> we can also provide hours, minutes, seconds, and milliseconds while creating a Date object.

> The order is:

```text
new Date(year, month, day, hours, minutes, seconds, milliseconds)
```

**Example**

```js
let dateTime = new Date(2023, 2, 23, 6, 4)

console.log(dateTime.toLocaleString())
```

**Output**

```text
23/3/2023, 6:04:00 am
```

> Here:

```text
2023 → year
2    → March
23   → date
6    → hour
4    → minute
```

---

# Creating Date Using a String

### ISO Date String

> we can also create a Date object by passing a date string.

> When using the ISO format `YYYY-MM-DD`, the month is written normally from `01` to `12`, unlike the numeric constructor where months start from `0`.

**Example**

```js
let newDateWay = new Date("2023-01-14")

console.log(newDateWay.toLocaleString())
```

**Output**

```text
14/1/2023, 5:30:00 am
```

> Be careful: date-only ISO strings such as `"2023-01-14"` are interpreted as UTC, so the displayed local time can shift depending on the timezone.

---

### Other Date String Formats

> JavaScript also accepts some other date string formats, but their parsing behavior can vary.

**Example**

```js
let newDateWays = new Date("01-14-2025")

console.log(newDateWays.toLocaleString())
```

**Output**

```text
14/1/2025, 12:00:00 am
```

> `"01-14-2025"` is interpreted as January 14, 2025 in environments that support this format.

> For reliable and predictable date parsing, prefer the ISO format such as `"2025-01-14"`.

---

# Getting Time in Milliseconds

### Date.getTime()

> `getTime()` returns the number of milliseconds that have passed since **January 1, 1970, 00:00:00 UTC**.

> This point in time is commonly called the **Unix Epoch**.

**Example**

```js
let newDate = new Date("2025-01-14")

console.log(newDate.getTime())
```

**Output**

```text
1736812800000
```

> The exact value depends on the date being converted.

---

### Date.now()

> `Date.now()` returns the current time as the number of milliseconds since January 1, 1970, 00:00:00 UTC.

**Example**

```js
let myTimestamp = Date.now()

console.log(myTimestamp)
```

**Output**

```text
1756182600000
```

> The output changes because it represents the current time.

---

### Converting Milliseconds to Seconds

> `Date.now()` gives the time in milliseconds.

> to convert milliseconds into seconds, divide by `1000`.

> `Math.floor()` can be used to remove the decimal part.

**Example**

```js
console.log(Math.floor(Date.now() / 1000))
```

**Output**

```text
1756182600
```

> The exact output will change depending on when the code is executed.

---

# Extracting Parts of a Date

### Date.getDate()

> `getDate()` returns the day of the month.

> The returned value is between `1` and `31`.

**Example**

```js
let nwDate = new Date()

console.log(nwDate.getDate())
```

**Output**

```text
26
```

---

### Date.getMonth()

> `getMonth()` returns the month number.

> Important: JavaScript starts counting months from `0`.

```text
0  → January
1  → February
2  → March
3  → April
...
9  → October
10 → November
11 → December
```

**Example**

```js
let nwDate = new Date()

console.log(nwDate.getMonth())
```

**Output**

```text
7
```

> The output depends on the current month.

---

### Getting Normal Month Number

> because `getMonth()` starts counting from `0`, we can add `1` when we want the month number normally used by people.

**Example**

```js
let nwDate = new Date()

console.log(nwDate.getMonth() + 1)
```

**Output**

```text
8
```

> If the current month is August, `getMonth()` returns `7`, so adding `1` gives `8`.

---

### Date.getDay()

> `getDay()` returns the day of the week as a number.

> JavaScript starts counting from Sunday as `0`.

```text
0 → Sunday
1 → Monday
2 → Tuesday
3 → Wednesday
4 → Thursday
5 → Friday
6 → Saturday
```

**Example**

```js
let nwDate = new Date()

console.log(nwDate.getDay())
```

**Output**

```text
3
```

> The output depends on the current day.

---

# Formatting Date Using toLocaleString()

### Getting the Full Weekday Name

> `toLocaleString()` can accept options to control how the date is displayed.

> The `weekday` option can be used to get the name of the day.

**Example**

```js
let nwDate = new Date()

console.log(nwDate.toLocaleString('default', {
    weekday: "long"
}))
```

**Output**

```text
Wednesday
```

> `"long"` gives the complete weekday name.

---

### Different Weekday Formats

> the `weekday` option can have different values.

```js
let nwDate = new Date()

console.log(nwDate.toLocaleString('default', {
    weekday: "long"
}))

console.log(nwDate.toLocaleString('default', {
    weekday: "short"
}))

console.log(nwDate.toLocaleString('default', {
    weekday: "narrow"
}))
```

**Possible Output**

```text
Wednesday
Wed
W
```

---

# Getting the Current Time as a String

> we can directly call `toLocaleTimeString()` on a new Date object to get the current local time.

**Example**

```js
let myNamed = new Date().toLocaleTimeString()

console.log(myNamed)
```

**Output**

```text
10:00:00 am
```

> The exact output depends on the current time.

---

# padStart()

### Adding Leading Zeros

> `padStart()` is a String method used to add characters to the beginning of a string until it reaches the specified length.

> It is useful when displaying date and time values in a consistent format.

**Example**

```js
let minute = 5

console.log(minute.toString().padStart(2, '0'))
```

**Output**

```text
05
```

> Here `5` is converted to a string and `0` is added at the beginning until the string has a length of `2`.

**Another Example**

```js
let minute = 12

console.log(minute.toString().padStart(2, '0'))
```

**Output**

```text
12
```

> Since `12` already contains two characters, nothing is added.

---

# Quick Reference

| Method | Purpose |
|---|---|
| `new Date()` | Creates the current date and time |
| `toISOString()` | Converts date to ISO/UTC string |
| `toDateString()` | Returns readable date only |
| `toLocaleString()` | Returns localized date and time |
| `toString()` | Returns date, time, and timezone |
| `toLocaleDateString()` | Returns localized date only |
| `toJSON()` | Returns ISO-style date string |
| `toLocaleTimeString()` | Returns localized time only |
| `getTime()` | Returns milliseconds since Unix Epoch |
| `Date.now()` | Returns current milliseconds since Unix Epoch |
| `getDate()` | Returns day of the month |
| `getMonth()` | Returns month from `0` to `11` |
| `getDay()` | Returns weekday from `0` to `6` |
| `padStart()` | Adds characters at the beginning of a string |

---

# 🧠 Quick Practice Dates

---

### Question 1 — Current Date

> Create a `Date` object that stores the current date and time.

> Print the date using `toDateString()`.

---

### Question 2 — Current Date and Time

> Create a `Date` object for the current date and time.

> Print the date and time using `toLocaleString()`.

---

### Question 3 — Current Time

> Create a program that prints only the current local time.

> Use `toLocaleTimeString()`.

---

### Question 4 — Create a Specific Date

> Create a Date object for **15 August 2025**.

> Print it using `toDateString()`.

> Remember that when using the numeric Date constructor, January starts from `0`.

---

### Question 5 — Create a Date with Time

> Create a Date object for:

```text
25 December 2024
6:30 PM
```

> Print the complete date and time using `toLocaleString()`.

---

### Question 6 — Extract Date Information

> Create a Date object for any date.

> Write code to separately print:

- The day of the month
- The month number
- The day of the week

> Remember that `getMonth()` starts from `0` and `getDay()` starts from `0` with Sunday.

---

### Question 7 — Display Normal Month Number

> Create a Date object for any date.

> Use `getMonth()` to get the month number normally used by people.

> For example:

```text
January → 1
February → 2
March → 3
```

> Do not directly write the month number. Extract it from the Date object.

---

### Question 8 — Find the Weekday Name

> Create a Date object for any date.

> Write code that prints the complete weekday name.

> Expected format:

```text
Monday
```

> Use `toLocaleString()` with the appropriate option.

---

### Question 9 — Generate a Timestamp

> Write a program that gets the current timestamp in milliseconds.

> Store the result in a variable called `timestamp`.

> Then print the value.

> Use `Date.now()`.

---

### Question 10 — Convert Timestamp to Seconds

> Use `Date.now()` to get the current timestamp.

> Convert the timestamp from milliseconds to seconds.

> The final result should be an integer without decimal values.

> Use a suitable Math method.

---

### Question 11 — Create a Date from a String

> Create a Date object using the following date:

```text
2023-01-14
```

> Print the date using `toLocaleString()`.

---

### Question 12 — Compare Two Dates

> Create two Date objects:

```text
Date 1 → 15 January 2025
Date 2 → 20 January 2025
```

> Write a program that checks which date is later.

> Do not compare the date strings directly.

---

### Question 13 — Days with Leading Zero

> Create a variable containing a day number:

```js
let day = 5
```

> Convert it to a string and use `padStart()` so that the result becomes:

```text
05
```

> If the value is `15`, the result should remain:

```text
15
```

---

### Question 14 — Display Date in DD/MM/YYYY Format

> Create a Date object for any date.

> Extract the day, month, and year.

> Use `padStart()` where necessary and display the final result in this format:

```text
05/08/2025
```

> Remember that `getMonth()` starts from `0`.

---

### Question 15 — Digital Clock

> Create a simple program that gets the current time and displays:

```text
HH:MM:SS
```

> Each value should contain two digits.

> For example:

```text
09:05:07
```

> Use Date methods and `padStart()` to create the format.

---

### Question 16 — Birthday Date

> Create a Date object for your birthday.

> Print:

- The complete date
- The month number
- The day of the month
- The weekday name

---

### Question 17 — Age Calculation

> Store a person's birth year in a variable.

```js
const birthYear = 2005
```

> Use the current year from a Date object and calculate the person's approximate age.

> Do not manually write the current year.

---

### Question 18 — Date Difference

> Create two Date objects:

```text
Start Date → 1 January 2025
End Date → 10 January 2025
```

> Find the difference between the two dates in milliseconds.

> Then convert the difference into days.

---

### Question 19 — Random Date Year

> Generate a random year between `2000` and `2025`, including both years.

> Create a Date object using that randomly generated year.

> Print the generated year.

> Use `Math.random()` and a Date object.

---

### Question 20 — Random Date

> Generate a random date between two given years.

```js
const minYear = 2000
const maxYear = 2025
```

> Generate a random year between the minimum and maximum year, including both.

> Then generate a random month and a random day and create a Date object.

> Finally, print the generated date using `toDateString()`.

---