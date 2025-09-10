# Guía de Métodos y Técnicas en JavaScript

## 1. Métodos de Array

### **1.1 `map`**
Convierte cada elemento de un array en otro, devolviendo un nuevo array de la misma longitud.

- **Uso:** Transformar valores, como convertir cadenas a mayúsculas o elevar números al cuadrado.
- **Ejemplo:**
  ```javascript
  const arr = [1, 2, 3];
  const squared = arr.map(n => n ** 2); // [1, 4, 9]
  ```

---

### **1.2 `filter`**
Filtra los elementos de un array que cumplen una condición, devolviendo un nuevo array.

- **Uso:** Seleccionar números pares o elementos comunes entre dos arrays.
- **Ejemplo:**
  ```javascript
  const arr = [1, 2, 3, 4];
  const evens = arr.filter(n => n % 2 === 0); // [2, 4]
  ```

---

### **1.3 `reduce`**
Reduce un array a un único valor aplicando una función acumulativa. Ideal para sumar, multiplicar o combinar elementos.

- **Uso:** Sumar números pares o calcular el factorial.
- **Ejemplo:**
  ```javascript
  const arr = [1, 2, 3, 4];
  const sum = arr.reduce((acc, n) => acc + n, 0); // 10
  ```

---

### **1.4 `reverse`**
Invierte el orden de los elementos en un array.

- **Uso:** Invertir el orden de las palabras en una cadena.
- **Ejemplo:**
  ```javascript
  const arr = [1, 2, 3];
  const reversed = arr.reverse(); // [3, 2, 1]
  ```

---

### **1.5 `join`**
Convierte un array en una cadena, uniendo los elementos con un separador específico.

- **Uso:** Combinar palabras de un array en una cadena.
- **Ejemplo:**
  ```javascript
  const arr = ["a", "b", "c"];
  const joined = arr.join("-"); // "a-b-c"
  ```

---

## 2. Operadores y Técnicas

### **2.1 Operador de Exponenciación (`**`)**
Calcula potencias de forma clara y directa.

- **Uso:** Elevar números al cuadrado.
- **Ejemplo:**
  ```javascript
  const squared = 3 ** 2; // 9
  ```

---

### **2.2 Operador Spread (`...`)**
Descompone un array en elementos individuales. Muy útil con funciones como `Math.max` o para clonar arrays.

- **Uso:** Encontrar el máximo de un array.
- **Ejemplo:**
  ```javascript
  const arr = [1, 2, 3];
  const max = Math.max(...arr); // 3
  ```

---

## 3. Manejo de Arrays con `Array`

### **3.1 `Array.from`**
Crea un array basado en un iterable o con una longitud fija, asignando valores personalizados.

- **Uso:** Generar arrays para calcular el factorial.
- **Ejemplo:**
  ```javascript
  const arr = Array.from({ length: 5 }, (_, i) => i + 1); // [1, 2, 3, 4, 5]
  ```

---

### **3.2 `Array.keys`**
Devuelve un iterador con los índices de un array. Es útil para generar rangos.

- **Uso:** Crear divisores para verificar si un número es primo.
- **Ejemplo:**
  ```javascript
  const arr = [...Array(5).keys()]; // [0, 1, 2, 3, 4]
  ```

---

## 4. Desestructuración y Métodos Inline

### **4.1 Desestructuración de Arrays y Strings**
Convierte arrays o cadenas en elementos individuales.

- **Uso:** Iterar fácilmente sobre una cadena.
- **Ejemplo:**
  ```javascript
  const str = "hello";
  const chars = [...str]; // ["h", "e", "l", "l", "o"]
  ```

---

## 5. Programación Funcional

### **5.1 Funciones Anidadas**
Definir funciones dentro de otras para encapsular lógica.

- **Uso:** Crear funciones como `isEven` dentro de otra función.
- **Ejemplo:**
  ```javascript
  const evenSum = arr => {
      const isEven = n => n % 2 === 0;
      return arr.filter(isEven).reduce((acc, n) => acc + n, 0);
  };
  ```

---

### **5.2 Composición de Funciones**
Encadenar métodos como `filter`, `map`, y `reduce` para resolver problemas de forma concisa.

---

## Resumen
Estas técnicas hacen que el código sea:
- **Más limpio:** Menos bucles y variables intermedias.
- **Más funcional:** Evita modificaciones directas de datos.
- **Más legible:** Usa métodos que reflejan claramente el propósito del código.