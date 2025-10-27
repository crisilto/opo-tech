def mean(numbers):
    if len(numbers) == 0:
        return None
    return sum(numbers) / len(numbers)


def median(numbers):
    n = len(numbers)
    if n == 0:
        return None

    sorted_numbers = sorted(numbers)
    middle = n // 2

    # Si la cantidad de elementos es impar
    if n % 2 != 0:
        return sorted_numbers[middle]
    else:  # Si es par, la mediana es el promedio de los dos del medio
        return (sorted_numbers[middle - 1] + sorted_numbers[middle]) / 2
