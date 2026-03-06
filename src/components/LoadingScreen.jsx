import { useEffect, useState } from "react";

function LoadingScreen({ onComplete }) {
  const [text, setText] = useState("");
  const fullText = "<Hello World />";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]); // if you use a value from outside the effect (like onComplete), you should include it so the effect stays correct.

  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
      <div className="mb-4 text-4xl font-mono font-bold">
        {text} <span className="animate-blink ml-1"> | </span>
      </div>

      <div className="w-[300px] h-[2px] bg-gray-800 rounded overflow-hidden">
        <div className="w-[40%] h-full bg-gradient-to-r from-purple-500 to-purple-700 shadow-[0_0_20px_#c084fc] animate-loading-bar"></div>
      </div>
    </div>
  );
}

export default LoadingScreen;
