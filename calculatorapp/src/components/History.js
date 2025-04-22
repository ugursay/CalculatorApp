import React from "react";

function History({ history, setHistory }) {
  return (
    <div className="space-y-2 max-h-[450px] overflow-y-auto pr-2 text-sm ">
      {history.length === 0 ? (
        <div className="text-white italic text-xl">0</div>
      ) : (
        history.map((data, index) => (
          <div
            className="text-xl font-semibold px-3 py-1 rounded text-white transition-all duration-300 transform hover:scale-110"
            key={index}
          >
            {data}
          </div>
        ))
      )}
    </div>
  );
}

export default History;
