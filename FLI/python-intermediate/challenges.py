### Challenges ###

"""
EL FAMOSO "FIZZ BUZZ":
Escribe un programa que muestre por consola (con un print) los
números de 1 a 100 (ambos incluidos y con un salto de línea entre
cada impresión), sustituyendo los siguientes:
- Múltiplos de 3 por la palabra "fizz".
- Múltiplos de 5 por la palabra "buzz".
- Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
"""


def fizzbuzz():
    # Recorremos los números del 1 al 100 (el 101 no se incluye)
    for i in range(1, 101):
        # Si el número es múltiplo de 3 y 5 a la vez, imprimimos "fizzbuzz"
        if i % 3 == 0 and i % 5 == 0:
            print("fizzbuzz")
        # Si solo es múltiplo de 3, imprimimos "fizz"
        elif i % 3 == 0:
            print("fizz")
        # Si solo es múltiplo de 5, imprimimos "buzz"
        elif i % 5 == 0:
            print("buzz")
        # Si no cumple ninguna condición, imprimimos el número
        else:
            print(i)


# Llamamos a la función para ejecutar el programa
fizzbuzz()


"""
¿ES UN ANAGRAMA?
Escribe una función que reciba dos palabras (String) y retorne
verdadero o falso (Bool) según sean o no anagramas.
- Un Anagrama consiste en formar una palabra reordenando TODAS
  las letras de otra palabra inicial.
- NO hace falta comprobar que ambas palabras existan.
- Dos palabras exactamente iguales no son anagrama.
"""


def is_anagram(word_one, word_two):
    # Convertimos ambas palabras a minúsculas para evitar errores por mayúsculas
    w1, w2 = word_one.lower(), word_two.lower()
    # Comprobamos que no sean iguales y que las letras ordenadas coincidan
    return w1 != w2 and sorted(w1) == sorted(w2)


print(is_anagram("amor", "Roma"))  # True
print(is_anagram("amor", "amor"))  # False

"""
LA SUCESIÓN DE FIBONACCI
Escribe un programa que imprima los 50 primeros números de la sucesión
de Fibonacci empezando en 0.
- La serie Fibonacci se compone por una sucesión de números en
  la que el siguiente siempre es la suma de los dos anteriores.
  0, 1, 1, 2, 3, 5, 8, 13...
"""


def fibonacci():
    prev = 0     # Primer número de la sucesión
    next = 1     # Segundo número de la sucesión

    for i in range(0, 50):   # Se repite 50 veces
        print(prev)          # Imprime el número actual
        # Calcula el siguiente número (suma de los dos anteriores)
        fib = prev + next
        prev = next          # El número "siguiente" pasa a ser el "anterior"
        next = fib           # Y el nuevo número calculado pasa a ser el "siguiente"


"""
¿ES UN NÚMERO PRIMO?
Escribe un programa que se encargue de comprobar si un número es o no primo.
Hecho esto, imprime los números primos entre 1 y 100.
"""


def is_prime():
    for number in range(1, 101):     # Recorre los números del 1 al 100
        if number >= 2:              # Solo los >= 2 pueden ser primos
            is_divisible = False     # Asumimos que el número es primo
            for index in range(2, number):   # Comprobamos divisores desde 2 hasta (n-1)
                if number % index == 0:      # Si es divisible → no es primo
                    is_divisible = True
                    break                    # Sale del bucle al encontrar un divisor
            if not is_divisible:             # Si no se encontró divisor, es primo
                print(number)


# más eficiente:


def is_prime_v2():
    for number in range(2, 101):
        is_divisible = False
        # si un número tiene algún divisor,
        # ese divisor siempre aparece antes o igual que su raíz cuadrada.
        for i in range(2, int(number ** 0.5) + 1):
            if number % i == 0:
                is_divisible = True
                break
        if not is_divisible:
            print(number)


is_prime_v2()


"""
INVIRTIENDO CADENAS
Crea un programa que invierta el orden de una cadena de texto
sin usar funciones propias del lenguaje que lo hagan de forma automática.
- Si le pasamos "Hola mundo" nos retornará "odnum aloH"
"""


def reverse(text):
    text_len = len(text)              # Calcula la longitud del texto
    # Variable vacía donde iremos construyendo la cadena invertida
    reversed_text = ""
    for i in range(0, text_len):      # Recorre cada índice del texto original
        # Añade los caracteres desde el final hacia el inicio
        reversed_text += text[text_len - i - 1]
    return reversed_text               # Devuelve la cadena invertida


print(reverse("hola mundo"))           # Resultado: "odnum aloh"
