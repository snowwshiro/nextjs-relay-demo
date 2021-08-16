import { graphql } from 'react-relay'

export default graphql`
  query repositoryQuery {
    repository(owner: "snowwshiro" name: "snowwshiro") {
      name
    }
  }
`