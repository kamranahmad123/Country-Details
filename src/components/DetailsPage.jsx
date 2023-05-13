import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import microphonePicture from './Assets/microphone-img.png';
import settingPicture from './Assets/setting-img.png';
import back from './Assets/back-img.png';

const DetailsPage = () => {
  const { name } = useParams();

  const { country } = useSelector((store) => store.country);
  const receivingNames = country.find((country) => country.name === name);

  return (
    <main className="countryDetails">
      <div className="header">
        <Link to="/"><img src={back} alt="back icon" className="Backicon" /></Link>
        <h1 className="topic">{receivingNames.name}</h1>
        <div className="right-display">
          <img className="microphone" alt="microphone icon" src={microphonePicture} />
          <img className="setting" src={settingPicture} alt="icon" />
        </div>
      </div>
      <section className="details-container">
        <div className="flag-picture">
          <img src={receivingNames.flag} alt="country flag" className="flag-img" />
        </div>
        <div className="description"><h3 className="topic-header">CITY/TOWN BREAKDOWN - 2023</h3></div>
        <h2 className="descriptive-topic">
          <span className="countryData">Name</span>
          {receivingNames.name || 'none'}
        </h2>
        <h2 className="descriptive-topic">
          <span className="countryData">Capital</span>
          {receivingNames.capital || 'none'}
        </h2>

        <h2 className="descriptive-topic">
          <span className="countryData">Continent</span>
          {receivingNames.continent || 'none'}
        </h2>
        <h2 className="descriptive-topic">
          <span className="countryData">Population</span>
          {receivingNames.population || 'none'}
        </h2>
        <h2 className="descriptive-topic">
          <span className="countryData">Area</span>
          {receivingNames.area || 'none'}
          km²
        </h2>

        <h2 className="descriptive-topic">
          <span className="countryData">Google Map</span>
          <a href={receivingNames.map || 'none'}>Map</a>
        </h2>
      </section>
    </main>

  );
};

export default DetailsPage;
