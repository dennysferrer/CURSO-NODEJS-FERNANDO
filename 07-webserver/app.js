const express = require('express');
const hbs = require('hbs');



const app = express();
const port = 8080;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', (error) => {
    console.log(error);
});


//Servir contendio estatico
app.use(express.static('public'));


/* app.get('/', (req, res) => {
    res.send('Home Page')

});
 */

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Dennys Ferrer',
        titulo: 'Curso de Node'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Dennys Ferrer',
        titulo: 'Curso de Node'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Dennys Ferrer',
        titulo: 'Curso de Node'
    })
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});


app.listen(port, () => {
    console.log(`Run server in port ${port}`);
})