import { useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

const Map = () => {
  const [hoveredCountry, setHoveredCountry] = useState('');
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
    <div>
      <ComposableMap
        projection='geoMercator'
        projectionConfig={{
          center: [0, 30],
          scale: 120,
        }}
        width={980}
        height={551}
        style={{
          width: '100%',
          height: 'auto',
        }}
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
      {hoveredCountry && <p>{hoveredCountry}</p>}
    </div>
  );
};

export default Map;
