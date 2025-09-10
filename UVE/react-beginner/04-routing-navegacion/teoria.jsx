// ========================================
// TEORÍA: ROUTING Y NAVEGACIÓN EN REACT
// ========================================

//----------------------------------------------------------
// 🚦 1. react-router-dom: rutas, enlaces y parámetros
//----------------------------------------------------------

// react-router-dom es la librería estándar para manejo de rutas en React SPA
// Instálala con:
// npm install react-router-dom

import {
    BrowserRouter,
    Link,
    Route,
    Routes,
    useParams,
} from "react-router-dom";

// 📌 Estructura básica del router:

function App() {
    return (
        <BrowserRouter>
            <nav>
                <Link to="/">Inicio</Link>
                <Link to="/about">Acerca</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    );
}

// ✅ `Link` reemplaza a <a> → no recarga la página
// ✅ `Route` define qué componente se renderiza en qué path

// 📦 Parámetros en ruta:

function Perfil() {
    const { username } = useParams(); // ruta con :username
    return <h2>Perfil de {username}</h2>;
}

// Uso:
// <Route path="/perfil/:username" element={<Perfil />} />

// Al visitar `/perfil/cristina` → muestra: Perfil de cristina

//----------------------------------------------------------
// ➡️ 2. Navegación programática
//----------------------------------------------------------

// Puedes redirigir al usuario desde JS con useNavigate()

import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const manejarLogin = () => {
        // lógica de login
        navigate("/dashboard");
    };

    return <button onClick={manejarLogin}>Entrar</button>;
}

// Ideal para:
// - Redireccionar después de un login, logout, envío de formulario, etc.

//----------------------------------------------------------
// 🔒 3. RUTAS PROTEGIDAS (intro)
//----------------------------------------------------------

// Para evitar que se acceda a ciertas rutas sin estar logueado

function RutaProtegida({ children }) {
    const usuarioAutenticado = true; // cambia según lógica real

    if (!usuarioAutenticado) {
        return <p>No tienes acceso</p>;
    }

    return children;
}

// Uso:
<Route
    path="/dashboard"
    element={
        <RutaProtegida>
            <Dashboard />
        </RutaProtegida>
    }
/>

// Más adelante puedes usar Context o estados globales para manejar el login