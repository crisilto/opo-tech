my_string = "hola"
print(my_string)

my_int = 13
print(my_int)

my_bool = False
print(my_bool)

my_float = 13.11
print(my_float)

print(my_string, my_int, my_bool, my_float)

# convertir int a str
my_converted_str = str(my_int)
print(my_converted_str)
print(type(my_converted_str))

# str a int
my_number_str = "13"
my_number_int = int(my_number_str)
print(my_number_int)
print(type(my_number_int))

# longitud
print(len(my_string))  # 4 longitud tiene hola

# variables en una sola línea
name, surname, alias, age = "Cristina", "Silvestre", "crisketo", 27
print("me llamo:", name, surname, ". tengo", age, "años. Mi alias es:", alias)

# inputs
name = input("cual es tu nombre? ")
age = input("cual es tu edad? ")
print(name, age)

# cambiamos su tipo
name = 27
age = "cristina"
print(name, age)

# python no tiene un tipado fuerte

# forzamos el tipo
address: str = "mi dirección"
address = 27
# int, solo se especifica el tipado para ayudarnos de alguna forma a entender que queremos que sea un string
print(type(address))
