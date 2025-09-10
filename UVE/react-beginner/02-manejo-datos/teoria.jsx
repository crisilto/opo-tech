// ========================================
// TEORÍA: MANEJO DE DATOS EN REACT
// ========================================

//----------------------------------------------------------
// 🔁 1. useEffect: EFECTOS SECUNDARIOS
//----------------------------------------------------------

// ➤ useEffect permite ejecutar lógica después del render: peticiones, suscripciones, timers...

import { useEffect, useState } from 'react';

function EjemploUseEffect() {
    const [contador, setContador] = useState(0);

    useEffect(() => {
        console.log("El componente se montó o el contador cambió:", contador);
    }, [contador]); // Dependencias

    return <button onClick={() => setContador(contador + 1)}>Contador: {contador}</button>;
}

// Casos comunes de useEffect:
// - Cargar datos de una API
// - Suscribirse a eventos (ej: resize, scroll)
// - Ejecutar lógica cuando cambia un estado

// ➤ Estructura:

useEffect(() => {
    // código que se ejecuta después del render

    return () => {
        // cleanup (opcional): se ejecuta al desmontar o antes de un nuevo efecto
    };
}, [dependencias]); // ← cuando estas cambian, se ejecuta el efecto

//----------------------------------------------------------
// 🌐 2. Llamadas fetch con async/await
//----------------------------------------------------------

// Como useEffect no puede ser async directamente, se define una función async dentro:

function DatosRemotos() {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        async function obtenerDatos() {
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/users");
                const data = await res.json();
                setUsuarios(data);
            } catch (error) {
                console.error("Error al obtener datos:", error);
            }
        }

        obtenerDatos();
    }, []);

    return (
        <ul>
            {usuarios.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );
}

// Buenas prácticas:
// - Mostrar un estado de carga (`loading`) mientras esperas los datos
// - Usar try/catch para errores
// - Limpiar efectos si son suscripciones (ej: websockets, eventos)

//----------------------------------------------------------
// 🧠 3. RENDERIZADO CONDICIONAL Y LISTAS
//----------------------------------------------------------

// ➤ Renderizado condicional:
function Usuario({ logueado }) {
    return (
        <>
            {logueado ? <p>Bienvenido de nuevo</p> : <p>Por favor, inicia sesión</p>}
        </>
    );
}

// También puedes usar AND (&&) para condiciones simples:
{ usuarios.length > 0 && <p>Hay usuarios cargados</p> }

// ➤ Renderizado de listas:
const tareas = ['Estudiar', 'Leer', 'Descansar'];

function ListaTareas() {
    return (
        <ul>
            {tareas.map((tarea, i) => (
                <li key={i}>{tarea}</li>
            ))}
        </ul>
    );
}

// Reglas:
// - Siempre usa una `key` única al mapear elementos
// - Evita usar el índice como `key` si la lista puede cambiar