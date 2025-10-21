# 1. Declara y asigna valores a las siguientes variables:
# name: una cadena que contenga tu nombre.
# age: un número entero que represente tu edad.
# height: un número flotante que represente tu altura.
# Imprime cada variable en una línea separada.
name = "cristina"
age = 27
height = 1.68
print(name)
print(age)
print(height)

# 2. Convierte la variable edad de entero a cadena y
# concatenala con un texto que diga cuántos años tienes.
age_str = str(age)
# concatenación con + (sirve + para mismo tipo de datos, con age debería ser con coma)
print("tengo " + age_str + " años")

# 3. Declara una variable booleana is_student que indique si
# eres estudiante o no. Usa True o False según corresponda
# e imprímela.
is_student = True
print("soy estudiante?", is_student)

# 4. Usa la función len() para calcular cuántos caracteres
# tiene tu nombre completo, almacenado en una variable.
name_and_surname = "cristina silvestre"
print("mi nombre completo:", name_and_surname,
      "tiene", len(name_and_surname), "caracteres")

# 5. Declara tres variables en una sola línea que representen
# tu nombre, apellido y ciudad de origen. Luego, imprime
# estos valores.
nombre, apellido, ciudad = "cristina", "silvestre", "valencia"
print("me llamo", nombre, apellido, "y soy de", ciudad)

# 6. Usa la función input() para solicitar al usuario su
# color favorito y almacénalo en una variable color.
# Luego, imprime el valor ingresado.
# color = input("¿cual es tu color favorito? ")
# print("tu color favorito es el", color)

# 7. Declara una variable fruit e inicialízala con un valor.
# Luego, cambia el valor de la fruta a otro diferente y
# vuelve a imprimirla.
fruit = "banana"
print(fruit)
fruit = "apple"
print(fruit)

# 8. Convierte un número decimal, almacenado en la variable
# price, a un número entero y luego imprímelo.
price = 14.99
price_int = int(price)
print(price_int)
price_rounded = round(price)  # int() trunca | round() redondea
print(price_rounded)

# 9. Declara una variable llamada address_len y almacena en
# ella la cantidad de caracteres de una dirección usando
# la función len(). Imprime el resultado.
address: str = "mi dirección"
address_len = len(address)
print(address_len)

# 10. Usa un tipo de dato forzado para declarar una
# variable phone, asegurándote de que siempre será un
# número. Luego, cambia su valor a un número diferente y
# verifica el tipo de la variable con type().
phone = int(6222222)
phone = 0000000.4
print(type(phone))
