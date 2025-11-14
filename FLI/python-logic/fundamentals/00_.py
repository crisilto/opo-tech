"""
### PYTHON — COMENTARIOS, VARIABLES Y TIPOS DE DATOS ###

──────────────────────────────────────────────
🔹 COMENTARIOS EN PYTHON 🔹
──────────────────────────────────────────────
Los comentarios sirven para documentar el código, explicar qué hace o dejar notas
para otros desarrolladores (o para ti misma en el futuro).

Python **no ejecuta** las líneas de comentario.

Existen dos formas principales:

1️⃣ **Comentario de una sola línea**
   Se usa el símbolo `#`.
   Todo lo que esté a la derecha del `#` no se ejecuta.

2️⃣ **Comentario multilínea**
   Se usan tres comillas dobles o simples (`""" """` o `''' '''`).
   Realmente no es un “comentario” como tal (Python lo interpreta como un string sin usar),
   pero se utiliza habitualmente para documentar bloques de código, funciones o clases.

──────────────────────────────────────────────
🔹 VARIABLES Y CONSTANTES 🔹
──────────────────────────────────────────────
Python **no requiere declarar el tipo de variable**.
El tipo se asigna automáticamente al darle un valor.

  Ejemplo:
      nombre = "Cristina"
      edad = 27

Por convención (no por obligación), las **constantes** se escriben en MAYÚSCULAS:
      MY_CONSTANT = "valor fijo"
No son realmente constantes: Python permite modificarlas,
pero el nombre en mayúsculas indica que **no deberías hacerlo**.

──────────────────────────────────────────────
🔹 TIPOS DE DATOS PRIMITIVOS 🔹
──────────────────────────────────────────────
1️⃣ str → cadenas de texto
2️⃣ int → números enteros
3️⃣ float → números decimales
4️⃣ bool → valores lógicos (True o False)
5️⃣ NoneType → valor nulo (None)

──────────────────────────────────────────────
🔹 IMPRESIÓN POR CONSOLA 🔹
──────────────────────────────────────────────
La función `print()` se utiliza para mostrar texto o valores en pantalla.
Se pueden combinar variables con texto usando f-strings:
    print(f"Hola, {nombre}!")
──────────────────────────────────────────────
"""

# URL oficial del lenguaje
# https://www.python.org/

# Comentario de una sola línea
# Esto es un comentario normal en Python

"""Comentario multilínea:
   Puede ocupar varias líneas
   y se usa mucho para documentar bloques grandes de código.
"""

# Variables y constantes (en Python las constantes son solo por convención)
my_variable = "Esto es una variable en Python"
MY_CONSTANT = "No existen las constantes reales en Python, pero se usan en mayúsculas"

# Tipos de datos primitivos
my_string = "cadena de texto"   # tipo str
my_integer = 13                 # tipo int
my_float = 1.3                  # tipo float
my_boolean = True               # tipo bool
my_none = None                  # tipo NoneType

# Mostrar los tipos para confirmarlo
print(type(my_string))
print(type(my_integer))
print(type(my_float))
print(type(my_boolean))
print(type(my_none))

# Imprimir mensaje
print("¡Hola, Python!")
