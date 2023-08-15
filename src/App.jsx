import { useState } from "react";
import logo from "./assets/logo.png";
import "./App.css";
import Section from "./components/Section";

function App() {
  const [count, setCount] = useState(0);
  return (
    <header>
      <img src={logo} alt="logo netflix" className="logo" />
      <Section />
    </header>
  );
}

export default App;
