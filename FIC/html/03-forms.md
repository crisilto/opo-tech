# Formularios en HTML

Los formularios son una parte esencial de las páginas web, ya que permiten recopilar información del usuario y enviarla al servidor para su procesamiento. A continuación, se explican los fundamentos de los formularios en HTML y su correcto uso.

---

## **Input con Diferentes Tipos**

El elemento `<input>` es el más utilizado en los formularios y admite varios tipos de datos mediante el atributo `type`.

### **Tipos Comunes de Input**

1. **Texto (`type="text"`):**
   Se utiliza para entradas de texto simples.
   ```html
   <input type="text" name="nombre" placeholder="Introduce tu nombre">
   ```

2. **Correo Electrónico (`type="email"`):**
   Acepta solo valores con un formato de correo válido.
   ```html
   <input type="email" name="correo" placeholder="Introduce tu correo" required>
   ```

3. **Contraseña (`type="password"`):**
   Oculta el texto introducido por el usuario.
   ```html
   <input type="password" name="clave" placeholder="Introduce tu contraseña" required>
   ```

4. **Número (`type="number"`):**
   Permite solo la introducción de números.
   ```html
   <input type="number" name="edad" placeholder="Introduce tu edad" min="0">
   ```

5. **Fecha (`type="date"`):**
   Proporciona un selector de fechas.
   ```html
   <input type="date" name="fecha_nacimiento">
   ```

6. **Checkbox (`type="checkbox"`):**
   Permite al usuario seleccionar una o varias opciones.
   ```html
   <label>
     <input type="checkbox" name="suscribir" value="si"> Suscribirme al boletín
   </label>
   ```

7. **Radio (`type="radio"`):**
   Permite al usuario seleccionar solo una opción de un grupo.
   ```html
   <label>
     <input type="radio" name="genero" value="masculino"> Masculino
   </label>
   <label>
     <input type="radio" name="genero" value="femenino"> Femenino
   </label>
   ```

8. **Botón de Envío (`type="submit"`):**
   Envía el formulario al servidor.
   ```html
   <input type="submit" value="Enviar">
   ```

---

## **Uso de Etiquetas Relacionadas con Formularios**

### **Etiqueta `<label>`**
La etiqueta `<label>` mejora la accesibilidad al asociar un texto descriptivo con un elemento `<input>`.

**Ejemplo:**
```html
<label for="nombre">Nombre:</label>
<input type="text" id="nombre" name="nombre" placeholder="Introduce tu nombre">
```

- El atributo `for` de `<label>` debe coincidir con el atributo `id` del elemento `<input>` asociado.

### **Etiqueta `<fieldset>` y `<legend>`**
La etiqueta `<fieldset>` se utiliza para agrupar elementos relacionados dentro de un formulario. La etiqueta `<legend>` proporciona un título al grupo.

**Ejemplo:**
```html
<fieldset>
  <legend>Información Personal</legend>
  <label for="nombre">Nombre:</label>
  <input type="text" id="nombre" name="nombre">

  <label for="edad">Edad:</label>
  <input type="number" id="edad" name="edad">
</fieldset>
```

### **Validaciones Básicas con Atributos**

1. **`required`:**
   Obliga al usuario a completar el campo antes de enviar el formulario.
   ```html
   <input type="email" name="correo" placeholder="Correo electrónico" required>
   ```

2. **`min` y `max`:**
   Define valores mínimos y máximos (para números y fechas).
   ```html
   <input type="number" name="edad" min="18" max="100">
   ```

3. **`pattern`:**
   Define un patrón con una expresión regular.
   ```html
   <input type="text" name="codigo_postal" placeholder="Código Postal" pattern="[0-9]{5}" required>
   ```

4. **`maxlength`:**
   Establece el número máximo de caracteres permitidos.
   ```html
   <input type="text" name="usuario" maxlength="15">
   ```

---

## **Ejemplo Completo de Formulario**

```html
<form action="/submit" method="post">
  <fieldset>
    <legend>Información Personal</legend>

    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre" placeholder="Introduce tu nombre" required>

    <label for="correo">Correo Electrónico:</label>
    <input type="email" id="correo" name="correo" placeholder="Introduce tu correo" required>

    <label for="clave">Contraseña:</label>
    <input type="password" id="clave" name="clave" required>
  </fieldset>

  <fieldset>
    <legend>Preferencias</legend>

    <label>
      <input type="checkbox" name="suscribir" value="si"> Suscribirme al boletín
    </label>

    <label>
      <input type="radio" name="genero" value="masculino"> Masculino
    </label>
    <label>
      <input type="radio" name="genero" value="femenino"> Femenino
    </label>
  </fieldset>

  <input type="submit" value="Enviar">
</form>
