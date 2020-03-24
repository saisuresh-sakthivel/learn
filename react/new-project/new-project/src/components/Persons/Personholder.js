import React, {PureComponent} from 'react';
import Person from './Person.js';

class Personholder extends PureComponent{
render(){
    return this.props.person.map((person,index) => <Person 
        onchange={(event)=>this.props.changed(event,person.id)} 
        click={()=>this.props.clicked(index)} 
        name={person.name} 
        age={person.age}
        key={person.id}
    />);
}
}
export default Personholder;