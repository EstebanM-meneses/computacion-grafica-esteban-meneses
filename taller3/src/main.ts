

// import './tipos de datos/tipos-de-datos'
// import './tipos de datos/objetos'

// const app = document.querySelector<HTMLDivElement>('#app')!;
// app.innerHTML = 'Hello world';
// console.log('Hola Mundo');


interface Direccion {
  calle: string;
  ciudad: string;
  pais: string;
}

interface Estudiante {
  nombre: string;
  edad: number;
  curso: string;
  direccion: Direccion;
  mostrarInfo(): string;
}

const estudiante: Estudiante = {
  nombre: 'Juan',
  edad: 22,
  curso: 'Matemáticas',
  direccion: {
    calle: 'Av. Siempre Viva',
    ciudad: 'Bogotá',
    pais: 'Colombia'
  },
  mostrarInfo() {
    return `${this.nombre} estudia ${this.curso} en ${this.direccion.ciudad}`;
  }
};

console.log(estudiante.mostrarInfo());



interface Producto {
  id: number;
  nombre: string;
  precio: number;
  stock: number;
  mostrarDetalle(): string;
}

const producto: Producto = {
  id: 1,
  nombre: 'Laptop',
  precio: 3500,
  stock: 10,
  mostrarDetalle() {
    return `${this.nombre} cuesta $${this.precio} y hay ${this.stock} unidades disponibles`;
  }
};

console.log(producto.mostrarDetalle());



interface Pelicula {
  titulo: string;
  director: string;
  duracion: number;
  genero: string;
  reproducir(): string;
}

const pelicula: Pelicula = {
  titulo: 'Avengers: Endgame',
  director: 'Anthony y Joe Russo',
  duracion: 181,
  genero: 'Acción',
  reproducir() {
    return `Reproduciendo: ${this.titulo} - Dirigida por ${this.director}`;
  }
};

console.log(pelicula.reproducir());


interface Vehiculo {
  marca: string;
  modelo: string;
  anio: number;
  encender(): string;
}

const vehiculo: Vehiculo = {
  marca: 'Toyota',
  modelo: 'Corolla',
  anio: 2022,
  encender() {
    return `${this.marca} ${this.modelo} está encendido`;
  }
};

console.log(vehiculo.encender());



interface Usuario {
  username: string;
  password: string;
  roles: string[];
  login(): string;
}

const usuario: Usuario = {
  username: 'admin01',
  password: '123456',
  roles: ['admin', 'editor'],
  login() {
    return `Usuario ${this.username} ha iniciado sesión con roles: ${this.roles.join(', ')}`;
  }
};

console.log(usuario.login());

// Parte 2
//Teniendo en cuenta las siguientes definiciones de tipos de datos, corrige los errores de la definición de las variables según corresponda, en comentario, indica cual es el error y haz una salida en consola con el resultado correcto.

//no se puede poner true como tipo literal 
let myValue: number | string | boolean = 10; 
console.log(myValue);

//  Boolean con mayúscul no se recomiendamejor usar boolean
let myBoolean: boolean = true; 
console.log(myBoolean);

// 150 es string pero la variable es number
let healthPoints: number = 150; 
console.log(healthPoints);

// otraEtiquetano pertenece al tipo
let otherMultipleDataType: number | boolean | "myTag" = "myTag"; 
console.log(otherMultipleDataType);

// myVar es de tipo any  no hay error
let myVar; 
myVar = 123; 
myVar = true; 
myVar = "texto"; 
myVar = {}; 
console.log(myVar);

//  const debe inicializarse al declararse
const myConstant: number = 5; 
console.log(myConstant);

// inferedDataType se infiere como string y no puede recibir un number
let inferedDataType: string | number = "Texto inicial"; 
inferedDataType = 123; 
console.log(inferedDataType);

//  1 no es boolean
const isActive: boolean = true; 
console.log(isActive);

//true no es ni number ni string
let mixed: number | string = "true"; 
console.log(mixed);

// while es palabra reservada
let myWhile: string = "Hola"; 
console.log(myWhile);

// numer no existe debe ser number
let myNumber: number = 10; 
console.log(myNumber);

// 3es string debe ser number
let numeros: number[] = [1, 2, 3]; 
console.log(numeros);

// falta segundo valor en la tupla
let tupla: [string, number] = ["Hola", 123]; 
console.log(tupla);

// los tipos están invertidos
let otraTupla: [string, boolean] = ["Hola", true]; 
console.log(otraTupla);

// texto inferido como string no puede recibir null
let texto: string | null = "Hola mundo"; 
texto = null; 
console.log(texto);

// amarillo no esta en las opciones
let color: "rojo" | "verde" | "azul" = "rojo"; 
console.log(color);

//  any acepta todo, pero  toUpperCase solo sirve en string
let valor: any = "hola"; 
console.log(valor.toUpperCase());

//const no puede reasignarse
let version: number = 1.0; 
version = 2.0; 
console.log(version);

// objeto solo tiene nombre, no apellido
let persona: { nombre: string; apellido?: string } = { nombre: "Ana" }; 
persona.apellido = "Ruiz"; 
console.log(persona);

//undefined no es number
let edad: number | undefined = undefined; 
console.log(edad);

