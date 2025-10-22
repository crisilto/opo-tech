# 1. Crea una lista con los números del 1 al 5 e imprímela.
lista = [1, 2, 3, 4, 5]
print(lista)

# 2. Accede e imprime el tercer elemento de la lista [10, 20, 30, 30, 40, 50].
lista = [10, 20, 30, 30, 40, 50]
print(lista[2])

# 3. Agrega el número 6 al final de la lista [1, 2, 3, 4, 5] e imprímela.
lista = [1, 2, 3, 4, 5]
lista.append(6)
print(lista)

# 4. Inserta el número 15 en la posición 2 de la lista [10, 20, 30, 40, 50].
lista = [10, 20, 30, 40, 50]
lista.insert(1, 15)
print(lista)

# 5. Elimina el primer valor 30 de la lista [10, 20, 30, 30, 40, 50].
lista = [10, 20, 30, 30, 40, 50]
lista.remove(30)
print(lista)

# 6. Usa pop() para eliminar el último elemento de la lista [1, 2, 3, 4, 5].
#    Guarda el elemento eliminado en una variable e imprímelo junto con la lista.
lista = [1, 2, 3, 4, 5]
ultimo = lista.pop()
print(ultimo)
print(lista)

# 7. Invierte la lista [100, 200, 300, 400, 500] e imprímela.
lista = [100, 200, 300, 400, 500]
print(lista[::-1])

# 8. Ordena la lista [3, 1, 4, 2, 5] en orden ascendente e imprímela.
lista = [3, 1, 4, 2, 5]
lista.sort()
print(lista)

# 9. Concatena las listas [1, 2, 3] y [4, 5, 6] en una nueva lista e imprímela.
lista = [1, 2, 3] + [4, 5, 6]
print(lista)

# 10. Crea una sublista con los elementos de [10, 20, 30, 40, 50]
#     desde la posición 1 hasta la 3 (sin incluir la posición 3).
lista = [10, 20, 30, 40, 50]
sublista = lista[1:3]
print(sublista)
