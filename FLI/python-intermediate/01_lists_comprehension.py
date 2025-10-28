### List Comprehension - Teoría ###

# --------------------------------------------------
# Concepto:
# Una list comprehension es una forma concisa de crear listas en Python.
# Permite generar una lista a partir de cualquier iterable aplicando
# operaciones o filtros en una sola línea.

# Sintaxis básica:
# [ expresión for elemento in iterable if condición_opcional ]

# - "expresión": define qué valor se incluirá en la lista final
# - "elemento": variable que toma cada valor del iterable
# - "iterable": cualquier objeto que se pueda recorrer (lista, range, string, etc.)
# - "if condición": opcional, filtra los elementos que cumplen la condición

# --------------------------------------------------
# Ejemplo 1: lista original y range
my_original_list = [0, 1, 2, 3, 4, 5, 6, 7]
print(my_original_list)
# Lista creada "a mano"

my_range = range(8)
print(list(my_range))
# range genera un iterable del 0 al 7
# Lo convertimos a lista con list()

# --------------------------------------------------
# Ejemplo 2: list comprehension básica
my_list = [i + 1 for i in range(8)]
print(my_list)
# Resultado: [1, 2, 3, 4, 5, 6, 7, 8]
# Cada elemento de range(8) se incrementa en 1

# --------------------------------------------------
# Ejemplo 3: multiplicación
my_list = [i * 2 for i in range(8)]
print(my_list)
# Resultado: [0, 2, 4, 6, 8, 10, 12, 14]
# Cada elemento se multiplica por 2

# --------------------------------------------------
# Ejemplo 4: elevación al cuadrado
my_list = [i * i for i in range(8)]
print(my_list)
# Resultado: [0, 1, 4, 9, 16, 25, 36, 49]
# Cada elemento se eleva al cuadrado

# --------------------------------------------------
# Ejemplo 5: aplicar función a cada elemento


def sum_five(number):
    return number + 5


my_list = [sum_five(i) for i in range(8)]
print(my_list)
# Resultado: [5, 6, 7, 8, 9, 10, 11, 12]
# Se aplica la función "sum_five" a cada elemento de range(8)

# --------------------------------------------------
# Ejemplo 6: list comprehension con condición
even_numbers = [i for i in range(8) if i % 2 == 0]
print(even_numbers)
# Resultado: [0, 2, 4, 6]
# Solo se incluyen los elementos que cumplen la condición i % 2 == 0

# --------------------------------------------------
# Ejemplo 7: list comprehension con if-else
labels = ["even" if i % 2 == 0 else "odd" for i in range(8)]
print(labels)
# Resultado: ['even', 'odd', 'even', 'odd', 'even', 'odd', 'even', 'odd']
# Permite asignar un valor u otro según una condición dentro de la expresión

# --------------------------------------------------
# Ejemplo 8: list comprehension anidada
matrix = [[i * j for j in range(4)] for i in range(3)]
print(matrix)
# Resultado: [[0, 0, 0, 0], [0, 1, 2, 3], [0, 2, 4, 6]]
# Cada lista interna se genera con una list comprehension,
# permitiendo crear estructuras como matrices

# --------------------------------------------------
# Resumen de ventajas de list comprehension:
# - Código más conciso y legible
# - Se pueden aplicar operaciones a todos los elementos de un iterable
# - Se pueden añadir filtros con "if"
# - Se pueden crear listas anidadas de manera elegante

# --------------------------------------------------
# Buenas prácticas:
# - Evitar expresiones demasiado largas, si es complicado, usar bucles normales
# - Los filtros y condiciones son muy útiles, pero no abuses de la complejidad
# - Para operaciones complejas dentro de la expresión, es recomendable usar funciones externas
