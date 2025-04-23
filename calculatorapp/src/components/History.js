import React from "react";
import "../App.css";
function History({ history, setHistory }) {
  return (
    <div className="scrollbar-custom space-y-2 max-h-[450px] overflow-y-auto pr-2 text-sm">
      {history.length === 0 ? (
        <div className="text-white italic text-xl">işlem Geçmişi</div>
      ) : (
        history.map((data, index) => (
          <div key={index} className="relative overflow-hidden">
            <div className="text-xl font-semibold px-3 py-1 rounded text-white transition-all duration-300 transform hover:scale-105">
              {data}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default History;
