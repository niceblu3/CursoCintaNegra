const {createPublicacion, updatePublicacion, deletePublicacion} = require('../../services/PublicacionesService');
//const {getOneAutor} = require('../../services/AutoresService');

const createNewPublicacion = async(_,{data},{user}) => {
  data.autor = user._id;
  const publicacion = await createPublicacion(data);
  user.publicaciones.push(publicacion._id);
  user.save();
  return publicacion;
};

const updateOnePublicacion = async(_,{id,data},{user}) => {
  const publicacion = await updatePublicacion(id,data,user);
  if(!publicacion) throw new Error ('La publicación no existe');
  return publicacion;
};

const deleteOnePublicacion = async(_,{id},{user}) => {
  const publicacion = await deletePublicacion(id,user);
  if(!publicacion) throw new Error('La publicación no existe');
  return 'Publicación eliminada';
};

module.exports = {
  createNewPublicacion,
  updateOnePublicacion,
  deleteOnePublicacion
};
