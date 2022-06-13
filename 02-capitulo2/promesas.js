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