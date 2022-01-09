const Empleados = [
    { id:1, nombre:'Dennys Ferrer'},
    { id:2, nombre:'Javier Mora'},
    { id:3, nombre:'Andrés Bautista'}
];

const Salarios = [
    { id:1, salario:2000},
    { id:2, salario: 1500}
];

const getEmpleado = (id, callback) => {
    const empleado = Empleados.find(e => e.id === id)
    if (empleado){
        callback(null, empleado);
    } else {
        console.log(`El empleado con id ${id} no existe`);
    }    
}

const getSalario = (id, callback) => {
    const salario = Salarios.find(s => s.id === id);
    if (salario){
        callback(null, salario);
    } else {
        console.log(`El salario con id ${id} no existe`);
    }
}


getEmpleado(10, (err, empleado)=>{
    if (err){
        console.log('ERROR!!!', err);
        return console.log(err);
    } else {
        console.log(`El empleado con id ${empleado.id} es ${empleado.nombre}`);
        console.log(empleado);
    }
    
});

getSalario(10, (err, salario) => {
    if (err){
        console.log('ERROR!!!', err);
        return console.log(err);
    } else {
        console.log(`El salario con id ${salario.id} es ${salario.nombre}`);
        console.log(salario);
    }
    
})
