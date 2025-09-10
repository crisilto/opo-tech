// ========================================
// TEORÍA: FUNDAMENTOS DE REACT (2025)
// ========================================

//----------------------------------------------------------
// ⚛️ 1. JSX Y EL ÁRBOL VIRTUAL
//----------------------------------------------------------

// ➤ JSX es una extensión de JavaScript que permite escribir HTML dentro del JS
//    (pero no es HTML real: bajo el capó se transforma en llamadas a React.createElement())

// Ejemplo básico:
const elemento = <h1>Hola, React</h1>;

// Puedes usar JS dentro del JSX con llaves {}
const nombre = "Ana";
const saludo = <p>Hola, {nombre}</p>;

// ➤ Árbol Virtual (Virtual DOM):
// React mantiene una representación interna del DOM para saber qué debe actualizar realmente
// Así, cuando cambia algo, React compara el virtual DOM anterior con el nuevo (diffing)
// y actualiza solo lo necesario (render eficiente).

//----------------------------------------------------------
// 🧱 2. COMPONENTES FUNCIONALES
//----------------------------------------------------------

// Un componente funcional es una función que devuelve JSX

function Saludo() {
    return <h2>¡Hola desde un componente!</h2>;
}

// Desde React 16.8, con hooks, ya no se usan clases para nuevos componentes

// Buenas prácticas 2025:
// - Archivos individuales para cada componente
// - Nombre de componente con PascalCase
// - Evitar lógica innecesaria en el return
// - Separar lógica/estado de presentación cuando sea complejo

//----------------------------------------------------------
// 📩 3. PROPS Y COMUNICACIÓN ENTRE COMPONENTES
//----------------------------------------------------------

// Las props (propiedades) permiten pasar datos de un componente padre a uno hijo

function TarjetaUsuario({ nombre, edad }) {
    return (
        <div>
            <h3>{nombre}</h3>
            <p>Edad: {edad}</p>
        </div>
    );
}

// Uso desde un componente padre:
function App() {
    return <TarjetaUsuario nombre="Luis" edad={30} />;
}

// ➤ Las props son de solo lectura (unidireccional)
// Si quieres que el hijo comunique algo al padre → pasas una función como prop

function BotonContador({ onClick }) {
    return <button onClick={onClick}>+1</button>;
}

function Contador() {
    const [valor, setValor] = React.useState(0);

    return (
        <>
            <p>Valor: {valor}</p>
            <BotonContador onClick={() => setValor(valor + 1)} />
        </>
    );
}

//----------------------------------------------------------
// 🔁 4. useState: ESTADO LOCAL
//----------------------------------------------------------

// useState es un hook que permite manejar estado interno en un componente funcional

import { useState } from 'react';

function ContadorSimple() {
    const [contador, setContador] = useState(0);

    return (
        <>
            <p>Contador: {contador}</p>
            <button onClick={() => setContador(contador + 1)}>Incrementar</button>
        </>
    );
}

// Sintaxis:
// const [valor, setValor] = useState(valorInicial);

// setValor actualiza el estado y React vuelve a renderizar el componente

// Buenas prácticas:
// - No mutar directamente el estado (usar setState)
// - Evitar usar el estado para cosas que pueden calcularse directamente con props
// - Mantener el estado local simple (si crece, usar otros hooks o contextos)
