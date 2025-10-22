my_string = "mi string"
my_other_string = 'mi otro string'

print(len(my_string))
print(len(my_other_string))

print(my_string+" "+my_other_string)

my_new_line_string = "este es un string\ncon un salto de linea"
print(my_new_line_string)

my_new_tab_string = "\teste es un string con un salto de linea"
print(my_new_tab_string)

my_new_scape_string = "\\teste es un string\\nescapado"
print(my_new_scape_string)

# formateo

name, surname, age = "cristina", "silvestre", 27

print(f"mi nombre es {name} {surname} y mi edad es {age}")
print("mi nombre es {} {} y mi edad es {}".format(name, surname, age))
print("mi nombre es %s %s y mi edad es %d" % (name, surname, age))
print("mi nombre es "+name+" "+surname+" "+"y mi edad es "+str(age))

# desempaquetado de caracteres
language = "python"
a, b, c, d, e, f = language
print(a)
print(e)

# división
language_slice = language[1:3]  # incluye primer indice, excluye segundo indice
print(language_slice)

language_slice = language[1:]  # desde el primer indice hasta el final
print(language_slice)


language_slice = language[-2]  # segunda desde el final
print(language_slice)

language_slice = language[0:6:2]  # ni idea
print(language_slice)

# reverse
reversed_language = language[::-1]
print(reversed_language)

# funciones
print(language.capitalize())
print(language.upper())
print(language.lower())
print(language.count("t"))
print(language.isnumeric())
print("1".isnumeric())
print(language.lower().isupper())
print(language.startswith("Py"))  # es case sensitive
print(language.startswith("py"))
