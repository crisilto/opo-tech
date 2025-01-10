# Ruta de Aprendizaje: JavaScript en FIC y UVE

### **Objetivo General**
Dominar los fundamentos de JavaScript (FIC) y avanzar hacia conceptos intermedios y React (UVE) para estar preparada para un entorno de trabajo profesional.

---

## **FIC: Fundamentos de JavaScript**
**Duración:** 2 semanas.

### **1. Variables, Tipos de Datos y Operadores**
#### **Conceptos Clave:**
- Declaración de variables: `let`, `const` y (si es necesario, `var`).
- Tipos de datos primitivos (`string`, `number`, `boolean`, etc.) y no primitivos (objetos).
- Operadores matemáticos y lógicos.

#### **Ejercicios Recomendados:**
1. Crea un formulario donde los usuarios puedan introducir dos números. Al presionar un botón, muestra la suma, resta, multiplicación y división de esos números.
2. Diseña una calculadora de IMC que tome peso y altura como entrada, calcule el resultado y lo clasifique según las categorías estándar.
3. Escribe un script que valide el tipo de dato de una entrada del usuario y muestre un mensaje indicando si es un número, cadena, etc.

#### **Fuentes de Aprendizaje:**
- [MDN Web Docs: Variables](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Grammar_and_types#variables)
- [JavaScript.info: Tipos de Datos](https://javascript.info/types)

---

### **2. Estructuras de Datos: Arrays, Sets y Maps**
#### **Conceptos Clave:**
- Métodos importantes de arrays: `map`, `filter`, `reduce`.
- Uso de `Set` y `Map` para datos únicos y claves/valores.

#### **Ejercicios Recomendados:**
1. Crea un programa que tome una lista de nombres con duplicados y devuelva una lista única usando `Set`.
2. Diseña una lista de tareas donde cada tarea tenga una prioridad (usando un `Map` para asociar tarea-prioridad). Muestra las tareas ordenadas por prioridad.
3. Escribe un script que convierta un array de objetos en un `Map`, donde la clave sea un atributo del objeto (por ejemplo, `id`) y el valor sea el objeto completo.

#### **Fuentes de Aprendizaje:**
- [MDN Web Docs: Array Methods](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array#methods)
- [JavaScript.info: Map and Set](https://javascript.info/map-set)

---

### **3. Funciones y Módulos**
#### **Conceptos Clave:**
- Diferencia entre funciones regulares y flecha.
- Funciones de orden superior: `forEach`, `map`, `filter`, `reduce`.
- Modularización: `import/export`.

#### **Ejercicios Recomendados:**
1. Implementa una función que calcule el total de un carrito de compras usando `reduce`.
2. Diseña un script que lea una lista de nombres y devuelva aquellos que comiencen con una letra específica usando `filter`.
3. Divide un proyecto en módulos: un archivo para operaciones matemáticas y otro para validaciones de datos. Usa `import` y `export` para conectar los módulos.

#### **Fuentes de Aprendizaje:**
- [MDN Web Docs: Functions](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions)
- [JavaScript.info: Modularización](https://javascript.info/modules-intro)

---

### **4. Eventos y Manipulación del DOM**
#### **Conceptos Clave:**
- Selección de elementos: `querySelector`, `getElementById`.
- Manejo de eventos: `addEventListener`, propagación de eventos.
- Manipulación de nodos: crear, eliminar, modificar elementos dinámicamente.

#### **Ejercicios Recomendados:**
1. Crea una lista interactiva donde los usuarios puedan añadir, eliminar y marcar elementos como completados.
2. Diseña una galería de imágenes que cambie la imagen principal al hacer clic en una miniatura.
3. Implementa un contador de clics que incremente un número en pantalla cada vez que se haga clic en un botón.

#### **Fuentes de Aprendizaje:**
- [MDN Web Docs: DOM](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction)
- [JavaScript.info: Eventos](https://javascript.info/events)

---

### **5. JSON y Manejo de Datos**
#### **Conceptos Clave:**
- Conversión entre objetos y JSON: `JSON.stringify`, `JSON.parse`.
- Trabajo con datos estructurados.

#### **Ejercicios Recomendados:**
1. Crea un script que reciba un objeto en formato JSON y lo convierta en una tabla HTML.
2. Diseña un programa que guarde una lista de usuarios en el almacenamiento local (`localStorage`) en formato JSON y la recupere al cargar la página.
3. Escribe una función que tome un array de objetos, lo convierta en JSON y lo guarde en un archivo (simulado).

#### **Fuentes de Aprendizaje:**
- [MDN Web Docs: JSON](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/JSON)
- [JavaScript.info: JSON](https://javascript.info/json)

---

## **UVE: JavaScript Intermedio y React**
**Duración:** 5 semanas.

### **1. Promesas y `async/await`**
#### **Conceptos Clave:**
- Creación y manejo de promesas.
- Uso de `async/await` para operaciones asincrónicas.

#### **Ejercicios Recomendados:**
1. Diseña un script que consuma datos de una API pública (ej. [JSONPlaceholder](https://jsonplaceholder.typicode.com/)) y los muestre en una tabla.
2. Implementa un temporizador que simule una operación lenta y use promesas para indicar cuándo se ha completado.
3. Escribe una función que haga múltiples llamadas a una API y combine los resultados en un solo array.

#### **Fuentes de Aprendizaje:**
- [MDN Web Docs: Promises](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [JavaScript.info: Async/Await](https://javascript.info/async-await)

---

### **2. React desde Cero**
#### **Conceptos Clave:**
- Creación de componentes.
- Manejo de estado con `useState`.
- Props y comunicación entre componentes.

#### **Ejercicios Recomendados:**
1. Diseña una lista de tareas simple con React donde puedas añadir, eliminar y marcar elementos como completados.
2. Implementa una app que consuma datos de una API y los muestre en un componente de lista.
3. Crea una calculadora con React que maneje operaciones básicas.

#### **Fuentes de Aprendizaje:**
- [React Documentation](https://react.dev/learn)
- [FreeCodeCamp: React Basics](https://www.freecodecamp.org/learn/front-end-libraries/react/)

---

### **3. Rutas y Estado Global**
#### **Conceptos Clave:**
- Navegación con `react-router-dom`.
- Manejo de estado global con `useContext` y `useReducer`.

#### **Ejercicios Recomendados:**
1. Crea una app de notas con múltiples páginas (inicio, crear nota, ver nota).
2. Diseña un carrito de compras funcional usando `useContext` para manejar el estado.
3. Implementa una página de login que guarde el estado del usuario en contexto global.

#### **Fuentes de Aprendizaje:**
- [React Router Docs](https://reactrouter.com/)
- [MDN Web Docs: Context API](https://react.dev/reference/react/Context)

---
