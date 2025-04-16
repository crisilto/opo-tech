# UVE: JavaScript Intermedio y React (2025)

El objetivo de esta unidad es dominar JavaScript intermedio y React (versión 18+), incluyendo las nuevas features vigentes en 2025.

---

## 🧪 1. Promesas y `async/await`

### Conceptos Clave:
- Qué es una promesa y estados (`pending`, `fulfilled`, `rejected`).
- Crear promesas manualmente.
- `.then()`, `.catch()` y `.finally()`.
- `async/await` para simplificar el flujo asincrónico.
- Manejo de errores asincrónicos con `try/catch`.
- Promesas en paralelo con `Promise.all`, `Promise.allSettled`, `Promise.race`, `Promise.any`.

### Ejercicios Recomendados:
1. Script que consuma datos de una API como [JSONPlaceholder](https://jsonplaceholder.typicode.com/) y los muestre en una tabla.
2. Temporizador que simule una operación lenta y use promesas para indicar cuándo se ha completado.
3. Función que haga varias llamadas a APIs y combine los resultados en un solo array.

### Recursos Actualizados:
- [MDN - Promesas](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [JavaScript.info - Async/Await](https://javascript.info/async-await)
- [Frontend Masters - Asynchronous JavaScript Deep Dive](https://frontendmasters.com/)

---

## 📁 2. React desde Cero (React 18+)

### Conceptos Clave:
- JSX y su sintaxis.
- Componentes funcionales.
- `useState` y `useEffect` (Hooks esenciales).
- Props y comunicación padre-hijo.
- Eventos y manipulación de formularios.
- Keys al renderizar listas.
- Renderizado condicional.

### Ejercicios Recomendados:
1. Lista de tareas con funciones: añadir, eliminar, marcar como completado.
2. App que consuma una API y muestre los datos en componentes.
3. Calculadora básica funcional con React.

### Recursos Actualizados:
- [React Docs (2025)](https://react.dev/learn)
- [Beta Docs con nuevas features](https://beta.reactjs.org/)
- [FreeCodeCamp - React](https://www.freecodecamp.org/learn/front-end-development-libraries/react/)
- [UI Framework recomendado: ShadCN (Tailwind + Radix)](https://ui.shadcn.com/)

---

## 🔎 3. Rutas y Estado Global

### Conceptos Clave:
- Navegación con `react-router-dom@6.16+`.
- Nested routes, loaders y layouts.
- `useNavigate`, `useParams`, `useLocation`.
- Manejo de estado global sin Redux:
  - `useContext`
  - `useReducer`
- Prop drilling vs Context API.
- Estados persistentes en localStorage / sessionStorage.

### Ejercicios Recomendados:
1. App de notas con rutas: inicio, crear, ver nota individual.
2. Carrito de compras funcional usando `useContext`.
3. Página de login con estado global y protección de rutas.

### Recursos Actualizados:
- [React Router Docs](https://reactrouter.com/en/main)
- [React Context Docs](https://react.dev/reference/react/useContext)
- [State Management without Redux](https://kentcdodds.com/blog/how-to-use-react-context-effectively)

---

## 📊 4. Bonus: React Tools y Ecosistema

### Conceptos Clave:
- React DevTools (extensión oficial).
- Composición vs Herencia en componentes.
- Props.children.
- Custom Hooks.
- Deployment con Vite + Netlify / Vercel.
- Testing con React Testing Library (básico).

### Recursos Actualizados:
- [Vite + React](https://vitejs.dev/guide/#scaffolding-your-first-vite-project)
- [Netlify Docs](https://docs.netlify.com/)
- [Vercel](https://vercel.com/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

---

## ✅ Siguiente Paso

Una vez dominado este plan:
- Avanza hacia manejo avanzado de formularios con `react-hook-form`.
- Aprende validación con Zod o Yup.
- Explora bibliotecas de estado como Zustand o TanStack Query.
- Aprende TypeScript con React.