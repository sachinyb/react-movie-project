import React,{useState,useEffect} from 'react'
let renderCount = 0;
const WithoutRef = () => {
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState('');
    renderCount++;
    console.log(inputValue);
    
    useEffect(() => {
    console.log("without useRef rendered");
    
    },[]); // Dependency array to control when the effect runs
  return (
    <div>
      WOREF

        <h1 className='text-3xl font-bold text-center'>Without Ref</h1>

        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} className='border border-gray-300 rounded p-2 w-full' placeholder='Add a new task' />
        {count}
        <button className='bg-green-600 text-amber-50 rounded-4xl' onClick={() => setCount(count + 1)}>+</button>
        <p>component rerendered {renderCount} times</p>
    </div>
  )
}

export default WithoutRef
