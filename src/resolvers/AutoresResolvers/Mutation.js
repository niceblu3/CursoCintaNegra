const {createAutor} = require('../../services/AutoresService');

const createNewAutor = async(_,params) => {
  const autores = await createAutores(params.data);
  return autores;
};


module .exports = {
  createNewAutores
};
