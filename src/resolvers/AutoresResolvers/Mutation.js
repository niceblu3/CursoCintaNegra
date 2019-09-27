const {createAutor, updateAutor, deleteAutor} = require('../../services/AutoresService');

const createNewAutor = async(_,params) => {
  const autor = await createAutor(params.data);
  return autor;
};

const updateOneAutor = async(_,params) => {
  const autor = await updateAutor(params.id,params.data);
  //const autor = await getOneAutor(params.id);
  if(!autor) throw new Error('No existe el autor');
  //Object.keys(params.data).forEach(key => autor[key] = params.data[key]);
  autor.save({new:true});
  return autor;
}

const deleteOneAutor = async (_,params) => {
  const autor = await deleteAutor(params.id);
  if(!autor) throw new Error ('No existe el autor');
  return 'Autor borrado';
}

module .exports = {
  createNewAutor,
  updateOneAutor,
  deleteOneAutor
};
