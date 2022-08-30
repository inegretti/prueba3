export default class Persona{
    #nombre;
    #edad;

    constructor(nombre, edad){
        this.#nombre=nombre;
        this.#edad=edad;

    }

    get edad(){
        return this.#edad;
    }

    
    get nombre(){
        return this.#nombre;
    }
}