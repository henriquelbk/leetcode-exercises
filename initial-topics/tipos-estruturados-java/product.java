package app;

public class Product {

    private String name;
    private double price;
    private int quantity;

    public Product(String name, double price, int quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    public String getName() {
        return name;
    }

    public double getPrice() {
        return price;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public double total() {
        return price * quantity;
    }

    public void updatePrice(double percentage){
        price = price * (1.0 + percentage / 100.0);
    }

    public String toString() {
        return name + ", $" + price ", " + quantity;
    }
}