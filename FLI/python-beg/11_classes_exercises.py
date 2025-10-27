# 1. Crea una clase llamada "Animal" que tenga una propiedad "species"
# y un método "make_sound" que imprima un sonido genérico.

# Una clase es como un molde para crear objetos.
# El método __init__ se usa para inicializar sus propiedades cuando se crea una instancia.

import math  # Importamos la librería math para usar sqrt()


class Animal:
    def __init__(self, species):
        # 'self' hace referencia al propio objeto que se está creando.
        # Aquí guardamos la especie del animal.
        self.species = species

    def make_sound(self):
        # Este método representa una acción del objeto.
        # En este caso, simplemente imprime un sonido genérico.
        print("generic sound")


# Creamos un objeto (instancia) de la clase Animal
animal1 = Animal("unknown")

# Llamamos a su método
animal1.make_sound()  # imprime: generic sound


# 2. Modifica la clase "Animal" para que reciba la especie al crear un objeto
# y almacénala en una propiedad pública.
# Añade el método "make_sound" que imprima un sonido dependiendo de la especie.

# Aquí mejoramos la clase para que el sonido cambie según el tipo de animal.


class Animal:
    def __init__(self, species):
        self.species = species  # propiedad pública que guarda la especie

    def make_sound(self):
        # Condicionales para hacer que el sonido dependa de la especie
        if self.species == "dog":
            print("woof woof")
        elif self.species == "cat":
            print("meow")
        elif self.species == "cow":
            print("moo")
        else:
            print("generic sound")


# Probamos varios objetos distintos
dog = Animal("dog")
cat = Animal("cat")
cow = Animal("cow")
unknown = Animal("dinosaur")

# Llamamos al método de cada uno
dog.make_sound()      # woof woof
cat.make_sound()      # meow
cow.make_sound()      # moo
unknown.make_sound()  # generic sound


# ======================================
# 🚗 EJERCICIO 3
# ======================================
# Crea una clase llamada "Car" con las propiedades públicas "brand" y "model".
# Además, debe tener una propiedad privada "_speed" que inicialmente será 0.

# Una propiedad privada en Python se define con doble guion bajo (__)
# para que no sea accesible directamente desde fuera de la clase.

class Car:
    def __init__(self, brand, model):
        self.brand = brand          # Propiedad pública
        self.model = model          # Propiedad pública
        self.__speed = 0            # Propiedad privada (por defecto 0)

    # Creamos un método getter para ver la velocidad desde fuera
    def get_speed(self):
        return self.__speed


# Probamos el ejercicio 3
car = Car("Opel", "Corsa")
print(car.brand)       # Opel
print(car.model)       # Corsa
print(car.get_speed())  # 0


# ======================================
# 🚗 EJERCICIO 4
# ======================================
# Añade a la clase "Car" un método llamado "accelerate" que aumente la velocidad en 10 unidades.
# Añade también un método "brake" que reduzca la velocidad en 10 unidades.
# Asegúrate de que la velocidad no sea negativa.

class Car:
    def __init__(self, brand, model):
        self.brand = brand
        self.model = model
        self.__speed = 0  # inicializamos siempre a 0

    def get_speed(self):
        return self.__speed

    def accelerate(self):
        # Aumentamos la velocidad en 10 cada vez que se llama
        self.__speed += 10
        print(f"{self.brand} {self.model} acelera a {self.__speed} km/h")

    def brake(self):
        # Reducimos la velocidad en 10, pero sin permitir que sea negativa
        if self.__speed - 10 >= 0:
            self.__speed -= 10
        else:
            self.__speed = 0
        print(f"{self.brand} {self.model} frena a {self.__speed} km/h")


# Probamos el ejercicio 4
car = Car("Opel", "Corsa")

car.accelerate()  # 10 km/h
car.accelerate()  # 20 km/h
print(car.get_speed())  # 20

car.brake()       # 10 km/h
car.brake()       # 0 km/h
car.brake()       # se mantiene en 0
print(car.get_speed())  # 0


# 5. Crea una clase "Book" que tenga propiedades como "title" (público) y "author" (privado).
# Añade un método para obtener el autor y otro para cambiar el título del libro.
class Book:
    def __init__(self, title, author):
        self.title = title
        self.__author = author

    def get_author(self):
        return self.__author

    def set_title(self, new_title):
        self.title = new_title


book = Book("harry potter", "jk rowling")
print(book.get_author())
print(book.title)
book.set_title("harry potter 2")
print(book.title)

# 6. Crea una clase "Estudiante" que tenga como propiedades su nombre, apellido y una lista
# de notas. Añade un método para calcular y devolver la nota media del estudiante.


