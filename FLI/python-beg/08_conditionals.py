# =========================================================
# ⚖️ CONDICIONALES EN PYTHON
# =========================================================

# En Python, los condicionales permiten ejecutar código
# solo si se cumple una determinada condición.
# Se evalúan con: if, elif, y else.

# ---------------------------------------------------------
# 🔹 ESTRUCTURA BÁSICA

my_condition = False

# El bloque "if" se ejecuta solo si la condición es True.
if my_condition:  # Equivale a if my_condition == True:
    print("Se ejecuta la condición del if")

# Como my_condition es False, no se ejecuta nada.

# ---------------------------------------------------------
# 🔹 CONDICIÓN CON EXPRESIÓN

my_condition = 5 * 5  # El valor ahora es 25

if my_condition == 10:  # Se evalúa la expresión: 25 == 10 -> False
    print("Se ejecuta la condición del segundo if")

# Como no se cumple, no se ejecuta el print.

# ---------------------------------------------------------
# 🔹 IF, ELIF, ELSE (estructura condicional múltiple)

# Usamos "if" para la primera condición,
# "elif" para condiciones adicionales (solo si las anteriores no se cumplen),
# y "else" para el caso contrario a todos los anteriores.

if my_condition > 10 and my_condition < 20:
    print("Es mayor que 10 y menor que 20")

elif my_condition == 25:
    print("Es igual a 25")

else:
    print("Es menor o igual que 10 o mayor o igual que 20 o distinto de 25")

# Como my_condition vale 25, se cumple la condición del "elif".

print("La ejecución continúa")  # Este print se ejecuta siempre.

# ---------------------------------------------------------
# 🔹 CONDICIONALES Y VALORES VACÍOS

# En Python, ciertos valores se consideran "falsos" automáticamente:
# False, 0, "", [], {}, None, set(), etc.
# Así que puedes comprobar si algo está vacío con solo escribir "if not ..."

my_string = ""

if not my_string:
    # Se ejecuta porque "" es un valor "falsy"
    print("Mi cadena de texto es vacía")

if my_string == "Mi cadena de textoooooo":
    print("Estas cadenas de texto coinciden")  # No se ejecuta
