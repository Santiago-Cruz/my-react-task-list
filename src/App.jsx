import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Checkbox from './checkbox'

function App() {
  const [message, setMessage] = useState(
    JSON.parse(localStorage.getItem("message")) || ""
  );
  const [val, setVal] = useState('');
  const change = event => {
    setVal(event.target.value);
  }
  useEffect(() => {
    localStorage.setItem("message", JSON.stringify(message));
  }, [message]);
  const Clean = () =>{
    
    setMessage(message.concat(val));
    setVal('');
  }
  return (
    <div style={{border: '2px groove rgba(234, 234, 233, 0.2)', width:"500px", borderRadius: "10px"}}>
      <p style= {{color: "white", fontSize: "30px"}}>TO-DO LIST</p>
      <input style= {{padding: "8.5px 20px", margin: "18px 10px"}} value={val}  onChange={change}> 

      </input>
      <button onClick={() => Clean()}>
        ADD
      </button>
      <Checkbox fruits={message} />
      <button style= {{margin: "15px auto"}}onClick={() => setMessage([])}>
        Clear all
      </button>
      
    </div>
  );
}
export default App
