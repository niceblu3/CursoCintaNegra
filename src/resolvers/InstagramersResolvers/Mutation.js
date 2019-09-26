const {createInstagramer} = require('../../services/InstagramersService');

const createNewInstagramer = async(_,params) => {
  const instagramer = await createInstagramer(params.data);
  return instagramer;
};


module .exports = {
  createNewInstagramer
};
