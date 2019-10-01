const jwt = require('jsonwebtoken');
const { getOneAutorByEmail } = require('../services/AutoresService');

const verifyToken = async req => {
  try{
    const Authorization = req.get('Authorization');
    if(Authorization){
      const formatedToken = Authorization.replace('JWT ', '');
      const payload = jwt.verify(formatedToken,process.env.SECRET_KEY);
      if(!payload) return req;
      const user = await getOneAutorByEmail(payload.email);
      if(!user) return req;
      req = {...req,user };
    }
    return req;
  }catch(e){
    throw new Error(e.message);
  }
};

module.exports = verifyToken;
