
def count_word(text, word):
    """
    Cuenta cuántas veces aparece una palabra específica en un texto.

    Parámetros:
    - text (str): el texto donde buscar
    - word (str): la palabra a contar

    Retorna:
    - int: número de veces que aparece la palabra
    """
    # Convertimos todo a minúsculas para hacer la búsqueda insensible a mayúsculas
    text_lower = text.lower()
    word_lower = word.lower()

    # Separamos el texto en palabras usando espacios como separador
    words_list = text_lower.split()

    # Contamos cuántas veces aparece la palabra
    return words_list.count(word_lower)
