import React from "react";

function Grid({ calculate, clear, handClick }) {
  return (
    <div className="grid grid-cols-4 gap-4">
      {[
        "7",
        "8",
        "9",
        "/",
        "4",
        "5",
        "6",
        "*",
        "1",
        "2",
        "3",
        "-",
        "0",
        "C",
        "=",
        "+",
      ].map((btn) => (
        <button
          key={btn}
          onClick={() => {
            if (btn === "=") calculate();
            else if (btn === "C") clear();
            else handClick(btn);
          }}
          className="bg-gradient-to-br from-yellow-400 via-fuchsia-300 to-yellow-400 text-white text-2xl font-semibold py-4 rounded-full shadow-md transition-all duration-300 transform hover:bg-indigo-700 hover:scale-125"
        >
          {btn}
        </button>
      ))}
    </div>
  );
}

export default Grid;
