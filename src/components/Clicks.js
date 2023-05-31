import React, { useState } from "react";

const Clicks = () => {
  const [count, setCount] = useState(0);

  const handleClick = (event) => {
    // setCount(event.target.value);
    setCount((count) => count + 1);
    console.log(`clicks: ${event.target.value}`);
  };
  return (
    <div className="scoreButton">
      <button type="button" onClick={handleClick}>
        Click Me
      </button>
      <p>Score: {count} KD</p>
    </div>
  );
};

export default Clicks;
