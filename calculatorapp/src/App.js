import "./App.css";
import Screen from "../src/components/Screen";
import { useState } from "react";
import Grid from "./components/Grid";
import History from "./components/History";

function App() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);

  const handClick = (value) => {
    setInput((prev) => prev + value);
  };

  const calculate = () => {
    try {
      const result = eval(input).toString();
      setHistory([...history, `${input} = ${result}`]);
      setInput(result);
    } catch (error) {
      console.log("hata alınmakta: ", error);
    }
  };

  const clear = () => {
    setInput("");
    setHistory([...history, "boş işlem"]);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-500 via-fuchsia-200 to-yellow-600">
      <div className="flex gap-6 w-full max-w-3xl p-10">
        {/* Hesap Makinesi */}
        <div className="w-3/4 p-10 border-none rounded-3xl shadow-2xl bg-white bg-opacity-30 text-center transition-all duration-300 transform hover:scale-105 hover:bg-opacity-50">
          <div className="text-4xl font-bold text-white mb-6 drop-shadow-lg transition-all duration-300 transform hover:scale-105">
            Hesap Makinem
          </div>
          <Screen input={input} />
          <Grid calculate={calculate} clear={clear} handClick={handClick} />
        </div>
        {/* Geçmiş Alanı */}
        <div className="w-1/4 bg-white bg-opacity-30 rounded-2xl p-4 text-left text-white shadow-lg backdrop-blur-md transition-all duration-300 transform hover:scale-105">
          <div className="text-2xl font-bold mb-4 bg-opacity-10 mt-5 px-3 py-2 rounded transition-all duration-300 transform hover:scale-105">
            Geçmiş
          </div>
          <History history={history} setHistory={setHistory} />
        </div>
      </div>
    </div>
  );
}

export default App;
