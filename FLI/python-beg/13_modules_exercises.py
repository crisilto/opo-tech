import calculator
import converter
import students
import geometry
import mymath
import car
import file_utils
import statistics
import word_counter
import dates
from datetime import date

# 1. Crea un módulo llamado "calculator" que contenga funciones para sumar, restar, multiplicar
# y dividir dos números. Importa este módulo en otro archivo y usa sus funciones.
print(calculator.sum(10, 5))
print(calculator.rest(10, 5))
print(calculator.multiply(10, 5))
print(calculator.divide(10, 5))

# 2. Crea un módulo llamado "converter" que tenga funciones para convertir temperaturas entre Celsius
# y Fahrenheit. Escribe un programa que importe este módulo y realice conversiones.
celsius = 30
print(f"{celsius}°C son {converter.celsius_to_fahrenheit(celsius)}°F")
fahrenheit = 32
print(f"{fahrenheit}°F son {converter.fahrenheit_to_celsius(fahrenheit)}°C")

# 3. Crea un módulo que contenga una lista de nombres de estudiantes y una función que imprima todos
# los nombres. Importa este módulo en otro archivo y usa la función para mostrar la lista.
students.show_students(students.my_students_list)

# 4. Crea un módulo llamado "geometry" que tenga una función para calcular el área de un círculo y
# un cuadrado. Usa este módulo en otro archivo para calcular áreas.
circle = 5
square = 4
print(f"area circulo: {geometry.area_circle(circle)}")
print(f"area cuadrado: {geometry.area_square(square)}")

# 5. Escribe un módulo que contenga una función que acepte cualquier número de argumentos y devuelva
# su suma. Importa y usa la función en otro archivo.
print(mymath.sum_values(10, 5, 3, 2))  # 20
print(mymath.sum_values(1.5, 2.5, 3))  # 7.0
try:
    print(mymath.sum_values(1, 2, "hola"))
except TypeError as e:
    print(f"Error: {e}")

# 6. Crea un módulo que defina una clase llamada "Car" con propiedades como marca, modelo y año.
# Importa este módulo en otro archivo y crea una instancia de la clase "Car".
my_car = car.Car("ford fiesta", 2009)
print(my_car.describe())

# 7. Escribe un módulo que contenga funciones para leer y escribir en archivos de texto.
# Crea un programa que use estas funciones para escribir y leer datos.
file_name = "test_file.txt"
text_to_write = "Hola mundo!\nEsto es un archivo de prueba."
file_utils.write_file(file_name, text_to_write)
file_utils.read_file(file_name)

# 8. Crea un módulo llamado "statistics" que tenga funciones para calcular la media y la mediana
# de una lista de números. Usa este módulo para calcular estos valores en una lista dada.
numbers = [10, 5, 8, 12, 7]

print("Lista:", numbers)
print("Media:", statistics.mean(numbers))
print("Mediana:", statistics.median(numbers))

# 9. Crea un módulo que contenga una función para contar cuántas veces aparece una palabra en un texto.
# Escribe un programa que importe el módulo y lo use para contar palabras en una cadena.
texto = "Python es divertido. Aprender Python es útil. Python permite crear programas."
palabra_a_contar = "Python"

conteo = word_counter.count_word(texto, palabra_a_contar)
print(f"La palabra '{palabra_a_contar}' aparece {conteo} veces en el texto.")

# 10. Crea un módulo llamado "dates" que contenga funciones para obtener la fecha actual y calcular
# la diferencia entre dos fechas. Usa este módulo en un programa para mostrar la fecha actual y
# la diferencia entre dos fechas específicas.
# Obtener la fecha actual
fecha_actual = dates.today()
print(f"Fecha actual: {fecha_actual}")
# Definir dos fechas específicas
fecha1 = date(2025, 10, 27)
fecha2 = date(2025, 10, 10)
# Calcular la diferencia en días
diferencia = dates.date_difference(fecha1, fecha2)
print(f"Diferencia entre {fecha1} y {fecha2}: {diferencia} días")
