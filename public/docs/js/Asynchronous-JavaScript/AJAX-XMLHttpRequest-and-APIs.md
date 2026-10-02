# 🌐 JavaScript AJAX — `XMLHttpRequest` & API Requests

## What is AJAX?

**AJAX** stands for **Asynchronous JavaScript and XML**.

It is a technique for making HTTP requests from JavaScript without reloading the entire webpage.

`XMLHttpRequest` is one way to make AJAX requests.

Today, APIs commonly use **JSON** instead of XML, and `fetch()` is commonly used for making requests.

### Basic Flow

```text
JavaScript
    ↓
HTTP Request
    ↓
Server / API
    ↓
Response
    ↓
JavaScript processes the data
    ↓
Update the webpage
```
`XMLHttpRequest` is used to make HTTP requests from JavaScript and receive data from a server or API.

In this example, we send a `GET` request to the GitHub API and access information from the response.

---

## What is `XMLHttpRequest`?

`XMLHttpRequest` is a JavaScript object used to make HTTP requests and receive responses.

```js
const xhr = new XMLHttpRequest()
```

This creates a new `XMLHttpRequest` object.

---

## API Request URL

First, store the API URL:

```js
const request = "https://api.github.com/users/hiteshchoudhary"
```

This URL is an API endpoint that returns information about a GitHub user.

---

## Creating an `XMLHttpRequest`

```js
const xhr = new XMLHttpRequest()
```

Now we have an `xhr` object that can be used to make the request.

---

## `xhr.open()`

```js
xhr.open('GET', request)
```

`open()` prepares the request.

### Syntax

```js
xhr.open(method, url)
```

- `GET` → HTTP method used to request data
- `request` → API URL

`open()` prepares the request, but it does not send it yet.

---

## `xhr.onreadystatechange`

```js
xhr.onreadystatechange = function(){
    console.log(xhr.readyState)
}
```

`onreadystatechange` runs whenever the `readyState` of the request changes.

The `readyState` tells us the current stage of the request.

---

## `XMLHttpRequest` Ready States

There are **5 ready states**, numbered from `0` to `4`.

### `0` — `UNSENT`

The `XMLHttpRequest` object has been created, but `open()` has not been called yet.

```text
0 → UNSENT
```

### `1` — `OPENED`

`open()` has been called.

```text
1 → OPENED
```

### `2` — `HEADERS_RECEIVED`

`send()` has been called, and the response headers and status are available.

```text
2 → HEADERS_RECEIVED
```

### `3` — `LOADING`

The response is being downloaded.

`responseText` may contain partial response data.

```text
3 → LOADING
```

### `4` — `DONE`

The request has completed.

```text
4 → DONE
```

---

## Checking for `readyState === 4`

In the example:

```js
if(xhr.readyState === 4){
    // request completed
}
```

We check for `4` because it represents the `DONE` state.

After the request reaches this state, we can process the response.

---

## Getting the Response

```js
const data = JSON.parse(this.responseText)
```

`responseText` contains the response body as a string.

When the response contains JSON data, `JSON.parse()` can convert that JSON-formatted string into a JavaScript value, such as an object.

For example:

```js
console.log(data.followers)
```

---

## Checking the Data Type

```js
console.log(typeof data)
```

After parsing the GitHub API response, `data` is a JavaScript object.

Therefore:

```text
object
```

is printed.

---

## Accessing API Data

Once the JSON response has been parsed:

```js
console.log(data.followers)
```

We can access properties from the returned JavaScript object using normal object notation.

For example:

```js
data.followers
```

accesses the `followers` property.

---

## `responseText` and `JSON.parse()`

The basic flow is:

```text
API Response
     ↓
responseText
     ↓
JSON.parse()
     ↓
JavaScript Object
     ↓
Access Properties
```

For example:

```js
const data = JSON.parse(this.responseText)

console.log(data.followers)
```

### Important

`JSON.parse()` is needed when the response body is JSON text that you want to work with as a JavaScript value.

It does **not** mean every API response is always a string. The exact response handling depends on how the response is requested and what the server returns.

---

## Sending the Request

