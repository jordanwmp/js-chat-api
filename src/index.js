const express = require('express')
const { verifyImagePath } = require('./helpers/renameFile')

const app = express()
app.use(express.json())

const path = require('path');

// Substitua 'nomeDoDiretorio' pelo nome real do seu diretório onde o Multer salva as imagens
const dirImagens = path.join(__dirname, 'imagens');

// Servindo os arquivos estáticos
app.use('/imagens', express.static(dirImagens));

//REFATORAR AQUI COM NODE CONFIG E .ENV

const cors = require('cors')
const corsOption = {
    origin: ['http://localhost:3000'],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
}

app.use(cors(corsOption));

verifyImagePath()

const contactRouter = require('./routes/contact.routes')
app.use(contactRouter)

const PORT = 3001

app.listen(PORT, ()=>{
    console.log(`JS Chat running on port... ${PORT}`)
})