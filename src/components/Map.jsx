import { useState } from 'react';
import MapInfo from './MapInfo';
import WorldMap from './WorldMap';

const Map = () => {
  const [hoveredCountry, setHoveredCountry] = useState('Sweden');
  const [clickedCountries, setClickedCountries] = useState(['Sweden']);
  return (
    <>
        <div className='bg-blue-400'>
          <div className='container mx-auto'>
            <h2 className='text-2xl md:text-4xl text-white py-6 mx-6'>Refunder in Numbers</h2>
          </div>
        </div>
        <div className='mx-4'>
        <div className='flex flex-col gap-6 lg:gap-0 lg:flex-row items-center justify-center'>
          <MapInfo
            hoveredCountry={hoveredCountry}
            clickedCountries={clickedCountries}
            setClickedCountries={setClickedCountries}
          />
          <WorldMap
            hoveredCountry={hoveredCountry}
            setHoveredCountry={setHoveredCountry}
            clickedCountries={clickedCountries}
            setClickedCountries={setClickedCountries}
          />
        </div>
        </div>
    </>
  );
};

export default Map;
