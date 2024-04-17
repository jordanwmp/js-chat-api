const fs = require('fs');
const path = require('path');

const verifyImagePath = () => {
    try {
        // Caminho do diretório onde você quer criar a pasta
        const dirPath = path.join(__dirname, '../');

        // Nome da pasta que você quer criar
        const folderName = 'imagens';

        // Caminho completo da pasta a ser criada
        const fullPath = path.join(dirPath, folderName);

        // Criando a pasta
        fs.mkdir(fullPath, { recursive: false }, (error) => {
            if (error) {
                return console.log('Erro ao criar a pasta:', error);
            }
            console.log('Pasta criada com sucesso!');
        });
    } catch (error) {
        console.log('error on create path ', error)
    }
}

const generateFileName = (fileName) => {
    const extension = fileName.split(".")[1]
    return `${new Date().getTime()}.${extension}`
}

const renameFile = (currentName, newName) => {
    try {
        const dirPath = path.join(__dirname, '../imagens');
        fs.renameSync(`${dirPath}/${currentName}`, `${dirPath}/${newName}`)
        console.log('file renamed')
    } catch (error) {
        console.log('error on rename file ', error)
    }
}

module.exports = { generateFileName, renameFile, verifyImagePath } 