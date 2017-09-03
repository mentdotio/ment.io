import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { string } from 'prop-types'
import Routes from './routes'
import { Header } from './elements/Header'
import { getAllUsers } from './queries'
import './App.css'

class App extends Component {

  static propTypes = {
    test: string
  }

  state = {
    input: 'Some input'
  }

  testMethod = () => {
    return true
  }

  render() {

    if (this.props.data.error) return <p>There was an error.</p>
    if (this.props.data.loading) return <p>Loading...</p>
    return (
      <div className="App">
        <Header />
        <Routes />
      </div>
    )
  }
}

export default graphql(getAllUsers)(App)
