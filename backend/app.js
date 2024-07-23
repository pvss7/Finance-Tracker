const express = require('express');
const cors = require('cors');
const app = express()
const {db} = require('./db/db')
require('dotenv').config()
const {readdirSync} = require('fs')

//middlewares
app.use(express.json())
app.use(cors())
const PORT = process.env.PORT

//routes
readdirSync('./routes').map((route) => app.use('/api/v1',require('./routes/' + route)))

app.get('/',(req,res)=>{  
})
const server = () =>{
    db()
    app.listen(PORT,() =>{
        console.log("Listening to :" ,PORT)
    })
}
server()
