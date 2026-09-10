require('dotenv').config();
const cloudinary = require("cloudinary").v2;



cloudinary.config({
  cloud_name: 'dfzt40dlv',
  api_key: '264369385758631',
  api_secret: process.env.CLOUDINARY_SECRET,
});


const upload = (req, res, next) => {
  const file = req.files.file;
  const match = ['image/jpg', 'image/png', 'image/jpeg']

  if (match.indexOf(file.mimetype) >= 0)
    cloudinary.uploader.upload(file.tempFilePath, (err, result) => {

      if (err) {
        res.status(501).json({ msg: "Internal server error! Try Again!" })
      }
      else {
        req.url = result.secure_url;
        next();
      }
    })
  else {
    res.status(501).json({ msg: "Upload Image File Only" })
  }
}


module.exports = upload;