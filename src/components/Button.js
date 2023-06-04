import React from "react";

const Button = ({
  upgrade,
  wallet,
  setWallet,
  setPerClick,
  perClick,
  perSecond,
  setPerSecond,
}) => {
  const handleUpgrade = () => {
    setPerClick(perClick + upgrade.ability);
    setWallet(wallet - upgrade.cost);
  };
  
  return (
    <div>
      <button type="button" onClick={handleUpgrade}>
        {upgrade.name}
      </button>
    </div>
  );
};

export default Button;
