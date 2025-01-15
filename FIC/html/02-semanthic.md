# Estructura Semántica en HTML

## **Uso Correcto de Etiquetas Semánticas**

Las etiquetas semánticas en HTML ayudan a estructurar el contenido de una página de manera lógica, lo que mejora tanto la accesibilidad como el SEO. A continuación, se detalla el uso correcto de las principales etiquetas semánticas:

### **1. Etiqueta `<header>`**
El elemento `<header>` se utiliza para contener introducciones y encabezados de una sección o página.

- **Usos típicos:**
  - Logotipos.
  - Navegación principal.
  - Encabezados.

**Ejemplo:**
```html
<header>
  <h1>Mi Blog</h1>
  <nav>
    <ul>
      <li><a href="#inicio">Inicio</a></li>
      <li><a href="#articulos">Artículos</a></li>
    </ul>
  </nav>
</header>
```

### **2. Etiqueta `<main>`**
El elemento `<main>` contiene el contenido principal de la página. Solo debe haber un `<main>` por página y no debe incluir contenido repetitivo como barras laterales o encabezados.

**Ejemplo:**
```html
<main>
  <article>
    <h2>Título del Artículo</h2>
    <p>Este es el contenido principal del artículo.</p>
  </article>
</main>
```

### **3. Etiqueta `<footer>`**
El elemento `<footer>` se utiliza para contener información al final de una sección o página, como créditos, enlaces relacionados, políticas de privacidad, etc.

**Ejemplo:**
```html
<footer>
  <p>&copy; 2025 Mi Sitio Web</p>
  <a href="/privacidad">Política de Privacidad</a>
</footer>
```

### **4. Etiqueta `<article>`**
El elemento `<article>` se utiliza para representar contenido independiente, como artículos de un blog, publicaciones, comentarios, etc.

**Ejemplo:**
```html
<article>
  <h2>Cómo usar HTML Semántico</h2>
  <p>HTML semántico mejora la accesibilidad y el SEO...</p>
</article>
```

### **5. Etiqueta `<section>`**
El elemento `<section>` agrupa contenido relacionado dentro de una página. Es útil para dividir un documento en secciones temáticas.

**Ejemplo:**
```html
<section>
  <h2>Noticias Recientes</h2>
  <p>Últimos artículos sobre tecnología.</p>
</section>
```

---

## **Creación de Documentos Accesibles**

### **1. Uso del Atributo `alt` en Imágenes**
El atributo `alt` proporciona una descripción textual para las imágenes, lo que mejora la accesibilidad para usuarios con discapacidades visuales y ayuda a los motores de búsqueda a entender el contenido de la imagen.

**Buenas prácticas:**
- Describe brevemente el contenido de la imagen.
- Si la imagen es decorativa, usa un atributo `alt` vacío (`alt=""`).

**Ejemplo:**
```html
<img src="logo.png" alt="Logotipo de la empresa">
<img src="decorativo.png" alt="">
```

### **2. Uso de Atributos ARIA**
ARIA (Accessible Rich Internet Applications) mejora la accesibilidad proporcionando roles y propiedades a los elementos.

**Roles comunes:**
- `role="navigation"`: Define un área de navegación.
- `role="banner"`: Define un encabezado de página.
- `role="contentinfo"`: Define un pie de página.

**Propiedades comunes:**
- `aria-label`: Proporciona una etiqueta accesible para el elemento.
- `aria-hidden`: Indica si el contenido es visible o no para tecnologías de asistencia.

**Ejemplo:**
```html
<nav role="navigation" aria-label="Menú principal">
  <ul>
    <li><a href="#inicio">Inicio</a></li>
    <li><a href="#acerca">Acerca</a></li>
  </ul>
</nav>

<div role="contentinfo">
  <p>© 2025 Mi Sitio Web</p>
</div>
```

### **Recursos Adicionales**
- [MDN Web Docs: HTML Semántico](https://developer.mozilla.org/es/docs/Glossary/Sem%C3%A1ntica)
- [W3C ARIA Roles](https://www.w3.org/TR/wai-aria-1.1/#roles)
