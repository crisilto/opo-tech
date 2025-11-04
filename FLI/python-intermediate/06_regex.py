### 🔍 REGULAR EXPRESSIONS (Expresiones Regulares en Python) ###
# ---------------------------------------------------------------
# Las expresiones regulares (RegEx) son una herramienta muy poderosa para:
# - Buscar texto que sigue un patrón.
# - Validar formatos (emails, teléfonos, contraseñas, etc.).
# - Reemplazar o extraer partes específicas de un texto.
# - Limpiar datos o analizar archivos de texto grandes.

# En Python, las expresiones regulares se manejan con el módulo 're'.
# ---------------------------------------------------------------

import re


# ---------------------------------------------------------------
# 🔸 1. CONCEPTO BÁSICO
# ---------------------------------------------------------------
# Una expresión regular es una "cadena patrón" que define cómo debe lucir
# el texto que queremos buscar. Por ejemplo:
#
# - "Python" → buscará literalmente la palabra Python.
# - "\d" → buscará cualquier número (0-9).
# - "[A-Z]" → buscará cualquier letra mayúscula.
# - "^[a-z]+" → buscará texto que comience con una o más letras minúsculas.
#
# El módulo 're' nos ofrece funciones principales:
# - re.match()   → busca solo al inicio del texto.
# - re.search()  → busca en cualquier parte del texto.
# - re.findall() → devuelve todas las coincidencias.
# - re.split()   → divide el texto según el patrón.
# - re.sub()     → reemplaza coincidencias por otro texto.
# ---------------------------------------------------------------


# Ejemplo base
my_string = "Esta es la lección número 7: Lección llamada Expresiones Regulares"
my_other_string = "Esta no es la lección número 6: Manejo de ficheros"


# ---------------------------------------------------------------
# 🔹 2. re.match()
# ---------------------------------------------------------------
# Busca un patrón SOLO AL INICIO del texto.
# Si coincide, devuelve un objeto Match. Si no, devuelve None.

# re.I = ignorecase (ignora mayúsculas)
match = re.match("Esta es la lección", my_string, re.I)
print(match)  # <re.Match object...>
print(match.span())  # (0, 17) → posición del texto que coincide
start, end = match.span()
print(my_string[start:end])  # imprime el fragmento exacto encontrado

# Si el texto no empieza con el patrón, devuelve None
match = re.match("Lección", my_string)
print(match)  # None → no empieza con “Lección”


# ---------------------------------------------------------------
# 🔹 3. re.search()
# ---------------------------------------------------------------
# Busca el patrón EN CUALQUIER PARTE del texto.
# Retorna el primer resultado que encuentra.

search = re.search("lección", my_string, re.I)
print(search)
print(search.span())  # posición de la coincidencia
start, end = search.span()
print(my_string[start:end])  # muestra "lección"


# ---------------------------------------------------------------
# 🔹 4. re.findall()
# ---------------------------------------------------------------
# Devuelve una lista con todas las coincidencias del patrón.

findall = re.findall("lección", my_string, re.I)
print(findall)  # ['lección', 'Lección']


# ---------------------------------------------------------------
# 🔹 5. re.split()
# ---------------------------------------------------------------
# Divide una cadena en partes, usando el patrón como separador.

print(re.split(":", my_string))
# ['Esta es la lección número 7', ' Lección llamada Expresiones Regulares']


# ---------------------------------------------------------------
# 🔹 6. re.sub()
# ---------------------------------------------------------------
# Sustituye todas las coincidencias de un patrón por otro texto.

print(re.sub("[l|L]ección", "LECCIÓN", my_string))
print(re.sub("Expresiones Regulares", "RegEx", my_string))


# ---------------------------------------------------------------
# 🔸 7. PATRONES FRECUENTES
# ---------------------------------------------------------------
# Los patrones (patterns) se definen con una sintaxis especial.
# Algunos de los más comunes son:

# [abc] → coincide con a, b o c
# [A-Z] → coincide con cualquier letra mayúscula
# [a-z] → coincide con cualquier letra minúscula
# [0-9] o \d → coincide con cualquier número
# \D → cualquier carácter que NO sea número
# \s → espacio en blanco
# \S → cualquier carácter que NO sea espacio
# .  → cualquier carácter (excepto salto de línea)
# ^ → inicio de línea o cadena
# $ → final de línea o cadena
# + → una o más repeticiones
# * → cero o más repeticiones
# ? → cero o una repetición
# | → operador “o”
# () → agrupa patrones

pattern = r"[lL]ección"
print(re.findall(pattern, my_string))  # ['lección', 'Lección']

pattern = r"[lL]ección|Expresiones"
print(re.findall(pattern, my_string))  # ['lección', 'Lección', 'Expresiones']

pattern = r"[0-9]"
print(re.findall(pattern, my_string))  # ['7']  → busca números
print(re.search(pattern, my_string))

pattern = r"\d"
print(re.findall(pattern, my_string))  # igual que [0-9]

pattern = r"\D"
print(re.findall(pattern, my_string))  # todo lo que NO sea número

pattern = r"[l].*"
print(re.findall(pattern, my_string))  # desde la primera 'l' hasta el final


# ---------------------------------------------------------------
# 🔸 8. VALIDACIÓN DE EMAIL (ejemplo práctico)
# ---------------------------------------------------------------
# Ejemplo de patrón para validar correos electrónicos.
# Este patrón busca:
# - Inicio (^) y final ($) de cadena.
# - Letras, números o símbolos válidos antes del @.
# - Un dominio válido tras el @.
# - Un punto "." seguido de una extensión.

email = "crisilto@pythonmail.com"
pattern = r"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z-.]+$"

print(re.match(pattern, email))   # Match si el formato es válido
print(re.findall(pattern, email))  # Devuelve lista con el email si es válido

email = "crisilto@pythonmail.com.mx"
# También acepta dominios con varias extensiones
print(re.findall(pattern, email))


# ---------------------------------------------------------------
# 🔸 9. BUENAS PRÁCTICAS
# ---------------------------------------------------------------
# ✅ Usar siempre 'r' delante del patrón → evita que Python interprete los backslashes.
#    Ejemplo: r"\d" es mejor que "\\d"
#
# ✅ Usar flags cuando sea necesario:
#    - re.I → ignora mayúsculas/minúsculas
#    - re.M → permite buscar en varias líneas
#    - re.S → hace que '.' incluya saltos de línea
#
# ✅ Probar tus patrones en https://regex101.com → herramienta visual muy útil
#
# ✅ Si vas a usar una expresión varias veces, compílala con:
#    pattern = re.compile(r"\d+")
#    pattern.findall("Mi número es 123 y el tuyo 456")
#
# ✅ Recuerda que las expresiones regulares son potentes, pero pueden ser difíciles de leer.
#    A veces, usar métodos normales de cadenas (`split()`, `replace()`, `in`, etc.)
#    puede ser más sencillo y eficiente para casos simples.
# ---------------------------------------------------------------
