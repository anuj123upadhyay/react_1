import { useState } from 'react'

import './App.css'

function App() {
  const [count,setCount] = useState(0)
  function handleClick(){
    return setCount(count+1)
  }
  function reset(){
    return setCount(0)
  }

  return (
    <>
     <div className="wrapper">
     <button onClick={handleClick} id='btn-1'>Increase  {count}</button>
      <button onClick={reset} id='btn-2'>reset </button>
     </div>

    </>
  )
}

export default App
