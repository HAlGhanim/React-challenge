import { useEffect } from "react";
const Clicks = ({
  count,
  wallet,
  perClick,
  setCount,
  setWallet,
  perSecond,
  setPerSecond,
}) => {
  const handleClick = (event) => {
    setCount(count + perClick);
    setWallet(wallet + perClick);
    console.log(`clicks: ${event.target.value}`);
  };
  if (count > 10000) {
    setPerSecond(3);
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setWallet((wallet) => wallet + perSecond);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="scoreButton">
        <p>Score: {count}</p>
        <button type="button" onClick={handleClick}>
          Click Me
        </button>
        <div className="wallet">Money: {wallet} KD </div>
      </div>
      <p className="text">
        Each click grants {perClick} points and you gain {perSecond} per second.
      </p>
    </>
  );
};

export default Clicks;
