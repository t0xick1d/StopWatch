import { Button } from 'react-bootstrap';
import React from 'react'
import s from './style.module.css'

const StopWatch = (props) => { 
    function addZero(time) {
        return time < 10 ? "0" + time : time;
    }

    const second =addZero(props.second)
    const minute = addZero(props.minute)
    const hours = addZero(props.hours)
    
    return(
        <>
            <h1 className = {s.title}>StopWatch</h1>
            <h1 className = {s.title}>{hours}:{minute}:{second}</h1>
            <div className= {s.button}>
                <div>
                    {props.startStop ? <Button onClick={()=>{props.Start()}}>Start</Button>:<Button onClick ={()=>{props.Stop()}}>Stop</Button>}
                </div>
                <Button onClick ={()=>{props.Wait()}} >Wait</Button>
                <Button onClick ={()=>{props.Reset()}} >Reset</Button>
            </div>
        </>
    )
}

export default StopWatch;