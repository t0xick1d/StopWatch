import StopWatch from './StopWatch';
import { connect } from 'react-redux';
import {AC, setTimeAC} from '../redux/stopWatchReducer'
import React from 'react';






let mapStateToProps = (state) => {
    
    return {
        
        startStop: state.stopWatch.startStop,
        second: state.stopWatch.second,
        minute: state.stopWatch.minute,
        hours: state.stopWatch.hours,
        
      
    }
};
let mapDispatchToProps = (dispatch) => {
  
    return {
        Start: () => {
            let action = AC('Start')
            dispatch(action);
        },
        Stop:() => {
            let action = AC('Stop')
            dispatch(action);
        },

        Wait:() => {
            let action = AC('Wait')
            dispatch(action);
        },
        Reset:() => {
            let action = AC('Reset')
            dispatch(action);
        },
        setTime:(time)=>{
            let action = setTimeAC(time)
            dispatch(action)
        }
        

    }

}; 
export const StopWatchContainer = connect(mapStateToProps,mapDispatchToProps)(StopWatch);