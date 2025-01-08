// Exercício: Fazer um programa para armazenar em memória os dados de dois produtos (nome, preço e quantidade), e mostrar estes dados na tela

class Product {

    constructor(name, price, quantity){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    total () {
        return this.price * this.quantity
    }
    
    updatePrice (percentage) {
        this.price = this.price * (1 + percentage / 100);
    }

    toString(){
        return `${this.name}, $${this.price.toFixed(2)}, ${this.quantity}`
    }
}


const p1 = new Product ("laptop", 999, 5)
const p2 = new Product ("mouse", 189, 8)
const total1 = p1.total();
p1.updatePrice(10);

console.log(p1.toString());
console.log(p2.toString());
console.log(total1);
console.log(p1.price);


