const countryData = {
  Sweden: {
    members: 14,
    merchants: 5500,
    sales: 300,
    transactions: 2500,
    savings: 300,
    flag: '/assets/flags/sweden.png',
  },
  'United Kingdom': {
    members: 15,
    merchants: 6000,
    sales: 400,
    transactions: 3000,
    savings: 400,
    flag: '/assets/flags/united-kingdom.png',
  },
  'United States of America': {
    members: 20,
    merchants: 7500,
    sales: 500,
    transactions: 4000,
    savings: 500,
    flag: '/assets/flags/usa.png',
  },
  Germany: {
    members: 12,
    merchants: 5000,
    sales: 250,
    transactions: 2000,
    savings: 250,
    flag: '/assets/flags/germany.png',
  },
  Italy: {
    members: 8,
    merchants: 3000,
    sales: 150,
    transactions: 1000,
    savings: 150,
    flag: '/assets/flags/italy.png',
  },
  China: {
    members: 30,
    merchants: 10000,
    sales: 1000,
    transactions: 5000,
    savings: 1000,
    flag: '/assets/flags/china.png',
  },
  France: {
    members: 24,
    merchants: 6000,
    sales: 3000,
    transactions: 3000,
    savings: 2000,
    flag: '/assets/flags/france.png',
  },
  Australia: {
    members: 10,
    merchants: 3000,
    sales: 2000,
    transactions: 1500,
    savings: 1500,
    flag: '/assets/flags/australia.png',
  },
  Poland: {
    members: 8,
    merchants: 1500,
    sales: 1000,
    transactions: 1000,
    savings: 1000,
    flag: '/assets/flags/poland.png',
  },
};

const MapInfo = ({ clickedCountries, handleCountryClick }) => {
  const totalInfo = clickedCountries.reduce(
    (acc, curr) => {
      const countryInfo = countryData[curr] || countryData.default;
      return {
        members: acc.members + countryInfo.members,
        merchants: acc.merchants + countryInfo.merchants,
        sales: acc.sales + countryInfo.sales,
        transactions: acc.transactions + countryInfo.transactions,
        savings: acc.savings + countryInfo.savings,
        countries: acc.countries + countryInfo.countries,
      };
    },
    {
      members: 0,
      merchants: 0,
      sales: 0,
      transactions: 0,
      savings: 0,
      countries: 0,
    }
  );

  return (
    <div className='w-full lg:w-[500px] order-last lg:order-first'>
      <div className='text-center mb-12'>
          <div>
            {/* {clickedCountries.map((country) => (
              <img
                key={country}
                src={countryData[country].flag}
                alt={`${country} flag`}
                className='inline-block w-10 h-10 mx-1 cursor-pointer'
                onClick={() => {
                  console.log(country)
                  handleCountryClick(country);
                }}
              />
            ))} */}
            {Object.keys(countryData).map((country) => {
              const flagUrl = countryData[country].flag;
              return (
                <img
                  key={country}
                  src={flagUrl}
                  alt={`${country} flag`}
                  className={`inline-block w-8 h-8 md:w-10 md:h-10 mx-1 cursor-pointer ${clickedCountries.includes(country) ? 'opacity-100' : 'opacity-25'}`}
                  onClick={() => {
                    console.log(country);
                    handleCountryClick(country);
                  }}
                />
              );
            })}
          </div>
      </div>
      <div className='grid gap-4 grid-cols-3 md:grid-cols-2 gap-y-6 md:gap-y-8 items-start'>
        <div className='flex flex-col justify-center items-center'>
          <img
            src='assets/icons/people-group-solid.svg'
            alt='people'
            className='w-[35px] md:w-[50px] md:h-[40px] mb-3'
          />
          <p className='text-base text-gray-700 font-bold md:text-lg'>
            {totalInfo?.members === 0 ? '-' : `${totalInfo?.members} million`}
          </p>
          <p className='text-gray-700 text-sm md:text-base text-center'>
            Registered members on
          </p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <img
            src='assets/icons/shop-solid.svg'
            alt='people'
            className='w-[35px] md:w-[50px] md:h-[40px] mb-3'
          />
          <p className='text-base text-gray-700 font-bold md:text-lg'>
            {totalInfo?.merchants === 0
              ? '-'
              : totalInfo?.merchants.toLocaleString('en-US')}
          </p>
          <p className='text-gray-700 text-sm md:text-base text-center'>
            Merchants onsite
          </p>
        </div>

        <div className='flex flex-col justify-center items-center'>
          <img
            src='assets/icons/cash-register-solid.svg'
            alt='people'
            className='w-[35px] h-[28px] md:w-[50px] md:h-[40px] mb-3'
          />
          <p className='text-base text-gray-700 font-bold md:text-lg'>
            {totalInfo?.sales === 0 ? '-' : `£${totalInfo?.sales}+`}
          </p>
          <p className='text-gray-700 text-sm md:text-base text-center'>
            Total generated sales
          </p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <img
            src='assets/icons/clock-rotate-left-solid.svg'
            alt='people'
            className='w-[35px] md:w-[50px] md:h-[40px] mb-3'
          />
          <p className='text-base text-gray-700 font-bold md:text-lg'>
            {totalInfo?.transactions === 0
              ? '-'
              : totalInfo?.transactions.toLocaleString('en-US')}
          </p>
          <p className='text-gray-700 text-sm md:text-base text-center'>
            Transactions per hour
          </p>
        </div>

        <div className='flex flex-col justify-center items-center'>
          <img
            src='assets/icons/sack-dollar-solid.svg'
            alt='people'
            className='w-[35px] md:w-[50px] md:h-[40px] mb-3'
          />
          <p className='text-base text-gray-700 font-bold md:text-lg'>
            {totalInfo?.savings === 0 ? '-' : `£${totalInfo?.savings}+`}
          </p>
          <p className='text-gray-700 text-sm md:text-base text-center'>
            Avarage saving of members
          </p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <img
            src='assets/icons/earth-americas-solid.svg'
            alt='people'
            className='w-[35px] md:w-[50px] md:h-[40px] mb-3'
          />
          <p className='text-base text-gray-700 font-bold md:text-lg'>9</p>
          <p className='text-gray-700 text-sm md:text-base text-center'>
            TopCashback countries
          </p>
        </div>
      </div>
    </div>
  );
};

export default MapInfo;
