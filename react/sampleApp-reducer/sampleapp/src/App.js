import React, { Component } from 'react';
import './App.css';
import Form from './containers/form';
import Users from './components/Users';
import Another from './components/Another';
import Display from './components/Display';
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import {connect} from 'react-redux';

class App extends Component {
  name = "";
  handleClick(){
    this.props.gotname(this.name);
  }
  onChangeName(event){    
    this.name = event.target.value;
  }
  render() {
    return (
      <div className="App">
        <Router>
        <ul>
          <li>
          <NavLink activeClassName="active" to="/users">
            Users
          </NavLink>
          <NavLink activeClassName="active" to="/another">
            Another
          </NavLink>
          </li>
        </ul>
        <Switch>
          <Route path="/users" component={Users} />
          <Route path="/another" component={Another} />
        </Switch>
        </Router>
        <Form onChangeName={this.onChangeName.bind(this)} onClick={this.handleClick.bind(this)}/>
        <Display name={this.props.name}/>
        {/*<input placeholder="Enter your name"/>
        <input type="button" onClick={this.handleClick} value="submit"></input>*/}
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return{
    gotname:(name)=>dispatch({type:"REC_NAME",value:name})
  }
}
const mapStateToProps = state => {
  return{
    name:state.name
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
