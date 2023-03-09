import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

const WorldMap = ({ hoveredCountry, setHoveredCountry }) => {
  const geoUrl = 'world.json';
  const selectedCountries = [
    'Sweden',
    'France',
    'Italy',
    'Germany',
    'United States of America',
    'China',
    'United Kingdom',
  ];

  return (
    <div className='w-full max-w-[800px] order-1 lg:order-2 flex items-center'>
      <ComposableMap
        projection='geoMercator'
        projectionConfig={{
          center: [0, 50],
          scale: 120,
        }}
        width={760}
        height={551}
        className='w-full h-auto'
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const isCountrySelected = selectedCountries.includes(
                geo.properties.name
              );

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  stroke='#fff'
                  strokeWidth={0.5}
                  style={{
                    default: {
                      fill: isCountrySelected ? '#3498eb' : '#ccc',
                      outline: 'none',
                    },
                    hover: {
                      fill: isCountrySelected ? '#5934eb' : '#ccc',
                      cursor: isCountrySelected ? 'pointer' : 'default',
                      outline: 'none',
                    },
                    pressed: {
                      fill: isCountrySelected ? '#5934eb' : '#ccc',
                      outline: 'none',
                    },
                  }}
                  onMouseEnter={() => {
                    if (isCountrySelected) {
                      setHoveredCountry(geo.properties.name);
                    }
                  }}
                  onMouseLeave={() => {
                    setHoveredCountry('');
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default WorldMap;
