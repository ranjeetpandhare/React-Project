import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const EXCHANGE_RATES = gql`
  {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;
const ExchangeRates = () => {
    const { loading, error, data } = useQuery(EXCHANGE_RATES);
    if (loading) return <p style={{color:"blue"}}>Loading...</p>;
  if (error) return <p style={{color:"red"}}>Error :(</p>;

  return data.rates.map(({ currency, rate }) => (
    <div key={currency}>
      <p>
        {currency}: {rate}
      </p>
    </div>
  ));
}

export default ExchangeRates
