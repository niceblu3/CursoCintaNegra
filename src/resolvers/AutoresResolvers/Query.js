const {getAllAutores, getOneAutor} = require('../../services/AutoresService');

const getAutores = async() => {
    const autores = await getAllAutores();
    return autores;
};

const getSingleAutor = async(_,params) => {
  const autor = await getOneAutor(params.id);
  if(!autor) throw new Error ('No existe el autor');
  return autor;
};

const me = async(root,params,{user}) => {
  const autor = await getOneAutor(user._id);
  return autor;
};


module.exports = {
  getAutores,
  getSingleAutor,
  me
};
