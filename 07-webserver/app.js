require('dotenv').config();
const express = require('express');
const hbs = require('hbs');



const app = express();
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


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
    res.render('404');
});


app.listen(port, () => {
    console.log(`Run server in port ${port}`);
})