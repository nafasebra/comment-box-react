import React, { useState } from "react";

type IPropType = {
  currentNumber: number;
}

function CountDown(props: IPropType) {
  const {currentNumber} = props;
  const [count, setCount] = useState(currentNumber);

  const IncreaseCount = () => setCount(count + 1);
  const DecreaseCount = () => setCount(count - 1);

  return (
    <div className="flex flex-row lg:flex-col items-center justify-between bg-light rounded-xl p-3">
      <button onClick={IncreaseCount} className="text-purple opacity-80 hover:opacity-100">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>
      <p className="text-purple px-5 lg:py-5 lg:px-0 text-sm">{count}</p>
      <button onClick={DecreaseCount} className="text-purple opacity-80 hover:opacity-100">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
    </div>
  );
}

export default CountDown;
