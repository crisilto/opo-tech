### Loops (Bucles) ###

# Los bucles permiten repetir un bloque de código varias veces
# hasta que se cumpla (o deje de cumplirse) una condición.

# ----------------------------
# WHILE
# ----------------------------
# El bucle while se ejecuta MIENTRAS se cumpla la condición.

my_condition = 0

while my_condition < 10:
    print(my_condition)
    my_condition += 2  # incrementamos en 2 cada vez, si no, sería un bucle infinito
else:  # Este bloque es opcional y se ejecuta cuando la condición deja de cumplirse
    print("Mi condición es mayor o igual que 10")

print("La ejecución continúa")

# Ahora my_condition ya vale 10
# En este nuevo while seguimos sumando hasta llegar a 20
while my_condition < 20:
    my_condition += 1

    # Si llega a 15, usamos 'break' para detener el bucle inmediatamente
    if my_condition == 15:
        print("Se detiene la ejecución")
        break

    print(my_condition)

print("La ejecución continúa")


# ----------------------------
# FOR
# ----------------------------
# El bucle for recorre una colección (lista, tupla, set, diccionario, etc.)
# y ejecuta el bloque una vez por cada elemento.

my_list = [35, 24, 62, 52, 30, 30, 17]

for element in my_list:
    print(element)  # imprime cada número de la lista


my_tuple = (35, 1.77, "Brais", "Moure", "Brais")

for element in my_tuple:
    print(element)  # imprime cada elemento de la tupla (números y textos)


my_set = {"Brais", "Moure", 35}

for element in my_set:
    print(element)  # imprime cada elemento del conjunto (sin orden fijo)


my_dict = {"Nombre": "Brais", "Apellido": "Moure", "Edad": 35, 1: "Python"}

# Por defecto, al iterar un diccionario, el bucle recorre solo las *claves*
for element in my_dict:
    print(element)
    if element == "Edad":
        break  # Detiene el bucle cuando encuentra la clave "Edad"
else:
    # Este else solo se ejecuta si el bucle NO se rompe con 'break'
    print("El bucle for para el diccionario ha finalizado")

print("La ejecución continúa")


# Segundo ejemplo con 'continue'
# Continue salta el resto del bloque y pasa al siguiente ciclo
for element in my_dict:
    print(element)
    if element == "Edad":
        continue  # salta la línea siguiente cuando la clave es "Edad"
    print("Se ejecuta")  # esta línea no se imprime cuando element == "Edad"
else:
    print("El bucle for para el diccionario ha finalizado")
