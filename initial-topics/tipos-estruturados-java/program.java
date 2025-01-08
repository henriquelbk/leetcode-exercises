// Exercício: Fazer um programa para armazenar em memória os dados de dois produtos (nome, preço e quantidade), e mostrar estes dados na tela

package app;

public class Program {
    public static void main(String[] args) {

        var p1 = new Product("Laptop", 1000.0, 5);
        var p2 = new Product("Mouse", 120.0, 11);

        System.out.println(p1);
        System.out.println(p2);
    }
}