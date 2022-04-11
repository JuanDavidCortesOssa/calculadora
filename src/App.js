import './App.css';
import React, {useState} from "react"

function App() 
{
  const [operation, setOperation] = new useState("");
  const mathOperators = ['%', '/', '*', '-', '+', '+/-', '.'];

  function ClickNumber(number)
  {
    setOperation(operation + number);
  }

  function ClickOperator(operator)
  {
    if((operation == "" && operator != '-') || mathOperators.includes(operation.slice(-1)))
    {
      return;
    }
    setOperation(operation + operator);
  }

  function UpdateResult()
  {
    setOperation(eval(operation).toString());
  }

  function clearResult()
  {
    setOperation("");
  }

  return (
    <div className="App">
      <div className='CalculatorGrid'>
        <div className='Result'>
          <a>{operation || "0"}</a>
        </div>
        <button onClick={() => {clearResult()}}>AC</button>
        <button onClick={() => {ClickOperator("*(-1)")}}>+/-</button>
        <button onClick={() => {ClickOperator('%')}}>%</button>
        <button onClick={() => {ClickOperator('/')}} className='MathOperator'>/</button>
        <button onClick={() => {ClickNumber(7)}}>7</button>
        <button onClick={() => {ClickNumber(8)}}>8</button>
        <button onClick={() => {ClickNumber(9)}}>9</button>
        <button onClick={() => {ClickOperator('*')}} className='MathOperator'>X</button>
        <button onClick={() => {ClickNumber(4)}}>4</button>
        <button onClick={() => {ClickNumber(5)}}>5</button>
        <button onClick={() => {ClickNumber(6)}}>6</button>
        <button onClick={() => {ClickOperator('-')}} className='MathOperator'>-</button>
        <button onClick={() => {ClickNumber(1)}}>1</button>
        <button onClick={() => {ClickNumber(2)}}>2</button>
        <button onClick={() => {ClickNumber(3)}}>3</button>
        <button onClick={() => {ClickOperator('+')}} className='MathOperator'>+</button>
        <button onClick={() => {ClickNumber(0)}} id='cero'>0</button>
        <button onClick={() => {ClickOperator('.')}}>.</button>
        <button onClick={() => {UpdateResult()}} className='MathOperator'>=</button>
      </div>
    </div>
  );
}

export default App;
