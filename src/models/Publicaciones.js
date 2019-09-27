const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
const PublicacionesSchema = new Schema({
    imagen:{
      type:String,
      required:true
    },
    titulo:{
      type:String,
      required:true
    },
    contenido:{
      type:String,
    },
    likes:{
      type:Number
    },
    liked_by:{
      type:[Schema.Types.ObjectId],
      ref:'Autores'
    },
    activo:{
      type:Boolean,
      default:true
    },
    instagramer:{
      type:Schema.Types.ObjectId,
      ref:'autor'
    }
},{timestamps:true});

module.exports = mongoose.model('publicaciones',PublicacionesSchema);
