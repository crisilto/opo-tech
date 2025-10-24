### Loops Exercises ###

# 1. Usa un bucle while para imprimir los números del 1 al 10.
# → Repetimos mientras 'num' sea menor o igual que 10.
num = 1
while num <= 10:
    print(num)
    num += 1  # aumentamos el valor para que el bucle no sea infinito


# 2. Usa un bucle for para recorrer la lista [10, 20, 30, 40, 50] e imprime cada número.
# → El bucle recorre directamente los elementos de la lista.
list = [10, 20, 30, 40, 50]
for element in list:
    print(element)


# 3. Escribe un programa que use un bucle while para sumar los números del 1 al 100 e imprime el resultado.
# → Vamos acumulando el total con una variable auxiliar llamada 'total'.
num = 1
total = 0
while num <= 100:
    total += num  # sumamos el número actual
    num += 1
print(total)  # imprime la suma total (5050)


# 4. Escribe un bucle for que imprima cada carácter de la cadena “Python”.
# → Los strings son iterables, así que el bucle recorre cada letra.
str = "Python"
for char in str:
    print(char)


# 5. Usa un bucle while para encontrar el primer número divisible por 7 entre 1 y 50.
# → Usamos 'break' para salir del bucle cuando se cumple la condición.
num = 1
while num <= 50:
    if num % 7 == 0:
        print(num)
        break  # se detiene al encontrar el primer número divisible por 7
    num += 1


# 6. Usa un bucle for para recorrer el diccionario e imprime las claves.
# → Al iterar un diccionario, obtenemos solo las claves por defecto.
dict = {"name": "Brais", "age": 37, "country": "Galicia"}
for key in dict:
    print(key)


# 7. Escribe un programa que use un bucle while para imprimir los números pares entre 1 y 20.
# → Comprobamos si el número es par antes de imprimirlo.
num = 1
while num <= 20:
    if num % 2 == 0:
        print(num)
    num += 1


# 8. Usa un bucle for con la función range() para imprimir los números del 1 al 10 en orden inverso.
# → range(inicio, fin, paso). Aquí el paso es -1 (va hacia atrás).
for i in range(10, 0, -1):
    print(i)


# 9. Escribe un programa que use un bucle for para contar cuántas veces aparece el número 30 en la lista.
# → Incrementamos el contador cada vez que encontramos un 30.
list = [30, 10, 30, 20, 30, 40]
count = 0
for element in list:
    if element == 30:
        count += 1
print(count)  # imprime cuántas veces aparece el 30


# 10. Usa un bucle for para recorrer una lista de nombres y detener el bucle cuando se encuentre el nombre “Brais”.
# → 'break' detiene el bucle en cuanto se cumple la condición.
names = ["cristina", "fay", "lilith", "emilio", "brais", "lidia"]
for name in names:
    if name == "brais":
        break
    print(name)  # se imprimen los nombres antes de "brais"
