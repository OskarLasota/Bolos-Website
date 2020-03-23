import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Footer2 from './components/Footer2.jsx'
import Error from './components/Error';
import Home from './components/Home';
import Browse from './components/Browse';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Login from './account/Login';
import Navigation from './components/Navigation.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import './styles/App.css';

class App extends Component {
    constructor(props){
        super(props);
        //this.toggle = this.toggle.bind(this);
        this.state = {
         
        }
                    
      }

  render(){
  return (
    <div>


<BrowserRouter>
    <div>
    <Navigation />
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/browse" component={Browse} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/contact" component={Contact}/>
        <Route path="/login" component={Login} />
        <Route component={Error}/>
      </Switch>
    </div>
</BrowserRouter>





<Footer2></Footer2>

  </div>
  );
    
  } 
}


export default App;
