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

# 1. Crea una lambda que sume dos números.


def sum_two_values(
    first_value, second_value): return first_value + second_value


result = sum_two_values(10, 4)
print(result)  # → 14

# 2. Crea una lambda que calcule la raíz cuadrada de un número.


def number_sqr(number): return math.sqrt(number)


result = number_sqr(9)
print(result)  # → 3.0

# 3. Crea una lambda que devuelva el mayor de dos números.


def higher_number(first_value, second_value): return max(
    first_value, second_value)


result = higher_number(10, 13)
print(result)  # → 13

# 4. Crea una lambda que sume 10 a un número dado.


def sum_ten(number): return number + 10


result = sum_ten(10)
print(result)  # → 20

# 5. Crea una lambda que devuelva el último carácter de una cadena.


def last_char(my_string): return my_string[len(my_string) - 1]


result = last_char("hola")
print(result)  # → "a"

# 6. Crea una lambda que indique si una palabra tiene más de 6 letras.


def more_than_six(word): return len(word) > 6


print(more_than_six("cristina"))  # → True
print(more_than_six("fay"))       # → False
print(more_than_six("letras"))    # → False

# 7. Crea una lambda que convierta una cadena a minúsculas.


def lower_string(my_string): return my_string.lower()


result = lower_string("HOLAAAAAAAAAAA")
print(result)  # → "holaaaaaaaaaaa"

# 8. Crea una lambda que devuelva True si un número es positivo.


def positive_number(number): return number > 0


print(positive_number(10))   # → True
print(positive_number(-10))  # → False

# 9. Crea una lambda que devuelva "Cadena vacía" si el string está vacío.


def empty_string_check(text): return "Cadena vacía" if text == "" else text


print(empty_string_check(""))       # → "Cadena vacía"
print(empty_string_check("hola"))   # → "hola"

# 10. Crea una lambda que calcule el precio final con un impuesto añadido del 21%.


def final_price(price): return price * 1.21


print(final_price(100))  # → 121.0
