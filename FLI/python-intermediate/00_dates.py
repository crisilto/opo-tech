### Dates ###

# Módulo datetime
# ----------------
# El módulo `datetime` forma parte de la biblioteca estándar de Python.
# Permite trabajar con fechas, horas y duraciones (diferencias entre fechas).
# Sus clases principales son:
# - datetime.date → Representa una fecha (año, mes, día)
# - datetime.time → Representa una hora (hora, minuto, segundo, microsegundo)
# - datetime.datetime → Representa una fecha completa con hora
# - datetime.timedelta → Representa una duración o diferencia entre fechas

from datetime import timedelta
from datetime import date
from datetime import time
from datetime import datetime

# Obtenemos la fecha y hora actual exacta del sistema
now = datetime.now()

# Función que imprime los distintos atributos de un objeto datetime


def print_date(date):
    print(date.year)        # año
    print(date.month)       # mes (1-12)
    print(date.day)         # día (1-31)
    print(date.hour)        # hora (0-23)
    print(date.minute)      # minutos (0-59)
    print(date.second)      # segundos (0-59)
    # número de segundos desde el 1 de enero de 1970 (Epoch)
    print(date.timestamp())


print_date(now)  # Llamamos a la función pasando la fecha actual

# Crear un objeto datetime específico
year_2023 = datetime(2023, 1, 1)
print_date(year_2023)

# ----------------
# Clase TIME
# ----------------
# Representa solo una hora, sin información de fecha.
# Puede incluir hora, minutos, segundos y microsegundos.
current_time = time(21, 6, 0)
print(current_time.hour)
print(current_time.minute)
print(current_time.second)

# ----------------
# Clase DATE
# ----------------
# Representa una fecha sin hora.
# Tiene atributos: year, month, day
current_date = date.today()  # Devuelve la fecha actual
print(current_date.year)
print(current_date.month)
print(current_date.day)

# También puedes crear fechas manualmente:
current_date = date(2022, 10, 6)
print(current_date.year)
print(current_date.month)
print(current_date.day)

# Puedes modificar componentes creando un nuevo objeto (no se pueden cambiar directamente)
current_date = date(
    current_date.year,
    current_date.month + 1,
    current_date.day
)
print(current_date.month)

# ----------------
# Operaciones con fechas
# ----------------
# Las operaciones entre objetos datetime o date devuelven objetos timedelta,
# que representan la diferencia entre dos fechas.
diff = year_2023 - now
# Muestra la diferencia entre el 1 de enero de 2023 y la fecha actual (días, segundos)
print(diff)

diff = year_2023.date() - current_date
print(diff)  # Diferencia solo considerando la parte de la fecha (sin hora)

# ----------------
# Clase TIMEDELTA
# ----------------
# timedelta representa un periodo de tiempo (días, segundos, microsegundos).
# Se usa para sumar o restar tiempo a fechas.
start_timedelta = timedelta(200, 100, 100, weeks=10)
end_timedelta = timedelta(300, 100, 100, weeks=13)

# Se pueden sumar o restar entre ellos:
print(end_timedelta - start_timedelta)
print(end_timedelta + start_timedelta)

# ----------------
# Ejemplos útiles en la práctica:
# ----------------
# 1️⃣ Calcular cuántos días faltan para una fecha
future_event = datetime(2025, 12, 31)
days_left = future_event - now
print(f"Days left until New Year: {days_left.days}")

# 2️⃣ Sumar o restar días a una fecha
in_10_days = date.today() + timedelta(days=10)
print(f"In 10 days it will be: {in_10_days}")

# 3️⃣ Comparar fechas
if now.date() < future_event.date():
    print("The event hasn't happened yet!")
else:
    print("The event already happened.")

"""

# Resumen:
# ---------------------------------------------------
# date       → representa solo una fecha
# time       → representa solo una hora
# datetime   → combina fecha y hora
# timedelta  → diferencia entre fechas/horas
# ---------------------------------------------------


# Diferencia entre date, time y datetime

| Clase      | Contiene              | Ejemplo             | Descripción               |
| ---------- | --------------------- | ------------------- | ------------------------- |
| `date`     | Año, mes, día         | 2025-10-28          | Solo representa una fecha |
| `time`     | Hora, minuto, segundo | 14:30:00            | Solo representa una hora  |
| `datetime` | Fecha + hora          | 2025-10-28 14:30:00 | Representa ambos          |


# Métodos útiles

| Método / Atributo                    | Descripción                                 |
| ------------------------------------ | ------------------------------------------- |
| `datetime.now()`                     | Fecha y hora actual                         |
| `date.today()`                       | Fecha actual                                |
| `datetime.strptime(string, formato)` | Convierte un string en datetime             |
| `datetime.strftime(formato)`         | Convierte un datetime en string con formato |
| `timedelta(days=x)`                  | Crea una diferencia de x días               |

"""
