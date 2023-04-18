import React, { useState } from "react";
import dynamic from "next/dynamic";

const Button = dynamic(() => import("microfrontend1/Button"), { ssr: false });

function Home() {
  const [count, SetCount] = useState(0);

  const handleIncrement = () => {
    SetCount((prevCount) => prevCount + 1);
  };

  return (
    <div style={{ border: "1px solid black" }}>
      <h1>Host App</h1>
      <div>Count: {count}</div>
      <Button onClick={handleIncrement} />
    </div>
  );
}

export default Home;
