import React from 'react';
import classes from './Buildcontrols.module.css';
import BuildControl from './Buildcontrol/Buildcontrol';

//an array of build key value pairs for controls
const controls = [
  { label: 'Salad', type: 'salad'},
  { label: 'Cheese', type: 'cheese'},
  { label: 'Meat', type: 'meat'},
  { label: 'Bacon', type: 'bacon'},
];

const buildControls = ( props ) => {
 return (
   <div className={classes.BuildControls}>
     {/* price ficed to two decimal places */}
     <p style={{textAlign: 'center'}}><strong>${props.price.toFixed(2)}</strong></p>
     {/* 'controls' array is mapped over to pass labels and types onto each control */}
     {controls.map((item) => {
       return (
         <BuildControl
           add={() => props.more(item.type)}
           subtract={() => props.less(item.type)}
           key={item.label}
           label={item.label}
         />
       )
     })}
     <button
       className={classes.OrderButton}
       disabled={!props.purchasable}
       onClick={props.ordering}
    >checkout
    </button>
   </div>
 )
}

 export default buildControls;