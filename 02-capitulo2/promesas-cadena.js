const Empleados = [
    { id:1, nombre:'Dennys Ferrer'},
    { id:2, nombre:'Javier Mora'},
    { id:3, nombre:'Andrés Bautista'}
];

const Salarios = [
    { id:1, salario:2000},
    { id:2, salario: 1500}
];

const getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        const empleado = Empleados.find(e => {
           return e.id === id;
        })

        if (empleado){
            resolve(empleado);
        } else {
            reject(`No existe el empleado con id: ${id}`);
        }
    });
}

const getSalario = (id) => {
    return new Promise((resolve, reject) => {
        const salario = Salarios.find(s => s.id === id)?.salario;

        if (salario){
            resolve(salario);
        } else {
            reject(`No existe el salario para el empleado con id: ${id}`);
        }
    })
}

const id = 3;
let nombre;

getEmpleado(id)
    .then(empleado => {
        console.log(empleado);
        nombre = empleado;
        return getSalario(id);
    })
    .then (salario => {
        console.log(`El empleado ${nombre.nombre}, tiene un salario de ${salario}`);
    })
    .catch(err => {
        console.log(err);
    })