import { MaxValueUpAC, MaxValueDownAC, StartValueUpAC, StartValueDownAC, ResetValueAC, SetValueAC, StateType, IncValueAC } from './state/count-reducer'
import style from './App.module.css';
import Counter from "./components/counter/counter";
import InitialCounter from "./components/initialCounter/InitialCounter"
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { AppStateType } from './state/store'

function App() {

  const state = useSelector<AppStateType, StateType>(state => state.counter)
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

  return (
    <div className={style.app}>
      <div className={style.container}>
        <InitialCounter topValueUp={topValueUp}
          topValueDown={topValueDown}
          lowerValueUp={startValueUp}
          lowerValueDown={startValueDown}
          maxValue={state.maxValue}
          startValue={state.startValue}
          setCounter={setCounter}
        />
        <Counter
          incCounter={IncCounter}
          setCounter={setCounter}
          resetCounter={resetCounter}
          screen={state.value}
          maxValue={state.maxValue}
          startValue={state.startValue}
        />
      </div>
    </div>
  )
}
export default App
