const multer = require('multer');

let nameFile = null;

const storage = multer.diskStorage({
    destination: function(req, file, cb)
    {
        cb(null, 'images/')
    },
    filename: function (req, file, cb)
    {
        const split = file.originalname.split('.')
        const fileExtension = split[1]
        const fileName = split[0]
        nameFile = `${fileName}.${fileExtension}`;         
        cb(null, nameFile);
    }
})

const fileUpload = multer({ storage, nameFile: nameFile });

module.exports = { fileUpload };