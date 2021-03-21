import logo from './logo.svg';
import './App.css';
import ApolloClient from 'apollo-boost';
import { gql } from "apollo-boost";
import { ApolloProvider } from '@apollo/react-hooks';
import ExchangeRates from './component/ExchangeRates';
import ExchangeRatesone from './component/ExchangeRatesone';


const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
});

/* client.query({
  query:gql`{
    rates(currency: "USD") {
      currency
      rate
    }
  }`
}).then(result => console.log(result)); */

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
    <div>
      <h2>My first Apollo app 🚀</h2>
     {/*  <ExchangeRates/> */}
      <ExchangeRatesone/>
    </div>
  </ApolloProvider>
    </div>
  );
}

export default App;
