const {Autores} = require('../models')

const createAutores = (data) => Autores.create(data);

const getAllAutores = () => Autores.find({activo:true}).populate({
    path:'publicaciones',
    model:'publicaciones'
});

const getOneAutor = (id) => Autores.findOne({_id_id,activo:true}).populate('publicaciones');

const getOneAutorByEmail = (email) => Autores.findOne({email,activo:true});

const updateAutor = (id,data) => Autores.findByIdAndUpdate(id,{...data},{new:true});

const deleteAutor = (id) => Autores.findOneAndUpdate({_id:id,activo:true},{activo:false});


module.exports = {
  createAutores,
  getAllAutores,
  getOneAutor,
  getOneAutorByEmail,
  updateAutor,
  deleteAutor
};
