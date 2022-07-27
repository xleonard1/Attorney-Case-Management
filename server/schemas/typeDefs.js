//  typeDefs = what the returned information should look like. 
const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Profile {
    _id: ID!
    name: String!
    badgeNumber: Number!
    email: String
    password: String!
    clients: [String]!
}

type Client {
    _id: ID!
    name: String!
    PID: Number!
    SID: Number!
    aliasName: String
    FBI: Number!
    image: String!
    race: String!
    sex: String!
    ethnicity: String!
    dob: Date!
    age: Number!
    DL: Number!
    height: String!
    weight: Number!
    hair: String!
    eyes: String!
    build: String!
    complexion: String!
    SSN: Number!
    address: String!
    phone: String!
    placeofbirth: String!
    arrests:[String]!
    emergencyInfo: [String]!

}

# Set up an Auth type to handle returning data from a profile creating or user login
type Auth {
  token: ID!
  profile: Profile
}

type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    clients: [Client]!
    client(clientId: ID!): Client
  }

  type Mutation {
    # Set up mutations to handle creating a profile or logging into a profile and return Auth type
    addProfile(name: String!, badgeNumber,: Number!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    addClient(profileId: ID!, client: String!): Profile
    removeProfile(profileId: ID!): Profile
    removeClient(profileId: ID!, client: String!): Profile
  }
`;




module.exports = typeDefs


