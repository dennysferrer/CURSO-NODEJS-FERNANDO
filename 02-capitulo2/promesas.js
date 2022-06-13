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
    const promesa = new Promise( (resolve, reject) => {
        const empleado = Empleados.find(e => e.id === id)?.nombre
        if (empleado){
            resolve(empleado);
        } else {
            reject(`No existe el empleado con id ${id}`);
        }
    } )
    return promesa;
}

const getSalario = (id) => {
    const promesa = new Promise((resolve, reject) => {
        const salario = Salarios.find(s => s.id === id)?.salario;
        if (salario){
            resolve(salario);
        } else {
            reject(`No existe salario para el empleado con id ${id}`)
        }
    })
    return promesa;
}

getEmpleado(id)
    .then(empleado => console.log(empleado))
    .catch(err => console.log(err))

getSalario(id)
    .then(salario => console.log(salario))
    .catch(err => console.log(err))
