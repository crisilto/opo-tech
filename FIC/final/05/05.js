// Diseña un sistema de inventario básico usando un Map para relacionar productos con cantidades.

const inventario = new Map([
    ["leche", 6],
    ["huevos", 12],
    ["agua", 12],
    ["yogures", 8]
])

// Mostrar inventario completo
function mostrarInventario() {
    console.log("Inventario actual:")
    for (const [producto, cantidad] of inventario) {
        console.log(`- ${producto}: ${cantidad}`)
    }
}

// Añadir un nuevo producto o sumar cantidad si ya existe
function agregarProducto(nombre, cantidad) {
    if (inventario.has(nombre)) {
        inventario.set(nombre, inventario.get(nombre) + cantidad)
        console.log(`${cantidad} unidades añadidas a ${nombre}`)
    } else {
        inventario.set(nombre, cantidad)
        console.log(`Producto nuevo "${nombre}" añadido con ${cantidad} unidades`)
    }
}

// Actualizar la cantidad exacta de un producto existente
function actualizarCantidad(nombre, nuevaCantidad) {
    if (inventario.has(nombre)) {
        inventario.set(nombre, nuevaCantidad)
        console.log(`Cantidad de "${nombre}" actualizada a ${nuevaCantidad}`)
    } else {
        console.warn(`El producto "${nombre}" no existe en el inventario`)
    }
}

// Eliminar un producto del inventario
function eliminarProducto(nombre) {
    if (inventario.delete(nombre)) {
        console.log(`"${nombre}" eliminado del inventario`)
    } else {
        console.warn(`No se puede eliminar "${nombre}" porque no existe`)
    }
}

// Consultar la cantidad de un producto específico
function consultarProducto(nombre) {
    if (inventario.has(nombre)) {
        console.log(`Cantidad de "${nombre}": ${inventario.get(nombre)}`)
    } else {
        console.warn(`"${nombre}" no se encuentra en el inventario`)
    }
}

// Mostrar productos con stock bajo (por debajo de un umbral)
function productosBajoStock(umbral) {
    console.log(`Productos con stock menor a ${umbral}:`)
    for (const [producto, cantidad] of inventario) {
        if (cantidad < umbral) {
            console.log(`- ${producto}: ${cantidad}`)
        }
    }
}

// PRUEBAS:
agregarProducto("agua", 4)
agregarProducto("pan", 10)
consultarProducto("leche")
actualizarCantidad("huevos", 6)
eliminarProducto("yogures")
productosBajoStock(8)
mostrarInventario()