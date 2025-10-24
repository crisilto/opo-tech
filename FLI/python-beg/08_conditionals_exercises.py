### Ejercicios sobre condicionales ###

# 1. Verificar si un número es positivo, negativo o cero
# Comprobamos el valor de la variable 'num' usando if, elif y else
num = 13
if num > 0:
    print("positivo")
elif num < 0:
    print("negativo")
else:
    print("cero")


# 2. Pedir edad al usuario y verificar si es mayor o menor de edad
# Convertimos el input (texto) a número con int()
age = input("escribe tu edad: ")
age = int(age)
if age >= 18:
    print("eres mayor de edad")
else:
    print("eres menor de edad")


# 3. Verificar si una cadena está vacía
# Una cadena vacía es igual a "", por tanto se puede comprobar directamente
str = input("escribe algo: ")
if str == "":
    print("cadena vacía")
else:
    print("gracias")


# 4. Comparar dos números introducidos por el usuario
# Se convierten ambos inputs a int() antes de comparar
num1 = input("escribe un numero: ")
num1 = int(num1)
num2 = input("escribe otro numero: ")
num2 = int(num2)

if num1 > num2:
    print(f"el numero {num1} es mayor que el numero {num2}")
elif num1 < num2:
    print(f"el numero {num2} es mayor que el numero {num1}")
else:
    print(f"los numeros {num1} y {num2} son iguales")


# 5. Verificar si un número es divisible por 3 y 5 al mismo tiempo
# Se usa el operador módulo (%) que devuelve el resto de una división
num = input("escribe un numero que sea divisible por 3 y por 5: ")
num = int(num)

if num % 3 == 0 and num % 5 == 0:
    print("correcto")
else:
    print("incorrecto")


# 6. Verificar si un número es par o impar
# Si un número es divisible por 2 (resto 0), es par
num = input("escribe un numero: ")
num = int(num)

if num % 2 == 0:
    print(f"el numero {num} es par")
else:
    print(f"el numero {num} es impar")


# 7. Determinar si una persona puede votar
# Si tiene 18 o más, puede votar
# Si tiene 16 o 17, puede hacerlo con permiso especial
# Si es menor, no puede votar
age = input("escribe tu edad: ")
age = int(age)

if age >= 18:
    print("puedes votar")
elif age == 16 or age == 17:
    print("puedes votar con un permiso especial")
else:
    print("no puedes votar")


# 8. Verificar una contraseña predefinida
# Comparamos la entrada del usuario con la contraseña guardada
predefined_password = "abc123"
user_password = input("escribe la contraseña: ")

if user_password == predefined_password:
    print("contraseña correcta")
else:
    print("contraseña incorrecta")


# 9. Verificar si un número está entre 10 y 20 (ambos incluidos)
# Se usa un doble condicional con and
num = input("escribe un numero: ")
num = int(num)

if num >= 10 and num <= 20:
    print(f"el numero {num} esta entre 10 y 20")
else:
    print(f"el numero {num} no esta entre 10 y 20")


# 10. Simular un semáforo con condicionales
# Dependiendo del color introducido, se muestra un mensaje distinto
color = input("escribe un color (rojo, amarillo o verde): ")

if color == "rojo":
    print("detente")
elif color == "amarillo":
    print("alerta")
elif color == "verde":
    print("avanza")
else:
    print("color no reconocido")
