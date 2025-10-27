import math


def area_circle(radius):
    if radius < 0:
        raise ValueError("El radio no puede ser negativo")
    return math.pi * radius**2


def area_square(side):
    if side < 0:
        raise ValueError("El lado no puede ser negativo")
    return side**2
