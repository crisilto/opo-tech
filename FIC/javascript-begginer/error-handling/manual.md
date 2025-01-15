# **Manual Práctico de Manejo de Errores en JavaScript**

## **¿Qué es el manejo de errores?**
El manejo de errores en JavaScript consiste en anticiparse y gestionar situaciones inesperadas durante la ejecución del código, como:
- Datos inválidos.
- Fallos en conexiones.
- Errores en lógica del programa.

Con un buen manejo de errores, podemos evitar que el programa se detenga abruptamente y ofrecer mensajes claros o soluciones alternativas al usuario.

---

## **Conceptos clave**

### 1. **try-catch**
Permite "probar" un bloque de código y capturar cualquier error que ocurra:

```javascript
try {
    // Código que puede fallar
    let result = riskyOperation();
    console.log(result);
} catch (error) {
    // Bloque ejecutado si ocurre un error
    console.log("Error capturado:", error.message);
}
```

### 2. **finally**
Un bloque opcional que siempre se ejecuta, independientemente de si hubo error o no.

```javascript
try {
    let data = fetchData();
    console.log("Datos obtenidos:", data);
} catch (error) {
    console.log("Error al obtener datos:", error.message);
} finally {
    console.log("Limpieza de recursos.");
}
```

### 3. **throw**
Lanza un error de forma manual.

```javascript
function validateAge(age) {
    if (age < 18) {
        throw new Error("La edad debe ser mayor o igual a 18.");
    }
    return true;
}

try {
    validateAge(16);
} catch (error) {
    console.log("Error:", error.message);
}
```

### 4. **Excepciones personalizadas**
Permiten crear errores específicos para tu aplicación.

```javascript
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}

try {
    throw new CustomError("Esto es un error personalizado.");
} catch (error) {
    console.log(`${error.name}: ${error.message}`);
}
```

---

## **Casos prácticos**

### 1. **Validaciones de formularios**

```javascript
function validateForm(data) {
    if (!data.username) {
        throw new Error("El campo 'username' es obligatorio.");
    }
    if (!data.email.includes("@")) {
        throw new Error("El email no es válido.");
    }
    return "Formulario válido.";
}

try {
    const form = { username: "", email: "invalidemail" };
    console.log(validateForm(form));
} catch (error) {
    console.log("Error en el formulario:", error.message);
}
```

### 2. **Consumo de APIs con manejo de errores**

```javascript
async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Error al obtener datos:", error.message);
    }
}

fetchData("https://jsonplaceholder.typicode.com/posts/1");
```

### 3. **Reintentos en operaciones fallidas**

```javascript
function unstableOperation() {
    if (Math.random() > 0.7) {
        return "Operación exitosa.";
    }
    throw new Error("Operación fallida.");
}

function retryOperation(maxRetries) {
    let attempts = 0;
    while (attempts < maxRetries) {
        try {
            return unstableOperation();
        } catch (error) {
            attempts++;
            console.log(`Intento ${attempts} fallido.`);
        }
    }
    throw new Error("Límite de intentos alcanzado.");
}

try {
    console.log(retryOperation(5));
} catch (error) {
    console.log("Error final:", error.message);
}
```

### 4. **Verificar propiedades de objetos**

```javascript
function checkProperty(obj, prop) {
    if (!obj.hasOwnProperty(prop)) {
        throw new Error(`La propiedad '${prop}' no existe en el objeto.`);
    }
    return obj[prop];
}

try {
    const user = { name: "Alice" };
    console.log(checkProperty(user, "name"));
    console.log(checkProperty(user, "email"));
} catch (error) {
    console.log("Error:", error.message);
}
```

### 5. **Capturar múltiples tipos de errores**

```javascript
try {
    riskyOperation(); // Podría lanzar ReferenceError o TypeError
} catch (error) {
    if (error instanceof ReferenceError) {
        console.log("Error de referencia:", error.message);
    } else if (error instanceof TypeError) {
        console.log("Error de tipo:", error.message);
    } else {
        console.log("Error inesperado:", error.message);
    }
}
```

---

## **Buenas prácticas**

1. **No uses errores para control de flujo.** Los errores deben usarse solo para casos excepcionales.

2. **Proporciona mensajes claros.** Ayuda a otros desarrolladores (y a ti misma) a entender el problema.

3. **Usa excepciones personalizadas.** Son útiles para identificar y manejar errores específicos de tu aplicación.

4. **Siempre limpia recursos.** Usa `finally` para liberar memoria, cerrar conexiones o realizar tareas necesarias.

5. **Prueba y simula errores.** Asegúrate de que tu aplicación se comporta correctamente bajo condiciones inesperadas.

---