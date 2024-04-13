const multer = require('multer');
const SharpMulter  =  require("sharp-multer");

const newFilenameFunction = (og_filename, options) => {
  const newname =
    og_filename.split(".").slice(0, -1).join(".")
    + "-" + Date.now() + "." + options.fileFormat;
  console.log("OG", og_filename);
  console.log("format", options.fileFormat);
  console.log("name", newname)
  return newname;
};

const storage =
 SharpMulter ({
              destination:(req, file, callback) =>callback(null, "images"),
              imageOptions:{
               fileFormat: "webp",
               quality: 80,
               resize: { width: 650, resizeMode: "outside" },
              },
              filename: newFilenameFunction,
          });

const upload  =  multer({ storage: storage });

module.exports = upload.single('image');
