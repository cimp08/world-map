import { useState } from 'react';
import MapInfo from './MapInfo';
import WorldMap from './WorldMap';

const Map = () => {
  const [hoveredCountry, setHoveredCountry] = useState('Sweden');
  const [clickedCountries, setClickedCountries] = useState([
    'Sweden',
    'France',
    'Italy',
    'Germany',
    'United States of America',
    'China',
    'United Kingdom',
    'Australia'
  ]);


  const handleCountryClick = (geo) => {
    const countryName = geo?.properties?.name ? geo.properties.name : geo;
    if (clickedCountries.includes(countryName)) {
      setClickedCountries(
        clickedCountries.filter((name) => name !== countryName)
      );
    } else {
      setClickedCountries([...clickedCountries, countryName]);
    }
  };



  return (
    <>
      <div
        className='bg-blue-400'
        style={{
          background: 'linear-gradient(130deg,#fd438e,#ffaf60 93%,#ffaf60)',
        }}
      >
        <div className='container mx-auto'>
          <h2 className='text-2xl font-[700] md:text-[48px] text-white py-6 md:py-10 mx-5'>
            Refunder in numbers - Part of TopCashback
          </h2>
        </div>
      </div>
      <div className='flex flex-col gap-6 lg:gap-0 lg:flex-row items-center justify-center'>
        <div className='mx-2 pt-4 pb-6 lg:pt-12'>
          <MapInfo
            clickedCountries={clickedCountries}
            handleCountryClick={handleCountryClick}
          />
        </div>
        <WorldMap
          setHoveredCountry={setHoveredCountry}
          clickedCountries={clickedCountries}
          setClickedCountries={setClickedCountries}
          handleCountryClick={handleCountryClick}
        />
      </div>
    </>
  );
};

export default Map;
