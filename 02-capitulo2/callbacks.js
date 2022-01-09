const getUsuarioById = ( id, callback ) => {
    const usuario = {
        id,
        nombre: 'Dennys Ferrer'
    }

    setTimeout( () => {
        callback(usuario);
    }, 1500);
}

getUsuarioById(10, (usuario) => {
    console.log(usuario);
    console.log(usuario.id);
    console.log(usuario.nombre.toUpperCase());
});

