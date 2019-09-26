const {Instagramers} = require('../models')

const createInstagramer = (data) => Instagramers.create(data);

const getAllInstagramers = () => Instagramers.find({activo:true});

module.exports = {
  createInstagramer,
  getAllInstagramers
};
