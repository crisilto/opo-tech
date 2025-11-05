'''
### ARITHMETICS MODULE ###
──────────────────────────

Este archivo es un **módulo propio** de Python.

Un módulo es simplemente un archivo `.py` que contiene código reutilizable: 
funciones, clases, variables, etc.

Los módulos se pueden importar en otros archivos para organizar mejor 
nuestro código y evitar repetir lógica.

📁 Estructura de ejemplo:

mypackage/
│
├── __init__.py
└── arithmetics.py

🔹 El archivo `__init__.py` (aunque puede estar vacío) 
sirve para que Python entienda que esta carpeta es un **paquete**.
🔹 Este archivo (`arithmetics.py`) contiene las funciones del paquete.
'''

# ────────────────────────────────────────────────
# FUNCIONES DEL MÓDULO
# ────────────────────────────────────────────────


def sum_two_values(a, b):
    '''
    Suma dos valores y devuelve el resultado.
    '''
    return a + b


def subtract_two_values(a, b):
    '''
    Resta el segundo valor al primero.
    '''
    return a - b


def multiply_two_values(a, b):
    '''
    Multiplica dos valores y devuelve el resultado.
    '''
    return a * b


def divide_two_values(a, b):
    '''
    Divide el primer valor entre el segundo.
    ⚠️ Incluye manejo de error para evitar división entre cero.
    '''
    if b == 0:
        return "Error: no se puede dividir entre 0"
    return a / b


# Si ejecutamos directamente este archivo (no importado):
if __name__ == "__main__":
    print("🔹 Test interno del módulo arithmetics:")
    print("Suma:", sum_two_values(3, 2))
    print("Resta:", subtract_two_values(3, 2))
    print("Multiplicación:", multiply_two_values(3, 2))
    print("División:", divide_two_values(3, 2))
