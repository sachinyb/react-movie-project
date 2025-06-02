import React from 'react'
import { useDispatch } from 'react-redux'
import { increment, decrement } from '../features/counter/counterSlice'
const CounterButton = () => {
    const dispatch = useDispatch()
  return (
    <div>
      <button
      onClick={()=>dispatch(increment())}
      >
        +
      </button>
      <button
      onClick={()=>dispatch(decrement())}
      >-</button>
    </div>
  )
}

export default CounterButton
