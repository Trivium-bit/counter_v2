import classes from './MinMaxValues.module.css';

export type MaxValueType = {
    topValueUp: () => void
    topValueDown: () => void
    lowerValueUp: () => void
    lowerValueDown: () => void
    setAreaValueToLocalStorage: () => void
    maxValue: number
    startValue: number
    }

function MinMaxValues(props: MaxValueType) {
    return (
        <div>
            <div>
                <button className={classes.buttons} onClick={props.topValueUp}>+</button>
            </div>
            <div>
                <button className={classes.buttons} onClick={props.topValueDown} disabled={props.maxValue < 0}>-</button>
            </div>

            <div>
                <button className={classes.buttons} onClick={props.lowerValueUp}>+</button>
                <button className={classes.buttons} onClick={props.lowerValueDown} disabled={props.startValue < 0}>-</button>
            </div>

            <div>
                <button className={classes.setbuttons} onClick={props.setAreaValueToLocalStorage}>Set</button>
            </div>
            </div>
    );
}

export default MinMaxValues

