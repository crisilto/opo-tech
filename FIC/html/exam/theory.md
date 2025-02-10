# Examen de HTML - FIC: Parte 1 (Teoría)

## Preguntas teóricas

### 1. **Estructura básica**
Escribe el código mínimo necesario para una página HTML válida:

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Min Code</title>
</head>
<body>
    <h1>Hello HTML</h1>
</body>
</html>
```

---

### 2. **Semántica**

1. **¿Qué diferencia hay entre las etiquetas `<section>` y `<article>`?**  
   - La etiqueta `<section>` se utiliza para agrupar contenido relacionado dentro de una página, generalmente con un título que lo describe.  
   - La etiqueta `<article>` representa contenido autónomo que tiene sentido por sí solo, como un post de blog, un artículo de noticias o una entrada de foro.

2. **¿Qué función cumple el atributo `alt` en imágenes y por qué es importante?**  
   - Proporciona una descripción textual que aparece si la imagen no puede cargarse.  
   - Es esencial para la accesibilidad, ya que permite que los lectores de pantalla expliquen el contenido de la imagen a las personas con discapacidades visuales.

---

### 3. **Formularios**

1. **Menciona tres atributos útiles para la validación en formularios y explica cómo funcionan:**  
   - **`required`**: Obliga al usuario a completar un campo antes de enviar el formulario.  
   - **`min` y `max`**: Establecen los valores mínimos y máximos permitidos en un campo numérico o de fecha.  
   - **`pattern`**: Define una expresión regular que debe coincidir con el valor introducido.

2. **¿Qué etiqueta utilizarías para agrupar elementos dentro de un formulario y qué ventaja aporta?**  
   - Usaría la etiqueta `<fieldset>` para agrupar controles relacionados, lo que mejora la organización visual y semántica.

---

### 4. **Tablas**

**¿Cuál es el propósito de las etiquetas `<thead>`, `<tbody>` y `<tfoot>` en una tabla?**  
- **`<thead>`**: Contiene el encabezado de la tabla, normalmente con títulos de columnas.  
- **`<tbody>`**: Alberga el contenido principal de la tabla, como filas y datos.  
- **`<tfoot>`**: Contiene un resumen o datos finales, como totales, promedios o notas.

---

### 5. **Listas**

1. **Explica la diferencia entre `<ol>` y `<ul>`:**  
   - `<ol>` crea una lista ordenada con números o letras.  
   - `<ul>` crea una lista desordenada con viñetas o símbolos.

2. **Da un ejemplo de cuándo usarías cada una:**  
   - Usaría `<ol>` para mostrar los pasos de una receta de cocina.  
   - Usaría `<ul>` para una lista de enlaces en un menú de navegación.

---

### 6. **Accesibilidad**

1. **¿Cómo puedes hacer que una navegación sea más accesible para personas con discapacidades?**  
   - Añadir atributos como `aria-label` para describir mejor el contenido.  
   - Incluir funcionalidades como botones para cambiar el tamaño de la fuente o el contraste.  
   - Usar etiquetas `<nav>` para señalar las áreas de navegación.

2. **¿Qué atributo usarías para asociar un campo de formulario con su descripción?**  
   - Usaría `aria-describedby`, que vincula un campo de formulario con una descripción detallada.

---

### 7. **Atributos globales**

**¿Qué son los atributos globales en HTML? Menciona al menos 3 ejemplos.**  
- Son atributos comunes a todos los elementos HTML, que pueden ser utilizados en cualquiera de ellos.  
- Ejemplos:  
  - **`id`**: Identifica de manera única un elemento en la página.  
  - **`class`**: Asocia un elemento a una o más clases para aplicar estilos o comportamientos.  
  - **`lang`**: Especifica el idioma del contenido del elemento.