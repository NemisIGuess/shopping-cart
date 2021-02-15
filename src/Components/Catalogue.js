import '../Style/Catalogue.css';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getDB, setItemOnCart } from './Database';

function Catalogue() {
  const database = getDB();
  const location = useLocation();

  useEffect(() => {
    const itemBtn = [...document.querySelectorAll('.catalogueBtn')];

    itemBtn.map((button) => {
      button.addEventListener('click', (e) => {
        setItemOnCart(e.target.value);
      });
    });
  }, []);

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
              <button value={game.game} className="catalogueBtn">
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
