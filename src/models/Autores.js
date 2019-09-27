const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
const AutoresSchema = new Schema({
    nombre:{
      type:String,
      required:true
    },
    apellido:{
      type:String,
      required:true
    },
    nombreUsuario:{
      type:String,
      required:true
    },
    email:{
      type:String,
      required:true,
      unique:true
    },
    password:{
      type:String
    },
    numTelefono:{
      type:String
    },
    sexo:{
      type:String,
      enum:['M','F','O']
    },
    publicaciones:{
      type:[Schema.Types.ObjectId],
      ref:'publicaciones'
    },
    imagen_perfil:{
      type:String
    },
    biografia:{
      type:String
    },
    website:{
      type:String
    },
    activo:{
      type:Boolean,
      default:true
    }
},{timestamps:true});

module.exports = mongoose.model('Autores',AutoresSchema);
