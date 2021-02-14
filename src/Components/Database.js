import AoTBanner from '../Images/AgeOfThievesBanner.jpg';
import AoT01 from '../Images/AgeOfThieves01.png';
import AoT02 from '../Images/AgeOfThieves02.png';
import AoT03 from '../Images/AgeOfThieves03.png';
import AATBanner from '../Images/AventurerosAlTrenBanner.jpg';
import AAT01 from '../Images/AventurerosAlTren01.png';
import AAT02 from '../Images/AventurerosAlTren02.png';
import AAT03 from '../Images/AventurerosAlTren03.png';
import BBBanner from '../Images/BloodborneBanner.jpg';
import BB01 from '../Images/Bloodborne01.png';
import BB02 from '../Images/Bloodborne02.png';
import BB03 from '../Images/Bloodborne03.png';
import BrBBanner from '../Images/BreakingBadBanner.jpg';
import BrB01 from '../Images/BreakingBad01.png';
import BrB02 from '../Images/BreakingBad02.png';
import BrB03 from '../Images/BreakingBad03.png';
import DoWBanner from '../Images/DeadOfWinterBanner.jpg';
import DoW01 from '../Images/DeadOfWinter01.png';
import DoW02 from '../Images/DeadOfWinter02.png';
import DoW03 from '../Images/DeadOfWinter03.png';
import EthnosBanner from '../Images/EthnosBanner.jpg';
import Ethnos01 from '../Images/Ethnos01.png';
import Ethnos02 from '../Images/Ethnos02.png';
import Ethnos03 from '../Images/Ethnos03.png';
import M44Banner from '../Images/Memoir44Banner.jpg';
import M4401 from '../Images/Memoir4401.png';
import M4402 from '../Images/Memoir4402.png';
import NemesisBanner from '../Images/NemesisBanner.jpg';
import Nemesis01 from '../Images/Nemesis01.png';
import Nemesis02 from '../Images/Nemesis02.png';
import Nemesis03 from '../Images/Nemesis03.png';
import RWBanner from '../Images/RivetWarsBanner.jpg';
import RW01 from '../Images/RivetWars01.png';
import RW02 from '../Images/RivetWars02.png';
import RW03 from '../Images/RivetWars03.png';
import SWBanner from '../Images/SmallworldBanner.jpg';
import SW01 from '../Images/Smallworld01.png';
import SW02 from '../Images/Smallworld02.png';

const _database = [
  {
    game: 'Age of Thieves',
    banner: AoTBanner,
    images: [AoT01, AoT02, AoT03],
    players: '2-4',
    time: '90 minutes',
    ages: '14+',
    price: '59,95€',
  },
  {
    game: 'Aventureros al Tren',
    banner: AATBanner,
    images: [AAT01, AAT02, AAT03],
    players: '2-5',
    time: '30-60 minutes',
    ages: '8+',
    price: '43,95€',
  },
  {
    game: 'Bloodborne',
    banner: BBBanner,
    images: [BB01, BB02, BB03],
    players: 'no disponible',
    time: 'no disponible',
    ages: 'no disponible',
    price: '99,90€',
  },
  {
    game: 'Breaking Bad',
    banner: BrBBanner,
    images: [BrB01, BrB02, BrB03],
    players: '3-8',
    time: '60-120 minutes',
    ages: '18+',
    price: '39,95€',
  },
  {
    game: 'Dead of Winter',
    banner: DoWBanner,
    images: [DoW01, DoW02, DoW03],
    players: '2-5',
    time: '60-120 minutes',
    ages: '14+',
    price: '59,95€',
  },
  {
    game: 'Ethnos',
    banner: EthnosBanner,
    images: [Ethnos01, Ethnos02, Ethnos03],
    players: '2-6',
    time: '45-60 minutes',
    ages: '14+',
    price: '39,99€',
  },
  {
    game: "Memoir '44",
    banner: M44Banner,
    images: [M4401, M4402],
    players: '2',
    time: '30-60 minutes',
    ages: '8+',
    price: '53,95€',
  },
  {
    game: 'Nemesis',
    banner: NemesisBanner,
    images: [Nemesis01, Nemesis02, Nemesis03],
    players: '1-5',
    time: '60-120 minutes',
    ages: '14+',
    price: '149,99€',
  },
  {
    game: 'Rivet Wars',
    banner: RWBanner,
    images: [RW01, RW02, RW03],
    players: '2',
    time: '30-45 minutes',
    ages: '14+',
    price: '89,95€',
  },
  {
    game: 'Smallworld',
    banner: SWBanner,
    images: [SW01, SW02],
    players: '2-5',
    time: '40-80 minutes',
    ages: '8+',
    price: '47,95€',
  },
];

const getDB = () => {
  return _database;
};

export { getDB };
