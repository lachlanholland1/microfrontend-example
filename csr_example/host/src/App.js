import React, { useState, lazy, Suspense } from "react";
const Button = lazy(() => import("microfrontend1/Button"));

function App() {
  const [count, SetCount] = useState(0);

  const handleIncrement = () => {
    SetCount((prevCount) => prevCount + 1);
  };

  return (
    <div style={{ border: "1px solid black" }}>
      <h1>Host App</h1>
      <div>Count: {count}</div>
      <Suspense fallback='loading'>
        <Button onClick={handleIncrement} />
      </Suspense>
    </div>
  );
}

export default App;
