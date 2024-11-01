import '../css/App.css'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([
    {
      position: "absolute",
      left: "0px",
      top: "0px",
      height: "100%",
      width: "100%",
    }
  ]);
  const doClick = (event) => {
    const ob = {
      position: "absolute",
      left: (event.pageX - 50) + "px",
      top: (event.pageY - 50) + "px",
      height: "100px",
      width: "100px",
      backgroundColor: "#ffffff",
      borderRadius: "50px"
    }
    data.push(ob);
    setCount(count+1);
  }
  return (
    <div className='App'>
      <p>{count}</p>
      <div onClick={doClick}>
        {data.map((item) => {
          return (<div style={item}></div>);
        })}
      </div>
    </div>
  )
}

export default App
