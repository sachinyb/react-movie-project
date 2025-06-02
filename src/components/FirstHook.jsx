// this area is for the package imports
import React,{useState} from 'react'
// var a=3902;//this a is now in global scope and can be used in any file
const FirstHook = () => {
// this area is for the logical part or
//area to write business logic of the component
const [count, setCount] = useState(0);

let d=121;

function add1 () {
setCount(count+1);
// d++;
// alert(d);
}

function subTract1 () {
  setCount(count-1);
  //wait for1 second
setTimeout(() => {
  setCount(45);
}, 2000);
 
}
function incBy5 () {
  setCount(count+5);
}
  return (
    <div>
      {d}
      {/* this area is for rendering the ui elements */}
        <h1 className='text-3xl font-bold text-center'>First Hook</h1>
        <button className='bg-green-600 text-amber-50 rounded-4xl' onClick={add1}>+</button>

        <p>{count}</p>
        <button className='bg-red-500 rounded-4xl' onClick={subTract1}>-</button>
        <button className='bg-amber-600' onClick={incBy5}>Inc by 5</button>
<br /><br />
<SecComponent/>
    </div>
  )
}
const SecComponent = () => {
  return (
    <div>
      <h1>Second Component</h1>
    </div>
  );
};

export default FirstHook

