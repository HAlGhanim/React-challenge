import React from "react";
import upgrades from "../data/upgrades";
import Button from "./Button";

const ButtonList = ({
  wallet,
  perClick,
  setWallet,
  setPerClick,
  perSecond,
  setPerSecond,
}) => {
  const buttons = upgrades.filter((upgrade) => {
    return wallet >= upgrade.cost;
  });
  const buttonList = buttons.map((upgrade) => {
    return (
      <Button
        upgrade={upgrade}
        perClick={perClick}
        setPerClick={setPerClick}
        wallet={wallet}
        setWallet={setWallet}
        perSecond={perSecond}
        setPerSecond={setPerSecond}
      />
    );
  });
  return <div className="button-list">{buttonList}</div>;
};

export default ButtonList;
