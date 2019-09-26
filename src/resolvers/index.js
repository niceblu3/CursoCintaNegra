const InstagramerResolver = require('./InstagramersResolvers');

module.exports = {
  Query: {

    ...InstagramerResolver.Query
  },

  Mutation: {
    ...InstagramerResolver.Mutation
  }
};
