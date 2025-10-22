### Lists ###

# Definición de listas

my_list = list()      # crea una lista vacía usando el constructor list()
my_other_list = []    # crea una lista vacía usando corchetes (forma más común)

# len() devuelve la longitud de la lista (0 porque está vacía)
print(len(my_list))

# Ahora creamos una lista con elementos
my_list = [35, 24, 62, 52, 30, 30, 17]

print(my_list)        # muestra la lista completa
print(len(my_list))   # longitud: 7 elementos

# Otra lista con distintos tipos de datos (entero, float, string, string)
my_other_list = [35, 1.77, "Brais", "Moure"]

print(type(my_list))         # <class 'list'>
print(type(my_other_list))   # <class 'list'>

# -----------------------------
# Acceso a elementos y búsqueda
# -----------------------------

print(my_other_list[0])   # primer elemento -> 35
print(my_other_list[1])   # segundo elemento -> 1.77
print(my_other_list[-1])  # último elemento -> "Moure"
# primer elemento otra vez (porque -4 recorre desde el final)
print(my_other_list[-4])
print(my_list.count(30))  # cuántas veces aparece el valor 30 -> 2

# print(my_other_list[4])  # ❌ IndexError (no existe posición 4)
# print(my_other_list[-5]) # ❌ IndexError (no existe -5)

# devuelve el índice donde está "Brais" -> 2
print(my_other_list.index("Brais"))

# desempaquetado de elementos (cada variable toma un valor de la lista)
age, height, name, surname = my_other_list
print(name)  # "Brais"

# también se puede desempaquetar manualmente con índices
name, height, age, surname = my_other_list[2], my_other_list[1], my_other_list[0], my_other_list[3]
print(age)  # 35

# -----------------------------
# Concatenación de listas
# -----------------------------
print(my_list + my_other_list)  # une las dos listas en una sola
# print(my_list - my_other_list)  # ❌ error, no se pueden restar listas

# -----------------------------
# Creación, inserción, actualización y eliminación
# -----------------------------

my_other_list.append("MoureDev")  # añade un nuevo elemento al final
print(my_other_list)

my_other_list.insert(1, "Rojo")   # inserta "Rojo" en la posición 1
print(my_other_list)

# cambia el elemento en la posición 1 por "Azul"
my_other_list[1] = "Azul"
print(my_other_list)

# elimina el valor "Azul" (por contenido, no por índice)
my_other_list.remove("Azul")
print(my_other_list)

my_list.remove(30)                # elimina la primera aparición del número 30
print(my_list)

print(my_list.pop())              # elimina y devuelve el último elemento
print(my_list)

my_pop_element = my_list.pop(2)   # elimina y devuelve el elemento del índice 2
print(my_pop_element)             # muestra el valor eliminado
print(my_list)

# elimina el elemento en el índice 2 (sin devolverlo)
del my_list[2]
print(my_list)

# -----------------------------
# Operaciones con listas
# -----------------------------

my_new_list = my_list.copy()      # crea una copia independiente de la lista

my_list.clear()                   # vacía todos los elementos de la lista
print(my_list)                    # []
print(my_new_list)                # la copia sigue teniendo sus valores

my_new_list.reverse()             # invierte el orden de los elementos
print(my_new_list)

# ordena la lista (solo si todos los elementos son del mismo tipo)
my_new_list.sort()
print(my_new_list)

# -----------------------------
# Sublistas (slicing)
# -----------------------------
# obtiene los elementos desde el índice 1 hasta el 2 (el 3 no se incluye)
print(my_new_list[1:3])

# -----------------------------
# Cambio de tipo
# -----------------------------
# reasignamos la variable con un string (ya no es una lista)
my_list = "Hola Python"
print(my_list)
print(type(my_list))       # <class 'str'>
