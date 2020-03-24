import React from 'react';
import Burgeringrediants from './Burgeringrediants/Burgeringrediants';
import classes from './Burger.module.css'

const Burger = (props) => {
      let burgeringrediants = Object.keys(props.ingrediants).map((value)=>{
          return [...Array(props.ingrediants[value])].map((_,index)=>{
            return <Burgeringrediants key={value+"_"+index} type={value}/>
          });
      }).reduce((prev,curr)=>{
          return prev.concat(curr);
      })
      burgeringrediants = (burgeringrediants.length===0)?<p>Please add some ingrediants</p>:burgeringrediants;
      return(
         <div className={classes.Burger}>    
            <Burgeringrediants type="bread-top"/>        
              {burgeringrediants} 
            <Burgeringrediants type="bread-bottom"/>            
         </div>
      );
}
export default Burger;