### Classes ###

# Definición de una clase
# Una clase es una plantilla para crear objetos. Puede contener propiedades (variables) y métodos (funciones).
class MyEmptyPerson:
    pass  # 'pass' permite definir la clase vacía sin contenido


# Crear una instancia (objeto) de la clase
persona = MyEmptyPerson()
print(persona)  # <__main__.MyEmptyPerson object at 0x...>

# Clase con constructor (__init__), propiedades y métodos
# __init__ se ejecuta automáticamente al crear la instancia y sirve para inicializar propiedades


class Person:
    def __init__(self, name, surname, alias="Sin alias"):
        self.full_name = f"{name} {surname} ({alias})"  # Propiedad pública
        self.__name = name  # Propiedad privada

    # Método para acceder a la propiedad privada
    def get_name(self):
        return self.__name

    # Método que representa una acción del objeto
    def walk(self):
        print(f"{self.full_name} está caminando")


# Crear instancias de la clase
my_person = Person("Brais", "Moure")
print(my_person.full_name)   # propiedad pública
print(my_person.get_name())  # accediendo a propiedad privada mediante método
my_person.walk()             # llamando a un método

# Instancia con alias
my_other_person = Person("Brais", "Moure", "MoureDev")
print(my_other_person.full_name)
my_other_person.walk()

# Modificar propiedad pública directamente
my_other_person.full_name = "Héctor de León (El loco de los perros)"
print(my_other_person.full_name)

# Las propiedades públicas pueden cambiarse a cualquier valor
my_other_person.full_name = 666
print(my_other_person.full_name)

# Resumen teórico:
# - Clase = plantilla para objetos
# - Objeto / Instancia = creación concreta de una clase
# - __init__ = constructor que inicializa propiedades
# - self = referencia al objeto actual
# - Propiedades públicas = accesibles desde fuera de la clase
# - Propiedades privadas = accesibles solo desde la clase, generalmente mediante métodos
# - Métodos = funciones dentro de la clase que definen comportamientos del objeto

# Conceptos importantes:
# - Se pueden definir valores por defecto en el constructor (como alias="Sin alias")
# - Los métodos siempre reciben self como primer parámetro
# - Propiedades privadas comienzan con '__' y no deberían modificarse directamente
# - Métodos permiten interactuar con las propiedades del objeto de manera segura
