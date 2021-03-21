import React from 'react'
import { Query } from '@apollo/react-components';
import { gql } from 'apollo-boost';
const EXCHANGE_RATES = gql`
  {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`

const ExchangeRatesone = () => (
    <Query
    query={EXCHANGE_RATES}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.rates.map(({ currency, rate }) => (
        <div key={currency}>
          <p>
            {currency}: {rate}
          </p>
        </div>
      ));
    }}
  </Query>
)

export default ExchangeRatesone
