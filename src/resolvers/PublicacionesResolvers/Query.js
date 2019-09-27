const { getAllPublicaciones, getSinglePublicacion} = require('../../services/PublicacionesService');

const getPublicaciones = async () => {
  const publicaciones = await getAllPublicaciones();
  return publicaciones;
};

const getOnePublicacion = async (_,params) => {
  const publicacion = await getSinglePublicacion(params.id);
  if(!publicacion) throw new Error ('La publicación no existe');
  return publicacion;
};

module.exports = {
  getPublicaciones,
  getOnePublicacion
};
