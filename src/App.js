import Map from './components/Map';
import './App.css';
import MapInfo from './components/MapInfo';

function App() {
  return (
    <div className='flex mt-20'>
      <div className='flex-1'>
        <Map />
      </div>
      <MapInfo />
    </div>
  );
}

export default App;
