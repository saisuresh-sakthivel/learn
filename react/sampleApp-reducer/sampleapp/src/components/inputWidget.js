import React from 'react';
const InputWidget = (props) => {
    return (
        <input placeholder={props.placeholder} onClick={props.click} onChange={props.onChange} type={props.type} value={props.val}/>
    )
}
export default InputWidget;