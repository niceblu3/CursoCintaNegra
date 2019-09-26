const {getAllInstagramers} = require('../../services/InstagramersService');

const getInstagramers = async() => {
    const allInsta = await getAllInstagramers();
    return allInsta;
};


module.exports = {
  getInstagramers
};
