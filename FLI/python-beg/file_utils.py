def write_file(file_name, text):
    """
    Escribe el contenido 'text' en un archivo llamado 'file_name'.
    Si el archivo existe, lo sobrescribe.
    """
    try:
        with open(file_name, "w") as f:
            f.write(text)
        print(f"Contenido escrito correctamente en {file_name}")
    except Exception as e:
        print(f"Error al escribir en el archivo: {e}")


def read_file(file_name):
    """
    Lee y devuelve el contenido de un archivo de texto.
    """
    try:
        with open(file_name, "r") as f:
            content = f.read()
        print(f"📖 Contenido de {file_name}:")
        print(content)
        return content
    except FileNotFoundError:
        print(f"Error: el archivo {file_name} no existe")
    except Exception as e:
        print(f"Error al leer el archivo: {e}")