Finally:

```js
xhr.send()
```

`send()` sends the request to the server.

The overall flow is:

```text
Create XMLHttpRequest
        ↓
      open()
        ↓
onreadystatechange
        ↓
      send()
        ↓
   Server responds
        ↓
 readyState changes
        ↓
 readyState === 4
        ↓
  responseText
        ↓
   JSON.parse()
        ↓
JavaScript Object
```

---

## Complete Example

```js
const request = "https://api.github.com/users/hiteshchoudhary"

const xhr = new XMLHttpRequest()

xhr.open('GET', request)

xhr.onreadystatechange = function(){
    console.log(xhr.readyState)

    if(xhr.readyState === 4){
        const data = JSON.parse(this.responseText)

        console.log(typeof data)
        console.log(data.followers)
    }
}

xhr.send()
```

---

## 🧠 Quick Revision

- `XMLHttpRequest` → used to make HTTP requests
- `open()` → prepares the request
- `send()` → sends the request
- `onreadystatechange` → runs when `readyState` changes
- `readyState` → tells the current state of the request
- `readyState === 4` → request is complete
- `responseText` → response body as text
- `JSON.parse()` → converts JSON-formatted text into a JavaScript value
- `data.followers` → accesses a property from the parsed object

---

## Final Takeaways

```text
XMLHttpRequest
      ↓
     open()
      ↓
onreadystatechange
      ↓
     send()
      ↓
readyState === 4
      ↓
 responseText
      ↓
 JSON.parse()
      ↓
JavaScript Object
```

### Ready State Memory Trick

```text
0 → UNSENT
1 → OPENED
2 → HEADERS_RECEIVED
3 → LOADING
4 → DONE
```
### Modern Alternative
> Note: XMLHttpRequest is an older way of making HTTP requests. Modern JavaScript commonly uses the Fetch API for new projects because it provides a cleaner, promise-based interface. However, understanding XMLHttpRequest is still useful for learning how asynchronous HTTP requests and readyState work.

---

## 📝 Practice

### 1 Create an API Request

> Use `XMLHttpRequest` to make a `GET` request to a different public API endpoint.

---

### 2 Log the Ready States

> Create an `XMLHttpRequest` and print every `readyState` change to the console.

---

### 3 Check When the Request Finishes

> Write a condition that runs only when `readyState` becomes `4`.

---

### 4 Parse the Response

> Take the `responseText` from an API request and convert the JSON-formatted response into a JavaScript value using `JSON.parse()`.

---

### 5 Access an API Property

> After parsing an API response, access one property from the returned object and print it.

---

### 6 Print the Data Type

> Use `typeof` to check the type of the parsed API response.

---

### 7 Build the Request Flow

> Write the complete flow yourself:
>
> `XMLHttpRequest → open() → onreadystatechange → send()`

---

### 8 Display API Data

> Make a request to a public API and print two different properties from the response.

---

### 9 Ready State Practice

> Write comments beside each ready state explaining what happens at states `0`, `1`, `2`, `3`, and `4`.

---

### 10 API Response Challenge

> Make an API request and print one piece of useful information from the response only after the request reaches `DONE`.

---

### 11 Multiple Properties

> Choose an API that returns an object and print three different properties from its response.

---

### 12 Mini API Viewer

> Create a simple HTML page with a button. When the button is clicked, make an API request and display one value from the response inside the page.

### 13 GitHub Profile Card — Mini Project 🎴

> Create a GitHub profile card that gets information from a GitHub API and displays it on the page.

Requirements:
- Use `XMLHttpRequest` to make a `GET` request to a GitHub API.
- Parse the JSON response.
- Get the user's:
  - Profile image
  - Name
  - Bio
  - Number of followers
- Create a card using HTML and CSS.
- Add a button such as **"Show Information"**.
- When the button is clicked:
  - Display the user's profile image.
  - Display their name, bio, and follower count.
  - Add a **"Read More"** button to the card.
- Use DOM methods to update the page dynamically.

### Bonus

> Instead of hardcoding the GitHub username in the request URL, add an input field where the user can enter a GitHub username and generate the card for that user.