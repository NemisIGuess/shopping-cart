import '../Style/Catalogue.css';
import { getDB } from './Database';

function Catalogue() {
  const database = getDB();
  return (
    <div className="catalogue">
      {database.map((game) => {
        return (
          <div className="catalogueItem" key={game.game}>
            <img
              className="catalogueImg"
              src={game.images[0]}
              alt={game.game}
            />
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
