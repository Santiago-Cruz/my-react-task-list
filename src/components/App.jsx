import { useState, useEffect } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../App.css'
import Checkbox from './checkbox';
import { Button, Stack } from "@chakra-ui/react";

export default function App() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState(
    localStorage.getItem('message') ? JSON.parse(localStorage.getItem('message')) : []
  );
  const [val, setVal] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  useEffect(() => {
    localStorage.setItem('message', JSON.stringify(message));
  }, [message]);

  const change = event => {
    setVal(event.target.value);
  }

  const Clean = (event) =>{
    event.preventDefault();
    if (title.length < 3) {
      setErrorMessage('Title must be at least 3 characters long.');
    } else {
      setMessage(message.concat(title));
      console.log(message);
      setTitle('');
      setDescription('');
      setErrorMessage('');
    };
  }

  const changeTitle = event => {
    setTitle(event.target.value);
    if (event.target.value.length < 3) {
      setErrorMessage('Title must be at least 3 characters long.');
    } else {
      setErrorMessage('');
    }
  };

  const changeDescription = event => {
    setDescription(event.target.value);
  };
  return (
    <Stack borderWidth={2} borderColor="rgba(234, 234, 233, 0.2)" borderRadius={10} width={500} p={5} spacing={5}>
      <p style={{color: "white", fontSize: "25px", color: "rgba(209, 171, 33)"}}>
        TO-DO LIST
      </p>
      <form onSubmit={Clean} direction="column" alignItems="center">
        <Stack  alignItems="center">
          <label style={{color: "white", fontSize: "15px"}}>
            Title:
          </label>
          <input id="title" style={{ padding: "8.5px 20px", margin: "18px 10px" }} value={title} onChange={changeTitle} />
          {errorMessage && <p color="red">{errorMessage}</p>}
        </Stack>
        <Stack  alignItems="center">
          <label style={{color: "white", fontSize: "15px"}}>
            Description:
          </label>
          <input
            id="description"
            style={{ padding: "8.5px 20px", margin: "18px 10px" }}
            value={description}
            onChange={changeDescription}
          />
        </Stack>
        <Button type="submit" bg="#1a1a1a" color="white" _hover={{ borderColor: "#646cff" }}>
          Add
        </Button>
      </form>
      <Checkbox fruits={message} />
      <Button onClick={() => setMessage([])} bg="#1a1a1a" color="white">
        Clear all
      </Button>
    </Stack>
  );
}
