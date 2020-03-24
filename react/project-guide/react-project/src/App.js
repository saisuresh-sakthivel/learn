import React, { Component } from 'react';
import styles from './App.module.css';
import Person from './Person.js';

class App extends Component {
  state = {
    person:[
      {"id":"123","name":"Muthu","age":34},
      {"id":"1234","name":"sudha","age":33},
      {"id":"1235","name":"sidhu","age":14}
    ],
    showPerson:true
  }

  toggleName(){
    const toggleShow = !this.state.showPerson
    this.setState({showPerson:toggleShow});
  }

  deleteHandler(index){
    const persons = this.state.person;
    persons.splice(index,1);
    this.setState({person:persons});
  }

  changeHandler(event,id){
    console.log("id "+id)
    const persons = [...this.state.person]
    const personIndex = persons.findIndex((person)=>{
      return id===person.id;
    })
    console.log("personIndex "+personIndex)
    persons[personIndex].name = event.target.value;
    this.setState({person:persons});    
  }

  render() {
    let persons = null;
    persons = this.state.person.map((person,index) => {
      return(
          <Person 
             onchange={(event)=>this.changeHandler(event,person.id)} 
             click={()=>this.deleteHandler(index)} 
             name={person.name} 
             age={person.age}
             key={person.id}
          />
      );
    });
    return (
      <div className={styles.App}>
        <button onClick={()=>this.switchNameHandler('Max')}>Switch name</button>
        <button onClick={()=>this.toggleName()}>Toggle name</button>
        <h1>Hi, My name is sai siddharth.</h1>
        <div>
         {persons}
        </div>
      </div>
    );
  }
}

export default App;
