export default class Dni{
    #numero;
    constructor(numero){
        this.#numero=numero;

    }
    get numero(){
        return this.#numero;
    }
}