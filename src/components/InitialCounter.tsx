import classes from './InitialCounter.module.css';
import InitialDisplay from './InitialDisplay'

type InitialCounterType = {
    maxValue: number
    startValue: number
    topValueUp: () => void
    topValueDown: () => void
    lowerValueUp: () => void
    lowerValueDown: () => void
    setCounter: () => void
}

function InitialCounter(props: InitialCounterType) {
    return (
        <div className={classes.initial_counter}>
            <InitialDisplay maxValue={props.maxValue}
                            startValue={props.startValue}
                            topValueUp={props.topValueUp}
                            topValueDown={props.topValueDown}
                            lowerValueUp={props.lowerValueUp}
                            lowerValueDown={props.lowerValueDown}
                            setCounter={props.setCounter}
                  />
        </div>

    );
};

export default InitialCounter

