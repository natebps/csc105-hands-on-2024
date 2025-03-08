import { useState } from "react";
import "./App.css";
const CalculatorPage = () => {
  const[answer,setAnswer] = useState(0);
  const[number,setNumber] = useState('');

  function addNumber(){
    setAnswer((num)=>num+number);
  }
  function subtractNumber(){
    setAnswer((num)=>num-number);
  }
  function multiplyNumber(){
    setAnswer((num)=>num*number);
  }
  function divideNumber(){
    setAnswer((num)=>num/number);
  }
  function clearNumber(){
    setNumber('');
  }
  function clearAnswer(){
    setAnswer(0);
  }

  return (
    <>
      <div id="arrange">
        <div id="border">
          <div><h2>Calculator</h2></div>
          <div>Result: {answer}</div>

          <div id="input">
            <input type="number" value={number} onChange={(value) => {
							setNumber(Number(value.target.value));
						}}/>
          </div>

          <div id="buttonCal">
            <div id="allButton">
              <button onClick={addNumber}>Add</button>
              <button onClick={subtractNumber}>Subtract</button>
            </div>

            <div id="allButton">
              <button onClick={multiplyNumber}>Multiply</button>
              <button onClick={divideNumber}>Divide</button>
            </div>

            <div id="allButton">
              <button onClick={clearNumber}>Clear Input</button>
              <button onClick={clearAnswer}>Clear Result</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CalculatorPage;
