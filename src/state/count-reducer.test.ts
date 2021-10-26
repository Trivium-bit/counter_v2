import {countReducer, StartValueUpAC} from './count-reducer';
test('increment start value', () => {
const startState = {
    startValue: 0,
    maxValue:15,
    value: 0};
const action = StartValueUpAC(10);
const endState = countReducer(startState, action)
expect(endState).toBe(11);
});
