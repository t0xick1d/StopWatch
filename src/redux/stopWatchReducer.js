 import * as Rx from 'rxjs'
import { interval } from 'rxjs';
import { take,map } from 'rxjs/operators';



const Start = 'Start';
const Stop = 'Stop';
const Wait = 'Wait';
const Reset = 'Reset';
const SetTimeAC= 'setTime'
const SetTime='setTime'


export const AC = (type) => {
  
    return {type: type}
}
export const setTimeAC = (time) => {
    return {type:SetTimeAC,
            time: time}
}

let renderEntierTree = () => {
    console.log('State changed')
}

export let subscribe = (observer) => { 
    renderEntierTree = observer;
}


let initionalState = {
  startStop: true,
  second: 0,
  minute: 0,
  hours: 0,


}; 






let stateWatchReducer = (state = initionalState, action) => {
       
  let counter$=interval(1000)

  const sub = () => interval(1000)

    switch(action.type){
        
        case Start:
        
        let second = counter$.subscribe(v => v)

        // sub().subscribe(v => console.log(v))
        
        // counter$.subscribe(v=> { 
        //     console.log(v)
        //     state.second++
        //     return {...state}
        // })
            
            
            // setTime(state);
            
        




        
        // counter$.subscribe({
        //   next: v => state.second=v
        // }    
        // )

        
        return {...state, startStop:false, second:second}
            
        

        
        
        case Stop:{
            
            
            
            
            
            return {...state, startStop:true,  }
        }
      
        
        case Wait:
            return {...state}
        
        case Reset: {
            
            return {...state, }
        }
        
        
        default:
            return state;
        
    }

  
}

export default stateWatchReducer;