import React, { Component, Fragment } from 'react';
import styles from './Person.module.css';
import propTypes from 'prop-types';
import Authcontext from '../Authcontext/Authcontext';

class Person extends Component {
  constructor(props){
    super(props);
    this.inputElem = React.createRef();
  }
  componentDidMount(){
    console.log("[person.js] - ComponentDidMount");
    this.inputElem.current.focus();
  }
  // componentWillMount(){
  //   console.log("[person.js] - ComponentWillMount")
  // }
  getSnapshotBeforeUpdate(){
    console.log("[person.js] - getSnapshotBeforeUpdate")
    return null
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[person.js] - componentDidUpdate")
  }  
  render(){
    return(      
      <Fragment>

        <div className={styles.box}  onClick={this.props.click}>
        <Authcontext.Consumer>
          {value=>value.authenticated?<p>Authenticated</p>:<p>Please log in</p>}
        </Authcontext.Consumer>
          <p>Hi my name is {this.props.name}, My age is {this.props.age}</p>
          <input 
            type="text" 
            onChange={this.props.onchange} 
            value={this.props.name}
            ref={this.inputElem}/>
        </div>
        <div>
          Just wrapping it around
        </div>
      </Fragment>
    );
  }
}
Person.propTypes = {
  click:propTypes.func,
  name:propTypes.string,
  age:propTypes.number
}
export default Person;