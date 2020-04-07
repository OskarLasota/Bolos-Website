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
      }

      state = {
        products: [],
        product: {
          name: 'sample product',
          price: 20
        }
    }
             

    componentDidMount(){
      this.getProducts();
    }

    getProducts = _ => {
          fetch('http://localhost:4000/products')
          .then(response => response.json())
          .then(response => this.setState({products: response.data }))
          .catch(err => console.error(err))
    }

    renderProduct = ({product_id, name}) => <div key={product_id}>{name}</div>

    addProduct = _ => {
      const { product } = this.state;
      fetch(`http://localhost:4000/products/add?name=${product.name}&price=${product.price}`)
      .then(this.getProducts)
      .catch(err => console.error(err))
    }

  render(){
    const { products, product  } = this.state;
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
    <div className="App"> 
        {products.map(this.renderProduct)}
        <div>
          <input value = {product.name} onChange={e => this.setState({product : { ...product , name: e.target.value}})}/>
          <input value = {product.price} onChange={e => this.setState({product:{ ...product, price: e.target.value}})}></input>
          <button onClick={this.addProduct}> Add Product </button>
        </div>
    </div>



<Footer2></Footer2>

  </div>
  );
    
  } 
}


export default App;
