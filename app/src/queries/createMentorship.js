import { gql } from 'react-apollo'

export const createMentorship = gql`
  mutation {
    createMentorship(input: {
      mentorship: {
        subjectId: "199bfcda-eae2-4b9b-8cbc-e02520b426f6",
        userId: "03cb6404-bd2d-4532-afab-fa72abe17a28"
      }
    })
  }
`
