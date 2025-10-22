# -------------------------------
# STRINGS EN PYTHON
# -------------------------------

# Crear strings con comillas dobles o simples
my_string = "mi string"
my_other_string = 'mi otro string'

# len() devuelve la longitud del string (número de caracteres)
print(len(my_string))
print(len(my_other_string))

# Concatenar (unir) strings con el operador +
print(my_string + " " + my_other_string)


# -------------------------------
# SECUENCIAS ESPECIALES
# -------------------------------

# \n crea un salto de línea
my_new_line_string = "este es un string\ncon un salto de linea"
print(my_new_line_string)

# \t inserta una tabulación (espacio grande)
my_new_tab_string = "\teste es un string con un salto de linea"
print(my_new_tab_string)

# \\ imprime una barra invertida literal (\)
# y evita que \n se interprete como salto de línea
my_new_scape_string = "\\teste es un string\\nescapado"
print(my_new_scape_string)


# -------------------------------
# FORMATEO DE STRINGS
# -------------------------------

name, surname, age = "cristina", "silvestre", 27

# f-string → forma moderna y recomendada
print(f"mi nombre es {name} {surname} y mi edad es {age}")

# .format() → método más antiguo pero útil
print("mi nombre es {} {} y mi edad es {}".format(name, surname, age))

# %s y %d → estilo de formateo tipo C
print("mi nombre es %s %s y mi edad es %d" % (name, surname, age))

# Concatenación manual → se debe convertir números a string con str()
print("mi nombre es " + name + " " + surname + " y mi edad es " + str(age))


# -------------------------------
# DESEMPAQUETADO DE CARACTERES
# -------------------------------
language = "python"
# Cada letra se asigna a una variable diferente
a, b, c, d, e, f = language
print(a)  # p
print(e)  # o


# -------------------------------
# SLICING (CORTAR STRINGS)
# -------------------------------

# [inicio:fin] → corta desde inicio hasta fin (sin incluir fin)
language_slice = language[1:3]
print(language_slice)  # yt

# [inicio:] → desde índice 1 hasta el final
language_slice = language[1:]
print(language_slice)  # ython

# Índices negativos → cuentan desde el final
language_slice = language[-2]
print(language_slice)  # o

# [inicio:fin:paso] → corta saltando cada "paso" caracteres
language_slice = language[0:6:2]
print(language_slice)  # pto

# [::-1] → invierte el string
reversed_language = language[::-1]
print(reversed_language)  # nohtyp


# -------------------------------
# MÉTODOS DE STRING
# -------------------------------

print(language.capitalize())   # Primera letra en mayúscula → "Python"
print(language.upper())        # Todo en mayúsculas → "PYTHON"
print(language.lower())        # Todo en minúsculas → "python"
print(language.count("t"))     # Cuenta cuántas veces aparece "t"
print(language.isnumeric())    # False → "python" no es número
print("1".isnumeric())         # True → "1" sí es número
print(language.lower().isupper())  # False → no está en mayúsculas
print(language.startswith("Py"))   # False → distingue mayúsculas
print(language.startswith("py"))   # True → empieza con "py"
