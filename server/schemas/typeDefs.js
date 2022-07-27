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

# Set up an Auth type to handle returning data from a profile creating or user login
type Auth {
  token: ID!
  profile: Profile
}

type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
  }













`