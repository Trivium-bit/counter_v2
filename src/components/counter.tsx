import classes from './counter.module.css';
import Display from  './display'
import Buttons from  './buttons'

type ButtonsPropsType = {
    incCounter: (value: number) => void
    setCounter: (value: number) => void
    resetCounter: (value: number) => void
    screen: number
    maxValue: number
    startValue: number
 
}

function Counter(props: ButtonsPropsType) {
    return (
        <div className={classes.counter}>
    <Display screen={props.screen} maxValue={props.maxValue} startValue={props.startValue} />
    <Buttons incCounter={props.incCounter} setCounter={props.setCounter} resetCounter={props.resetCounter} screen={props.screen} maxValue={props.maxValue}/>
        </div>
    );
}

export default Counter

