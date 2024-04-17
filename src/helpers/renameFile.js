const fs = require('fs');

const generateFileName = (fileName) => 
{
    const extension = fileName.split(".")[1]
    return `${new Date().getTime()}.${extension}`
}

const renameFile = (currentName, newName) =>{
    try {
        fs.renameSync(`images/${currentName}`,`images/${newName}`)
        console.log('file renamed')
    } catch (error) {
        console.log('error on rename file ', error)
    }
}

module.exports = { generateFileName, renameFile } 