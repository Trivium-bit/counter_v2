import classes from './display.module.css';

type DisplaPropsType = {
    screen: number
    maxValue: number
    startValue: number
     
}

function Display(props: DisplaPropsType) {
    return (
        <div className={props.screen == props.maxValue ? classes.redDisplay : classes.display}>
        {props.screen ? props.screen : "pls enter initial count"}
        </div>
    );

}

export default Display;