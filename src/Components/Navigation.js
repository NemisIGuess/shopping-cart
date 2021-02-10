import '../Style/Navigation.css';
import { Link } from 'react-router-dom';

function Navigation() {
  const navStyle = {
    color: 'white',
  };

  return (
    <nav className="navigation">
      <h3>Logo</h3>
      <ul className="navLinks">
        <Link style={navStyle} to="/">
          <li>Home</li>
        </Link>
        <Link style={navStyle} to="/catalogue">
          <li>Catalogue</li>
        </Link>
        <Link style={navStyle} to="/shoppingcart">
          <li>Shopping Cart</li>
        </Link>
        {/* <Link style={navStyle} to="/item">
          <li>Item</li>
        </Link> */}
      </ul>
    </nav>
  );
}

export default Navigation;
