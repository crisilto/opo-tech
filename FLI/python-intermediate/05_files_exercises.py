# 1. Crear y escribir
file = open("example.txt", "w")
file.write("Hola desde Python")
file.close()

# 2. Leer todo
file = open("example.txt", "r")
print(file.read())
file.close()

# 3. Añadir texto
file = open("example.txt", "a")
file.write("\nLínea añadida")
file.close()

# 4. Lee solo los primeros 10 caracteres del archivo.
file = open("example.txt", "r")
print(file.read(10))
file.close()

# 5. Usa seek para volver al inicio del archivo y leer desde ahí.
file = open("example.txt", "r")
file.seek(0)
print(file.read())
file.close()

# 6. Lee e imprime el contenido línea por línea usando readline.
file = open("example.txt", "r")
print(file.readline())
print(file.readline())
file.close()

# 7. Lee todas las líneas del archivo en una lista y recórrelas con un bucle.
file = open("example.txt", "r")
lines = file.readlines()
for line in lines:
    print(line.strip())
file.close()

# 8. Crea un archivo nuevo que sobrescriba si ya existe, y escribe varias líneas.
file = open("new_file.txt", "w")
file.write("Primera línea\nSegunda línea\nTercera línea")
file.close()

# 9. Usa una función para abrir un archivo, escribir texto y cerrarlo automáticamente con with.
with open("with_file.txt", "w") as file:
    file.write("Este archivo se maneja con with")

# 10. Lee un archivo línea por línea y muestra solo las que contienen la palabra "Python".
with open("example.txt", "r") as file:
    for line in file:
        if "Python" in line:
            print(line.strip())
