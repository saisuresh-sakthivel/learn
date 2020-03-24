import React, { Component } from 'react';
import Layout from './components/Layout/Layout.js'
import './App.css';
import BurgerBuilder from './containers/Burger-Builder/Burger-Builder';
import DummyPage from './containers/Dummy-Page/Dummy-Page';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';

class App extends Component { 
  /*<div className="App"> 
        <Router keyLength={12}>
          <nav>
            <Link to="/">Home</Link>
             <Link to="/dummyPage">dummyPage</Link>
          </nav>         
          <Route path="/" exact component={burgerBuilder}/>
          <Route path="/dummyPage" exact component={dummyPage}/>  
          </Router>  
      </div>*/  
  render() {
    let burgerBuilder = <Layout>
      
    <p>Test</p> <BurgerBuilder/>
    </Layout>;
    let dummyPage = <Layout>
      <p>page2</p>
  </Layout>
    return (
      <Router>
      <div className="App">          
          <nav>
            <ul>
             <li><Link to="/">Home</Link></li>
             <li><Link to="/dummyPage">dummyPage</Link></li>
             </ul>
          </nav>       
          <Route exact path="/" component={BurgerBuilder} />
          <Route path="/dummyPage" exact component={DummyPage}/>
          {dummyPage}          
      </div>
      </Router>
    );
  }
}

export default App;
