// Crea un script que lea un JSON con datos ficticios y los muestre en una tabla HTML.
const tabla = document.querySelector("#tabla")

//json simulado
const datos = [
    { nombre: "Cristina", edad: 27, email: "cris@email.com" },
    { nombre: "Lilith", edad: 4, email: "lilith@email.com" },
    { nombre: "Kenneth", edad: 1, email: "kenneth@email.com" }
]

function leerJSON(json) {
    json.forEach(persona => {
        //para cada persona, una fila
        const tr = document.createElement("tr")
        //para cada propiedad de persona, una celda
        for (const key in persona) {
            const td = document.createElement("td")
            td.textContent = persona[key]
            //se va rellenando cada fila con celdas
            tr.appendChild(td)
        }
        //se va rellenando la tabla con las filas
        tabla.appendChild(tr)
    })
}

leerJSON(datos)