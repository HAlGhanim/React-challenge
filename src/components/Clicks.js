import React, { useState } from "react";

const Clicks = () => {
  const [count, setCount] = useState({
    score: 0,
    wallet: 0,
  });
  const copy = { ...count };
  const handleClick = (event) => {
    // setCount(event.target.value);
    copy.score += 1;
    copy.wallet += 1;

    setCount(copy);
    console.log(`clicks: ${event.target.value}`);
  };
  const purchase = () => {
    if (upgradeButton) {
      count.wallet -= 10;
    }
  };
  const upgradeButton = () => {
    if (count.wallet >= 10) {
      return (
        <button type="button" onClick={purchase}>
          purchase double points for 10KD?
        </button>
      );
    }
  };

  return (
    <>
      <div className="scoreButton">
        <p>Score: {count.score}</p>
        <button type="button" onClick={handleClick}>
          Click Me
        </button>
        <div className="wallet">Money: {count.wallet} KD </div>
      </div>
      <div>{upgradeButton()}</div>
    </>
  );
};

export default Clicks;
