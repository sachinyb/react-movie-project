import React, { useState, useRef, useEffect } from "react";
let renderCount = 0;

const Withref = () => {
  const [count, setCount] = useState(0);
  renderCount++;
  const inputRef = useRef();
   // Optional chaining to avoid error if inputRef is null
  
  useEffect(() => {
    console.log("with useRef rendered");
    console.log(inputRef.current?.value);
  }, []);
  const handleLog = () => {
    console.log("input value    " +' '+ inputRef.current.value);
  };
  return (
    <div>
      <hr />
      <h1 className="text-3xl font-bold text-center">With Ref</h1>
      <input
        type="text"
        ref={inputRef}
        className="border border-gray-300 rounded p-2 w-full"
        placeholder="Add a new task"
      />
      {count}
      <p>component re rendered {renderCount} times</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button
        onClick={handleLog}
        className="bg-green-600 text-amber-50 rounded-4xl"
      >
        Show Input Value
      </button>
    </div>
  );
};

export default Withref;
