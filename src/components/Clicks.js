import React, { useState } from "react";

const Clicks = () => {
  const [count, setCount] = useState({
    score: 0,
    wallet: 0,
  });
  const handleClick = (event) => {
    // setCount(event.target.value);
    const copy = { ...count };
    copy.score += 1;
    copy.wallet += 1;

    setCount(copy);
    console.log(`clicks: ${event.target.value}`);
  };
  return (
    <div className="scoreButton">
      <p>Score: {count.score}</p>
      <button type="button" onClick={handleClick}>
        Click Me
      </button>
      <div className="wallet">Money: {count.wallet} KD </div>
    </div>
  );
};

export default Clicks;
