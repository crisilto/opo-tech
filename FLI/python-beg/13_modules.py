### Modules en Python ###

# -------------------------------
# 1️⃣ Qué es un módulo
# -------------------------------
# Un módulo en Python es un archivo .py que contiene funciones, variables y clases
# que podemos importar en otros archivos para reutilizar código.

# Por ejemplo, si tenemos un archivo "my_module.py":
# def sumValue(a, b, c):
#     print(a + b + c)
#
# def printValue(value):
#     print(value)

# -------------------------------
# 2️⃣ Cómo importar módulos
# -------------------------------

# Opción 1: importar todo el módulo
import math
from math import pi as PI_VALUE
from my_module import sumValue, printValue
import my_module

# Ahora podemos usar las funciones con la sintaxis:
my_module.sumValue(5, 3, 1)   # imprime 9
my_module.printValue("Hola Python!")  # imprime el mensaje

# Opción 2: importar funciones específicas del módulo

sumValue(5, 3, 1)           # podemos llamarla directamente sin el prefijo
printValue("Hola Python")    # idem

# Opción 3: importar y renombrar (alias) para simplificar
print(PI_VALUE)  # 3.141592653589793

# -------------------------------
# 3️⃣ Módulos estándar
# -------------------------------
# Python trae módulos ya instalados, como 'math', 'random', 'os', 'sys', etc.


print(math.pi)       # constante π
print(math.pow(2, 8))  # 2 elevado a la 8 (256.0)

# -------------------------------
# 4️⃣ Ventajas de usar módulos
# -------------------------------
# 1. Reutilización de código: escribes funciones una vez y las usas en varios archivos
# 2. Organización: separas tu código en partes más manejables
# 3. Colaboración: otros pueden usar tu módulo sin ver todo tu proyecto
# 4. Uso de librerías externas: instalas paquetes con pip y los importas como módulos

# -------------------------------
# 5️⃣ Buenas prácticas
# -------------------------------
# - Nombrar los módulos con nombres claros y en minúsculas (my_module.py)
# - Evitar nombres que colisionen con módulos estándar (math.py, os.py)
# - Documentar funciones con docstrings
# - Usar importaciones específicas si no necesitas todo el módulo

# -------------------------------
# 6️⃣ Ejemplo
# -------------------------------

my_module.sumValue(2, 3, 5)       # 10
my_module.printValue("Hola!")      # Hola!
