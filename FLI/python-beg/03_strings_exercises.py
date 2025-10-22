# 1. Declara una variable text con la frase “Aprendiendo Python”
# y luego imprime la longitud de la cadena usando len().
text = "Aprendiendo Python"
print(len(text))  # → 18 caracteres


# 2. Concatena dos cadenas: “Hola” y “Python”, y muestra el resultado
# en una sola línea.
cad1 = "Hola"
cad2 = "Python"
print(cad1 + " " + cad2)  # concatenación manual
print(cad1, cad2)         # imprime con espacio automático entre valores


# 3. Crea una cadena que incluya un salto de línea, y luego imprímela
# para ver el resultado.
str_salto = "cadena con\nsalto de linea"
print(str_salto)


# 4. Usa f-strings para imprimir tu nombre, apellido y edad en una cadena.
nombre, apellido, edad = "cristina", "silvestre", 27

# ⚠️ Habías puesto un símbolo "$" antes de {edad}, lo eliminamos:
# solo se usa {edad}, sin $.
print(f"mi nombre es {nombre} {apellido} y tengo {edad} años")


# 5. Desempaqueta los caracteres de la palabra “Python” en variables
# separadas y luego imprímelos uno por uno.
lenguaje = "Python"
a, b, c, d, e, f = lenguaje
print(a)
print(b)
print(c)
print(d)
print(e)
print(f)


# 6. Extrae un “slice” de la palabra “Programacion” para obtener
# los caracteres desde la posición 3 hasta la 7 (sin incluir 7).
palabra = "Programacion"
print(palabra[3:8])  # grama
print(palabra[3:7])  # gram


# 7. Invierte la cadena “Python” usando slicing y muestra el resultado.
palabra_invertida = lenguaje[::-1]
print(palabra_invertida)  # nohtyP


# 8. Convierte la cadena “aprendiendo python” en mayúsculas.
cadena = "aprendiendo python"
print(cadena.upper())  # APRENDIENDO PYTHON


# 9. Cuenta cuántas veces aparece la letra “n” en la cadena
# “Programación en Python”.
cadena2 = "Programación en Python"
print(cadena2.count("n"))  # → 3


# 10. Verifica si la cadena “12345” es numérica.
cadena_num = "12345"
print(cadena_num.isnumeric())  # True