class Estudiante:
    def __init__(self, name, surname, marks):
        # Propiedades públicas
        self.name = name
        self.surname = surname
        self.marks = marks  # lista de notas

    # Método para calcular la media de las notas
    def average_mark(self):
        if len(self.marks) == 0:
            return 0  # Evitamos división entre 0
        total = 0
        for mark in self.marks:
            total += mark
        average = total / len(self.marks)
        return average


# Probamos la clase
student = Estudiante("Fay", "Bruch", [10, 9, 9.5, 8.75])

print(f"Estudiante: {student.name} {student.surname}")
print(f"Notas: {student.marks}")
print(f"Nota media: {student.average_mark()}")


# 7. Crea una clase "BankAccount" con propiedades como "owner" y "balance".
# Añade métodos para depositar y retirar dinero, asegurándote de que no se pueda retirar más
# de lo que hay en la cuenta.
class BankAccount:
    def __init__(self, owner, balance=0):
        # Propiedades públicas
        self.owner = owner
        self.balance = balance

    # Método para ingresar dinero
    def deposit(self, amount):
        if amount > 0:
            self.balance += amount
            print(f"Has depositado {amount}€. Nuevo saldo: {self.balance}€")
        else:
            print("El depósito debe ser un número positivo.")

    # Método para retirar dinero
    def withdraw(self, amount):
        if amount <= 0:
            print("La cantidad debe ser positiva.")
        elif amount > self.balance:
            print("Fondos insuficientes. No se puede retirar esa cantidad.")
        else:
            self.balance -= amount
            print(f"Has retirado {amount}€. Nuevo saldo: {self.balance}€")


# Probamos la clase
bank = BankAccount("Fayhuahua", 2000)

print(f"Titular: {bank.owner}")
print(f"Saldo inicial: {bank.balance}€\n")

bank.deposit(2000)
bank.withdraw(3000)
bank.withdraw(1500)
bank.withdraw(100)

print(bank.balance)


# 8. Crea una clase "Point" que represente un punto en el espacio 2D con coordenadas "x" e "y".
# Añade un método que calcule la distancia entre dos puntos.


class Point:
    def __init__(self, x, y):
        # Coordenadas del punto
        self.x = x
        self.y = y

    # Método que calcula la distancia entre este punto y otro
    def distance_to(self, other_point):
        # Diferencia en x y en y
        dx = other_point.x - self.x
        dy = other_point.y - self.y

        # Fórmula de distancia euclidiana
        distance = math.sqrt(dx**2 + dy**2)
        return distance


# Creamos dos puntos para probar
p1 = Point(2, 3)
p2 = Point(7, 8)

# Calculamos la distancia entre ellos
print(f"La distancia entre los puntos es: {p1.distance_to(p2)}")


# 9. Crea una clase "Employee" que tenga propiedades como "name", "hourly_wage" (pago por hora)
# y "hours_worked". Añade un método que calcule el pago total basado en las horas trabajadas
# y el salario por hora.

# Creamos una clase que representa a un empleado
class Employee:
    def __init__(self, name, hourly_wage, hours_worked):
        # Propiedades públicas
        self.name = name  # Nombre del empleado
        self.hourly_wage = hourly_wage  # Pago por hora (€ por hora)
        self.hours_worked = hours_worked  # Horas trabajadas

    # Método que calcula el pago total (horas * pago por hora)
    def total_payment(self):
        return self.hourly_wage * self.hours_worked


# Creamos un objeto (instancia) de tipo Employee
employee = Employee("fay", 8, 5)

# Mostramos sus datos
print(f"Empleado: {employee.name}")

# Llamamos al método para calcular el pago total
print(f"Pago total: {employee.total_payment()}€")


# 10. Crea una clase "Store" que tenga una propiedad "inventory" (una lista de productos).
# Añade un método para agregar un producto al inventario y otro para mostrar todos los
# productos disponibles.

# Creamos la clase Store para representar una tienda
class Store:
    def __init__(self, inventory=None):
        # Inventario de productos, por defecto vacío si no se pasa lista
        if inventory is None:
            self.inventory = []
        else:
            self.inventory = inventory

    # Método para agregar un producto al inventario
    def add_product(self, product):
        self.inventory.append(product)
        print(f"Producto '{product}' añadido al inventario")

    # Método para mostrar todos los productos disponibles
    def show_inventory(self):
        if self.inventory:  # Si hay productos en el inventario
            print("Productos disponibles en la tienda:")
            for item in self.inventory:
                print(f"- {item}")
        else:
            print("No hay productos en el inventario")


# ================================
# Ejemplo de uso
# ================================

# Creamos una tienda sin inventario inicial
my_store = Store()

# Añadimos productos
my_store.add_product("Laptop")
my_store.add_product("Smartphone")
my_store.add_product("Auriculares")

# Mostramos inventario completo
my_store.show_inventory()
