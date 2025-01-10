# Fundamentos Iniciales para la Construcción (FIC)

Este directorio contiene toda la documentación, ejercicios y proyectos relacionados con HTML, CSS y JavaScript básico. El objetivo es dominar los fundamentos necesarios para avanzar hacia conceptos más complejos en JavaScript intermedio y React.

---

## **HTML**

### **Roadmap**

1. **Estructura Semántica:**
   - Uso correcto de etiquetas como `header`, `main`, `footer`, `article` y `section`.
   - Creación de documentos accesibles con el atributo `alt` en imágenes y uso de `aria` donde sea necesario.

2. **Formularios:**
   - `input` con diferentes tipos (`text`, `email`, `password`, etc.).
   - Uso de `label`, `fieldset` y validaciones básicas con atributos como `required`.

3. **Tablas y Listas:**
   - Creación y diseño de tablas con `thead`, `tbody`, `tfoot`.
   - Uso de listas ordenadas (`ol`) y desordenadas (`ul`) correctamente anidadas.

### **Ejercicios Prácticos**

1. Diseña una página web sencilla con una estructura semántica clara (incluye cabecera, pie de página y varias secciones).
2. Crea un formulario de registro que incluya nombre, correo electrónico, contraseña y una selección de intereses.
3. Diseña una tabla para un horario semanal que incluya varias filas y columnas, y dale un estilo básico con CSS.

---

## **CSS**

### **Temas Clave a Interiorizar**

1. **Selectores y Especificidad:**
   - Selectores básicos, combinadores (`>`, `+`, `~`), pseudo-clases (`:hover`, `:nth-child`).
   - Comprensión de la especificidad y cómo manejar conflictos de estilos.

2. **Box Model:**
   - Conceptos de `margin`, `padding`, `border` y cómo interactúan.
   - Uso de `box-sizing` para un control preciso.

3. **Diseño Responsivo:**
   - Media queries para adaptar diseños a diferentes dispositivos.
   - Unidades relativas (`em`, `rem`, `%`) y absolutas (`px`).
   - Diseño "mobile-first" para garantizar compatibilidad con pantallas pequeñas.

4. **Flexbox:**
   - Propiedades principales como `justify-content`, `align-items`, `flex-wrap`.
   - Diseño de layouts flexibles con Flexbox.
   - Uso de Flexbox para centrar contenido horizontal y verticalmente.

5. **Grid:**
   - Creación de diseños avanzados con `grid-template-areas`, `grid-auto-flow`.
   - Definición de filas y columnas con `fr` y ajustes automáticos.
   - Combinación de Grid y Flexbox para diseños complejos.

6. **Transiciones y Animaciones:**
   - Uso de `transition` para cambios suaves de estado.
   - Creación de animaciones con `@keyframes`.
   - Aplicar animaciones interactivas como "hover" o "scroll".

7. **Temas Avanzados:**
   - Variables CSS (`--nombre-variable`) para gestionar colores, tamaños y temas.
   - Uso de pseudo-elementos (`::before`, `::after`).
   - Prácticas para optimizar el rendimiento CSS.

### **Ejercicios Prácticos**

1. Crea una tarjeta de perfil con Flexbox que incluya imagen, nombre, descripción y botones de acción.
2. Diseña un portafolio responsivo usando Grid con una cabecera fija, un contenido principal y un pie de página.
3. Implementa una animación donde un botón cambie de color y crezca ligeramente al pasar el ratón por encima.
4. Diseña un layout para una página de "blog" usando una combinación de Grid y Flexbox para lograr un diseño adaptativo.
5. Implementa un sistema de variables CSS para alternar entre un tema oscuro y claro en una página web.

---

## **JavaScript**

### **Contenido Visto en el Curso**

1. **Primeros Pasos:**
   - Variables (`let`, `const`) y tipos de datos.
2. **Operadores:**
   - Matemáticos, lógicos, de comparación.
3. **Strings:**
   - Manipulación con métodos como `slice`, `split`, `replace`.
