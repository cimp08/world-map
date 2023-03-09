import { useState } from 'react';
import MapInfo from './MapInfo';
import WorldMap from './WorldMap';


const Map = () => {
  const [hoveredCountry, setHoveredCountry] = useState('Sweden');
  return (
    <div>
      <div className='bg-blue-400'>
        <div className='container mx-auto'>
          <h2 className="text-4xl text-white py-6">Refunder in Numbers</h2>
        </div>
      </div>
      <div className='container mx-auto flex flex-col lg:flex-row items-center justify-center mt-20'>
        <MapInfo hoveredCountry={hoveredCountry} />
        <WorldMap
          hoveredCountry={hoveredCountry}
          setHoveredCountry={setHoveredCountry}
        />
      </div>
    </div>
  );
};

export default Map;
