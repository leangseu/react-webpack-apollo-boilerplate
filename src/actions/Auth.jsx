import gql from "graphql-tag";

const QUERY_LOGIN = gql `
  query login($username: String!, $password: String!){
    login(username: $username, password: $password){
      _id
      email
      username
      avatar
      token
      summary
      friends{
        username
      }
      plans {
        startDate
      }
    }
  }
`;

const VERIFY_AUTH = gql `
query verifyAuth($token: String!){
  verifyAuth(token: $token){
    _id
    email
    username
    avatar
    token
    summary
    friends {
      username
    }
    plans {
      startDate
    }
  }
}
`

const MUTATION_REGISTER = gql `
  mutation {
    signup(input: {
      username:"admin",
      email:"admin@yahoo.com",
      password:"1234"
    }) {
      _id
      username
      jwt
    }
  }
`;

export {QUERY_LOGIN, MUTATION_REGISTER, VERIFY_AUTH}