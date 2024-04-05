const multer = require('multer');
const sharp = require('sharp');


const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png'
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'images');
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(' ').join('_');
    const extension = MIME_TYPES[file.mimetype];
    callback(null, name + Date.now() + '.' + extension);
  }
});

// async function compressImage(req,ref) {
//   await sharp(req.file.path)
//         .webp({ quality: 20 })
//         .toFile(`./images/${ref}`)
//         .then(() => {
//           console.log(`Compressed ${req.file.filename} successfully`);
//         });
// };

// async function compressImage(req,ref) {
//   await sharp(ref)
//   .webp({ quality: 20 })
//   .toFile(`./images/${uniqueName}`)
//   .then(() => {
//     console.log(`Compressed ${uniqueName}.webp successfully`);
//   })
//   .catch(error => console.log(`${uniqueName}.webp can't be compressed`));
// };

// const storage = multer.diskStorage({
//   destination: (req, file, callback) => {
//     callback(null, 'images');
//   },
//   filename: (req, file, callback) => {
//     const name = file.originalname.split(' ').join('_');
//     const extension = MIME_TYPES[file.mimetype];
//     const uniqueName = name + Date.now()
//     const ref = uniqueName + '.' + extension;
//     const fileWepb = compressImage(req, ref);
//     callback(null,fileWepb);
//   }
// });

module.exports = multer({storage: storage}).single('image');
