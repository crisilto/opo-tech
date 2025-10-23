# =========================================================
# 📘 SETS EN PYTHON - EJERCICIOS PRÁCTICOS EXPLICADOS
# =========================================================

# Un set (conjunto) es una colección **no ordenada**, **sin elementos duplicados**
# y cuyos valores son **mutables** (pueden añadirse o eliminarse).
# Se usa con {} o con set().

# 1. Crea un set con los números del 1 al 5 e imprímelo.
my_set = {1, 2, 3, 4, 5}
print(my_set)
print(type(my_set))  # <class 'set'>

# 2. Añade el número 6 al set {1, 2, 3, 4, 5} e imprímelo.
my_set.add(6)
print(my_set)  # ahora incluye el 6

# 3. Intenta añadir el número 5 al set nuevamente. ¿Qué sucede?
my_set.add(5)
print(my_set)
# No pasa nada, porque los sets no permiten duplicados.

# 4. Verifica si el número 3 está en el set e imprime el resultado.
print(3 in my_set)  # True
# También podríamos comprobar un valor que no exista.
print(9 in my_set)  # False

# 5. Elimina el número 4 del set e imprime el set resultante.
my_set.remove(4)
print(my_set)
# Si intentas eliminar un elemento que no existe, da error.
# Para evitarlo, se puede usar discard(): my_set.discard(4)

# 6. Usa el método clear() para vaciar un set y luego imprime su longitud.
my_set.clear()
print(len(my_set))  # 0, el set queda vacío pero sigue existiendo

# 7. Convierte el set {"manzana", "naranja", "plátano"} en una lista
# e imprime el primer elemento de la lista.
my_set = {"manzana", "naranja", "plátano"}
my_list = list(my_set)
# ⚠️ El orden de un set no está garantizado, así que el primer elemento
# puede variar cada vez que ejecutes el programa.
print(my_list[0])

# 8. Realiza la unión de dos sets: {1, 2, 3} y {4, 5, 6}, e imprime el resultado.
my_set = {1, 2, 3}
my_other_set = {4, 5, 6}
my_full_set = my_set.union(my_other_set)
print(my_full_set)
# El método union() combina los elementos de ambos sets sin repetirlos.

# 9. Calcula la diferencia entre los sets {1, 2, 3, 4} y {3, 4, 5, 6}
# e imprime el resultado.
my_set = {1, 2, 3, 4}
my_other_set = {3, 4, 5, 6}
difference = my_set.difference(my_other_set)
print(difference)  # {1, 2} → los elementos que están solo en my_set

# 10. Elimina un set llamado my_set usando del y luego intenta imprimirlo
# para ver el resultado.
del my_set
# print(my_set)  # ❌ NameError: name 'my_set' is not defined
# del elimina completamente la variable de la memoria.
