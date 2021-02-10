import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './Components/Landing';
import Catalogue from './Components/Catalogue';
import ShoppingCart from './Components/ShoppingCart';
import Navigation from './Components/Navigation';
import Item from './Components/Item';

const Routes = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/catalogue" component={Catalogue} />
        <Route path="/shoppingcart" component={ShoppingCart} />
        <Route path="/item" component={Item} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
