### Ejercicios de Tuplas ###

# 1. Crea una tupla con los valores (10, 20, 30, 40, 50) e imprímela.
tupla = (10, 20, 30, 40, 50)
print(tupla)

# 2. Accede al segundo elemento de la tupla (100, 200, 300, 400, 500) y muéstralo.
tupla = (100, 200, 300, 400, 500)
print(tupla[1])  # el segundo elemento está en el índice 1

# 3. Intenta modificar el primer elemento de la tupla (1, 2, 3) a 10 y observa el resultado.
tupla = (1, 2, 3)
# tupla[0] = 10  # ❌ TypeError: las tuplas son inmutables, no se pueden modificar

# 4. Cuenta cuántas veces aparece el número 3 en la tupla (1, 2, 3, 3, 4, 5, 3).
tupla = (1, 2, 3, 3, 4, 5, 3)
print(tupla.count(3))

# 5. Encuentra el índice de la primera aparición de la cadena "Python" en la tupla.
tupla = ("Java", "Python", "JavaScript", "Python")
print(tupla.index("Python"))

# 6. Concatena dos tuplas: (1, 2, 3) y (4, 5, 6) e imprime la tupla resultante.
tupla = (1, 2, 3) + (4, 5, 6)
print(tupla)

# 7. Crea una subtupla con los elementos desde la posición 2 hasta la 4 (sin incluir la 4).
tupla = (10, 20, 30, 40, 50)
print(tupla[2:4])  # obtiene (30, 40)

# 8. Convierte la tupla ("rojo", "verde", "azul") en lista, cambia el segundo elemento a "amarillo"
# y vuelve a convertirla en tupla.
tupla = ("rojo", "verde", "azul")
tupla = list(tupla)        # conversión a lista (mutable)
tupla[1] = "amarillo"      # modificación del valor
tupla = tuple(tupla)       # reconversión a tupla
print(tupla)
print(type(tupla))

# 9. Elimina la tupla usando del y luego intenta imprimirla para ver el resultado.
tupla = (1, 2, 3)
del tupla
# print(tupla)  # ❌ NameError: name 'tupla' is not defined (la variable ya no existe)

# 10. Crea una tupla con un solo elemento (el número 100) e imprímela.
tupla = (100,)
print(tupla)
print(type(tupla))  # <class 'tuple'>
# La coma final es necesaria para indicar que es una tupla y no solo un paréntesis.
