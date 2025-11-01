### Higher Order Functions ###
# 💡 Una *Higher Order Function* (función de orden superior) es aquella que:
# 1️⃣ Recibe una función como argumento, o
# 2️⃣ Devuelve una función como resultado.

# reduce() es una función de orden superior nativa de Python
from functools import reduce


# Funciones normales que usaremos como argumentos
def sum_one(value):
    return value + 1


def sum_five(value):
    return value + 5


# 🔹 Esta función recibe:
# - dos números
# - y una función (f_sum) que aplicará al resultado de la suma
def sum_two_values_and_add_value(first_value, second_value, f_sum):
    return f_sum(first_value + second_value)


# ✅ Pasamos diferentes funciones como argumento
print(sum_two_values_and_add_value(5, 2, sum_one))   # (5+2)=7 → sum_one(7)=8
print(sum_two_values_and_add_value(5, 2, sum_five))  # (5+2)=7 → sum_five(7)=12


### Closures ###
# 💡 Un *closure* es una función interna que "recuerda" las variables
# del ámbito donde fue creada, incluso si ese ámbito ya no existe.


def sum_ten(original_value):
    # 🔹 'add' accede a 'original_value' aunque esté fuera de su propio scope
    def add(value):
        return value + 10 + original_value
    return add  # devolvemos la función 'add' sin ejecutarla


# ✅ Guardamos el closure en una variable
add_closure = sum_ten(1)
print(add_closure(5))   # → 5 + 10 + 1 = 16
print(sum_ten(5)(1))    # → 1 + 10 + 5 = 16 (lo mismo, pero en una sola línea)


### Built-in Higher Order Functions ###
# 💡 Python ya trae funciones de orden superior integradas como:
#   - map()
#   - filter()
#   - reduce()
# Cada una aplica una función a una colección (lista, tupla, etc.)

numbers = [2, 5, 10, 21, 3, 30]


# -------------------
# MAP
# -------------------
# 🔹 map(función, iterable) aplica una función a cada elemento de la lista.


def multiply_two(number):
    return number * 2


print(list(map(multiply_two, numbers)))                # usando función normal
print(list(map(lambda number: number * 2, numbers)))   # usando lambda


# -------------------
# FILTER
# -------------------
# 🔹 filter(función, iterable) devuelve solo los elementos
#   para los que la función devuelve True.


def filter_greater_than_ten(number):
    if number > 10:
        return True
    return False


print(list(filter(filter_greater_than_ten, numbers)))         # función normal
print(list(filter(lambda number: number > 10, numbers)))      # con lambda


# -------------------
# REDUCE
# -------------------
# 🔹 reduce(función, iterable) acumula los valores de la lista,
#   aplicando la función de dos en dos hasta reducirlos a un solo valor.


def sum_two_values(first_value, second_value):
    return first_value + second_value


print(reduce(sum_two_values, numbers))  # → suma todos los números de la lista
