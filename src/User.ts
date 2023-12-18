export class Animal {
    private _name: string;
    private _especie: string;
    private _tipo: string;

    constructor(name: string, especie: string, tipo: string) {
        this._name = name;
        this._especie = especie;
        this._tipo = tipo;
    }
}