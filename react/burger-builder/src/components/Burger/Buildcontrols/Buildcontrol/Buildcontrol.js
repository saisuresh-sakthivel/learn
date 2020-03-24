import React from 'react';
import classes from './Buildcontrol.module.css';

const buildControl = ( props ) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <button onClick={props.add} className={classes.More}>+</button>
      <button onClick={props.subtract} className={classes.Less} disabled={props.disabled}>-</button>
    </div>
  )
}

export default buildControl;