const express = require('express')
const app = express()
app.use(express.json())


//REFATORAR AQUI COM NODE CONFIG E .ENV

const cors = require('cors')
const corsOption = {
    origin: ['http://localhost:3000'],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
}

app.use(cors(corsOption));

const contactRouter = require('./routes/contact.routes')
app.use(contactRouter)

const PORT = 3001

app.listen(PORT, ()=>{
    console.log(`JS Chat running on port... ${PORT}`)
})