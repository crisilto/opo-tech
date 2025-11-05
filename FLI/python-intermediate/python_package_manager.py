'''
### PYTHON PACKAGE MANAGER (PIP) ###
────────────────────────────────────
En Python, gran parte de la potencia del lenguaje viene de su **ecosistema de paquetes**:
colecciones de código reutilizable creadas por la comunidad o por nosotros mismos.

---

## 🔹 MÓDULOS, LIBRERÍAS Y PAQUETES

📦 Módulo → Es un solo archivo `.py` que contiene funciones, clases o variables.
Ejemplo: `math`, `random`, `os`.

📚 Librería → Es un conjunto de módulos que cumplen una función concreta.
Ejemplo: `NumPy` (operaciones matemáticas), `Pandas` (análisis de datos).

🧩 Paquete → Es una **carpeta** que contiene varios módulos y un archivo `__init__.py`
(para que Python la reconozca como paquete).
Ejemplo de estructura:

mypackage/
│
├── __init__.py
└── arithmetics.py

---

## 🔹 ¿QUÉ ES PIP?

🛠️ PIP = "Package Installer for Python"

Es la herramienta oficial de Python para:
- Instalar paquetes externos
- Desinstalarlos
- Ver información sobre ellos

Se usa desde la terminal o consola:

    pip install nombre_paquete
    pip uninstall nombre_paquete
    pip show nombre_paquete
    pip list

También puedes buscar paquetes en:
🔗 https://pypi.org (Python Package Index)

---

## 🔹 ENTORNOS VIRTUALES

En proyectos grandes, es buena práctica aislar las dependencias con un entorno virtual:

    python -m venv venv
    source venv/bin/activate   (Linux/Mac)
    venv\Scripts\activate      (Windows)

Para salir:
    deactivate

---

## 🔹 DEMOSTRACIÓN PRÁCTICA

Vamos a usar tres librerías externas muy comunes:
- `numpy` → operaciones matemáticas y arrays
- `pandas` → análisis de datos (tablas, CSVs…)
- `requests` → hacer peticiones HTTP (por ejemplo, APIs)

'''

# ────────────────────────────────────────────────
# IMPORTACIÓN DE MÓDULOS EXTERNOS
# ────────────────────────────────────────────────

from mypackage import arithmetics
import numpy       # pip install numpy
import pandas      # pip install pandas
import requests    # pip install requests

print("Versión de NumPy:", numpy.version.version)

# Crear un array de ejemplo
numpy_array = numpy.array([35, 24, 62, 52, 30, 30, 17])
print("Tipo de dato:", type(numpy_array))
print("Array original:", numpy_array)
print("Array multiplicado x2:", numpy_array * 2)

# ────────────────────────────────────────────────
# PETICIÓN A UNA API CON REQUESTS
# ────────────────────────────────────────────────

'''
Requests nos permite acceder a datos en internet.
Por ejemplo, la API de Pokémon devuelve un JSON con los primeros 151 Pokémon.
'''

response = requests.get("https://pokeapi.co/api/v2/pokemon?limit=5")
print("\nRespuesta HTTP:", response)
print("Código de estado:", response.status_code)

# Si la respuesta fue exitosa (200 OK)
if response.status_code == 200:
    data = response.json()
    print("Pokémon recibidos:", [p["name"] for p in data["results"]])

# ────────────────────────────────────────────────
# PAQUETES PROPIOS (HECHOS POR NOSOTROS)
# ────────────────────────────────────────────────

'''
Podemos crear nuestros propios módulos o paquetes.
Ejemplo de estructura de archivos en el mismo directorio:

📁 mypackage/
    ├── __init__.py
    └── arithmetics.py

📄 arithmetics.py contendría:
---------------------------------
def sum_two_values(a, b):
    return a + b
---------------------------------
'''

# Importamos el paquete propio y usamos una función

print("\nSuma usando paquete propio:", arithmetics.sum_two_values(5, 7))

'''
De esta forma, organizamos mejor nuestro código y lo hacemos reutilizable.
Si quisiéramos, incluso podríamos subirlo a PyPI y distribuirlo públicamente.
'''

# ────────────────────────────────────────────────
# COMANDOS DE PIP (REFERENCIA)
# ────────────────────────────────────────────────
'''
# 📋 Lista los paquetes instalados
pip list

# 🔍 Muestra información detallada de un paquete
pip show numpy

# ➕ Instala un paquete
pip install pandas

# ➖ Desinstala un paquete
pip uninstall pandas
'''

print("\n Demostración de PIP y paquetes completada correctamente.")
