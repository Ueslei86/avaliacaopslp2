class Pássaro {
    voar() {
        console.log("O pássaro está voando");
    }
}

class Pato extends Pássaro {
    voar() {
        console.log("O pato está voando");
    }
}

let meuPássaro: Pássaro = new Pato();
meuPássaro.voar(); // O pato está voando