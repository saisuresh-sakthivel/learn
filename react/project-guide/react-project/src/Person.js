import React from 'react';
import styles from './Person.module.css';

const Person =(props) => {
  return(
    <div className={styles.box}>
      <p onClick={props.click}>Hi my name is {props.name}, My age is {props.age}</p>
      <input type="text" onChange={props.onchange} value={props.name}/>
    </div>
  )
}
export default Person;