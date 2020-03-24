import React from 'react';
import InputWidget from './../components/inputWidget'
const Form = (props) => {
    return(
    <div>
        <InputWidget placeholder="Enter your name" onChange = {props.onChangeName} type="text"/>
        <InputWidget placeholder="Enter your Age" type="text"/>
        <div>
        <InputWidget placeholder="" click={props.onClick} type="button" val="submit"/>
        </div>
    </div>
    )
}
export default Form;