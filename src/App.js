import React from 'react';
import "./App.css";
import Header from './components/Header';
import { Switch, Route } from 'react-router-dom'
import ProductListing from './components/productListing';
import ProductDetails from './components/productDetail';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={ProductListing} />
        <Route path='/product/:productId' exact component={ProductDetails} />
        <Route path='*' render={() => {return <h2> Page not found.. </h2> }} />
      </Switch>
    </div>
  );
}

export default App;
