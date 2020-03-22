import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Portfolio from './components/Portfolio.jsx'
import Footer1 from './components/Footer1.jsx'
import Footer2 from './components/Footer2.jsx'
import Error from './components/Error';
import Home from './components/Home';
import Browse from './components/Browse';
import Pricing from './components/Pricing';
import Navigation from './components/Navigation.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        //this.toggle = this.toggle.bind(this);
        this.state = {
         
        }
                    
      }

  render(){
  const portfolioLinks = [
    {
      title: 'Aipim',
      caption: 'Illustration'
    },
    {
      title: 'Cenoura',
      caption: 'Graphic Design'
    },
    {
      title: 'Chocolate',
      caption: 'Identity'
    },
    {
      title: 'Churros',
      caption: 'Branding'
    },
    {
      title: 'Laranja',
      caption: 'Website Design'
    },
    {
      title: 'Mesclado',
      caption: 'I love pizza!'
    }
  ]

  return (
    <div>








<BrowserRouter>
    <div>
    <Navigation />
      <Switch>
        <Route path="/home" component={Home} exact/>
        <Route path="/browse" component={Browse} />
        <Route path="/pricing" component={Pricing} />
        <Route component={Error}/>
      </Switch>
    </div>
</BrowserRouter>



<Portfolio portfolioLinks={portfolioLinks}></Portfolio>




<section className="bg-light page-section" id="team">
  <div className="container">
    <div className="row">
      <div className="col-lg-12 text-center">
        <h2 className="section-heading text-uppercase">Nostro Amazing Story</h2>
        <h3 className="section-subheading text-muted">El Beginning.</h3>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-8 mx-auto text-center">
        <p className="large text-muted">amazing bolos from amazing momma, made purely from sweetness of love</p>
      </div>
    </div>
  </div>
</section>





<Footer1></Footer1>
<Footer2></Footer2>

  </div>
  );
    
  } 
}


export default App;
