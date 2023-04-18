import React from "react";

function Button({ onClick }) {
  return (
    <div style={{ border: "1px solid black" }}>
      <h1>Microfrontend1 Button Component</h1>
      <button onClick={onClick}>Increment</button>
    </div>
  );
}

export default Button;
