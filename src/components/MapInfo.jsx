import React from 'react';

const sweden = {
  members: '14 million',
  merchants: '5,500',
  sales: '£300+',
  transactions: '2,500+',
  savings: '£300+',
  countries: '13',
};

const MapInfo = () => {
  return (
    <div className='flex-none mr-20 mt-10'>
      <div className='grid grid-rows-3 grid-flow-col gap-12'>
        <div className='flex flex-col justify-center items-center'>
          <img src='crowd-of-users.png' alt='people' className='w-[50px]' />
          <p className='text-lg'>14 million</p>
          <p>Registered members on</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <img src='crowd-of-users.png' alt='people' className='w-[50px]' />
          <p className='text-lg'>14 million</p>
          <p>Registered members on</p>
        </div>

        <div className='flex flex-col justify-center items-center'>
          <img src='crowd-of-users.png' alt='people' className='w-[50px]' />
          <p className='text-lg'>14 million</p>
          <p>Registered members on</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <img src='crowd-of-users.png' alt='people' className='w-[50px]' />
          <p className='text-lg'>14 million</p>
          <p>Registered members on</p>
        </div>

        <div className='flex flex-col justify-center items-center'>
          <img src='crowd-of-users.png' alt='people' className='w-[50px]' />
          <p className='text-lg'>14 million</p>
          <p>Registered members on</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <img src='crowd-of-users.png' alt='people' className='w-[50px]' />
          <p className='text-lg'>14 million</p>
          <p>Registered members on</p>
        </div>
      </div>
    </div>
  );
};

export default MapInfo;
