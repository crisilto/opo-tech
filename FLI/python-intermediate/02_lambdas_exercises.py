import math

"""
### 💡 FUNCIONES LAMBDA EN PYTHON

Las funciones lambda son funciones anónimas (sin nombre) que se definen en una sola línea.
Su sintaxis es:

    lambda argumentos: expresión

- No necesitan la palabra clave 'def'.
- Devuelven automáticamente el resultado de la expresión (no hace falta escribir 'return').
- Son útiles para funciones pequeñas, simples o que se van a usar una sola vez.

Ejemplo:
    cuadrado = lambda x: x ** 2
    print(cuadrado(4))  # → 16
"""

# fmt: off

# 1️⃣ Crea una lambda que sume dos números.
sum_two_values = lambda first_value, second_value: first_value + second_value
result = sum_two_values(10, 4)
print(result)  # → 14

# 2️⃣ Crea una lambda que calcule la raíz cuadrada de un número.
number_sqr = lambda number: math.sqrt(number)
result = number_sqr(9)
print(result)  # → 3.0

# 3️⃣ Crea una lambda que devuelva el mayor de dos números.
higher_number = lambda first_value, second_value: max(first_value, second_value)
result = higher_number(10, 13)
print(result)  # → 13

# 4️⃣ Crea una lambda que sume 10 a un número dado.
sum_ten = lambda number: number + 10
result = sum_ten(10)
print(result)  # → 20

# 5️⃣ Crea una lambda que devuelva el último carácter de una cadena.
last_char = lambda my_string: my_string[len(my_string) - 1]
result = last_char("hola")
print(result)  # → "a"

# 6️⃣ Crea una lambda que indique si una palabra tiene más de 6 letras.
more_than_six = lambda word: len(word) > 6
print(more_than_six("cristina"))  # → True
print(more_than_six("fay"))       # → False
print(more_than_six("letras"))    # → False

# 7️⃣ Crea una lambda que convierta una cadena a minúsculas.
lower_string = lambda my_string: my_string.lower()
result = lower_string("HOLAAAAAAAAAAA")
print(result)  # → "holaaaaaaaaaaa"

# 8️⃣ Crea una lambda que devuelva True si un número es positivo.
positive_number = lambda number: number > 0
print(positive_number(10))   # → True
print(positive_number(-10))  # → False

# 9️⃣ Crea una lambda que devuelva "Cadena vacía" si el string está vacío.
empty_string_check = lambda text: "Cadena vacía" if text == "" else text
print(empty_string_check(""))       # → "Cadena vacía"
print(empty_string_check("hola"))   # → "hola"

# 🔟 Crea una lambda que calcule el precio final con un impuesto añadido del 21%.
final_price = lambda price: price * 1.21
print(final_price(100))  # → 121.0

# fmt: on
