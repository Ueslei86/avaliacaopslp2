// @filename: main.ts
// Importando o módulo br.com.liskovsubstitutionprinciple
import * as lsp from "./br.com.liskovsubstitutionprinciple";

// Criando uma lista de pássaros
let listPassaros: lsp.Passaro[] = [];

// Criando um veículo e um animal
let veiculo = new lsp.Veiculo("Veículo", 1.1, 5.1);
let animal = new lsp.Animal("Animal", 1.2);

// Adicionando os pássaros à lista
listPassaros.push(animal);
listPassaros.push(veiculo);

// Percorrendo a lista e imprimindo os nomes dos pássaros
for (let passaro of listPassaros) {
  console.log(passaro.getName());
}
