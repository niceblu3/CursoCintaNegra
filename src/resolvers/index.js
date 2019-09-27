const {Query:QueryAutor, Mutation:MutationAutor} = require('./AutoresResolvers');
const {Query:QueryPublicacion, Mutation:MutationPublicacion} = require('./PublicacionesResolvers');
const {URLResolver, EmailAddressResolver} = require('graphql-scalars');


module.exports = {
  EmailAddressResolver:EmailAddressResolver,
  URL:URLResolver,

  Query{
    ...QueryAutor,
    ...QueryPublicacion
  },
  Mutation{
    ...MutationAutor,
    ...MutationPublicacion
  }
};
