import {countReducer} from './count-reducer';
import {combineReducers, createStore} from 'redux';
import {loadState, saveState} from '../utils/localstorage-utils'

const rootReducer = combineReducers({
counter: countReducer
})

export type AppStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer, loadState());



  store.subscribe(() => {
  saveState({
    counter: store.getState().counter
  });
});