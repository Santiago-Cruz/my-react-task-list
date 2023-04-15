import trashImage from './trash.png';
import App from "./App";
import Count from './counter';
import React, { useState } from 'react';
export default function Checkbox ({fruits}) { 
  const [selectedFruits, setSelectedFruits] = useState({});
  const [Fruits, setFruits] = useState([]);
  const [cont, setCont] = useState(0);
  const buttonStyle = {
    backgroundColor: "white",
    backgroundImage: `url(${trashImage})`,
    width: '37px',
    height: '37px',
  };
  const handleSweetChange = (fruit) => {
    setCont(cont+1);
    setSelectedFruits((prevSelectedFruits) => ({
      ...prevSelectedFruits,
      [fruit]: 'sweet',
    }));
  };

  const handleBitterChange = (fruit) => {
    if (getFruitColor(fruit)== '#C7F8BF'){
      setCont(cont-1);
    }
    setSelectedFruits((prevSelectedFruits) => ({
      ...prevSelectedFruits,
      [fruit]: 'bitter',
    }));
  };

  const getFruitColor = (fruit) => {
    if (selectedFruits[fruit] === 'sweet') {
      return '#C7F8BF';
    }
    if (selectedFruits[fruit] === 'bitter') {
      return '#F7F6BE';
    }
    return '#FCCBC1';
  };

  const deleteFruit = (fruit, fruits) => {
    setFruits(Fruits.concat(fruits.filter((item) => fruits.indexOf(item) == fruits.indexOf(fruit))));
    if (getFruitColor(fruit)== '#C7F8BF'){
      setCont(cont-1);
    }
  }
  const list = fruits.filter((element) => !Fruits.includes(element));
  return (
    <div>
      {list.map((fruit) => (
        <div
          key={fruit}
          style={{ width:"350px", height: "110px", border:"3px solid" ,
           borderRadius: "10px", backgroundColor: getFruitColor(fruit), 
          padding: '10px', margin: "10px auto"}}
        >
          <span style={{textAlign: "center", fontWeight: "bolder", fontSize: "15px"}}>{fruit}</span>
          <div style= {{textAlign: "left"}}>
            <input
              style= {{accentColor: "brown"}}
              type="radio"
              id={`sweet-${fruit}`}
              name={`sweet-${fruit}`}
              value="sweet"
              checked={selectedFruits[fruit] === 'sweet'}
              onChange={() => handleSweetChange(fruit)}
            />
            <label htmlFor={`sweet-${fruit}`}> Terminado</label>
          </div>
          <div style= {{textAlign: "left"}}>
            <input
              style= {{accentColor: "brown"}}
              type="radio"
              id={`bitter-${fruit}`}
              name={`bitter-${fruit}`}
              value="bitter"
              checked={selectedFruits[fruit] === 'bitter'}
              onChange={() => handleBitterChange(fruit)}
            />
            <label htmlFor={`bitter-${fruit}`}> En marcha</label>
          </div>
          <div style= {{display: 'flex', justifyContent: "right"}}>
            <button style= {
              {
                backgroundColor: getFruitColor(fruit),
                backgroundImage: `url(${trashImage})`,
                width: '37px',
                height: '37px',
              }
            } onClick={() => deleteFruit(fruit, fruits)}>
            
            </button> 
          </div>
        </div>
      ))}
      <div>
        <Count list={fruits.filter((element) => !Fruits.includes(element))} conta= {cont} />
      </div>
    </div>
  );
}