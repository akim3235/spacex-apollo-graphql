import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter, Route } from 'react-router-dom';
import Launches from './components/Launches'
import Launch from './components/Launch'
import './App.css';
import logo from './logo.jpg';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <div className="container">
          <img src={logo} alt="SpaceX" style={{ width: 300, display: "block", margin: 'auto'}}></img>
          <Route exact path="/" component={Launches} />
          <Route exact path="/launch/:flight_number" component={Launch} />
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
