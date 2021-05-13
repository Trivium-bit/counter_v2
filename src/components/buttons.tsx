import classes from './buttons.module.css';

type ButtonsPropsType = {
    counter: (value: number) => void
    resetCounter: (value: number) => void
    screen: number
    maxValue: number
}

function Buttons(props: ButtonsPropsType) {
    return (
        <div className={classes.buttons}>
            <div>
                <button className={props.screen < props.maxValue ? classes.butCounter : classes.redButCounter} disabled={props.screen === props.maxValue} onClick={ () => {props.counter(0)} }>Inc</button> 
                <button className={classes.butReset}  onClick={ () => {props.resetCounter(0)} }>Reset</button> 
            </div>
        </div>
    );
}

export default Buttons

