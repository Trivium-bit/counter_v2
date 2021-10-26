export type StartValueUpActionType = {
    type: 'START-VALUE-UP'
    startValue: number
    [key: string]: any
}
export type StartValueDownActionType = {
    type: 'START-VALUE-DOWN'
    startValue: number
    [key: string]: any
}
export type MaxValueUpActionType = {
    type: 'MAX-VALUE-UP'    
    maxValue: number
    [key: string]: any
}
export type MaxValueDownActionType = {
    type: 'MAX-VALUE-DOWN'
    maxValue: number
    [key: string]: any
}
export type IncActionType = {
    type: 'INC-VALUE'
    value: number
    [key: string]: any
}
export type SetValueActionType = {
    type: 'SET-VALUE'
    value: number
    [key: string]: any
}
export type ResetValueActionType = {
    type: 'RESET-VALUE'
    startValue: number
    [key: string]: any
}

export type StateType = {
    startValue: number
    maxValue: number
    value: number
}

const initialState: StateType = {
startValue: 0,
maxValue: 1,
value: 0
}

export type ActionType = StartValueUpActionType | 
                StartValueDownActionType |
                MaxValueUpActionType     |
                MaxValueDownActionType   |
                SetValueActionType       |
                ResetValueActionType     |
                IncActionType


export const countReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
    case 'START-VALUE-UP':
    return {
        ...state,
        startValue: state.startValue + 1
    }    
    case 'START-VALUE-DOWN':
        return {
            ...state,
            startValue: state.startValue - 1
        }    
    case 'MAX-VALUE-UP':
    return {
        ...state,
        maxValue: state.maxValue + 1
    }    
    case 'MAX-VALUE-DOWN':
        return {
            ...state,
            maxValue: state.maxValue - 1
        }    
    case 'SET-VALUE': 
    let copyState = {...state}
    if (copyState.value <= copyState.maxValue) {
        copyState.value = copyState.startValue
    }
    return copyState
    case 'INC-VALUE': 
    return {
        ...state,
        value: state.value + 1
    }    
       case 'RESET-VALUE':   
    return {
        ...state,
        value: action.value === state.startValue
    }
    default:
    return {...state}
    }
    }

    export const StartValueUpAC = (startValue: number): StartValueUpActionType => {
        return { type: 'START-VALUE-UP', startValue}
        }
    export const StartValueDownAC = (startValue: number): StartValueDownActionType => {
        return { type: 'START-VALUE-DOWN', startValue}
        }    
    export const MaxValueUpAC = (maxValue: number): MaxValueUpActionType => {
        return { type: 'MAX-VALUE-UP', maxValue}
        }
    export const MaxValueDownAC = (maxValue: number): MaxValueDownActionType => {
        return { type: 'MAX-VALUE-DOWN', maxValue}
        }
    export const SetValueAC = (value: number): SetValueActionType => {
        return { type: 'SET-VALUE', value}
        }
    export const IncValueAC = (value: number): IncActionType => {
        return { type: 'INC-VALUE', value}
        }  
    export const ResetValueAC = (startValue: number): ResetValueActionType => {
        return { type: 'RESET-VALUE', startValue}
        }   
                       