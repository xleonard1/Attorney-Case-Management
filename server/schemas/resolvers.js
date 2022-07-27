const { AuthenticationError } = require('apollo-server-express');
const { Profile } = require('../models');
const { Client } = require('../models')
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        profiles: async () => {
            return Profile.find();
          },
      
        profile: async (parent, { profileId }) => {
            return Profile.findOne({ _id: profileId });
          },
        
        clients: async () => {
            return Client.find();
        },
        client: async (parent, {clientId}) => {
            return Client.findOne({_id: clientId})
        }
    }, 
    Mutation: {
        addProfile: async (parent, { name, badgeNumber, email, password }) => {
          const profile = await Profile.create({ name,  badgeNumber, email, password });
          const token = signToken(profile);
    
          return { token, profile };
        },
        login: async (parent, { email, password, badgeNumber }) => {
          const profile = await Profile.findOne({ email });
    
          if (!profile) {
            throw new AuthenticationError('No profile with this email found!');
          }
    
          const correctPw = await profile.isCorrectPassword(password);
    
          if (!correctPw) {
            throw new AuthenticationError('Incorrect password!');
          }
    
          const token = signToken(profile);
          return { token, profile };
        },
    
        addClient: async (parent, { profileId, client }) => {
          return Profile.findOneAndUpdate(
            { _id: profileId },
            {
              $addToSet: { clients: client },
            },
            {
              new: true,
              runValidators: true,
            }
          );
        },
        removeProfile: async (parent, { profileId }) => {
          return Profile.findOneAndDelete({ _id: profileId });
        },
        removeClient: async (parent, { profileId, client }) => {
          return Profile.findOneAndUpdate(
            { _id: profileId },
            { $pull: { clients: client } },
            { new: true }
          );
        },
        createClient: async (parent, args) => {
            return Client.create(args)
        }
      },
}

module.exports = resolvers;