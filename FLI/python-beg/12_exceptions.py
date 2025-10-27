### Exception Handling en Python ###

# ================================
# 1️⃣ Bloque try / except básico
# ================================

# Se usa para capturar errores en tiempo de ejecución y evitar que el programa se detenga.
# El bloque "try" contiene el código que puede fallar,
# el bloque "except" se ejecuta si ocurre cualquier excepción.

numberOne = 5
numberTwo = "1"  # Intentar sumar un entero con un string generará un error

try:
    print(numberOne + numberTwo)
except:
    print("Se ha producido un error")

# --------------------------------
# Explicación:
# Aquí se produce un TypeError porque no se puede sumar int + str.
# Como se captura con "except", el programa no se detiene y muestra el mensaje.

# ================================
# 2️⃣ try / except / else / finally
# ================================

# El flujo completo permite controlar el comportamiento según haya o no error:
# - else: se ejecuta solo si no hay excepción
# - finally: se ejecuta siempre, haya o no error

try:
    print(numberOne + 1)  # Esto no produce error
except:
    print("Se ha producido un error")
else:
    print("La ejecución continúa correctamente")
finally:
    print("Este bloque se ejecuta siempre")

# --------------------------------
# Explicación:
# - "else" se ejecuta porque no hay error
# - "finally" siempre se ejecuta, útil para cerrar archivos, conexiones, etc.

# ================================
# 3️⃣ Captura de excepciones específicas
# ================================

# Es recomendable capturar solo los tipos de errores que esperamos,
# para no atrapar errores inesperados.

try:
    print(numberOne + numberTwo)  # TypeError
except ValueError:
    print("Se ha producido un ValueError")
except TypeError:
    print("Se ha producido un TypeError")

# --------------------------------
# Explicación:
# Se captura un TypeError y se ejecuta el bloque correspondiente
# Esto permite manejar distintos errores de manera distinta

# ================================
# 4️⃣ Captura de información de la excepción
# ================================

# Podemos guardar la excepción en una variable para mostrar detalles

try:
    print(numberOne + numberTwo)
except ValueError as error:
    print("Error ValueError:", error)
except Exception as e:
    print("Error capturado:", e)

# --------------------------------
# Explicación:
# - "as e" permite acceder al mensaje de error real
# - Exception es la clase base de todas las excepciones
# - Aquí se imprimiría: unsupported operand type(s) for +: 'int' and 'str'

# ================================
# 5️⃣ Creación de excepciones personalizadas
# ================================

# Podemos crear nuestros propios errores para situaciones específicas


class NegativeNumberError(Exception):
    """Excepción personalizada para números negativos"""
    pass


def check_positive(number):
    if number < 0:
        raise NegativeNumberError("El número no puede ser negativo")
    else:
        print("Número válido:", number)


try:
    check_positive(-5)
except NegativeNumberError as e:
    print("Excepción personalizada capturada:", e)

# --------------------------------
# Explicación:
# - "raise" lanza una excepción
# - Podemos crear clases de excepción que hereden de Exception
# - Esto ayuda a hacer un código más claro y seguro

# ================================
# 6️⃣ Buenas prácticas con excepciones
# ================================

# 1. Captura solo los errores que esperas
# 2. Usa "finally" para cerrar recursos (archivos, conexiones)
# 3. Muestra mensajes claros para depuración
# 4. Evita usar except sin especificar el tipo de excepción salvo casos muy concretos

# Ejemplo con archivo (finally para cerrar)
try:
    f = open("archivo.txt", "r")
    content = f.read()
except FileNotFoundError:
    print("Archivo no encontrado")
finally:
    try:
        f.close()
    except NameError:
        # Si f no se creó, evitamos error al cerrar
        pass

# ================================
# Resumen de conceptos clave
# ================================

# try: prueba código que podría fallar
# except: captura errores
# else: se ejecuta si no hay error
# finally: se ejecuta siempre
# raise: lanza una excepción
# Exception: clase base de todas las excepciones
# as e: permite guardar la información del error
