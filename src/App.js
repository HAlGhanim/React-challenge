import { useState, useEffect } from "react";
import "./App.css";
import Clicks from "./components/Clicks";
import ButtonList from "./components/ButtonList";

function App() {
  const [count, setCount] = useState(0);
  const [wallet, setWallet] = useState(0);
  const [perClick, setPerClick] = useState(1);
  const [perSecond, setPerSecond] = useState(0);

  return (
    <>
      <Clicks
        count={count}
        wallet={wallet}
        perClick={perClick}
        setCount={setCount}
        setWallet={setWallet}
        perSecond={perSecond}
        setPerSecond={setPerSecond}
      />
      <ButtonList
        wallet={wallet}
        setPerClick={setPerClick}
        perClick={perClick}
        setWallet={setWallet}
        perSecond={perSecond}
        setPerSecond={setPerSecond}
      />
    </>
  );
}

export default App;
