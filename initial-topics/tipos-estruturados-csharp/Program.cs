using System;

namespace MyApp
{
    internal class Program
    {

       
        static void Main(string[] args)
        {
            var p1 = new Product("Laptop", 1000.0, 5);
            var p2 = new Product("Headphone", 200.0, 2);
            var p3 = new Product("Mouse", 80.0, 12);

            var total1 = p1.total();
            var total2 = p2.total();

            Console.WriteLine(total1);
            Console.WriteLine(total2);

            p1.updatePrice(40.0);
            Console.WriteLine(p1.Price);
        }
    }
}