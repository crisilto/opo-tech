// ========================================
// TEORÍA: ESTADO GLOBAL BÁSICO EN REACT
// ========================================

//----------------------------------------------------------
// 🌍 1. useContext: compartir datos entre componentes
//----------------------------------------------------------

// ➤ Sirve para evitar pasar props manualmente entre muchos niveles
// ➤ Ideal para temas, login, idioma, etc.

import { createContext, useContext, useState } from "react";

// 1. Crear el contexto
const TemaContexto = createContext();

// 2. Crear un proveedor que envuelva la app
function ProveedorTema({ children }) {
    const [tema, setTema] = useState("claro");

    const alternarTema = () => {
        setTema((prev) => (prev === "claro" ? "oscuro" : "claro"));
    };

    return (
        <TemaContexto.Provider value={{ tema, alternarTema }}>
            {children}
        </TemaContexto.Provider>
    );
}

// 3. Usar el contexto en cualquier componente hijo
function BotonTema() {
    const { tema, alternarTema } = useContext(TemaContexto);

    return (
        <button onClick={alternarTema}>
            Tema actual: {tema}
        </button>
    );
}

// 4. En el root:
// <ProveedorTema><App /></ProveedorTema>

//----------------------------------------------------------
// ⚙️ 2. useReducer: estado más complejo
//----------------------------------------------------------

// ➤ Ideal cuando tienes múltiples acciones o estructuras más grandes
// ➤ Similar a Redux pero integrado a React

import { useReducer } from "react";

const estadoInicial = { contador: 0 };

function reducer(state, action) {
    switch (action.type) {
        case "incrementar":
            return { contador: state.contador + 1 };
        case "decrementar":
            return { contador: state.contador - 1 };
        case "resetear":
            return { contador: 0 };
        default:
            return state;
    }
}

function ContadorAvanzado() {
    const [state, dispatch] = useReducer(reducer, estadoInicial);

    return (
        <>
            <p>Contador: {state.contador}</p>
            <button onClick={() => dispatch({ type: "incrementar" })}>+1</button>
            <button onClick={() => dispatch({ type: "decrementar" })}>-1</button>
            <button onClick={() => dispatch({ type: "resetear" })}>Reset</button>
        </>
    );
}

// Buenas prácticas:
// - El reducer debe ser una función pura (no efectos secundarios)
// - Usa constantes para los types si el proyecto crece

//----------------------------------------------------------
// 🧠 3. Introducción a Redux (opcional)
//----------------------------------------------------------

// ➤ Redux es una librería externa para manejar estado global más complejo
//    Se recomienda solo cuando useContext + useReducer se quedan cortos

// Instalación:
// npm install @reduxjs/toolkit react-redux

// Redux Toolkit es la forma moderna de usar Redux: menos código, menos boilerplate

// Estructura básica:
// - store (almacén global)
// - slices (división del estado + reducer)
// - dispatch para acciones
// - useSelector para acceder al estado
// - useDispatch para disparar acciones

// Se puede integrar con Redux DevTools y middleware (thunks, persistencia, etc.)

// Para empezar:
// - Usa useContext si el estado es simple
// - Usa useReducer si hay varias acciones
// - Usa Redux solo si realmente necesitas compartir estado complejo entre muchas partes de la app