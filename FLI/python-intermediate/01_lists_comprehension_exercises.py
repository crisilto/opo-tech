# 1. Genera una lista utilizando comprensión con los números del 0 al 10
my_range = range(11)
numbers = list(my_range)
print(numbers)  # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# 2. Crea una lista utilizando comprensión con los cuadrados de los números del 1 al 10
squares = [(i + 1) ** 2 for i in range(10)]
print(squares)  # [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

# 3. Genera una lista utilizando comprensión con los números pares del 0 al 20
evens = [i for i in range(21) if i % 2 == 0]
print(evens)  # [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

# 4. Convierte una lista de temperaturas en Celsius a Fahrenheit utilizando comprensión


def celsius_to_fahrenheit(celsius):
    return (celsius * 9 / 5) + 32


celsius = [18, 30, 13, 27]
fahrenheit = [celsius_to_fahrenheit(temp) for temp in celsius]
print(fahrenheit)  # [64.4, 86.0, 55.4, 80.6]


# 5. Crea una lista utilizando comprensión con los caracteres de una cadena.

my_string = "hola python"
my_chars = [char for char in my_string]
print(my_chars)

# 6. Filtra una lista de palabras y deja solo las que tienen más de 4 letras utilizando comprensión.

my_words = ["fay", "lilith", "lys", "cris", "crisketo"]
long_words = [word for word in my_words if len(word) > 4]
print(long_words)

# 7. Aumenta en 5 cada número de una lista con comprensión usando una función externa.


def add_five(number):
    return number+5


numbers = [2, 7, 34, 12]
numbers_plus_five = [add_five(i) for i in numbers]

print(numbers_plus_five)

# 8. Crea una lista de booleanos que indique si cada número es mayor que 10 utilizando comprensión.

over_ten = [i > 10 for i in numbers]
print(over_ten)

# 9. Multiplica solo los números impares por 3 en una lista utilizando comprensión.

odds_per_three = [i*3 for i in range(11) if i % 2 != 0]
print(odds_per_three)

# 10. Usa comprensión de listas anidada para generar una matriz 3x3 con números del 1 al 9.
matrix = [[i + j*3 + 1 for i in range(3)] for j in range(3)]
print(matrix)

# La estructura

# La comprensión anidada tiene dos for:
# for j in range(3) → recorre las filas (0,1,2)
# for i in range(3) → recorre las columnas (0,1,2)
# Cada vez que se crea una fila (j), dentro de ella se generan los 3 valores de la columna (i).

# La fórmula i + j*3 + 1

# Queremos que los números sean 1, 2, 3, 4, 5, 6, 7, 8, 9:
# Primera fila (j=0):
# i + 0*3 + 1 → i + 1 → valores: 1, 2, 3
# Segunda fila (j=1):
# i + 1*3 + 1 → i + 4 → valores: 4, 5, 6
# Tercera fila (j=2):
# i + 2*3 + 1 → i + 7 → valores: 7, 8, 9
# Así conseguimos llenar fila por fila los números del 1 al 9.

# Resultado final
# [[1, 2, 3],
#  [4, 5, 6],
#  [7, 8, 9]]
