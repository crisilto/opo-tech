### Tuplas en Python ###

# Definición de tuplas vacías (dos formas equivalentes)
my_tuple = tuple()
my_other_tuple = ()

# Creación de una tupla con distintos tipos de datos
# Las tuplas pueden contener cualquier tipo de valor, igual que las listas.
my_tuple = (27, 1.68, "cristina", "silvestre", "cristina")
print(my_tuple)
print(type(my_tuple))  # <class 'tuple'>

# Acceso a elementos por índice
print(my_tuple[0])   # primer elemento
print(my_tuple[-1])  # último elemento

# Métodos de las tuplas
print(my_tuple.count("cristina"))  # cuenta cuántas veces aparece "cristina"
print(my_tuple.count("cris"))      # si no existe, devuelve 0
print(my_tuple.index("cristina"))  # devuelve la posición del primer "cristina"

# ❌ my_tuple[1] = 1.70
# Las tuplas son inmutables → no se pueden modificar sus valores directamente.

# Podemos concatenar tuplas con el operador +
my_other_tuple = (13, 12, 11, 97, 98)
my_sum_tuple = my_tuple + my_other_tuple
print(my_sum_tuple)

# Si queremos valores constantes → usamos tupla
# Si queremos valores mutables (modificables) → usamos lista

# Slicing (obtener una porción)
print(my_sum_tuple[3:6])  # muestra los valores en posiciones 3, 4 y 5

# Conversión de tupla a lista (para poder modificarla)
my_tuple = list(my_tuple)
print(type(my_tuple))  # ahora es <class 'list'>

# Modificación de valores ahora que es lista
my_tuple[4] = "crisketo"   # cambia el valor en la posición 4
my_tuple.insert(1, "black")  # inserta un nuevo valor en la posición 1

# Volvemos a convertir la lista en tupla
my_tuple = tuple(my_tuple)
print(my_tuple)
print(type(my_tuple))  # vuelve a ser <class 'tuple'>

# Eliminación completa de la variable (libera memoria)
del my_tuple

# Si intentamos acceder después de eliminarla → error
# print(my_tuple)  # NameError: name 'my_tuple' is not defined
