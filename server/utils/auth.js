const jwt = require('jsonwebtoken');

const secret = 'mysecretssshhhhhhh';
const expiration = '2h';

module.exports = {
  signToken: function ({ badgeNumber, email, name, _id }) {
    const payload = { badgeNumber, email, name, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};