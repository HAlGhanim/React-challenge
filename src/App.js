import { useState } from "react";
import "./App.css";
import Clicks from "./components/Clicks";
import ButtonList from "./components/ButtonList";

function App() {
  const [count, setCount] = useState(0);
  const [wallet, setWallet] = useState(0);
  const [perClick, setPerClick] = useState(1);
  return (
    <>
      <Clicks
        count={count}
        wallet={wallet}
        setCount={setCount}
        setWallet={setWallet}
        perClick={perClick}
      />
      <ButtonList
        wallet={wallet}
        setPerClick={setPerClick}
        perClick={perClick}
        setWallet={setWallet}
      />
    </>
  );
}

export default App;
