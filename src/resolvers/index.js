const { Query:QueryAutor, Mutation:MutationAutor } = require('./AutoresResolvers');
const { Query:QueryPublicacion, Mutation:MutationPublicacion } = require('./PublicacionesResolvers');
const { post } = require('./Subscriptions');
const {URLResolver, EmailAddressResolver} = require('graphql-scalars');


module.exports = {
  EmailAddress:EmailAddressResolver,
  URL:URLResolver,
  Query:{
    ...QueryAutor,
    ...QueryPublicacion
  },
  Mutation:{
    ...MutationAutor,
    ...MutationPublicacion
  },
  Subscription:{
    post
  }
};
