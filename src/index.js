const express = require('express')
const app = express()
app.use(express.json())

const contactRouter = require('./routes/contact.routes')
app.use(contactRouter)


const PORT = 3000

app.listen(PORT, ()=>{
    console.log('JS Chat running...')
})