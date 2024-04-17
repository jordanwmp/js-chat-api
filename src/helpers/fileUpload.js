const multer = require('multer');
const fs = require('fs');
const path = require('path');

// Defina o diretório onde as imagens serão salvas
const dirPath = path.join(__dirname, '../imagens'); // Altere 'nomeDoDiretorio' para o nome do seu diretório

// Cria o diretório se ele não existir
/*if (!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath, { recursive: true });
}*/

let nameFile = null;

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, dirPath); // Define o destino das imagens
    },
    filename: function (req, file, cb) {
        const split = file.originalname.split('.')
        const fileExtension = split[1]
        const fileName = split[0]
        nameFile = `${fileName}.${fileExtension}`;         
        cb(null, nameFile);
    }
});

const fileUpload = multer({ storage });

module.exports = { fileUpload };



/*const multer = require('multer');

let nameFile = null;

const storage = multer.diskStorage({
    destination: function(req, file, cb)
    {
        cb(null, dirPath)
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

module.exports = { fileUpload };*/