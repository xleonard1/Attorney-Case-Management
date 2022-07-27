const db = require('../config/connection');
const { Profile, Client } = require('../models');
const profileSeeds = require('./profileSeeds.json');
const clientSeeds = require('./clientSeeds')

db.once('open', async () => {
  try {
    await Profile.deleteMany({});
    await Profile.create(profileSeeds);
    await Client.deleteMany({});
    await Client.create(clientSeeds)


    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});