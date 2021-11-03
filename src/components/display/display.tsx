import classes from './display.module.css';

type DisplaPropsType = {
    screen: number
    maxValue: number
    startValue: number
}

function Display(props: DisplaPropsType) {

    let incorrectValue = "Incorrect value"



    return (
        <div className={props.screen === props.maxValue ? classes.redDisplay : classes.display}>

            {props.startValue < 0 ? incorrectValue : props.screen}
        </div>
    );

}

export default Display;

