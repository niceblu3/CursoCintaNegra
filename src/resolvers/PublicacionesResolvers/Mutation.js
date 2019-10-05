const {createPublicacion, updatePublicacion, deletePublicacion} = require('../../services/PublicacionesService');
//const {getOneAutor} = require('../../services/AutoresService');
const storage = require('../../utils/storage');

const createNewPublicacion = async(_,{data},{user,pubsub}) => {
  data.autor = user._id;

  if(data.imagen){
    const {createReadStream} = await data.imagen;
    const stream = createReadStream();
    const image = await storage({stream});
    data = {...data,imagen:image.url};
  }

  const publicacion = await createPublicacion(data);
  user.publicaciones.push(publicacion._id);
  user.save();

  pubsub.publish('post',{
    post:{
      mutation: 'CREATED',
      data: publicacion
    }
  });

  return publicacion;
};

const updateOnePublicacion = async(_,{id,data},{user}) => {
  if(data.imagen){
    const {createReadStream} = await data.imagen;
    const stream = createReadStream();
    const image = await storage({stream});
    data = {...data,imagen:image.url};
  }

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
