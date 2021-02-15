import '../Style/Navigation.css';
import { Link } from 'react-router-dom';
import shoppingCart from '../Images/ShoppingCart.png';
import { useEffect, useState } from 'react';
import { getCartItems, setItemOnCart } from './Database';

function Navigation() {
  const [itemCounter, setItemCounter] = useState(0);

  return (
    <nav className="navigation">
      <h3>
        1d3
        <br /> Juegos de Mesa
      </h3>
      <ul className="navList">
        <Link className="navLink" to="/">
          <li>Home</li>
        </Link>
        <Link className="navLink" to="/catalogue">
          <li>Catalogo</li>
        </Link>
        <Link className="navLink" to="/shoppingcart">
          <li className="liShoppingCart">
            <img
              alt="ShoppingCart"
              className="cartImage"
              src={shoppingCart}
            ></img>
            <span className="itemCounter">{}</span>
          </li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navigation;
