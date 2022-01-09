const Empleados = [
    { id:1, nombre:'Dennys Ferrer'},
    { id:2, nombre:'Javier Mora'},
    { id:3, nombre:'Andrés Bautista'}
];

const Salarios = [
    { id:1, salario:2000},
    { id:2, salario: 1500}
];

const id = 2;

const getEmpleado = (id) => {
    
    const promesaEmpleado = new Promise((resolve, reject) => {
        const empleado = Empleados.find(e => e.id === id)
        if (empleado){
            resolve(empleado)
        } else {
            reject(`El empleado con id ${id} no existe`);
        }
    })
    return promesaEmpleado;  
}

const getSalario = (id, callback) => {

    const promesaSalario = new Promise((resolve, reject) => {
        const salario = Salarios.find(s => s.id === id);
        if (salario){
            resolve(salario);
        } else {
            reject(`El salario con id ${id} no existe`);
        }
    })
    return promesaSalario;
}

getEmpleado(id)
    .then(empleado => {
        console.log(empleado.nombre);
        getSalario(id)
            .then(salario => console.log(salario.salario))
            .catch(err => console.log(err))
    })
    .catch(err => console.log(err))




