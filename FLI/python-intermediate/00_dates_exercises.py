from datetime import timedelta
from datetime import date
from datetime import time
from datetime import datetime

# 1. Crea una variable con la fecha y hora actual.
now = datetime.now()
print(now)
# 👉 Devuelve un objeto datetime completo con año, mes, día, hora, minuto, segundo y microsegundo.
# Ejemplo de salida: 2025-10-28 13:21:43.090242
# Este valor depende de la hora del sistema, y Python lo obtiene en tu zona horaria local.

# --------------------------------------------------

# 2. Imprime solo el año, mes y día de la fecha actual.
print(f"{now.year}/{now.month}/{now.day}")
# 👉 Los atributos .year, .month y .day son propiedades del objeto datetime (o date)
# que permiten acceder de forma directa a cada componente de la fecha.

# --------------------------------------------------

# 3. Crea una fecha específica: 25 de diciembre de 2025 y muéstrala.
christmas = datetime(2025, 12, 25)
print(christmas)
# 👉 También devuelve un objeto datetime.
# Si no se especifica hora, Python la asume como 00:00:00.

# --------------------------------------------------

# 4. Muestra solo la hora, los minutos y los segundos de un objeto time.
current_time = time(11, 11, 00)
print(current_time)
# 👉 El objeto time representa únicamente el tiempo (sin fecha).
# Contiene atributos como .hour, .minute y .second.
# Ejemplo de salida: 11:11:00

# --------------------------------------------------

# 5. Calcula cuántos días faltan para el 1 de enero del año siguiente.
next_year = datetime(2026, 1, 1)

# 🔹 Al restar dos objetos datetime, el resultado es un objeto timedelta.
difference = next_year - now  # devuelve un objeto timedelta
print(difference.days)  # solo los días completos de diferencia

"""
🧮 Cuándo usamos timedelta:
- timedelta es una clase que representa la *diferencia* entre dos fechas o tiempos.
- Puede almacenar días, segundos y microsegundos.

Ejemplo de salida:
>>> difference
datetime.timedelta(days=62, seconds=48243, microseconds=90242)
>>> print(difference)
62 days, 13:21:43.090242

📘 Propiedades y métodos más comunes:
| Propiedad / método           | Qué devuelve                                          | Ejemplo                    |
| ---------------------------- | ----------------------------------------------------- | -------------------------- |
| `difference`                 | diferencia total (días + horas + minutos + segundos)  | `62 days, 13:21:43.090242` |
| `difference.days`            | solo días completos                                   | `62`                       |
| `difference.seconds`         | segundos restantes tras los días completos            | `48103`                    |
| `difference.total_seconds()` | todo convertido a segundos (días + horas + min + seg) | `5401303.090242`           |
"""

# --------------------------------------------------

# 6. Crea una función que reciba una fecha y devuelva su timestamp.


def date_to_timestamp(date):
    # El método .timestamp() convierte un objeto datetime en un número flotante
    # que representa los segundos transcurridos desde el "Unix Epoch":
    # 🕐 1 de enero de 1970 a las 00:00:00 UTC
    return date.timestamp()


# Creamos un objeto datetime para el 1 de enero de 1971
my_date = datetime(1971, 1, 1)

# Mostramos el valor del timestamp correspondiente
print(date_to_timestamp(my_date))
# 👉 Resultado: 31536000.0
# Significa que entre 1970-01-01 y 1971-01-01 han pasado 31.536.000 segundos (exactamente un año sin año bisiesto).

# --------------------------------------------------

# 7. Suma 30 días a la fecha actual usando timedelta.
in_30_days = now + timedelta(days=30)
print(in_30_days)
# 👉 timedelta permite *sumar o restar* unidades de tiempo a una fecha u hora.
# Puedes usar argumentos como days=, hours=, minutes=, weeks=, etc.

# --------------------------------------------------

# 8. Crea una fecha y añade 1 mes (consejo: hazlo sumando 30 días como simplificación).
my_birthday = date(1997, 12, 13)
with_one_month = my_birthday + timedelta(days=30)
print(with_one_month)
# 👉 Esto devuelve 1998-01-12, porque añade 30 días a la fecha original.
# ⚠️ Importante: timedelta no entiende de “meses reales” (porque varían en duración).
# Si necesitas sumar meses reales, deberías usar dateutil.relativedelta (más precisa).


# 9. Compara dos fechas y muestra cuál es anterior.
fay_birthday = date(1998, 11, 13)

if my_birthday < fay_birthday:
    print("I'm older than Fay")
elif my_birthday > fay_birthday:
    print("I'm younger than Fay")
else:
    print("We were born the same day!")

# Diferencia de años (aproximada)
diff = fay_birthday - my_birthday
print(f"The difference is {diff.days} days (~{diff.days // 365} years)")

# 10. Crea una lista con varias fechas y ordénalas cronológicamente.
lilith_birthday = date(2021, 5, 18)
kenneth_birthday = date(2024, 3, 15)
josepa_birthday = date(1991, 3, 29)
elvi_birthday = date(1959, 6, 21)

dates = [my_birthday, fay_birthday, lilith_birthday,
         kenneth_birthday, josepa_birthday, elvi_birthday]

ordenated_dates = sorted(dates)

for d in ordenated_dates:
    print(d)
