import { gql } from 'react-apollo'

export const createMentorship = gql`
  mutation {
    createMentorship(input: {
      mentorship: {
        subjectId: "314ebf89-b463-4a70-812e-9222e797cfb8"
      }
    })
  }
`
