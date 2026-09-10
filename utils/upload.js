require("dotenv").config();
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dfzt40dlv",
  api_key: "264369385758631",
  api_secret: process.env.CLOUDINARY_SECRET,
});

const upload = (req, res, next) => {
  if (!req.files || !req.files.file) {
    return res.status(400).json({
      msg: "No image file selected",
    });
  }

  const file = req.files.file;

  const allowedTypes = [
    "image/jpg",
    "image/png",
    "image/jpeg",
    "image/webp",
  ];

  if (!allowedTypes.includes(file.mimetype)) {
    return res.status(400).json({
      msg: "Upload JPG, JPEG, PNG or WEBP image only",
    });
  }

  cloudinary.uploader.upload(
    file.tempFilePath,
    (err, result) => {
      if (err) {
        console.log("Cloudinary upload error:", err);
        return res.status(500).json({
          msg: "Image upload failed",
        });
      }

      req.url = result.secure_url;
      next();
    }
  );
};

module.exports = upload;
