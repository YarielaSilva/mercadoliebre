const express = require ('express');
const path = require ('path');

const app = express();


const publicPath = path.resolve (__dirname, './public');
app.use (express.static(publicPath));


/* CORRER LA RUTA DEL HOME*/
/*
app.listen (3000, () => {
    console.log ("Servidor corriendo en el puerto 3000")
});

app.get('/', (req, res) =>{
    res.sendFile(path.resolve(__dirname,'./views/home.html'))
})  */

/*CORRER LA RUTA DEL REGISTER*/
/*
app.listen (4000, () => {
    console.log ("Servidor corriendo en el puerto 4000")
});

app.get('/', (req, res) =>{
    res.sendFile(path.resolve(__dirname,'./views/register.html'))
})   */


app.listen (5000, () => {
    console.log ("Servidor corriendo en el puerto 5000")
});

app.get('/', (req, res) =>{
    res.sendFile(path.resolve(__dirname,'./views/login.html'))
})  
