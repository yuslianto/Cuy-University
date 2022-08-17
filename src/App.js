import "./styles.css";
import React, { useState } from "react";
export default function App() {
  const [pacarSaya, setPacarSaya] = useState(0);
  return (
    <div className="App">
      <h1>Hello</h1>
      <h2>saya memiliki : {pacarSaya} pacar</h2>
      <button onClick={() => setPacarSaya((prev) => prev + 1)}>
        tambah pacar
      </button>
      {pacarSaya >= 1 && (
        <button onClick={() => setPacarSaya((prev) => prev - 1)}>
          putuskan pacar
        </button>
      )}
    </div>
  );
}
