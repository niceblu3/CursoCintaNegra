const jwt = require('jsonwebtoken');

const createToken = ({email, nombre}) => {

    const payload = {
      email,
      nombre
    };

    return jwt.sign(payload,process.env.SECRET_KEY,{expiresIn:'1d'});
};

module.exports = createToken;
