import math

# Crea una clase Rectangle con propiedades width y height.
# Añade un método que calcule el área del rectángulo.


class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height


rectangle = Rectangle(10, 5)
print(rectangle.area())

# Crea una clase Circle con la propiedad radius.
# Añade métodos para calcular el perímetro y el área.


class Circle:
    def __init__(self, radius):
        self.radius = radius

    def perimeter(self):
        return 2*math.pi*self.radius

    def area(self):
        return math.pi*math.pow(self.radius, 2)


circle = Circle(5)
print(circle.perimeter())
print(circle.area())

# Crea una clase Temperature con un valor en grados Celsius.
# Añade métodos para convertir a Fahrenheit y Kelvin.


class Temperature:
    def __init__(self, celsius):
        self.celsius = celsius

    def to_fahrenheit(self):
        return (self.celsius * 9/5)+32

    def to_kelvin(self):
        return self.celsius+273.15


temperature = Temperature(30)
print(temperature.to_fahrenheit())
print(temperature.to_kelvin())

# Crea una clase Laptop con propiedades brand, model y battery_percentage.
# Añade métodos para encender, apagar y mostrar el nivel de batería.


class Laptop:
    def __init__(self, brand, model, battery_percentage):
        self.brand = brand
        self.model = model
        self.battery_percentage = battery_percentage

    def turn_on(self):
        return f"{self.brand} {self.model} turned on. battery percentage: {self.battery_percentage}%"

    def turn_off(self):
        return f"{self.brand} {self.model} turned off. battery percentage: {self.battery_percentage}%"

    def show_battery_level(self):
        return f"{self.brand} {self.model} has {self.battery_percentage}% battery"


laptop = Laptop("MacBook", "Pro 16", 69)
print(laptop.turn_on())
print(laptop.turn_off())
print(laptop.show_battery_level())

# Crea una clase Movie con propiedades title, director y duration (en minutos).
# Añade un método que imprima un resumen del filme.


class Movie:
    def __init__(self, title, director, duration):
        self.title = title
        self.director = director
        self.duration = duration

    def resume(self):
        return f"Movie: {self.title}\nDirector: {self.director}\nDuration: {self.duration} minutes"


movie = Movie("Harry Potter", "Chris Columbus", 152)
print(movie.resume())

# Crea una clase BankAccountV2 con propiedades owner y balance.
# Añade métodos deposit, withdraw y un método display_balance que imprima el saldo formateado.


class BankAccountV2:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance

    def deposit(self, amount):
        if amount > 0:
            self.balance += amount
        else:
            print("El depósito debe ser positivo")

    def withdraw(self, amount):
        if amount > self.balance:
            print("Fondos insuficientes")
        else:
            self.balance -= amount

    def display_balance(self):
        return f"{self.owner} tiene [{self.balance}€]"


bank_acc = BankAccountV2("Fay", 1500)
bank_acc.deposit(750)
bank_acc.withdraw(1000)
print(bank_acc.display_balance())

# Crea una clase Point3D para representar un punto en el espacio 3D (x, y, z).
# Añade un método que calcule la distancia a otro punto 3D.


class Point3D:
    def __init__(self, x, y, z):
        self.x = x
        self.y = y
        self.z = z

    def distance_to(self, other_point):
        dx = other_point.x - self.x
        dy = other_point.y - self.y
        dz = other_point.z - self.z
        return math.sqrt(dx**2 + dy**2 + dz**2)


p1 = Point3D(10, 5, 8)
p2 = Point3D(5, 10, 4)

print(f"La distancia entre los puntos es: {p1.distance_to(p2)}")

# Crea una clase TodoItem con propiedades title, description y completed (booleano).
# Añade métodos para marcar como completado y mostrar información del item.


class TodoItem:
    def __init__(self, title, description, completed=False):
        self.title = title
        self.description = description
        self.completed = completed

    def mark_completed(self):
        self.completed = True

    def show_info(self):
        status = "Completed" if self.completed else "Not completed"
        return f"{self.title} - {self.description} | Status: {status}"


todo = TodoItem("study", "finish class lection of python")
print(todo.show_info())
todo.mark_completed()
print(todo.show_info())

# Crea una clase Vehicle con propiedades make, model y speed.
# Añade métodos accelerate y brake, y un método que muestre el estado del vehículo (marca, modelo y velocidad).


class Vehicle:
    def __init__(self, make, model, speed=0):
        self.make = make
        self.model = model
        self.speed = speed

    def accelerate(self, km):
        if km > 0:
            self.speed += km

    def brake(self, km):
        if km > 0:
            self.speed = max(self.speed - km, 0)

    def show_state(self):
        return f"{self.make} {self.model} is {self.speed} km/h"


vehicle = Vehicle("ford", "fiesta")
print(vehicle.show_state())
vehicle.accelerate(100)
print(vehicle.show_state())
vehicle.brake(70)
print(vehicle.show_state())
vehicle.brake(70)
print(vehicle.show_state())


# Crea una clase StudentV2 con propiedades name, surname y grades (lista de números).
# Añade métodos para calcular la nota media, la nota más alta y la más baja.
class StudentV2:
    def __init__(self, name, surname, grades):
        self.name = name
        self.surname = surname
        self.grades = grades

    def average_grade(self):
        return sum(self.grades)/len(self.grades) if self.grades else 0

    def max_grade(self):
        return max(self.grades)

    def min_grade(self):
        return min(self.grades)


student = StudentV2("fay", "bruch", [10, 9, 4, 8])
print(student.average_grade())
print(student.max_grade())
print(student.min_grade())
