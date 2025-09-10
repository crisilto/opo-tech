// ==================================
// TEORÍA: MÓDULOS EN ECMAScript 6 (ES6)
// ==================================

// En JavaScript moderno, podemos dividir nuestro código en módulos.
// Esto permite separar lógica en archivos distintos y reutilizarla.

//----------------------------------------------------------
// 📤 1. EXPORTACIONES
//----------------------------------------------------------

// ➤ Exportación por NOMBRE (named export):
// Podemos exportar varias cosas desde un archivo, cada una con su nombre.

export const PI = 3.14;

export function sumar(a, b) {
    return a + b;
}

export class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
}

// ➤ Exportación por DEFECTO (default export):
// Solo puede haber UNA exportación por defecto por archivo.

export default function saludar(nombre) {
    console.log(`Hola, ${nombre}`);
}

//----------------------------------------------------------
// 📥 2. IMPORTACIONES
//----------------------------------------------------------

// ➤ Importar por nombre:

// ➤ Importar todo en un objeto:
// utils.sumar(2, 3)

// ➤ Importar por defecto:

// ➤ Mezclar ambas:

// Nota: en el navegador, estos archivos deben tener extensión `.js` y usarse con `type="module"`
// Ejemplo en HTML:
// <script type="module" src="main.js"></script>

//----------------------------------------------------------
// 🗂️ 3. ORGANIZACIÓN MODULAR DEL CÓDIGO
//----------------------------------------------------------

// Buenas prácticas:
// - Usa archivos separados por funcionalidad (ej: math.js, ui.js, user.js)
// - Evita que un módulo tenga muchas responsabilidades
// - Evita depender de variables globales
// - Nombra los archivos y exportaciones de forma clara

// Ejemplo de estructura modular:
// - src/
//    - main.js
//    - utils/
//        - math.js
//        - fechas.js
//    - componentes/
//        - header.js
//        - footer.js

// Esto permite:
// - Reutilizar código
// - Facilitar pruebas
// - Mejorar la legibilidad y el mantenimiento

//----------------------------------------------------------
// 📦 4. INTRODUCCIÓN A BUNDLERS MODERNOS (VITE, WEBPACK)
//----------------------------------------------------------

// Los navegadores no entienden todavía todo el sistema de módulos de forma eficiente para producción.
// Los bundlers (empaquetadores) como Vite o Webpack:
// - Toman todos tus módulos
// - Los combinan en uno (o varios) archivos optimizados
// - Transpilan código moderno si es necesario (por ejemplo con Babel)

// ➤ Vite:
// - Muy rápido, ideal para proyectos con React o Vue
// - Usa ESModules por defecto y hot-reload
// - Configuración mínima

// ➤ Webpack:
// - Muy flexible y potente
// - Ideal para configuraciones personalizadas y proyectos grandes
// - Requiere más configuración

// Ambos permiten:
// - Minificar el código
// - Usar archivos `.js`, `.ts`, `.jsx`, `.scss`, etc.
// - Optimizar recursos (imágenes, fuentes, estilos)

// Para empezar con Vite:
// npm create vite@latest
// cd tu-proyecto
// npm install
// npm run dev