import React from "react";

function Screen({ input }) {
  return (
    <div className="text-white bg-gradient-to-br from-yellow-400 via-fuchsia-300 to-yellow-400  p-4  text-right text-4xl mb-6 border-none rounded-full transition-all duration-300 transform hover:scale-105 ">
      {input || "0"}
    </div>
  );
}

export default Screen;
