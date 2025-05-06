using System;

namespace MyApp
{
    internal class Program
    {

        static double total(Product product) {
            return product.Price * product.Quantity;
        }

        static void updatePrice(Product product, double percentage) {
            product.Price = product.Price * (1.0 + percentage / 100.0);
        }
        static void Main(string[] args)
        {
            var p1 = new Product("Laptop", 1000.0, 5);
            var p2 = new Product("Headphone", 200.0, 2);
            var p3 = new Product("Mouse", 80.0, 12);
            var total1 = total(p1);

            Console.WriteLine(p1);
            Console.WriteLine(total1);

            updatePrice(p2, 40.0);
            Console.WriteLine(p2.Price);
        }
    }
}