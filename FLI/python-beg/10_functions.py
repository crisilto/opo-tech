### Functions ###

# Una función es un bloque de código reutilizable que realiza una tarea específica.
# Se define con 'def' y se ejecuta al ser llamada por su nombre.

# ------------------------
# Función sin parámetros
# ------------------------

def my_function():
    print("Esto es una función")  # lo que hace la función


# Llamamos (ejecutamos) la función 3 veces
my_function()
my_function()
my_function()

# ------------------------
# Función con parámetros de entrada
# ------------------------
# Los parámetros permiten pasar valores a la función desde fuera.
# Esos valores pueden ser de cualquier tipo (int, float, str, etc.).


def sum_two_values(first_value: int, second_value):
    print(first_value + second_value)


# Llamamos la función pasando distintos tipos de datos
sum_two_values(5, 7)          # suma dos enteros
sum_two_values(54754, 71231)  # suma números grandes
sum_two_values("5", "7")      # concatena strings → "57"
sum_two_values(1.4, 5.2)      # suma decimales (float)


# ------------------------
# Función con retorno (return)
# ------------------------
# 'return' permite devolver un resultado que puede guardarse en una variable.
# Si una función no tiene return, devuelve None por defecto.

def sum_two_values_with_return(first_value, second_value):
    my_sum = first_value + second_value
    return my_sum  # enviamos el resultado al exterior


# Aquí la primera llamada no tiene return → devuelve None
my_result = sum_two_values(1.4, 5.2)
print(my_result)  # imprime None

# En cambio, esta sí devuelve el valor calculado
my_result = sum_two_values_with_return(10, 5)
print(my_result)  # imprime 15


# ------------------------
# Función con argumentos por clave
# ------------------------
# Podemos especificar qué valor corresponde a cada parámetro usando su nombre.

def print_name(name, surname):
    print(f"{name} {surname}")


print_name(surname="Moure", name="Brais")  # el orden da igual si usamos clave


# ------------------------
# Función con parámetro por defecto
# ------------------------
# Si no se pasa un valor, se usa el valor predeterminado.

def print_name_with_default(name, surname, alias="Sin alias"):
    print(f"{name} {surname} {alias}")


# Usamos el valor por defecto ("Sin alias")
print_name_with_default("Brais", "Moure")

# Sobrescribimos el valor por defecto
print_name_with_default("Brais", "Moure", "MoureDev")


# ------------------------
# Función con número variable de argumentos (*args)
# ------------------------
# El asterisco (*) permite pasar cualquier cantidad de valores.
# 'texts' será una tupla que contiene todos los argumentos.

def print_upper_texts(*texts):
    print(type(texts))  # <class 'tuple'>
    for text in texts:
        print(text.upper())  # convertimos cada texto a mayúsculas


print_upper_texts("Hola", "Python", "MoureDev")
print_upper_texts("Hola")  # también funciona con uno solo
