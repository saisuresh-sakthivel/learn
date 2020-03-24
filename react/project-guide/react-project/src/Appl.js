import React, { useState } from 'react';
import './App.css';
import Person from './Person.js';

const Appl = props => {
    const [personState,setPersonState] = useState({
        person:[
        {"name":"sai","age":34},
        {"name":"sudha","age":33},
        {"name":"sidhu","age":14}
        ]
    })

  const switchNameHandler = () =>{
    setPersonState({
      person:[
        {"name":"ganesan","age":34},
        {"name":"muthu","age":33},
        {"name":"sidhu","age":14}
      ]
    })
  }

    return (
        <div className="App">
        <button onClick={switchNameHandler}>Switch name</button>
        <h1>Hi, My name is sai siddharth.</h1>
        <Person name={personState.person[0].name} age={personState.person[0].age}/>
        <Person name={personState.person[1].name} age={personState.person[1].age}/>
        <Person name={personState.person[2].name} age={personState.person[2].age}/>
        </div>
    );
}

export default Appl;
