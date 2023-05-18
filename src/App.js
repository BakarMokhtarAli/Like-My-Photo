import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
// import Photo from "./components/Photo";
// import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <nav>
      <h1>Like My Photo</h1>
      <h4>Likes: {count}</h4>
      <div className="container">
        <Header count={count} setCount={setCount} />
      </div>
    </nav>
  );
}

export default App;
