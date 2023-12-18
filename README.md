# Liskov Substitution Principle

O princípio de Liskov foi criado por  Barbara Liskov e Jeannette Wing. Este princípio diz a respeito onde as classes filhas nuncam devem infringir as definições da classe pai.

O Princípio da Substituição de Liskov (LSP), proposto por Barbara Liskov em 1987, é um conceito fundamental na programação orientada a objetos. Este princípio estabelece que, em um programa de computador, se S é um subtipo de T, então os objetos de tipo T podem ser substituídos pelos objetos de tipo S sem alterar nenhuma das propriedades desejáveis desse programa.

Em termos mais simples, isso significa que as classes derivadas devem ser substituíveis por suas classes base. Ou seja, se uma classe cliente espera uma instância de uma classe base X, uma instância de uma subclasse Y de X deve poder ser usada no seu lugar.

A violação do LSP ocorre quando as subclasses não se comportam da mesma maneira que suas superclasses. Por exemplo, se uma função recebe um objeto da classe base B como argumento e um objeto da classe derivada D é passado para essa função, resultando em um comportamento incorreto, isso seria uma violação do LSP. 