import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import {
  ApolloProvider,
  ApolloClient,
  createNetworkInterface
} from 'react-apollo'
import registerServiceWorker from './registerServiceWorker'
import App from './App'
import './index.css'

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
        <HashRouter>
          <App test="Heyyyy"/>
        </HashRouter>
    </ApolloProvider>
    , document.getElementById('root'))
registerServiceWorker()
