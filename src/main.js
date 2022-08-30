import Persona from './Models/Persona.js';
import Dni from './Models/Dni.js';

let p= new Persona("julio",12);
console.log(p.nombre);
let d=new Dni(11122255);
console.log(d.numero);