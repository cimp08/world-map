const countryData = {
  Sweden: {
    members: 14,
    merchants: 5500,
    sales: 300,
    transactions: 2500,
    savings: 300,
    countries: 1,
  },
  'United Kingdom': {
    members: 15,
    merchants: 6000,
    sales: 400,
    transactions: 3000,
    savings: 400,
    countries: 1,
  },
  'United States of America': {
    members: 20,
    merchants: 7500,
    sales: 500,
    transactions: 4000,
    savings: 500,
    countries: 1,
  },
  Germany: {
    members: 12,
    merchants: 5000,
    sales: 250,
    transactions: 2000,
    savings: 250,
    countries: 1,
  },
  Italy: {
    members: 8,
    merchants: 3000,
    sales: 150,
    transactions: 1000,
    savings: 150,
    countries: 1,
  },
  China: {
    members: 30,
    merchants: 10000,
    sales: 1000,
    transactions: 5000,
    savings: 1000,
    countries: 1,
  },
  France: {
    members: 24,
    merchants: 6000,
    sales: 3000,
    transactions: 3000,
    savings: 2000,
    countries: 1,
  },
  default: {
    members: 100,
    merchants: 20000,
    sales: 20000,
    transactions: 20000,
    savings: 20000,
    countries: '40',
  },
};

const MapInfo = ({ clickedCountries }) => {
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
      <h3 className='h-[90px] md:h-[100px] text-center text-[#DA557C] text-4xl md:text-[48px] font-[700] mb-5'>
        {clickedCountries.length > 0 ? (
          <>
            Refunder
            <span className='text-sm md:text-base text-gray-600 block mt-2'>
              ({clickedCountries.join(', ')})
            </span>
          </>
        ) : (
          'Choose Country'
        )}
      </h3>
      <div className='grid gap-4 grid-cols-3 md:grid-cols-2 items-start'>
        <div className='flex flex-col justify-center items-center'>
          <img
            src='assets/icons/people-group-solid.svg'
            alt='people'
            className='w-[50px]'
          />
          <p className='text-base text-gray-700 font-bold md:text-lg mb-1'>
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
            className='w-[50px]'
          />
          <p className='text-base text-gray-700 font-bold md:text-lg mb-1'>
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
            src='assets/icons/cash-register-regular.svg'
            alt='people'
            className='w-[50px]'
          />
          <p className='text-base text-gray-700 font-bold md:text-lg mb-1'>
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
            className='w-[50px]'
          />
          <p className='text-base text-gray-700 font-bold md:text-lg mb-1'>
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
            className='w-[50px]'
          />
          <p className='text-base text-gray-700 font-bold md:text-lg mb-1'>
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
            className='w-[50px]'
          />
          <p className='text-base text-gray-700 font-bold md:text-lg mb-1'>
            {totalInfo?.countries === 0 ? '-' : `${totalInfo?.countries}`}
          </p>
          <p className='text-gray-700 text-sm md:text-base text-center'>
            TopCashback countries
          </p>
        </div>
      </div>
    </div>
  );
};

export default MapInfo;
