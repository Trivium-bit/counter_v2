import classes from './InitialCounter.module.css';

import MinMaxValues from './MinMaxValues';
import InitialDisplay from './InitialDisplay'

type InitialCounterType = {
    maxValue: number
    startValue: number
    topValueUp: () => void
    topValueDown: () => void
    lowerValueUp: () => void
    lowerValueDown: () => void
    setAreaValueToLocalStorage: () => void
        
}

function InitialCounter(props: InitialCounterType) {
    return (
        <div className={classes.initial_counter}>
            <InitialDisplay maxValue={props.maxValue} startValue={props.startValue} />
            <MinMaxValues topValueUp={props.topValueUp}
                topValueDown={props.topValueDown}
                lowerValueUp={props.lowerValueUp}
                lowerValueDown={props.lowerValueDown}
                setAreaValueToLocalStorage={props.setAreaValueToLocalStorage}
                maxValue={props.maxValue}
                startValue={props.startValue}
                />

        </div>

    );
};

export default InitialCounter

