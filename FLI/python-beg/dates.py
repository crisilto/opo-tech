from datetime import date


def today():
    """
    Retorna la fecha actual
    """
    return date.today()


def date_difference(date1, date2):
    """
    Calcula la diferencia en días entre dos fechas

    Parámetros:
    - date1, date2: objetos datetime.date

    Retorna:
    - int: número de días entre date1 y date2
    """
    delta = date1 - date2
    return abs(delta.days)
