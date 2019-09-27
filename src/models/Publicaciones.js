const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
const PublicacionSchema = new Schema({
    imagen:{
      type:String,
      //required:true
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
      ref:'autores'
    },
    activo:{
      type:Boolean,
      default:true
    },
    autor:{
      type:Schema.Types.ObjectId,
      ref:'autores'
    }
},{timestamps:true});

module.exports = mongoose.model('publicaciones',PublicacionSchema);
