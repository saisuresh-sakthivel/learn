import React,{useEffect} from 'react';

const Cockpit = (props) => {
    useEffect(()=>{
        console.log("[Cockpit.js] called every time")
        return()=> {
            console.log("[Cockpit.js] called for the last time");
        }
    })

return(
    <div>        
        <button onClick={()=>props.toggleName()}>Toggle name</button>
        <h1>Hi, My name is sai siddharth.</h1>
    </div>
 );
}

export default Cockpit;