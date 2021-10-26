import classes from './buttons.module.css';

type ButtonsPropsType = {
    incCounter: (value: number) => void
    setCounter: (value: number) => void
    resetCounter: (startValue: number) => void
    screen: number
    maxValue: number
}

function Buttons(props: ButtonsPropsType) {
    return (
        <div className={classes.buttons}>
            <div>
                <button className={props.screen < props.maxValue ? classes.butCounter : classes.redButCounter} disabled={props.screen === props.maxValue} onClick={ () => {props.incCounter(0)} }>Inc</button> 
                <button className={classes.butReset}  onClick={ () => {props.resetCounter(0)} }>Reset</button> 
            </div>
        </div>
    );
}

export default Buttons

