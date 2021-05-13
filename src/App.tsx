import React, { useState } from 'react';
import './App.css';
import Counter from "./components/counter";
import InitialCounter from "./components/InitialCounter"

function App() {

  let [maxValue, setMaxValue] = useState<number>(1);
  const topValueUp = () => {
    setMaxValue(maxValue + 1)
  }
  const topValueDown = () => {
    setMaxValue(maxValue - 1)
  }

  let [startValue, setMinValue] = useState<number>(0);
  const lowerValueUp = () => {
    setMinValue(startValue + 1)
  }
  const lowerValueDown = () => {
    setMinValue(startValue - 1)
  }

  let [value, setValue] = useState<number>(startValue);

    const counter = () => {
    if (value < maxValue) {
      let newValue = ++value
      setValue(newValue)}
   
  }

  const resetCounter = () => {
    setValue(startValue);
  }

  const setAreaValueToLocalStorage = () => {
    setValue(startValue)
    localStorage.setItem('areaValue', JSON.stringify(startValue))
  }

  // const getAreaValueFromLocalStorage = () => {
  //  let valueAsString = localStorage.getItem('areaValue')
  //   if (valueAsString) {
  //     let values = JSON.parse(valueAsString)
  //     setValue(values)
  //   }
  // }

  return (
    <div className="app">
      <InitialCounter topValueUp={topValueUp}
        topValueDown={topValueDown}
        lowerValueUp={lowerValueUp}
        lowerValueDown={lowerValueDown}
        maxValue={maxValue}
        startValue={startValue}
        setAreaValueToLocalStorage={setAreaValueToLocalStorage}
      />
      <Counter counter={counter}
               resetCounter={resetCounter}
               screen={value}
               maxValue={maxValue} 
               startValue={startValue} />
    </div>
  )
}


export default App
