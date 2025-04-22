import "./App.css";
import Screen from "../src/components/Screen";
import { useState } from "react";
import Grid from "./components/Grid";

function App() {
  const [input, setInput] = useState("");

  const handClick = (value) => {
    setInput((prev) => prev + value);
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      console.log("hata alınmakta: ", error);
    }
  };

  const clear = () => setInput("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-500 via-fuchsia-200 to-yellow-600">
      <div className="w-full max-w-xl p-20 border-none border-white rounded-3xl shadow-2xl bg-white bg-opacity-30 text-center transition-all duration-300 transform hover:scale-105 hover:bg-opacity-50">
        <div className="text-4xl font-bold text-white mb-6 drop-shadow-lg">
          Hesap Makinem
        </div>
        <Screen input={input} />
        <Grid calculate={calculate} clear={clear} handClick={handClick} />
      </div>
    </div>
  );
}

export default App;
