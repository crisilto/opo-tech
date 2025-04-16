// ========================================
// TEORÍA: FORMULARIOS Y EVENTOS EN REACT
// ========================================

//----------------------------------------------------------
// 🧠 1. MANEJO DE FORMULARIOS CON ESTADO
//----------------------------------------------------------

// En React, cada campo del formulario se gestiona con `useState`
// El estado guarda lo que el usuario escribe

import { useState } from "react";

function FormularioSimple() {
    const [nombre, setNombre] = useState("");

    const manejarEnvio = (e) => {
        e.preventDefault(); // evita que recargue
        console.log("Nombre enviado:", nombre);
    };

    return (
        <form onSubmit={manejarEnvio}>
            <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />
            <button type="submit">Enviar</button>
        </form>
    );
}

//----------------------------------------------------------
// ✍️ 2. INPUTS CONTROLADOS
//----------------------------------------------------------

// Un input es *controlado* si su valor viene del estado de React.
// Esto permite validar, transformar o resetear inputs fácilmente.

function FormularioMultiple() {
    const [form, setForm] = useState({
        nombre: "",
        email: "",
    });

    const manejarCambio = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value }); // spread para mantener el resto
    };

    return (
        <form>
            <input
                name="nombre"
                value={form.nombre}
                onChange={manejarCambio}
                placeholder="Nombre"
            />
            <input
                name="email"
                value={form.email}
                onChange={manejarCambio}
                placeholder="Email"
            />
        </form>
    );
}

// Buenas prácticas:
// - Usa `name` para identificar cada campo
// - Usa un solo `useState` si hay muchos campos
// - Controlar el valor te permite validaciones, reseteo y control total

//----------------------------------------------------------
// 📦 3. EVENTOS Y FORMULARIOS ANIDADOS
//----------------------------------------------------------

// Puedes tener formularios con secciones dinámicas o inputs anidados

function FormularioDirecciones() {
    const [form, setForm] = useState({
        nombre: "",
        direccion: {
            calle: "",
            ciudad: "",
        },
    });

    const manejarCambio = (e) => {
        const { name, value } = e.target;

        // Si el campo es anidado (ej: "direccion.calle"), lo manejamos con cuidado
        if (name.startsWith("direccion.")) {
            const campo = name.split(".")[1];
            setForm((prev) => ({
                ...prev,
                direccion: {
                    ...prev.direccion,
                    [campo]: value,
                },
            }));
        } else {
            setForm({ ...form, [name]: value });
        }
    };

    return (
        <form>
            <input
                name="nombre"
                value={form.nombre}
                onChange={manejarCambio}
                placeholder="Nombre"
            />
            <input
                name="direccion.calle"
                value={form.direccion.calle}
                onChange={manejarCambio}
                placeholder="Calle"
            />
            <input
                name="direccion.ciudad"
                value={form.direccion.ciudad}
                onChange={manejarCambio}
                placeholder="Ciudad"
            />
        </form>
    );
}

// También puedes mapear inputs dinámicos (como múltiples teléfonos)
// combinando esto con `useState` y `.map()` + `.filter()` + `setForm`