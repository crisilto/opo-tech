### 🔥 TIPOS DE ERRORES EN PYTHON ###

# 1. Genera un SyntaxError al imprimir una cadena sin paréntesis.
# → Este error ocurre cuando el código tiene una sintaxis incorrecta.
#    Por ejemplo: olvidar paréntesis, comillas mal cerradas, o signos incorrectos.
# print "error SyntaxError"  # ❌ Incorrecto
from math import pi  # ✅ Correcto
import math  # ✅ Correcto
import math
print("correct syntax")  # ✅ Correcto

# ----------------------------------------------------------------------

# 2. Genera un NameError intentando usar una variable no definida.
# → Este error aparece cuando se usa una variable o función que no ha sido declarada.
variable = "variable"
# print(my_variable)  # ❌ 'my_variable' no está definida
print(variable)  # ✅ Correcto

# ----------------------------------------------------------------------

# 3. Genera un IndexError accediendo a un índice inexistente de una lista.
# → Ocurre cuando se intenta acceder a una posición fuera del rango de la lista.
numbers = [1, 2, 3]
# print(numbers[3])  # ❌ Los índices válidos son 0, 1, 2
print(numbers[2])  # ✅ Último elemento

# ----------------------------------------------------------------------

# 4. Genera un ModuleNotFoundError al importar un módulo inexistente.
# → Sucede si el módulo no existe o está mal escrito.
# import mathhh  # ❌ El módulo correcto es 'math'

# ----------------------------------------------------------------------

# 5. Genera un AttributeError accediendo a un atributo que no existe.
# → Aparece cuando intentas acceder a una propiedad o método inexistente en un módulo u objeto.
# print(math.SQRT)  # ❌ No existe 'SQRT' en el módulo math
print(math.sqrt(9))  # ✅ La función correcta es sqrt()

# ----------------------------------------------------------------------

# 6. Genera un KeyError al acceder a una clave inexistente de un diccionario.
# → Ocurre cuando la clave buscada no está en el diccionario.
my_dict = {"name": "cris", "age": 27}
# print(my_dict["alias"])  # ❌ No existe la clave "alias"
print(my_dict["name"])  # ✅ Correcto

# ----------------------------------------------------------------------

# 7. Genera un TypeError usando tipos incorrectos (por ejemplo, índice string en lista).
# → Se produce cuando se usa un tipo de dato no válido en una operación.
my_list = ["my", 13, "list"]
# print(my_list["first"])  # ❌ El índice debe ser un número entero
print(my_list[0])  # ✅ Correcto

# ----------------------------------------------------------------------

# 8. Genera un ImportError al importar una función que no existe desde un módulo.
# → Este error ocurre cuando se intenta importar algo que no está definido en el módulo.
# from math import my_pi  # ❌ 'my_pi' no existe en math

# ----------------------------------------------------------------------

# 9. Genera un ValueError intentando convertir un string no numérico a entero.
# → El tipo de dato es correcto (string), pero su contenido no es válido para la conversión.
# print(int("uno"))  # ❌ 'uno' no puede convertirse en int
print(int("10"))  # ✅ Correcto

# ----------------------------------------------------------------------

# 10. Intenta detectar si un error ocurre usando try-except con un KeyError.
# → Los bloques try-except permiten capturar errores sin detener la ejecución del programa.

my_dict = {"name": "cris", "age": 27}

try:
    print(my_dict["alias"])  # ❌ Esta clave no existe
except KeyError:
    # ✅ Captura el error
    print("KeyError detected: the key 'alias' does not exist")

# El programa no se detiene y continúa su ejecución
print("Program finished correctly")
