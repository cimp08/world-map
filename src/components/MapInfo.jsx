import { useEffect } from 'react';


const MapInfo = ({ hoveredCountry }) => {
  let info = null;

  switch (hoveredCountry) {
    // Define the information for each hovered country
    case 'Sweden':
      info = {
        members: '14 million',
        merchants: 'Over 5,500',
        sales: '£300+',
        transactions: '2,500+',
        savings: '£300+',
        countries: '13',
      };
      break;
    case 'United Kingdom':
      info = {
        members: '15 million',
        merchants: '6,000',
        sales: '£400+',
        transactions: '3,000+',
        savings: '£400+',
        countries: '14',
      };
      break;
    case 'United States of America':
      info = {
        members: '20 million',
        merchants: '7,500',
        sales: '£500+',
        transactions: '4,000+',
        savings: '£500+',
        countries: '20',
      };
      break;
    case 'Germany':
      info = {
        members: '12 million',
        merchants: '5,000',
        sales: '£250+',
        transactions: '2,000+',
        savings: '£250+',
        countries: '10',
      };
      break;
    case 'Italy':
      info = {
        members: '8 million',
        merchants: '3,000',
        sales: '£150+',
        transactions: '1,000+',
        savings: '£150+',
        countries: '8',
      };
      break;
    case 'China':
      info = {
        members: '30 million',
        merchants: '10,000',
        sales: '£1,000+',
        transactions: '5,000+',
        savings: '£1,000+',
        countries: '30',
      };
      break;
    case 'France':
      info = {
        members: '24 million',
        merchants: '6,000',
        sales: '£3,000+',
        transactions: '3,000+',
        savings: '£2,000+',
        countries: '40',
      };
      break;
    default:
      // Set default information for total
      info = {
        members: '100 million',
        merchants: '20,000',
        sales: '£20,000+',
        transactions: '20,000+',
        savings: '£20,000+',
        countries: '40',
      };
  }

  return (
    <div className='order-2 lg:order-1 mx-6'>
      <h3 className='text-center text-2xl mb-5'>
        {hoveredCountry ? hoveredCountry : 'Refunder Total'}
      </h3>
      <div className='grid grid-cols-2 gap-6'>
        <div className='flex flex-col justify-center items-center'>
          <img src='crowd-of-users.png' alt='people' className='w-[50px]' />
          <p className='text-lg'>{info?.members}</p>
          <p className='text-center'>Registered members on</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <img src='crowd-of-users.png' alt='people' className='w-[50px]' />
          <p className='text-lg'>{info?.merchants}</p>
          <p className='text-center'>Merchants onsite</p>
        </div>

        <div className='flex flex-col justify-center items-center'>
          <img src='crowd-of-users.png' alt='people' className='w-[50px]' />
          <p className='text-lg'>{info?.sales}</p>
          <p className='text-center'>Total generated sales</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <img src='crowd-of-users.png' alt='people' className='w-[50px]' />
          <p className='text-lg'>{info?.transactions}</p>
          <p className='text-center'>Transactions per hour</p>
        </div>

        <div className='flex flex-col justify-center items-center'>
          <img src='crowd-of-users.png' alt='people' className='w-[50px]' />
          <p className='text-lg'>{info?.savings}</p>
          <p className='text-center'>Avarage saving of members</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <img src='crowd-of-users.png' alt='people' className='w-[50px]' />
          <p className='text-lg'>{info?.countries}</p>
          <p className='text-center'>TopCashback countries</p>
        </div>
      </div>
    </div>
  );
};

export default MapInfo;
