import {MaxValueUpAC, MaxValueDownAC, StartValueUpAC, StartValueDownAC, ResetValueAC, SetValueAC, StateType, IncValueAC } from './state/count-reducer'
import './App.css';
import Counter from "./components/counter";
import InitialCounter from "./components/InitialCounter"
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
import {AppRootStateType} from './state/store'

function App() {
 
/* 
  let [maxValue, SetMaxValue] = useState<number>(0);
  const topValueUp = () => {
    SetMaxValue(maxValue + 1)
  }
  const topValueDown = () => {
    SetMaxValue(maxValue - 1)
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
    if (value <= maxValue) {
      let newValue = ++value
      setValue(newValue)
    } 
  }

  const resetCounter = () => {
    setValue(startValue);
  }

  const setAreaValueToLocalStorage = () => {
    setValue(startValue)
    localStorage.setItem('areaValue', JSON.stringify(startValue))
  } */

  const state = useSelector<AppRootStateType, StateType> (state => state.copyState)
  const dispatch = useDispatch();

  const topValueUp = () => {
    const action = MaxValueUpAC(state.maxValue)
    dispatch(action)
  }
  const topValueDown = () => {
    const action = MaxValueDownAC(state.maxValue)
    dispatch(action)
  }
  const startValueUp = () => {
  const action = StartValueUpAC(state.startValue)
  dispatch(action)
  }
  const startValueDown = () => {
  const action = StartValueDownAC(state.startValue)
  dispatch(action)
  }
  const resetCounter = () => {
  const action = ResetValueAC(state.value) 
  dispatch(action)
  }
  const setCounter = () => {
    const action = SetValueAC(state.value) 
    dispatch(action)
  } 
  const IncCounter = () => {
    const action = IncValueAC(state.value) 
    dispatch(action)
  } 

  const setAreaValueToLocalStorage = () => {
  const action = SetValueAC(state.startValue) 
  dispatch(action)
  localStorage.setItem('areaValue', JSON.stringify(state.startValue))
  }

  return (
    <div className="app">
      <div className="initialCounter">
      <InitialCounter topValueUp={topValueUp}
        topValueDown={topValueDown}
        lowerValueUp={startValueUp}
        lowerValueDown={startValueDown}
        maxValue={state.maxValue}
        startValue={state.startValue}
        setAreaValueToLocalStorage={setAreaValueToLocalStorage}
          />
        </div>
        <div className="counter"></div>
      <Counter
        incCounter={IncCounter}
        setCounter={setCounter}
        resetCounter={resetCounter}
        screen={state.value}
        maxValue={state.maxValue}
        startValue={state.startValue} 
      />
        </div>
   
  )
}


export default App
