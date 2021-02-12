import '../Style/Navigation.css';
import { Link } from 'react-router-dom';
import shoppingCart from '../Images/ShoppingCart.png';
import { useState } from 'react';

function Navigation() {
  const [itemCounter, setItemCounter] = useState(13);

  return (
    <nav className="navigation">
      <h3>1d3 Juegos de Mesa</h3>
      <ul className="navList">
        <Link className="navLink" to="/">
          <li>Home</li>
        </Link>
        <Link className="navLink" to="/catalogue">
          <li>Catalogo</li>
        </Link>
        <Link className="navLink" to="/shoppingcart">
          <li>
            <img
              alt="ShoppingCart"
              className="cartImage"
              src={shoppingCart}
            ></img>
            <span className="itemCounter">{itemCounter}</span>
          </li>
        </Link>
        <Link
          to={{
            pathname: '/modal/1',
            state: { modal: true },
          }}
        >
          Open Modal
        </Link>
      </ul>
    </nav>
  );
}

export default Navigation;
