// ========================================
// EJERCICIOS: ROUTING Y NAVEGACIÓN EN REACT
// ========================================

//----------------------------------------------------------
// 🚦 Rutas, enlaces y parámetros
//----------------------------------------------------------

// 🧩 1. Crea una SPA con estas 3 páginas:
//    - Inicio (/)
//    - Sobre mí (/about)
//    - Contacto (/contact)

// 🧩 2. Crea un navbar con <Link> para navegar entre ellas sin recargar.

// 🧩 3. Crea una ruta dinámica `/perfil/:username`
//    - Muestra un saludo personalizado con el nombre desde `useParams`

// 🧩 4. BONUS: Usa `Routes` y `Route` dentro de un layout común (Navbar + Outlet)

//----------------------------------------------------------
// ➡️ Navegación programática
//----------------------------------------------------------

// 🧩 5. Crea un componente `Login` con un botón "Entrar".
//    - Al hacer clic, redirige al usuario a `/dashboard` usando `useNavigate`

// 🧩 6. BONUS: Usa un estado `logueado` para mostrar un mensaje diferente si ya está autenticado.

//----------------------------------------------------------
// 🔒 Rutas protegidas (intro)
//----------------------------------------------------------

// 🧩 7. Crea un componente `RutaProtegida` que verifique si el usuario está logueado.
//    - Si no lo está, muestra "No autorizado"
//    - Si lo está, renderiza el componente hijo

// 🧩 8. Usa `RutaProtegida` para proteger la ruta `/dashboard`
//    - Muestra un componente `Dashboard` solo si `logueado === true`

// 🧩 9. BONUS: Crea una función de login/logout que cambie el estado global (`useState`) y permita el acceso dinámicamente

// 🧩 10. BONUS 2: Guarda el estado de login en `localStorage` para mantenerlo entre recargas