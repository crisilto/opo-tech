import math

# 1. Crea una función que intente dividir dos números proporcionados por el usuario.
# Usa try-except para capturar cualquier error de división (por ejemplo, división por cero).

try:
    # Pedimos los números dentro del try para poder capturar errores de conversión
    n1 = int(input("numero1: "))
    n2 = int(input("numero2: "))

    # Intentamos dividir
    result = n1 / n2
    print(f"El resultado es: {result}")

# Si el usuario introduce texto en vez de número → ValueError
except ValueError as e:
    print(f"Error: debes escribir solo números. {e}")

# Si el usuario intenta dividir entre cero → ZeroDivisionError
except ZeroDivisionError as e:
    print(f"Error: no se puede dividir entre cero. {e}")

# Captura de cualquier otro error inesperado
except Exception as e:
    print(f"Ocurrió un error inesperado: {e}")

# Este bloque se ejecuta siempre, ocurra o no error
finally:
    print("Fin del programa.")

# 2. Crea una función que tome una cadena e intente convertirla en un número entero.
# Usa try-except para capturar cualquier error en la conversión.

try:
    user_str = input("Escribe una cadena: ")
    user_int = int(user_str)
    print(f"El número convertido es: {user_int}")
except ValueError:
    print("Error: la cadena introducida no es un número entero válido.")
finally:
    print("Conversión finalizada.")


# 3. Crea una función que abra un archivo, lea su contenido y maneje posibles errores (por ejemplo,
# archivo no encontrado). Usa try-except para gestionar las operaciones de archivos de forma segura.


# Conceptos importantes:
# - Al abrir archivos en Python, se pueden generar errores como:
#   -> FileNotFoundError: cuando el archivo no existe.
#   -> PermissionError: cuando no tenemos permisos para leerlo.
#   -> Exception: cualquier otro error inesperado.
# - Por eso, usamos bloques try-except-finally para manejarlo de forma segura.

def read_file(file_name):
    """Intenta abrir y leer un archivo. Muestra un mensaje de error si algo falla."""
    try:
        # Intentamos abrir el archivo en modo lectura ('r')
        with open(file_name, "r") as file:
            content = file.read()
            print("Contenido del archivo:\n")
            print(content)

    except FileNotFoundError:
        print("❌ Error: El archivo no existe. Verifica el nombre o la ruta.")

    except PermissionError:
        print("⚠️ Error: No tienes permisos para leer este archivo.")

    except Exception as e:
        # Captura cualquier otro tipo de error
        print(f"⚠️ Ocurrió un error inesperado: {e}")

    finally:
        # Este bloque se ejecuta siempre, haya o no error
        print("\n📁 Operación de lectura finalizada.")


# Si el archivo existe, lo leerá correctamente.
# Si no existe, mostrará un mensaje de error manejado.
read_file("example.txt")

# 4. Crea una función que realice múltiples operaciones (suma, resta, división, multiplicación)
# con dos números. Usa try-except-else-finally para manejar errores y asegurar que se imprima un mensaje
# final, independientemente de los errores.


def calculator(n1, n2):
    try:
        print(f"sum: {n1 + n2}")
        print(f"rest: {n1 - n2}")
        print(f"division: {n1 / n2}")
        print(f"multiply: {n1 * n2}")
    except ZeroDivisionError as e:
        print(f"Error: no se puede dividir entre cero. {e}")
    except Exception as e:
        print(f"Error inesperado: {e}")
    else:
        print("Las operaciones se realizaron correctamente.")
    finally:
        print("end")


calculator(10, 2)
calculator(10, 0)

# 5. Crea una función que le pida al usuario su edad y lance un ValueError si la entrada no es
# un número entero positivo. Usa el manejo de excepciones para gestionar la entrada y lanzar excepciones
# personalizadas cuando sea necesario.


def get_age(age):
    if age < 0:
        raise ValueError("age must be over 0")
    else:
        print(f"valid age, {age}")


try:
    user_input = input("what's your age?: ")
    age = int(user_input)
    get_age(age)
except ValueError as e:
    if "invalid literal" in str(e):
        print("Error: you must enter a valid number.")
    else:
        print(e)


# 6. Crea una función que intente acceder a un elemento de una lista por índice.
# Usa try-except para manejar el caso donde el índice esté fuera de rango.

def get_index(index, elements):
    try:
        print(elements[index])
    except IndexError as e:
        print(f"Error: {e}")


my_list = [35, 24]
get_index(4, my_list)


