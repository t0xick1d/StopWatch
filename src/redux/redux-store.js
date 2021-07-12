import { combineReducers, createStore } from "redux";
import stopWatchReducer from './stopWatchReducer'

let reducer = combineReducers({
    stopWatch: stopWatchReducer
})

let store = createStore(reducer);

window.store = store;

export default store;