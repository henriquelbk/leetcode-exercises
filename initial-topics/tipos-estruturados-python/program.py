class Product:
    def __init__(self, name, price, quantity):
        self.name = name
        self.price = price
        self.quantity = quantity


    def total(self):
        return self.price * self.quantity
    

    def updatePrice(self, percentage):
        self.price = self.price * (1 + percentage / 100)


    def __str__(self):
        return f"{self.name}, ${self.price}, {self.quantity}"


p1 = Product(name= "Laptop", price= 1000.0, quantity= 5)
p2 = Product(name= "Headphone", price= 300.0, quantity= 8)

print(p1)
print(p2)

total1 = p1.total()
total2 = p2.total()
print(total1)
print(total2)

p2.updatePrice(20)
print(p2.price)