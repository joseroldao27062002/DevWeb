const express = require('express')
//const path = require('path')
const routes = require('./routes.js')
const app = express()

app.use(routes)

app.listen(3000, () => {
        console.log("Servidor rodando")
    }
);

