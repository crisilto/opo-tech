# =========================================================
# 📘 DICCIONARIOS EN PYTHON - TEORÍA COMPLETA Y EXPLICADA
# =========================================================

# 🔹 Un diccionario (dict) es una estructura de datos que almacena pares:
#    CLAVE → VALOR
# Cada clave (key) es única y sirve para acceder a su valor (value).

# Crear diccionarios vacíos de dos maneras:
my_dict = dict()
my_other_dict = {}

print(type(my_dict))       # <class 'dict'>
print(type(my_other_dict))  # <class 'dict'>

# 🔹 Crear un diccionario con valores:
my_other_dict = {
    "name": "cristina",
    "surname": "silvestre",
    "age": 27,
    1: "python"
}

# 🔹 También puedes tener diccionarios con conjuntos (sets), listas, etc.
my_dict = {
    "name": "cristina",
    "surname": "silvestre",
    "age": 27,
    "languages": {"javascript", "java", "python"},
    1: 1.68
}

print(my_other_dict)
print(my_dict)

# =========================================================
# 🔹 ACCEDER Y MODIFICAR VALORES
# =========================================================
# Se accede a los valores mediante su clave, como si fueran índices:
print(my_dict["name"])  # 'cristina'

# Cambiar un valor:
my_dict["name"] = "fay"
print(my_dict["name"])  # ahora es 'fay'

# También puedes acceder a claves numéricas si existen:
print(my_dict[1])  # 1.68

# Añadir una nueva clave-valor:
my_dict["address"] = 46004
print(my_dict)

# Eliminar una clave-valor:
del my_dict["address"]
print(my_dict)

# =========================================================
# 🔹 COMPROBAR EXISTENCIA DE CLAVES
# =========================================================
# El operador "in" solo busca en las CLAVES, no en los valores.
# ❌ False, porque "cristina" es un valor, no una clave
print("cristina" in my_dict)
print("name" in my_dict)      # ✅ True, porque "name" sí es una clave

# =========================================================
# 🔹 MÉTODOS ÚTILES DE LOS DICCIONARIOS
# =========================================================

# 1️⃣ .items() → devuelve pares (clave, valor)
print(my_dict.items())
# Ejemplo: dict_items([('name', 'fay'), ('surname', 'silvestre'), ('age', 27), ('languages', {...}), (1, 1.68)])

# 2️⃣ .keys() → devuelve solo las claves del diccionario
print(my_dict.keys())
# Ejemplo: dict_keys(['name', 'surname', 'age', 'languages', 1])

# 3️⃣ .values() → devuelve solo los valores
print(my_dict.values())
# Ejemplo: dict_values(['fay', 'silvestre', 27, {'javascript', 'java', 'python'}, 1.68])

# 💡 Estos tres métodos devuelven vistas dinámicas (no listas),
# pero puedes convertirlos fácilmente:
print(list(my_dict.keys()))     # convierte las claves a lista
print(list(my_dict.values()))   # convierte los valores a lista
print(list(my_dict.items()))    # convierte los pares a lista de tuplas

# =========================================================
# 🔹 dict.fromkeys() → crear un nuevo diccionario a partir de claves
# =========================================================

# Si solo le pasas una lista o tupla de claves,
# creará un diccionario donde cada clave tiene el valor None.
my_list = ["Nombre", 1, "Piso"]
my_new_dict = dict.fromkeys(my_list)
print(my_new_dict)
# {'Nombre': None, 1: None, 'Piso': None}

# Puedes pasar cualquier iterable (lista, tupla, set...)
my_new_dict = dict.fromkeys(("name", 1, "floor"))
print(my_new_dict)
# {'name': None, 1: None, 'floor': None}

# También puedes pasar otro diccionario: usará sus claves
my_new_dict = dict.fromkeys(my_dict)
print(my_new_dict)
# Todas las claves de my_dict, pero con valor None

# Si además pasas un segundo argumento, ese será el valor asignado a todas las claves.
my_new_dict = dict.fromkeys(my_dict, "crisketo")
print(my_new_dict)
# {'name': 'crisketo', 'surname': 'crisketo', 'age': 'crisketo', ...}

# =========================================================
# 🔹 MÉTODOS Y TIPOS RESULTANTES
# =========================================================
my_values = my_new_dict.values()
print(type(my_values))  # <class 'dict_values'>

print(my_new_dict.values())  # muestra todos los valores
# Si quieres convertirlos a lista, haces list(my_new_dict.values())

# Este trozo de código:
print(list(dict.fromkeys(list(my_new_dict.values())).keys()))
# 👉 Lo que hace:
# 1. my_new_dict.values() obtiene todos los valores del diccionario
# 2. dict.fromkeys() crea un nuevo diccionario usando esos valores como claves (elimina duplicados)
# 3. .keys() devuelve las claves (únicas)
# 4. list() las convierte en una lista
# 💡 En resumen: es una forma de obtener una lista de valores únicos.

# Finalmente, puedes convertir un diccionario a tupla, pero perderás la estructura clave:valor.
print(tuple(my_new_dict))
# Resultado: ('name', 'surname', 'age', 'languages', 1)
# → Solo conserva las CLAVES, no los valores.
