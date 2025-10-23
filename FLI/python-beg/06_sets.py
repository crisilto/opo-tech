### Sets (Conjuntos) en Python ###

# Un set (o conjunto) es una colección desordenada de elementos únicos.
# No permite duplicados y no mantiene el orden de inserción.
# Se usa para operaciones de conjuntos como unión, intersección o diferencia.

# ------------------------------------------------------
# Definición de un set
# ------------------------------------------------------

my_set = set()          # forma vacía
my_other_set = {}       # atención: esto crea un diccionario, no un set
print(type(my_set))     # <class 'set'>
print(type(my_other_set))  # <class 'dict'>

# Para crear un set correctamente con elementos:
my_other_set = {"cristina", "silvestre", 27}
print(my_other_set)
print(type(my_other_set))  # <class 'set'>

# Los sets no garantizan un orden al imprimir.
# Cada vez pueden mostrarse en orden diferente.

# ------------------------------------------------------
# Propiedades básicas
# ------------------------------------------------------

# 1. Longitud
print(len(my_other_set))  # cuenta elementos únicos

# 2. Agregar elementos con add()
my_other_set.add("crisketo")
print(my_other_set)

# Si intentas añadir un valor repetido, se ignora:
my_other_set.add("crisketo")
print(my_other_set)  # sigue igual, sin duplicados

# ------------------------------------------------------
# Comprobaciones y acceso
# ------------------------------------------------------

# No se puede acceder por índice (como en listas o tuplas).
# Pero sí puedes comprobar si un elemento existe:
print("crisketo" in my_other_set)   # True
print("crisketooo" in my_other_set)  # False

# ------------------------------------------------------
# Eliminación de elementos
# ------------------------------------------------------

# Eliminar un elemento específico
my_other_set.remove("silvestre")
print(my_other_set)

# Vaciar el set pero mantener la variable
my_other_set.clear()
print(len(my_other_set))  # 0

# Eliminar completamente la variable
del my_other_set
# print(my_other_set)  # ❌ NameError: la variable ya no existe

# ------------------------------------------------------
# Conversión de tipos
# ------------------------------------------------------

# Podemos convertir un set a lista (útil si queremos acceder por índice)
my_set = {"cristina", "silvestre", 27}
my_list = list(my_set)
print(my_list)
# ⚠️ Atención: el orden de los elementos puede cambiar en cada ejecución
print(my_list[0])  # valor aleatorio

# ------------------------------------------------------
# Operaciones con sets
# ------------------------------------------------------

# Unión: combina dos conjuntos (sin duplicados)
my_other_set = {"java", "javascript", "python"}
my_new_set = my_set.union(my_other_set)
print(my_new_set)

# Se pueden encadenar uniones con otros sets
print(my_new_set.union(my_set).union({"JavaScript", "C#"}))

# Diferencia: elementos que están en un set pero no en otro
print(my_new_set.difference(my_set))

# ------------------------------------------------------
# Cuándo usar un set
# ------------------------------------------------------
# ✅ Cuando necesitas eliminar duplicados de una lista.
# ✅ Cuando haces comprobaciones de pertenencia rápidas ("x in conjunto").
# ✅ Cuando trabajas con operaciones de conjuntos (unión, diferencia, etc.)
# ⚠️ No lo uses si necesitas mantener el orden o acceder por índices.
