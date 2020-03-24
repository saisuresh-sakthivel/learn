import React, { Component } from 'react';
import styles from './App.module.css';
import Personholder from '../components/Persons/Personholder.js';
import Cockpit from '../components/Cockpit/Cockpit.js'
import Authcontext from '../components/Authcontext/Authcontext';

class App extends Component { 
  state = {
    person:[
      {"id":"123","name":"Muthu","age":34},
      {"id":"1234","name":"sudha","age":33},
      {"id":"1235","name":"sidhu","age":14}
    ],
    showPerson:true,
    showCockPit:true,
    buttonLabel:"remove button",
    authenticated:false
  }

  toggleName(){
    const toggleShow = !this.state.showPerson
    this.setState({showPerson:toggleShow});
  }

  deleteHandler(index){
    console.log("index : "+index)
    const persons = [...this.state.person];
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
  loginHandler(){
    this.setState({authenticated:true});
  }
  togglePit(){
     const cockPitVisibleState = !this.state.showCockPit;
     const buttonLabel = (cockPitVisibleState)?"remove button":"show button";
     this.setState({showCockPit:cockPitVisibleState,buttonLabel:buttonLabel});
  }
  render() {
    let persons = null;

    if(this.state.showPerson){
    persons = <Personholder 
      person={this.state.person} 
      changed={this.changeHandler.bind(this)}
      clicked={this.deleteHandler.bind(this)}/>
    } else{
      persons=null;
    }
    console.log("showCockPit",this.state.showCockPit)
    return (
      <Authcontext.Provider value={{authenticated:this.state.authenticated}}>
      <div className={styles.App}>
        <button onClick={()=>this.togglePit()}>{this.state.buttonLabel}</button>
        <button onClick={()=>this.loginHandler()}>Log in</button>
        {this.state.showCockPit? <Cockpit toggleName={this.toggleName}/>:null}
        <div>
         {persons}
        </div>
      </div>
      </Authcontext.Provider>
    );
  }
}

export default App;
