const {createPublicacion, updatePublicacion, deletePublicacion} = require('../../services/PublicacionesService');
const {getOneAutor} = require('../../services/AutoresService');

const createNewPublicacion = async(_,params) => {
  const publicacion = await createPublicacion(params.data);
  //Temporal solution
  const autor = await getOneAutor(params.data.autor);
  autor.publicaciones.push(publicacion._id);
  autor.save();
  return publicacion;
};

const updateOnePublicacion = async(_,params) => {
  const publicacion = await updatePublicacion(params.id,params.data);
  if(!publicacion) throw new Error ('La publicación no existe');
  return publicacion;
};

const deleteOnePublicacion = async(_,params) =>{
  const publicacion = await deletePublicacion(params.id);
  if(!publicacion) throw new Error('La publicación no existe');
  return 'Publicación eliminada';
};

module.exports = {
  createNewPublicacion,
  updateOnePublicacion,
  deleteOnePublicacion
};
