import '../Style/Catalogue.css';
import { useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { DatabaseContext, CartContext } from './Database';

function Catalogue() {
  const database = useContext(DatabaseContext);
  const cart = useContext(CartContext);
  const location = useLocation();

  return (
    <div className="catalogue">
      {database.map((game) => {
        return (
          <div className="catalogueItem" key={game.game}>
            <Link
              to={{
                pathname: `/game/${game.game}`,
                state: { background: location },
              }}
            >
              <img
                className="catalogueImg"
                src={game.images[0]}
                alt={game.game}
              />
            </Link>
            <div className="catalogueExtras">
              <p className="cataloguePrice">{game.price}</p>
              <button
                onClick={(e) => {
                  cart.addItemToCart(e.target.value);
                }}
                value={game.game}
                className="catalogueBtn"
              >
                Add to Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Catalogue;
