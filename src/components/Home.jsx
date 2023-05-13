import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import './style.css';
import homePicture from './Assets/home-img.png';
import microphonePicture from './Assets/microphone-img.png';
import settingPicture from './Assets/setting-img.png';
import mapPicture from './Assets/country-map-img.png';
import background from './Assets/banner-image.jpg';

const HomePage = () => {
  const { country } = useSelector((store) => store.country);
  const [dataSearch, setDataSearch] = useState('');
  const Items = country.filter((item) => (
    item.name.toLowerCase().includes(dataSearch.toLowerCase())
  ));

  return (
    <div>
      <header>
        <div className="header">
          <img alt="home icon" className="home" src={homePicture} />
          <h1 className="topic">Countries</h1>
          <div className="right-display">
            <img className="microphone" alt="microphone icon" src={microphonePicture} />
            <img className="setting" src={settingPicture} alt="icon" />
          </div>
        </div>
        <img src={background} alt="map" className="background-image" />
        <div className="input-area">
          <input value={dataSearch} className="search-bar" type="text" placeholder="Search" onChange={(event) => setDataSearch(event.target.value)} />
        </div>
      </header>
      <section className="main">
        <div className="topic-2">
          <h2 className="topic-text">Status by country</h2>
        </div>
        <div className="countries">
          {Items.map((country) => (
            <Link to={`/country/${country.name}`} key={country.name} className="country-list">
              <img src={mapPicture} alt="country map" className="map-image" />
              <div className="country-details">
                <h3 className="name">{country.name}</h3>
                <h3 className="population">{country.population}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
};

export default HomePage;
