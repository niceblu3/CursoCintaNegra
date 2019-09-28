const {createAutor, deleteAutor, getOneAutor} = require('../../services/AutoresService');
const authenticate = require('../../utils/authenticate');

const createNewAutor = async(_,params) => {
  const autor = await createAutor(params.data);
  return autor;
};

const updateOneAutor = async(_,params) => {
  //const autor = await updateAutor(params.id,params.data);
  const autor = await getOneAutor(params.id);
  if(!autor) throw new Error('No existe el autor');
  Object.keys(params.data).forEach(key => autor[key] = params.data[key]);
  autor.save({new:true});
  return autor;
};

const login = async(_,params) => {
  const token = await authenticate(params).catch(e =>{throw e;});
  return {token, message:'Login correcto'};
};

const deleteOneAutor = async (_,params) => {
  const autor = await deleteAutor(params.id);
  if(!autor) throw new Error ('No existe el autor');
  return 'Autor borrado';
};

module .exports = {
  createNewAutor,
  updateOneAutor,
  deleteOneAutor,
  login
};
