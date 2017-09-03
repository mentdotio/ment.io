import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { getAllUsers } from './queries'
import { graphql } from 'react-apollo'

class App extends Component {
  render() {

    if (this.props.data.error) return <p>There was an error.</p>
    if (this.props.data.loading) return <p>Loading...</p>
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Hi! This component has some data being loaded from GraphQL:<br /><br />
          <pre>
            {this.props.data.allUsers.edges.map((user, i) => <p>Name: {user.node.name}</p>)}
          </pre>
        </p>
      </div>
    )
  }
}

export default graphql(getAllUsers)(App)
