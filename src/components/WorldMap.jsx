import { useEffect, useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

const WorldMap = ({ hoveredCountry, setHoveredCountry, clickedCountries, setClickedCountries }) => {
  const [isHoverEnabled, setIsHoverEnabled] = useState(true);

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

  useEffect(() => {
    // Disable hover effects on small devices
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsHoverEnabled(false);
      } else {
        setIsHoverEnabled(true);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleCountryClick = (geo) => {
    const countryName = geo.properties.name;
    if (clickedCountries.includes(countryName)) {
      setClickedCountries(
        clickedCountries.filter((name) => name !== countryName)
      );
    } else {
      setClickedCountries([...clickedCountries, countryName]);
    }
  };

  return (
    <div className='order-first lg:order-last w-full lg:max-w-[1000px] flex items-center'>
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
                  className='map-geography'
                  stroke='#fff'
                  strokeWidth={0.5}
                  style={{
                    default: {
                      fill: clickedCountries.includes(geo.properties.name)
                        ? '#5934eb' // Dark blue if country is clicked
                        : isCountrySelected
                        ? '#3498eb' // Blue if country is in selectedCountries array
                        : '#ccc', // Gray for all other countries
                      outline: 'none',
                    },
                    hover: {
                      fill:
                        isCountrySelected && isHoverEnabled
                          ? clickedCountries.includes(geo.properties.name)
                            ? '#5934eb' // Dark blue if country is clicked
                            : '#ebae34' // Yellow if country is in selectedCountries array but not clicked
                          : '#ccc',
                      cursor: isCountrySelected ? 'pointer' : 'default',
                      outline: 'none',
                    },
                    pressed: {
                      fill: isCountrySelected ? '#5934eb' : '#ccc',
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
