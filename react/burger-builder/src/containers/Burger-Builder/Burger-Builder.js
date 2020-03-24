import React, {Component} from 'react';
import Burger from '../../components/Burger/Burger';
import Buildcontrol from '../../components/Burger/Buildcontrols/Buildcontrols'

class BurgerBuilder extends Component{
  state = {
    ingrediants:{
      salad:0,
      bacon:0,
      cheese:0,
      meat:0
    },
    price:0
  }
  more(type){
    let ingrediants = {...this.state.ingrediants};
    ingrediants[type]+=1;
    this.setState({ingrediants:ingrediants});
  }
  less(type){
    let ingrediants = {...this.state.ingrediants};
    ingrediants[type]-=1;
    this.setState({ingrediants:ingrediants});
  }
  render(){
      return(
         <div>
             <Burger ingrediants={this.state.ingrediants}/>
             <Buildcontrol price={this.state.price} more={this.more.bind(this)} less={this.less}/>
         </div>
      )
  }
}
export default BurgerBuilder;