from functools import reduce

# 💡 Las funciones de orden superior (Higher Order Functions)
# son funciones que:
# 1️⃣ Reciben otras funciones como parámetro
# 2️⃣ O devuelven otras funciones
# Esto permite escribir código más flexible y reutilizable.

# ------------------------------------------------------------
# 1. Crea una función que reciba una función y un número,
# y devuelva el resultado de aplicar la función al número.
# ------------------------------------------------------------


def multiply_two(value):
    return value * 2


def apply_function(f, number):
    # "f" es una función pasada como argumento → se ejecuta con el número
    return f(number)


result = apply_function(multiply_two, 3)
print(result)  # → 6


# ------------------------------------------------------------
# 2. Crea una función que reciba dos números y una función,
# y devuelva el resultado de sumar los dos números y aplicar la función.
# ------------------------------------------------------------

def apply_function_to_sum(a, b, f):
    return f(a + b)  # aplicamos la función al resultado de (a + b)


add_and_square = apply_function_to_sum(3, 2, lambda x: x ** 2)
print(add_and_square)  # → (3 + 2)² = 25


# ------------------------------------------------------------
# 3. Crea una función que devuelva otra función que sume un número fijo.
# ------------------------------------------------------------

# 💡 Esto es un ejemplo de "closure":
# una función interna recuerda el valor de la variable externa (fixed)
# aunque la función externa ya haya terminado.

def add_fixed_number(fixed):
    def adder(number):
        return number + fixed
    return adder  # devolvemos la función interna


add_five = add_fixed_number(5)
print(add_five(10))  # 15
add_three = add_fixed_number(3)
print(add_three(10))  # 13


# ------------------------------------------------------------
# 4. Usa map() con lambda para multiplicar cada número de una lista por 10.
# ------------------------------------------------------------

numbers = [2, 4, 5, 11, 16]

# 💡 map(función, iterable) aplica la función a cada elemento del iterable
# y devuelve un iterador con los resultados.
print(list(map(lambda n: n * 10, numbers)))  # → [20, 40, 50, 110, 160]


# ------------------------------------------------------------
# 5. Usa filter() con lambda para quedarte solo con los números pares.
# ------------------------------------------------------------

# 💡 filter(función, iterable) devuelve los elementos que cumplen la condición (True)
print(list(filter(lambda n: n % 2 == 0, numbers)))  # → [2, 4, 16]


# ------------------------------------------------------------
# 6. Usa reduce() con lambda para obtener la suma total de una lista.
# ------------------------------------------------------------

# 💡 reduce(función, iterable) combina los elementos de un iterable de dos en dos,
# acumulando el resultado. Ej: (((2+4)+5)+11)+16

def sum(num1, num2): return num1 + num2


print(reduce(sum, numbers))  # → 38


# ------------------------------------------------------------
# 7. Escribe una función que devuelva una función que reciba un nombre y devuelva "Hola, ".
# ------------------------------------------------------------

# 💡 Otro ejemplo de closure: la función interna usa un valor del exterior.
def greeting():
    def greet_to(name):
        return f"hola, {name}"
    return greet_to


print(greeting()("crisketo"))  # → hola, crisketo


# Versión más personalizada (closure con parámetro configurable)
def greeting(greet_word):
    def greet_to(name):
        return f"{greet_word}, {name}"
    return greet_to


say_hi = greeting("hola")
say_hey = greeting("hey")

print(say_hi("crisketo"))  # → hola, crisketo
print(say_hey("cris"))     # → hey, cris


# ------------------------------------------------------------
# 8. Crea una función que reciba una lista y una función,
# y cuente cuántos elementos cumplen con la función.
# ------------------------------------------------------------

# 💡 Usamos filter() para quedarnos solo con los que cumplen la condición
# y luego len() para contarlos.
def count_matching_elements(my_list, my_func):
    return len(list(filter(my_func, my_list)))


print(count_matching_elements(numbers, lambda n: n %
      2 != 0))  # → 1 (solo 5 y 11 son impares)


# ------------------------------------------------------------
# 9. Crea una función que reciba dos funciones y un número,
# y las aplique en orden.
# ------------------------------------------------------------

# 💡 Este patrón se llama "composición de funciones".
# La salida de la primera función entra como entrada en la segunda.
def apply_two_func_to_number(f1, f2, number):
    return f2(f1(number))


def double(x): return x * 2
def add_three(x): return x + 3


result = apply_two_func_to_number(double, add_three, 5)
print(result)  # → (5*2)+3 = 13


# ------------------------------------------------------------
# 10. Crea una función que reciba una lista y una función,
# y aplique esa función a cada elemento usando un bucle (sin map).
# ------------------------------------------------------------

# 💡 Esto hace lo mismo que map(), pero implementado manualmente con un bucle.
def apply_list(my_list, my_func):
    results = []
    for el in my_list:
        results.append(my_func(el))
    return results


result = apply_list(numbers, double)
print(result)  # → [4, 8, 10, 22, 32]
