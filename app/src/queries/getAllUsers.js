import { gql } from 'react-apollo'

const getAllUsers = gql`
  query {
    allUsers {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`

export default getAllUsers