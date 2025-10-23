# =========================================================
# 🧩 DICCIONARIOS - EJERCICIOS EXPLICADOS
# =========================================================

# 1️⃣ Crea un diccionario con las claves name, age, y country,
# asignando valores a cada una. Imprime el diccionario.
my_dict = {"name": "cristina", "age": 27, "country": "spain"}
print(my_dict)  # {'name': 'cristina', 'age': 27, 'country': 'spain'}

# ---------------------------------------------------------

# 2️⃣ Accede al valor de la clave name en el diccionario.
# Accedemos igual que en una lista, pero con el nombre de la clave.
print(my_dict["name"])  # 'cristina'

# ---------------------------------------------------------

# 3️⃣ Añade una nueva clave job con el valor "Web Developer".
# Los diccionarios son mutables, así que podemos agregar pares clave:valor fácilmente.
my_dict["job"] = "web developer"
print(my_dict)
# {'name': 'cristina', 'age': 27, 'country': 'spain', 'job': 'web developer'}

# ---------------------------------------------------------

# 4️⃣ Modifica el valor de la clave age en el diccionario para que sea 28.
# Cambiar valores es igual que añadirlos: simplemente reasignas la clave.
my_dict["age"] = 28
print(my_dict)
# {'name': 'cristina', 'age': 28, 'country': 'spain', 'job': 'web developer'}

# ---------------------------------------------------------

# 5️⃣ Elimina la clave country del diccionario con 'del'.
# Esto borra completamente la pareja clave-valor.
del my_dict["country"]
print(my_dict)
# {'name': 'cristina', 'age': 28, 'job': 'web developer'}

# ---------------------------------------------------------

# 6️⃣ Crea un diccionario donde las claves sean números del 1 al 5
# y los valores sean sus cuadrados (por ejemplo: 1:1, 2:4, ...).
# Aquí usamos una comprensión de diccionario para hacerlo de forma automática.
my_dict = {1: 1**2, 2: 2**2, 3: 3**2, 4: 4**2, 5: 5**2}
print(my_dict)
# {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}

# ---------------------------------------------------------

# 7️⃣ Verifica si la clave 'age' está presente en el diccionario.
# El operador "in" comprueba si una clave existe, NO un valor.
my_dict = {"name": "Brais", "age": 37, "country": "Galicia"}
print("age" in my_dict)  # True

# ---------------------------------------------------------

# 8️⃣ Imprime solo las claves del diccionario.
# .keys() devuelve una vista de las claves (tipo dict_keys)
print(my_dict.keys())
# dict_keys(['name', 'age', 'country'])

# ---------------------------------------------------------

# 9️⃣ Convierte las claves del diccionario en una lista e imprímela.
# Esto es útil si quieres manipularlas como lista (ordenarlas, recorrerlas, etc.)
my_keys_list = list(my_dict.keys())
print(my_keys_list)
print(type(my_keys_list))
# ['name', 'age', 'country']
# <class 'list'>

# ---------------------------------------------------------

# 🔟 Crea un nuevo diccionario a partir de una lista de claves
# usando fromkeys(), asignando a todas las claves el valor "Desconocido".
# dict.fromkeys(iterable, valor_por_defecto)
my_keys = ["name", "age", "job"]
my_new_dict = dict.fromkeys(my_keys, "Desconocido")
print(my_new_dict)
# {'name': 'Desconocido', 'age': 'Desconocido', 'job': 'Desconocido'}
