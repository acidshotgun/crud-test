import React from "react";
import axios from "axios";
import "./App.css";

function App() {
  const testFetch = () => {
    axios
      .get("http://localhost:3001/posts")
      .then((res) => console.log(res.data));
  };

  return (
    <div>
      <h1>Hello world</h1>
      <button onClick={testFetch}>Click me to fetch!!</button>
    </div>
  );
}

export default App;
