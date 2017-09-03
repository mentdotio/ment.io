import React from 'react';
import ReactDOM from 'react-dom';
import {
  ApolloProvider,
  ApolloClient,
  createNetworkInterface
} from 'react-apollo'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker'

const networkInterface = createNetworkInterface({
    uri: 'http://localhost:5000/graphql'
})

const client = new ApolloClient({
    networkInterface,
    dataIdFromObject: o => o.id,
    connectToDevTools: true // process.env.NODE_ENV === 'development'
})

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
    , document.getElementById('root'));
registerServiceWorker();
