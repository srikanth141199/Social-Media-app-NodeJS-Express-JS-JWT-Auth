
// 1. Import multer.
import multer from 'multer';

// 2. Configure storage with filename and location.
const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, 'public/images/');
    },
    filename:(req, file, cb)=>{
        cb(null, new Date().toISOString().replace(/:/g,'_') + file.originalname);
    },
});

export const upload = multer({
    storage: storage,
});


// import multer from 'multer';
// import path from 'path';

// // Get the directory name of the current file
// const currentDir = path.dirname(new URL(import.meta.url).pathname);

// // Construct the absolute path to the uploads directory
// const uploadDir = path.join(currentDir, '../uploads');

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, uploadDir); // Use the absolute path to the uploads directory
//   },
//   filename: (req, file, cb) => {
//     cb(
//       null,
//       new Date().toISOString().replace(/:/g,'_') + file.originalname
//     );
//   },
// });

// export const upload = multer({
//   storage: storage,
// });
