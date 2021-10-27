import classes from './InitialDisplay.module.css';


export type InitialDisplayType = {
    maxValue: number
    startValue: number
    topValueUp: () => void
    topValueDown: () => void
    lowerValueUp: () => void
    lowerValueDown: () => void
    setAreaValueToLocalStorage: () => void
}

function InitialDisplay(props: InitialDisplayType) {
    return (
        <div>
            <div className={classes.initialDisplay}>
            <div className={props.maxValue >= 0 ? classes.areaValue : classes.redAreaValue}>{props.maxValue}</div>
            <div>
                <button className={classes.buttons} onClick={props.topValueUp}>+</button>
                <button className={classes.buttons} onClick={props.topValueDown} disabled={props.maxValue < 0}>-</button>
            </div>
            </div>
            <div className={classes.initialDisplay}>
            <div className={props.startValue >= 0 ? classes.areaValue : classes.redAreaValue}>{props.startValue}</div>
            <div>
                <button className={classes.buttons} onClick={props.lowerValueUp}>+</button>
                <button className={classes.buttons} onClick={props.lowerValueDown} disabled={props.startValue < 0}>-</button>
            </div>
            </div>
            <div>
                <button className={classes.setbuttons} onClick={props.setAreaValueToLocalStorage}>Set</button>
            </div>
        </div>
    );
};

export default InitialDisplay


