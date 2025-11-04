import re

# 1. Busca si una cadena empieza por "Hola".

str1 = "hola python curso: Curso avanzado aaaa"
str2 = "python Hola cursillo: lección de RegEx , Lección de Regular Expressions"

# sin usar case sensitiva, devuelve None
hola_match = re.match("Hola", str1)
print(hola_match)

# usando case sensitiva, devuelve Match object
hola_match = re.match("Hola", str1, re.I)
print(hola_match)

# str2 no empieza por hola, devuelve None
hola_match = re.match("Hola", str2)
print(hola_match)


# 2. Busca la palabra "Python" en una cadena aunque esté en minúsculas.

# usando re.I ignoramos las may/min
# pero .match() solo devolvería el obj match si empieza por la palabra Python
python_match = re.match("Python", str1, re.I)
print(python_match)

# .search() devuelve el obj match esté donde esté la palabra Python
python_search = re.search("Python", str1, re.I)
print(python_search)

python_search = re.search("Python", str2, re.I)
print(python_search)

# 3. Encuentra todas las apariciones de la palabra "curso" en una cadena.

# devuelve una lista con "curso"
curso_findall = re.findall("curso", str1)
print(curso_findall)

# devuelve una lista con "curso", "Curso"
curso_findall = re.findall("curso", str1, re.I)
print(curso_findall)
print(len(curso_findall))  # que devuelva el nº de veces

# devuelve una lista vacía
curso_findall = re.findall("curso", str2, re.I)
print(curso_findall)

# 4. Reemplaza todas las apariciones de "lección" por "LECCIÓN".

# no cambia nada ya que la palabra lección no existe
leccion_cambio = re.sub("lección", "LECCIÓN", str1)
print(leccion_cambio)

# cambia la palabra que está en minúsculas, no Lección
leccion_cambio = re.sub("lección", "LECCIÓN", str2)
print(leccion_cambio)

# cambia ambas palabras lección y Lección
leccion_cambio = re.sub("[lL]ección", "LECCIÓN", str2)
print(leccion_cambio)

# 5. Divide un texto en partes separadas por comas.

# no hace nada porque no incluye comas
comas_str1 = re.split(",", str1)
print(comas_str1)

# devuelve una lista de 2 string, y lo corta donde está la coma
comas_str2 = re.split(",", str2)
print(comas_str2)

# 6. Busca la primera palabra que comience con "A" o "a".

str3 = "Aprendí algo asombroso con la programación en acción"
#   \b → indica "límite de palabra"
#   [Aa]\w* → una palabra que empieza por A o a y continúa con letras o números
#   findall → devolverá todas las palabras que cumplan eso
pattern = r"\b[Aa]\w*"
print(re.findall(pattern, str3))

# 7. Encuentra todas las palabras en una cadena que terminen en "ción".

#   \b → límite de palabra
#   \w*ción\b → cualquier palabra (\w*) que termine exactamente con "ción"
#   findall → devuelve todas las coincidencias
pattern = r"\b\w*ción\b"
print(re.findall(pattern, str3))  # ['programación', 'acción']
# - \w* → permite que haya letras antes de "ción"
# - ción\b → asegura que la palabra termina justo con "ción"
# - Ideal para encontrar sustantivos como "nación", "educación", etc.

# 8. Verifica si una cadena contiene solo números.

str4 = "12345"
str5 = "Mi número es 23 y tengo 27 años"

#   ^ y $ → indican el inicio y el final de la cadena
#   \d+ → una o más cifras numéricas (dígitos)
#   ^\d+$ → asegura que TODA la cadena son números
pattern = r"^\d+$"
print(bool(re.match(pattern, str4)))  # True → solo números
print(bool(re.match(pattern, str1)))  # False → contiene letras
# - Si usáramos solo \d+ encontraría números dentro del texto,
#   pero con ^ y $ validamos que la cadena entera sea numérica.


# 9. Reemplaza todos los números de una cadena por el texto "[número]".

#   \d+ → encuentra secuencias numéricas (uno o más dígitos seguidos)
#   re.sub → reemplaza las coincidencias por el texto dado
pattern = r"\d+"
replaced = re.sub(pattern, "[número]", str5)
print(replaced)  # "Mi número es [número] y tengo [número] años"
# - re.sub(patrón, reemplazo, texto)
# - Es muy útil para anonimizar o limpiar datos (por ejemplo, números de teléfono o edades)


# 10. Encuentra todas las palabras de 4 letras exactas en una cadena.
str6 = "Este texto tiene word hola más love test and code"

#   \b → límite de palabra
#   [a-zA-Z]{4} → exactamente 4 letras (mayúsculas o minúsculas)
#   \b → final de palabra
pattern = r"\b[a-zA-Z]{4}\b"
# ['Este', 'word', 'hola', 'love', 'test', 'code']
print(re.findall(pattern, str6))
# - [a-zA-Z] → permite solo letras (sin números)
# - {4} → exactamente 4 caracteres
# - \b → delimita palabras completas (sin fragmentos dentro de otras)