# 7. Crea una función que use try-except para manejar múltiples excepciones: ZeroDivisionError,
# ValueError y TypeError.
def test_errors(a, b, mode):
    """
    Función que fuerza distintos errores según el modo:
    - "zero" -> ZeroDivisionError
    - "value" -> ValueError
    - "type" -> TypeError
    - cualquier otro -> operación normal a / b
    """
    try:
        if mode == "zero":
            result = a / 0
        elif mode == "value":
            result = int("hola")
        elif mode == "type":
            result = a / "texto"
        else:
            result = a / b
    except (ZeroDivisionError, ValueError, TypeError) as e:
        if isinstance(e, ZeroDivisionError):
            print(f"ZeroDivisionError capturado: {e}")
        elif isinstance(e, ValueError):
            print(f"ValueError capturado: {e}")
        elif isinstance(e, TypeError):
            print(f"TypeError capturado: {e}")
    else:
        print(f"Resultado: {result}")
        return result
    finally:
        print("Fin de la función\n")


# Pruebas
test_errors(10, 2, "zero")
test_errors(10, 2, "value")
test_errors(10, 2, "type")
test_errors(10, 2, "normal")

# 8. Crea una función que simule una transacción. Lanza una excepción personalizada llamada
# InsufficientFundsError si el saldo es menor que la cantidad a retirar.


# Creamos una nueva clase de excepción que hereda de Exception
# Esto nos permite lanzar errores específicos para nuestro caso
class InsufficientFundsError(Exception):
    """Excepción personalizada para saldos insuficientes"""
    pass  # 'pass' porque no necesitamos añadir nada más, solo la definimos

# Función que simula una transacción bancaria


def transaction(amount, balance):
    """
    Intenta retirar 'amount' del saldo 'balance'.
    Si el saldo no es suficiente, lanza la excepción InsufficientFundsError.
    """
    if (balance - amount) < 0:
        # Si el saldo final sería negativo, lanzamos la excepción personalizada
        raise InsufficientFundsError("balance cannot be negative")
    else:
        # Si hay suficiente saldo, realizamos la transacción
        print(f"transaction done, new balance: {balance - amount}")


# Bloque try-except para manejar la excepción personalizada
try:
    # Intentamos una transacción con saldo suficiente → no se lanza excepción
    transaction(500, 1500)

    # Intentamos una transacción con saldo insuficiente → se lanza la excepción
    transaction(5000, 1500)

# Capturamos específicamente nuestra excepción personalizada
except InsufficientFundsError as e:
    # Imprimimos un mensaje indicando que ocurrió un error controlado
    print(f"personalized exception: {e}")

# 9. Crea una función que intente convertir una lista de cadenas en enteros.
# Maneja cualquier error que surja cuando una cadena no pueda convertirse.
# Excepción personalizada para indicar que hubo un error al convertir un string a int


class ListToIntError(Exception):
    """Excepción personalizada para errores de conversión de lista"""
    pass

# Función que intenta convertir cada elemento de una lista de strings a entero


def str_list_to_int(str_list):
    converted_list = []  # Lista donde guardaremos los enteros convertidos

    for i, item in enumerate(str_list):
        try:
            # Intentamos convertir cada string a entero
            number = int(item)
            converted_list.append(number)
        except ValueError as e:
            # Si no se puede convertir, lanzamos nuestra excepción personalizada
            raise ListToIntError(
                f"Elemento no convertible en índice {i}: '{item}'") from e

    # Si todo va bien, retornamos la lista convertida
    return converted_list


# Ejemplo de uso
my_list = ["10", "20", "hola", "40"]

try:
    result = str_list_to_int(my_list)
    print(result)
except ListToIntError as e:
    print(f"Personalized exception: {e}")

    print(f"personalized exception: {e}")

# 10. Crea una función que calcule la raíz cuadrada de un número. Lanza un ValueError si el número
# es negativo.


# Función que calcula la raíz cuadrada de un número
def sqrt_number(number):
    # Lanzamos un ValueError si el número es negativo
    if number < 0:
        raise ValueError(
            "No se puede calcular la raíz cuadrada de un número negativo")

    # Si el número es válido, calculamos la raíz cuadrada
    result = math.sqrt(number)
    return result


# Bloque de prueba con manejo de excepciones
try:
    print(sqrt_number(-10))  # Intentamos calcular la raíz de un número negativo
except ValueError as e:
    # Capturamos la excepción y mostramos un mensaje amigable
    print(f"Error: {e}")

# También podemos probar con un número positivo
try:
    print(sqrt_number(16))  # Esto devuelve 4.0
except ValueError as e:
    print(f"Error: {e}")
