const cloudinary = require('cloudinary');

const storage = ({stream}) => {

  cloudinary.config({
      cloud_name:process.env.CLOUDINARY_NAME,
      api_key:process.env.CLOUDINARY_KEY,
      api_secret:process.env.CLOUDINARY_SECRET
  });

  return new Promise((resolve,reject) => {
      const buffer = cloudinary.v2.uploader.upload_stream((err,result) => {
        if(err) reject(err);
        resolve(result);
      }); //Los pedacitos de la imagen se llaman chunks

      stream.pipe(buffer); //el pipe conecta las partes de la imagen
  });

};

module.exports = storage;
