import { useEffect, useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

const WorldMap = ({
  setHoveredCountry,
  clickedCountries,
  setClickedCountries,
  handleCountryClick,
  
}) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const geoUrl = 'world.json';
  const selectedCountries = [
    'Sweden',
    'France',
    'Italy',
    'Germany',
    'United States of America',
    'China',
    'United Kingdom',
    'Australia',
  ];


  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Change the threshold value to your desired screen width
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='order-first lg:order-last w-full lg:max-w-[1000px] flex items-center'>
      <ComposableMap
        projection='geoMercator'
        projectionConfig={
          isSmallScreen
            ? { center: [0, 50], scale: 120 }
            : { center: [0, 50], scale: 120 }
        }
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
                      fill: clickedCountries.includes(geo.properties.name)
                        ? '#fd438e' // Dark blue if country is clicked
                        : isCountrySelected
                        ? '#ffaf60' // Blue if country is in selectedCountries array
                        : '#ccc', // Gray for all other countries
                      outline: 'none',
                    },
                    hover: {
                      fill:
                        isCountrySelected && !isSmallScreen // Disable hover effect on small screens
                          ? clickedCountries.includes(geo.properties.name)
                            ? '#fd438e' // Dark blue if country is clicked
                            : '#fad1a7' // Yellow if country is in selectedCountries array but not clicked (HOVER)
                          : isCountrySelected
                          ? clickedCountries.includes(geo.properties.name)
                            ? '#fd438e'
                            : '#ffaf60'
                          : '#ccc', // Gray for all other countries
                      cursor: isCountrySelected ? 'pointer' : 'default',
                      outline: 'none',
                    },
                    pressed: {
                      fill: isCountrySelected ? '#fd438e' : '#ccc',
                      outline: 'none',
                    },
                  }}
                  onClick={() => {
                    if (isCountrySelected) {
                      handleCountryClick(geo);
                    }
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
