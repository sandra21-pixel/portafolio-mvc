const express = require('express');
const app = express();
const port= 3030;
const path = require('path')
const main = require('./routers/main')

app.use(express.static('public'))

app.use('/',main);

app.listen(port,()=>{
    console.log('Servidor levantado ' + port)
})