import { geoPatterson } from 'd3-geo-projection';
import React from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from 'react-simple-maps';

const Map = () => {
  const geoUrl = 'world.json';
  const width = 760;
  const height = 570;

  return (
    <div>
      <ComposableMap
        projection='geoMercator'
        projectionConfig={{
          center: [0, 30],
          scale: 120,
        }}
        width={width}
        height={height}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                stroke='#fff'
                strokeWidth={0.5}
                style={{
                  default: {
                    fill: '#3498eb',
                  },
                  hover: {
                    fill: '#F53',
                  },
                  pressed: {
                    fill: '#E42',
                  },
                }}
              />
            ))
          }
        </Geographies>
        {/* USA */}
        <Marker coordinates={[-95.844032, 36.966428]}>
          <image
            href='refunder-logo.png'
            width='25'
            height='25'
            transform='translate(-15, -15)'
          />
        </Marker>
        {/* United Kingdom */}
        <Marker coordinates={[-0.118092, 51.509865]}>
          <image
            href='refunder-logo.png'
            width='25'
            height='25'
            transform='translate(-10, -10)'
          />

          {/* Sweden */}
        </Marker>
        <Marker coordinates={[18.643501, 60.128161]}>
          <image
            href='refunder-logo.png'
            width='25'
            height='25'
            transform='translate(-15, -15)'
          />
        </Marker>
        {/* Germany */}
        <Marker coordinates={[13.404954, 52.520008]}>
          <image
            href='refunder-logo.png'
            width='25'
            height='25'
            transform='translate(-15, -15)'
          />
          {/* France */}
        </Marker>
        <Marker coordinates={[2.213749, 46.227638]}>
          <image
            href='refunder-logo.png'
            width='25'
            height='25'
            transform='translate(-15, -15)'
          />
        </Marker>
        {/* China */}
        <Marker coordinates={[116.383331, 39.916668]}>
          <image
            href='refunder-logo.png'
            width='25'
            height='25'
            transform='translate(-15, -15)'
          />
        </Marker>
      </ComposableMap>
    </div>
  );
};

export default Map;
