from math import pi
import math

### ERROR TYPES ###

# ⚙️ En Python existen diferentes tipos de errores que pueden ocurrir al ejecutar un programa.
# A continuación se muestran ejemplos comunes de errores y cómo evitarlos.

# -------------------------------------------------------
# 🔹 SYNTAXERROR → Ocurre cuando la sintaxis del código es incorrecta.
# Ejemplo: olvidarse de paréntesis o escribir mal una instrucción.
# print "¡Hola comunidad!"  # ❌ Incorrecto
# Solución:
print("¡Hola comunidad!")  # ✅ Correcto

# -------------------------------------------------------
# 🔹 NAMEERROR → Ocurre cuando intentas usar una variable o función que no está definida.
# Ejemplo: intentar imprimir una variable antes de declararla.
language = "Spanish"  # ✅ Definimos la variable
print(language)
# print(non_existent_var)  # ❌ Provocaría NameError

# -------------------------------------------------------
# 🔹 INDEXERROR → Ocurre al intentar acceder a un índice que no existe en una lista.
my_list = ["Python", "Swift", "Kotlin", "Dart", "JavaScript"]
print(my_list[0])   # ✅ Primer elemento
print(my_list[-1])  # ✅ Último elemento
# print(my_list[5])  # ❌ Error: solo hay índices del 0 al 4

# -------------------------------------------------------
# 🔹 MODULENOTFOUNDERROR → Ocurre si intentas importar un módulo que no existe.
# import maths  # ❌ Error: el módulo correcto es "math"

# -------------------------------------------------------
# 🔹 ATTRIBUTEERROR → Sucede cuando se intenta acceder a un atributo que no existe en un módulo u objeto.
# print(math.PI)  # ❌ Error: el atributo correcto es math.pi (en minúsculas)
print(math.pi)  # ✅ Correcto

# -------------------------------------------------------
# 🔹 KEYERROR → Aparece cuando intentas acceder a una clave que no existe en un diccionario.
my_dict = {"Nombre": "Brais", "Apellido": "Moure", "Edad": 35, 1: "Python"}
print(my_dict["Edad"])  # ✅ Existe
# print(my_dict["Apelido"])  # ❌ Error: la clave no existe
print(my_dict["Apellido"])  # ✅ Correcto

# -------------------------------------------------------
# 🔹 TYPEERROR → Ocurre al usar un tipo de dato de forma incorrecta.
# Ejemplo: intentar acceder a una lista con un string como índice.
# print(my_list["0"])  # ❌ Error: los índices deben ser enteros
print(my_list[0])  # ✅ Correcto
print(my_list[False])  # ✅ False equivale a índice 0

# -------------------------------------------------------
# 🔹 IMPORTERROR → Sucede cuando un elemento no se puede importar correctamente desde un módulo.
print(pi)
# from math import PI  # ❌ Error: no existe PI en mayúsculas

# -------------------------------------------------------
# 🔹 VALUEERROR → Aparece cuando un valor tiene el tipo correcto, pero un contenido no válido.
# Ejemplo: convertir una cadena que no es numérica a int.
# my_int = int("10 Años")  # ❌ Error
my_int = int("10")  # ✅ Correcto
print(type(my_int))

# -------------------------------------------------------
# 🔹 ZERODIVISIONERROR → Se produce cuando intentas dividir entre cero.
# print(4/0)  # ❌ Error: no se puede dividir entre 0
print(4/2)  # ✅ Correcto
