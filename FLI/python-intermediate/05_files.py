### 🗂️ FILE HANDLING (Manejo de Ficheros en Python) ###

# Python permite crear, leer, escribir y eliminar archivos.
# Los tipos más comunes son:
# - .txt  → texto plano
# - .json → datos estructurados tipo diccionario
# - .csv  → datos tabulares
# - .xml  → formato jerárquico tipo HTML
# - También existen .xlsx (Excel), .pdf, etc.

import os
import csv
import json

# ------------------------------------------------------
# 📝 1. FICHEROS DE TEXTO (.txt)
# ------------------------------------------------------

# Abrir un archivo:
# open(nombre, modo)
# Modos comunes:
#  "r" → leer (read)
#  "w" → escribir (write, sobrescribe si existe)
#  "a" → añadir al final (append)
#  "w+" → leer y escribir, creando o sobrescribiendo

txt_file = open("my_file.txt", "r+")
print(txt_file.read())

# Escribir contenido
txt_file.write(
    "Mi nombre es Cristina\nMi apellido es Silvestre\n27 años\nY mi lenguaje preferido es Python"
)

# Posiciona el cursor al inicio del fichero para volver a leer desde el principio
txt_file.seek(0)

# Lee todo el contenido
print(txt_file.read())

# Lee solo los primeros 10 caracteres
txt_file.seek(0)
print(txt_file.read(10))

# Lee la siguiente línea desde la posición actual
print(txt_file.readline())

# Lee la siguiente línea
print(txt_file.readline())

# Lee todas las líneas restantes
for line in txt_file.readlines():
    print(line)

# Escribir una nueva línea
txt_file.write("\nAunque también me gusta Java")

# Volvemos al inicio y leemos todo el archivo
txt_file.seek(0)
print(txt_file.read())

# Siempre cerrar los archivos después de usarlos
txt_file.close()

# ------------------------------------------------------
# 💡 Forma recomendada: usar 'with open'
# Esto cierra el archivo automáticamente al salir del bloque.
# ------------------------------------------------------

with open("my_file.txt", "a") as my_other_file:
    my_other_file.write("\nY Java")

# Para eliminar archivos, se usa:
# os.remove("my_file.txt")  # ⚠️ Cuidado: esto borra el archivo permanentemente

# ------------------------------------------------------
# 🔸 2. FICHEROS JSON (.json)
# ------------------------------------------------------

# Los JSON almacenan datos estructurados (clave: valor), muy usados para APIs.

json_data = {
    "name": "Cristina",
    "surname": "Silvestre",
    "age": 27,
    "languages": ["Python", "PHP", "Java"],
    "website": "https://crisilto.dev"
}

# Crear y escribir en el archivo JSON
with open("my_file.json", "w") as json_file:
    json.dump(json_data, json_file, indent=2)  # indent=2 → formato legible

# Leer el archivo JSON
with open("my_file.json") as json_file:
    data = json.load(json_file)

print(data)
print(type(data))       # dict
print(data["name"])     # Acceso por clave

# ------------------------------------------------------
# 🔹 3. FICHEROS CSV (.csv)
# ------------------------------------------------------

# Los CSV (Comma-Separated Values) almacenan datos tabulares, separados por comas.
# Se usan mucho para hojas de cálculo o bases de datos exportadas.

with open("my_file.csv", "w", newline="") as csv_file:
    csv_writer = csv.writer(csv_file)
    csv_writer.writerow(
        ["name", "surname", "age", "language", "website"])  # Cabecera
    csv_writer.writerow(["Brais", "Moure", 35, "Python", "https://moure.dev"])
    csv_writer.writerow(["Roswell", "", 2, "COBOL", ""])

# Leer un archivo CSV
with open("my_file.csv") as csv_file:
    for line in csv_file.readlines():
        print(line)

# ------------------------------------------------------
# ⚙️ 4. FICHEROS XML (.xml)
# ------------------------------------------------------

# Los XML se usan para representar datos con estructura jerárquica (similar a HTML).
# Python puede trabajar con ellos usando librerías como 'xml.etree.ElementTree' o 'minidom'.

# import xml.etree.ElementTree as ET
# tree = ET.parse("my_file.xml")
# root = tree.getroot()
# for element in root:
#     print(element.tag, element.text)

# ------------------------------------------------------
# 🚀 RESUMEN DE FUNCIONES ÚTILES:
# ------------------------------------------------------
# open()         → abrir un archivo
# .read()        → leer todo
# .readline()    → leer una línea
# .readlines()   → leer todas las líneas como lista
# .write()       → escribir texto
# .seek(0)       → mover el cursor al inicio
# .close()       → cerrar archivo
# json.dump()    → escribir JSON
# json.load()    → leer JSON
# csv.writer()   → escribir CSV
# os.remove()    → borrar archivo
