const mongoose = require ('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;
const AutorSchema = new Schema({
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
      required:false
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

AutorSchema.pre('save',function(next){
    const autor = this;
    const SALT_FACTOR = 10;
    if(!autor.isModified('password')) {return next();}
    bcrypt.genSalt(SALT_FACTOR,function(err,salt){
        if(err) return next(err);
        bcrypt.hash(autor.password,salt,function(err,hash){
            if(err) return next(err);
            autor.password = hash;
            next();
        });
    });
});

module.exports = mongoose.model('autores',AutorSchema);
