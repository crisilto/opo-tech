def sum_values(*args):
    total = 0
    for value in args:
        # Validamos que el argumento sea un número
        if isinstance(value, (int, float)):
            total += value
        else:
            raise TypeError(f"El valor {value} no es un número válido")
    return total
