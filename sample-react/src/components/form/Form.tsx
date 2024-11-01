import '../css/App.css'
import { useState } from 'react'

function OriginalForm() {
  const [input, setInput] = useState('');
  const [message, setMessage] = useState('What is your name?');
  const doInput = (event) => {
    setInput(event.target.value);
  }
  const doClick = () => {
    setMessage("Hello "+input);
  }
  return (
    <div className='AppForm'>
      <h1>{message}</h1>
      <div>
        <input type='text' onChange={doInput}/>
        <button onClick={doClick}>Click</button>
      </div>
    </div>
  )
}

export default OriginalForm
