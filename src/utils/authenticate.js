//Compara la contraseña
const bcrypt = require('bcrypt');
const {getOneAutorByEmail} = require('../services/AutoresService');
const createToken = require('./createToken');

const authenticate = ({email, password}) => {
  return new Promise((resolve,reject) => {
    getOneAutorByEmail(email).then(user => {
      if(!user) reject(new Error('El autor no existe'));
      bcrypt.compare(password,user.password,(err, isValid) => {
        if(err) reject (new Error('Error al comparar passwords'));
        isValid ? resolve(createToken(user)): reject (new Error('Password incorrecto'));
      });
    });
  });
};


module.exports =  authenticate;
