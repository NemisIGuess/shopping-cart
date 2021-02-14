import '../Style/Catalogue.css';
import { Link, useLocation } from 'react-router-dom';
import { getDB } from './Database';

function Catalogue() {
  const database = getDB();
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
              <button className="catalogueBtn">+</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Catalogue;
