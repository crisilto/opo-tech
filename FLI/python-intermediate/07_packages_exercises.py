from math import pi as PI
import numpy as np
import requests
from mypackage import sum_two_values
import pandas as pd

# 1. Importa el módulo math y muestra el valor de pi.
print(PI)

# 2. Crea un array de números usando numpy y multiplícalo por 3.
numpy_numbers = np.array([2, 4, 8])
print(numpy_numbers*3)

# 3. Muestra la versión instalada de numpy.
print(np.version.version)

# 4. Realiza una petición HTTP con requests a una API pública y muestra el código de estado.
response = requests.get("https://hp-api.onrender.com/api/characters")
print("\nRespuesta HTTP:", response)
print("Código de estado:", response.status_code)

if response.status_code == 200:
    data = response.json()
    names = [p["name"] for p in data[:5]]
    print(f"primeros 5 personajes: {names}")
else:
    print("error")

# 5. Importa una función llamada sum_two_values desde un paquete personalizado mypackage.arithmetics
# y utilízala.
print(sum_two_values(10, 5))

# 6. Usa pandas para crear un DataFrame con nombres en español.
personas = {
    "nombre": ["Cristina", "Fay", "Emily"],
    "edad": [27, 26, 40],
    "pais": ["España", "Alemania", "EEUU"]
}
df = pd.DataFrame(personas)
print(df)

# 7. Ejecuta el comando para instalar el paquete requests desde la terminal.
# pip install requests

# 8. Usa requests para obtener datos de una API y extrae solo los nombres de los primeros Pokémon.
response = requests.get("https://pokeapi.co/api/v2/pokemon")
data = response.json()
print("Pokémon recibidos:", [p["name"] for p in data["results"][:5]])

# 9. Muestra todos los paquetes instalados con pip desde la terminal.
# pip list

# 10. Escribe una línea de código que muestre la ayuda sobre el paquete numpy desde Python.
# pip show numpy
