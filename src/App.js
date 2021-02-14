import React from 'react';
import { BrowserRouter, Switch, Route, useLocation } from 'react-router-dom';
import Navigation from './Components/Navigation';
import Landing from './Components/Landing';
import Catalogue from './Components/Catalogue';
import ShoppingCart from './Components/ShoppingCart';
import Modal from './Components/Modal';
import './App.css';

const App = () => {
  const location = useLocation();
  const background = location.state && location.state.background;
  return (
    <div className="container">
      <Navigation />
      <Switch location={background || location}>
        <Route exact path="/" component={Landing} />
        <Route path="/catalogue" component={Catalogue} />
        <Route path="/shoppingcart" component={ShoppingCart} />
      </Switch>
      {background && (
        <Route path="/game/:name" children={<Modal location={location} />} />
      )}
    </div>
  );
};

export default App;