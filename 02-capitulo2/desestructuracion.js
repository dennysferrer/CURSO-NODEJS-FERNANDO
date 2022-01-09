const Deadpool = {
    nombre: "Wade",
    apellido: "Winston",
    poder: "Regeneración",
    getNombre(){
        return `${this.nombre} ${this.apellido} ${this.poder}`
    }
}

console.log(Deadpool.getNombre());

const { nombre, apellido, poder, edad } = Deadpool;

console.log(nombre, apellido, poder, edad);

const heroes = ['Deadpool', 'Sumperman', 'Batman'];

const [h1,h2,h3] = heroes;

console.log(h1)
