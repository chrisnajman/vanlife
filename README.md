# Vanlife

In progress ...

## Nested Routes

- Only use if there's some shared UI between elements.
- Not recommended if you only want to eliminate path repetition.

### Example

Which of the following is the best solution?

```jsx
// 1) NON-NESTED - repetition of 'vans' in the paths.
<Route
  path="vans"
  element={<Vans />}
/>
<Route
  path="vans/:id"
  element={<VanDetails />}
/>


// OR

// 2) NESTED - repetition of 'vans' eliminated from paths.
<Route path="vans">
  <Route
    index
    element={<Vans />}
  />
  <Route
    path=":id"
    element={<VanDetails />}
  />
</Route>
```

- Both work, but as `<Vans />` and `<VanDetails />` do **not** share UI, "1) NON-NESTED" is the best choice.

---

## Synch `vite.config.js`, `package.json` and `BrowserRouter basename`

### `vite.config.js`

```JavaScript
base: "/vanlife",

// NOT "/vanlife/",
```

### `package.json`

```JSON
"homepage": "https://chrisnajman.github.io/vanlife",

// NOT "https://chrisnajman.github.io/vanlife/",

```

### `BrowserRouter basename`

```jsx
<BrowserRouter basename="/vanlife">

{/* NOT "/vanlife/" */}
```

---
