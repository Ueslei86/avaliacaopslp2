class Veículo {
    acelerar() {
        console.log("Acelerando o veículo");
    }
}

class Carro extends Veículo {
    acelerar() {
        console.log("Acelerando o carro");
    }
}

let meuVeículo: Veículo = new Carro();
meuVeículo.acelerar(); // Acelerando o carro