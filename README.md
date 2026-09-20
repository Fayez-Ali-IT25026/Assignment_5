# Dev Stack

Dev Stack is a React and TypeScript project where users can explore different development technologies and create their own technology stack. It includes technologies from frontend, backend, database, programming languages, styling, and other development tools.

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- DaisyUI
- React Toastify
- JSON
- Vite

## Features

- Users can explore different technologies with their category, rating, difficulty, and description.
- Users can add technologies to their own stack and remove them when needed.
- The website is responsive and works on desktop, tablet, and mobile devices.

## React Questions

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript or TypeScript. It makes it easier to create and understand the UI of React components.

### 2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component. State is data that is managed inside a component and can change when the user interacts with the application.

### 3. What does the `useState` hook do, and where did you use it in this project?

The `useState` hook is used to store data inside a React component and update that data when needed.

In this project, I used `useState` to store the technology data, selected technologies, and loading state.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

The `useEffect` hook is used to perform side effects in a React component.

I used `useEffect` to load the technology data from the local JSON file when the component loads.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

React needs a unique `key` to identify each item in a list. It helps React understand which item has changed, been added, or removed.

In this project, I used the technology `id` as the key.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means displaying something only when a specific condition is true.

For example, I used conditional rendering to show the empty stack message:

```jsx
{stack.length === 0 && (
  <p>Your stack is empty</p>
)}

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component can pass data or functions to a child component through props.

In this project, the DevStack component passes the handleAddToStack function to the Cards component. When the user clicks the "Add to Stack" button, the Cards component calls that function and sends the selected technology back to the parent.