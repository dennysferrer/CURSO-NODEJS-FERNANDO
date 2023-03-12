const http = require('http');

http.createServer((req, res) => {
    //console.log(req);

    /* res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')

    const persona = {
        id: 1,
        name: "Dennys"
    }

    res.writeHead(200, {'Content-Type': 'application/csv'})

    res.write('id, nombre \n');
    res.write('1, Dennys \n');
    res.write('2, Alexis \n');
    res.write('3, Ferrer \n');
    res.write('4, Yanez \n'); */

    res.write('Hola mundo');    
    
    res.end();
}).listen(3000, () => {
    console.log('Server listen in port 3000')
});