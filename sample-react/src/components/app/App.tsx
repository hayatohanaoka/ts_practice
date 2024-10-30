import '../css/App.css'
import { useState } from 'react'

function App(props: {arg1?: string, color: string}) {
  const msg = "This is my app"
  const [counter, setCounter] = useState(0);
  const onClick = () => {
    setCounter(counter + 1);
  }
  return (
    <div className='App'>
      <h1>React sample</h1>
      <p>This is sample application</p>
      <p>{msg}</p>
      <p className={props.color}>{props.arg1}</p>
      <p onClick={onClick} className='clickable'>counter: {counter}</p>
    </div>
  )
}

export default App
