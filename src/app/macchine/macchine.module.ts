export class Macchina{
    id: number;
    modello: string;
    marca: string;
    prezzo: number;
    velocitamax: number;

    constructor(id?: number, modello?: string, marca?: string, prezzo?: number, velocitamax?: number){
        this.id = id || 0;
        this.modello = modello || "niente";
        this.marca = marca || "niente";
        this.prezzo = prezzo || 0;
        this.velocitamax = velocitamax|| 0;
    }
}