### Lambdas ###

def sum_two_values(
    first_value, second_value): return first_value + second_value


print(sum_two_values(2, 4))


def multiply_values(
    first_value, second_value): return first_value * second_value - 3


print(multiply_values(2, 4))


def sum_three_values(value):
    return lambda first_value, second_value: first_value + second_value + value


print(sum_three_values(5)(2, 4))


# 💡 Las lambdas son funciones anónimas (sin nombre) que se pueden definir en una sola línea.
#   Se usan para operaciones simples, y pueden devolverse desde otras funciones.

# En este caso es una función normal, no una lambda:
#   - Recibe dos valores y devuelve su suma.
#   - Se ha escrito en una sola línea con return al final.


def sum_two_values(first_value, second_value):
    return first_value + second_value


print(sum_two_values(2, 4))  # → 6


# Otra función escrita en una sola línea.
#   - Multiplica los dos valores y luego resta 3.
#   - Aunque no sea lambda, sigue el mismo formato compacto.
def multiply_values(first_value, second_value):
    return first_value * second_value - 3


print(multiply_values(2, 4))  # → 5


# Aquí ya entra en juego el concepto de LAMBDA.
#   - Esta función devuelve OTRA función (una lambda).
#   - La lambda tiene acceso al parámetro 'value' gracias a un "closure".
#   - Esa lambda suma 'first_value', 'second_value' y el 'value' que quedó guardado.
def sum_three_values(value):
    return lambda first_value, second_value: first_value + second_value + value


# En esta llamada:
#   1️⃣ sum_three_values(5) devuelve una función lambda que espera dos parámetros.
#   2️⃣ Esa lambda se llama después con (2, 4).
#   3️⃣ Dentro de la lambda: 2 + 4 + 5 = 11.
print(sum_three_values(5)(2, 4))  # → 11
