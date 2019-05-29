import React from 'react';
import './App.css';
import Hero from './Components/Hero.js'
import Product from './Components/Product.js'
import Summary from './Components/Summary.js'

function App() {
  const component = new React.Component();
  component.state = {}
  
  component.render = () => {
    return (
      <div className="App">
        <Hero />
        <Product type="Laptop" price="999.00" />
        <Product type="Mechanical Pencil" price="0.25" />
        <Product type="College Ruled Loose Leaf" price="2.75" />
        <Summary globalState={component.state} />
      </div>
    )
  }
  
  return component;
}

export default App;
