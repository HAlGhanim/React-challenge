const Clicks = ({
  count,
  wallet,
  perClick,
  setCount,
  setWallet,
}) => {
  const handleClick = (event) => {
    setCount(count + perClick);
    setWallet(wallet + perClick);
    console.log(`clicks: ${event.target.value}`);
  };

  return (
    <>
      <div className="scoreButton">
        <p>Score: {count}</p>
        <button type="button" onClick={handleClick}>
          Click Me
        </button>
        <div className="wallet">Money: {wallet} KD </div>
      </div>
    </>
  );
};

export default Clicks;