4. **Condicionales:**
   - `if`, `else if`, `ternario`, `switch`.
5. **Estructuras:**
   - Arrays, Sets, Maps y sus métodos principales.
6. **Bucles:**
   - `for`, `while`, `do while`, `for of`.
7. **Funciones:**
   - Funciones anónimas, flecha.
8. **Objetos:**
   - Creación, manipulación y métodos asociados.
9. **Clases:**
   - Herencia, métodos estáticos, instancias.
10. **Manejo de Errores:**
    - `try-catch`, `throw new Error`.
11. **Módulos:**
    - `import` y `export`.

---

### **A reforzar**

#### **1. Variables, Tipos de Datos y Operadores**
- Declaración de variables: `let`, `const` y (si es necesario, `var`).
- Tipos de datos primitivos (`string`, `number`, `boolean`, etc.) y no primitivos (objetos).
- Operadores matemáticos y lógicos.
- Diferencias entre mutabilidad e inmutabilidad en tipos de datos (aplicado a objetos y arrays).

**Ejercicios:**
1. Crea un formulario donde los usuarios puedan introducir dos números. Al presionar un botón, muestra la suma, resta, multiplicación y división de esos números.
2. Diseña una calculadora de IMC que tome peso y altura como entrada, calcule el resultado y lo clasifique según las categorías estándar.
3. Crea un script que valide si una entrada es un número impar o par e indique su tipo (entero o decimal).

---

#### **2. Estructuras de Datos: Arrays, Sets y Maps**
- Métodos principales de arrays: `push`, `pop`, `shift`, `unshift`, `indexOf`, `includes`, `splice`.
- Creación y uso de `Set` para manejar datos únicos básicos.
- Creación y uso de `Map` para datos clave-valor simples.

**Ejercicios:**
1. Escribe un programa que tome un array de números y elimine aquellos menores a 5 utilizando un bucle (`for` o `while`).
2. Diseña un sistema de inventario básico usando un `Map` para relacionar productos con cantidades.
3. Implementa un contador simple que lleve el historial de valores únicos ingresados usando un `Set`.

---

### **Contenido Adicional para Finalizar JS Básico**

#### **1. Funciones de Orden Superior**
- Métodos importantes de arrays: `map`, `filter`, `reduce`.
- Cómo funcionan las funciones como argumentos en métodos de arrays.

**Ejercicios:**
1. Crea un array de precios y usa `map` para calcular un array de precios con IVA aplicado.
2. Usa `filter` para encontrar todos los números mayores a 10 en un array.
3. Diseña un programa que calcule la suma de un array de números utilizando `reduce`.

#### **2. DOM y Eventos**
- Selección de elementos: `querySelector`, `getElementById`.
- Manejo de eventos básicos con `addEventListener`.
- Manipulación de elementos: añadir, eliminar y modificar nodos.

**Ejercicios:**
1. Implementa un contador interactivo que incremente o disminuya un número al hacer clic en botones.
2. Diseña una lista interactiva que permita añadir y eliminar elementos dinámicamente.

#### **3. JSON y Manejo de Datos**
- Conversión entre objetos y JSON (`JSON.stringify`, `JSON.parse`).
- Guardar y recuperar datos de `localStorage`.

**Ejercicios:**
1. Diseña una aplicación que guarde datos en `localStorage` y los recupere al recargar la página.
2. Crea un script que lea un JSON con datos ficticios y los muestre en una tabla HTML.

#### **4. Fechas y Temporizadores**
- Uso de `Date` para obtener y formatear fechas.
- Temporizadores con `setTimeout` y `setInterval`.

**Ejercicios:**
1. Implementa un reloj digital que se actualice cada segundo.
2. Diseña un temporizador de cuenta regresiva que permita al usuario introducir una duración y muestre el tiempo restante.

---

### **Fuentes de Aprendizaje**
- [MDN Web Docs: JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)
- [JavaScript.info](https://javascript.info/)

---

