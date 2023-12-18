class Animal {
    comer() {
        console.log("O animal está comendo");
    }
}

class Cachorro extends Animal {
    comer() {
        console.log("O cachorro está comendo");
    }
}

let meuAnimal: Animal = new Cachorro();
meuAnimal.comer(); // O cachorro está comendo

