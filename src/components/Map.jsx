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
          <h2 className='text-2xl md:text-4xl text-white py-6 mx-5'>
            Refunder in Numbers
          </h2>
        </div>
      </div>
      <div className='flex flex-col gap-6 lg:gap-0 lg:flex-row items-center justify-center'>
        <div className='mx-2'>
          <MapInfo
            clickedCountries={clickedCountries}
          />
        </div>
        <WorldMap
          setHoveredCountry={setHoveredCountry}
          clickedCountries={clickedCountries}
          setClickedCountries={setClickedCountries}
        />
      </div>
    </>
  );
};

export default Map;
