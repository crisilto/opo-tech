# Tablas y Listas en HTML

## **Tablas en HTML**

Las tablas permiten estructurar datos en filas y columnas, siendo útiles para representar información organizada. En HTML, se utilizan etiquetas específicas para definir sus partes principales.

### **Estructura de una Tabla**

1. **Etiqueta `<table>`:** Contenedor principal de la tabla.
2. **Etiqueta `<thead>`:** Contiene los encabezados de las columnas.
3. **Etiqueta `<tbody>`:** Contiene el cuerpo de la tabla.
4. **Etiqueta `<tfoot>`:** Contiene el pie de la tabla (opcional).
5. **Etiqueta `<tr>`:** Define una fila.
6. **Etiqueta `<th>`:** Define una celda de encabezado.
7. **Etiqueta `<td>`:** Define una celda de datos.

### **Ejemplo de Tabla Completa**

```html
<table>
  <thead>
    <tr>
      <th>Nombre</th>
      <th>Edad</th>
      <th>Ciudad</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Juan</td>
      <td>25</td>
      <td>Madrid</td>
    </tr>
    <tr>
      <td>Ana</td>
      <td>30</td>
      <td>Barcelona</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="3">Datos obtenidos en 2025</td>
    </tr>
  </tfoot>
</table>
```

### **Buenas Prácticas para Tablas**

1. Usa `<thead>`, `<tbody>` y `<tfoot>` para mejorar la accesibilidad y organización.
2. Aplica estilos CSS para mejorar la visualización.

**Ejemplo con Estilos:**
```html
<style>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }
  th {
    background-color: #f4f4f4;
  }
</style>
```

---

## **Listas en HTML**

Las listas son elementos fundamentales para agrupar contenido relacionado, como menús o elementos jerárquicos.

### **Tipos de Listas**

1. **Listas Ordenadas (`<ol>`):**
   Las listas ordenadas enumeran elementos en un orden específico.

   **Ejemplo:**
   ```html
   <ol>
     <li>Preparar ingredientes</li>
     <li>Cocinar</li>
     <li>Servir</li>
   </ol>
   ```

2. **Listas Desordenadas (`<ul>`):**
   Las listas desordenadas agrupan elementos sin un orden específico.

   **Ejemplo:**
   ```html
   <ul>
     <li>Manzanas</li>
     <li>Peras</li>
     <li>Plátanos</li>
   </ul>
   ```

3. **Listas de Definición (`<dl>`):**
   Se utilizan para pares de términos y descripciones.

   **Ejemplo:**
   ```html
   <dl>
     <dt>HTML</dt>
     <dd>Lenguaje de marcado para páginas web.</dd>
     <dt>CSS</dt>
     <dd>Lenguaje de estilos para páginas web.</dd>
   </dl>
   ```

---

## **Listas Anidadas**

Puedes anidar listas dentro de otras para representar jerarquías.

**Ejemplo:**
```html
<ul>
  <li>Frutas
    <ul>
      <li>Manzanas</li>
      <li>Naranjas</li>
    </ul>
  </li>
  <li>Verduras
    <ul>
      <li>Zanahorias</li>
      <li>Espinacas</li>
    </ul>
  </li>
</ul>
```

---

## **Ejercicios Prácticos**

1. Crea una tabla que contenga los horarios de tus actividades semanales.
   - Usa `<thead>`, `<tbody>` y `<tfoot>`.
   - Aplica estilos CSS para mejorar la visualización.

2. Diseña una lista ordenada con los pasos para realizar una receta.
   - Añade una lista desordenada dentro de uno de los pasos para detallar ingredientes.

3. Implementa una tabla con filas alternadas en color usando CSS.

4. Diseña un menú de navegación con una lista desordenada que contenga submenús anidados.

---

## **Recursos Adicionales**
- [MDN Web Docs: Tablas](https://developer.mozilla.org/es/docs/Web/HTML/Element/table)
- [MDN Web Docs: Listas](https://developer.mozilla.org/es/docs/Web/HTML/Element/ul)
