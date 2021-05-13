import classes from './InitialDisplay.module.css';

export type InitialDisplayType = {
    maxValue: number
    startValue: number
}

function InitialDisplay(props: InitialDisplayType) {
    return(
        <div>
        <div className={props.maxValue >= 0 ? classes.areaValue : classes.redAreaValue}>{props.maxValue}</div>
       <div className={props.startValue >= 0 ? classes.areaValue : classes.redAreaValue }>{props.startValue}</div>
        </div>
    );
};

export default InitialDisplay


