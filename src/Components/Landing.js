import '../Style/Landing.css';
import { getDB } from './Database';
import _ from 'lodash';

function Landing() {
  const database = getDB();

  const gamesToDisplay = _.sampleSize(database, 3);
  return (
    <div className="landing">
      {gamesToDisplay.map((game) => {
        return (
          <div
            style={{
              backgroundImage: `url(${game.banner})`,
              backgroundPosition: 'left',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
            key={game.game}
            className="banner"
          ></div>
        );
      })}
    </div>
  );
}

export default Landing;
