# Métodos de `console` en JavaScript

La consola es una herramienta clave para depurar, analizar y comprender el comportamiento del código en JavaScript. A continuación, se explican los métodos más comunes de `console` y su uso adecuado, junto con ideas para reforzar la teoría con ejercicios.

---

## 1. `console.log()`
### Uso:
Este método se utiliza para mostrar información general en la consola. Es ideal para comprobar valores, estructuras de datos y flujos de ejecución.

### Ejemplo:
```javascript
console.log("Hello, JavaScript!");
console.log("User:", { name: "Lilith", age: 4 });
```

---

## 2. `console.error()`
### Uso:
Muestra mensajes de error en rojo, destacando problemas críticos en el código. Puede incluir objetos de error para más detalles.

### Ejemplo:
```javascript
console.error("Error: Invalid input");
console.error("Database connection failed", new Error("Connection timeout"));
```

---

## 3. `console.warn()`
### Uso:
Se usa para mostrar advertencias que no detienen la ejecución, pero indican posibles problemas o malas prácticas.

### Ejemplo:
```javascript
console.warn("Deprecated method. Please update your code.");
```

---

## 4. `console.info()`
### Uso:
Proporciona información adicional en la consola, útil para registrar datos contextuales o mensajes menos críticos.

### Ejemplo:
```javascript
console.info("User successfully logged in at 10:35 PM");
```

---

## 5. `console.table()`
### Uso:
Muestra datos tabulares en formato de tabla. Se puede usar con matrices o objetos para una representación más clara.

### Ejemplo:
```javascript
let users = [
    { name: "Lilith", age: 4 },
    { name: "Kenneth", age: 1 }
];
console.table(users);
```

---

## 6. `console.group()` y `console.groupEnd()`
### Uso:
Agrupa mensajes relacionados en la consola, creando jerarquías para organizar mejor la información.

### Ejemplo:
```javascript
console.group("User Details");
console.log("Name: Lilith");
console.log("Age: 4");
console.groupEnd();
```

---

## 7. `console.time()` y `console.timeEnd()`
### Uso:
Mide el tiempo de ejecución de bloques de código, útil para identificar cuellos de botella.

### Ejemplo:
```javascript
console.time("Loop Execution Time");
for (let i = 0; i < 10000; i++) { }
console.timeEnd("Loop Execution Time");
```

---

## 8. `console.assert()`
### Uso:
Evalúa una expresión y muestra un error si la condición es falsa. Ideal para validaciones rápidas en el desarrollo.

### Ejemplo:
```javascript
let age = 16;
console.assert(age >= 18, "User must be at least 18 years old");
```

---

## 9. `console.count()` y `console.countReset()`
### Uso:
Cuenta cuántas veces se llama a un identificador específico. Útil para analizar patrones de llamadas.

### Ejemplo:
```javascript
console.count("Button clicked");
console.countReset("Button clicked");
console.count("Button clicked");
```

---

## 10. `console.trace()`
### Uso:
Proporciona un seguimiento (stack trace) de las llamadas de funciones hasta el punto actual. Muy útil para depuración.

### Ejemplo:
```javascript
function funcA() {
    funcB();
}
function funcB() {
    console.trace("Trace example");
}
funcA();
```

---

## 11. `console.clear()`
### Uso:
Limpia la consola, útil para mantenerla organizada durante el desarrollo.

### Ejemplo:
```javascript
console.clear();
```

---

## Ejercicios para practicar

1. **Crea una función que utilice `console.error` para mostrar errores relacionados con entradas de usuario.**
2. **Diseña una función que utilice `console.warn` para advertir sobre el uso de métodos obsoletos.**
3. **Implementa una función que use `console.info` para registrar el tiempo de inicio de un proceso.**
4. **Usa `console.table` para mostrar una lista de productos con su nombre y precio.**
5. **Organiza los detalles de un usuario en un grupo con `console.group`.**
6. **Mide el tiempo que tarda un bucle con `console.time`.**
7. **Valida si un número es positivo utilizando `console.assert`.**
8. **Crea un contador con `console.count` que registre el número de veces que se pulsa un botón.**
9. **Muestra un seguimiento de llamadas con `console.trace`.**
10. **Limpia la consola al inicio de la ejecución con `console.clear`.**

---
### Nota:
Recuerda utilizar los métodos correctamente y entender su contexto para aplicarlos de forma efectiva en tus proyectos.
