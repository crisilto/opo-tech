### Functions Exercises ###

# 1️⃣ Crea una función llamada "personalized_greeting" que reciba un nombre como argumento
# e imprima "Hola, <nombre>". Si no se proporciona ningún nombre, debe saludar diciendo
# "Hola, desconocido".

# Pedimos al usuario su nombre
name = input("Escribe tu nombre: ")

# Definimos la función con un parámetro opcional


def personalized_greeting(name="desconocido"):
    # Muestra un saludo personalizado con el nombre recibido
    print(f"Hola, {name}")


# Si el usuario escribió algo, usamos su nombre
# Si no escribió nada (cadena vacía), usamos el valor por defecto
if name.strip() == "":
    personalized_greeting()  # sin argumento → usa "desconocido"
else:
    personalized_greeting(name)  # usa el nombre del usuario


# 2️⃣ Escribe una función llamada "multiply" que reciba dos números como argumentos y retorne
# el resultado de multiplicarlos.
def multiply(num1: int, num2: int):
    return num1 * num2  # retorna la multiplicación


result = multiply(10, 3)
print(result)


# 3️⃣ Crea una función llamada "is_even" que reciba un número entero como argumento y retorne True
# si es par y False si es impar.
def is_even(num):
    # La condición devuelve directamente True o False
    return num % 2 == 0


print(is_even(10))  # True
print(is_even(3))   # False


# 4️⃣ Escribe una función llamada "convert_to_uppercase" que reciba una cadena de texto y
# la retorne en mayúsculas.
def convert_to_uppercase(text):
    # .upper() transforma todo el texto a mayúsculas
    return text.upper()


print(convert_to_uppercase("hola python"))
print(convert_to_uppercase("holaaaaaa"))


# 5️⃣ Crea una función llamada "arbitrary_sum" que reciba un número arbitrario de números
# como argumentos y retorne la suma de todos ellos.
def arbitrary_sum(*nums):
    # Usamos la función incorporada sum() para sumar todos los valores del tuple *nums
    return sum(nums)


print(arbitrary_sum(10, 4, 6, 1, 12))
print(arbitrary_sum(10, -3))
print(arbitrary_sum(10))


# 6️⃣ Escribe una función llamada "generate_full_greeting" que reciba dos argumentos:
# nombre y apellido, y retorne el saludo completo "Hola, <nombre> <apellido>".
# Los argumentos deben ser pasados por clave.
def generate_full_greeting(name, surname):
    return f"Hola, {name} {surname}"


print(generate_full_greeting(name="Cristina", surname="Silvestre"))
print(generate_full_greeting(surname="Bruch", name="Fay"))


# 7️⃣ Crea una función llamada "power" que reciba dos números: base y exponente, y retorne
# el resultado de elevar la base al exponente.
def power(base: int, exponent: int):
    # El operador ** realiza la potenciación
    return base ** exponent


print(power(10, 2))
print(power(3, 3))
print(power(5, 2))


# 8️⃣ Escribe una función llamada "calculate_average" que reciba tres números y retorne su promedio.
def calculate_average(n1: int, n2: int, n3: int):
    # Calculamos la media aritmética sumando y dividiendo entre 3
    return (n1 + n2 + n3) / 3


print(calculate_average(10, 5, 7))


# 9️⃣ Crea una función llamada "count_characters" que reciba una cadena de texto y retorne
# el número de caracteres que contiene.
def count_characters(text):
    # len() devuelve la longitud de una cadena
    return len(text)


print(count_characters("cris"))
print(count_characters("fay"))
print(count_characters("crisketo"))


# 🔟 Escribe una función llamada "display_messages" que reciba un número indefinido de cadenas y
# las imprima en mayúsculas, una por una.
def display_messages(*messages):
    # Recorremos cada mensaje y lo mostramos en mayúsculas
    for msg in messages:
        print(msg.upper())


display_messages("hola", "python", "crisketo")
