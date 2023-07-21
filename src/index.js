import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// npm install -g json-server
// npm install -D tailwindcss
// npx tailwindcss init

// Redux: The core library enables the redux architecture.
// React Redux: Simplifies connecting your React components to the Redux store.
// React Toolkit: Intended to be the standard way to write Redux logic.
// Redux DevTools Extension: Connects your Redux application to Redux DevTools
//
// npm install redux react-redux redux-devtools-extension @reduxjs/toolkit

// 1. Create Store with empty reducer
// 2. Add redux provider and connect to the store in Index.ts
// 3. Create slice with initialState and return reducer
// 4. Import the reducer in store and add it to the reducer.

// Redux Thunk: Allows you to write asynchronous logic in your Redux actions.
// Axios : A simple promise based HTTP client for the browser and node.js

// npm install redux-thunk axios

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
