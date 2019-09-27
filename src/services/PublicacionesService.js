const {Publicaciones} = require('../models');

const getAllPublicaciones = () => Publicaciones.find({activo:true}).populate('autor');

const getSinglePublicacion = (id) => Publicaciones.findOne({_id:id,activo:true}).populate('autor');

 const createPublicacion = async(data) => {
    const publicacion = await Publicaciones.create(data);
    const populatedPublicacion = await getSinglePublicacion(publicacion._id);

    return populatedPublicacion;
 };


const updatePublicacion = (id,data) => Publicaciones.findOneAndUpdate({_id:id},{...data},{new:true}).populate('autor');

const deletePublicacion = (id) => Publicaciones.findOneAndUpdate({_id:id, activo:true},{activo:false});

module.exports = {
  getAllPublicaciones,
  getSinglePublicacion,
  createPublicacion,
  updatePublicacion,
  deletePublicacion
};
