// 1. Realiza una petición GET con fetch() a JSONPlaceholder 
// y muestra en la consola la lista de publicaciones

//hacemos la petición GET a la URL de la API
fetch("https://jsonplaceholder.typicode.com/posts")
    //fetch devuelve una Promesa que se resuelve con un objeto Response
    .then(response => {
        //convertimos la respuesta en JSON (también devuelve una Promesa)
        return response.json()
    })
    .then(data => {
        //aquí ya tenemos los datos procesados (un array con las publicaciones)
        console.log("publicaciones: ", data)
    })
    .catch(err => {
        //captura errores de red o problemas al procesar la respuesta
        console.error("error al consumir la API: ", err)
    })

// 2. Modifica el ejercicio anterior para que verifique si la respuesta es correcta usando response.ok. Si no lo es, lanza y muestra un error

// 3. Reescribe el ejercicio 1 usando la sintaxis async/await en lugar de promesas

// 4. Realiza una petición POST a JSONPlaceholder para crear una nueva publicación. Envía un objeto con propiedades como title o body

// 5. Utiliza el método PUT para actualizar completamente un recurso (por ejemplo, modificar una publicación) en JSONPlaceholder

// 6. Realiza una petición PATCH para modificar únicamente uno o dos campos de un recurso existente

// 7. Envía una solicitud DELETE a la API para borrar un recurso (por ejemplo, una publicación) y verifica la respuesta

// 8. Crea una función que realice una solicitud GET (la que quieras) a OpenWeatherMap

// 9. Utiliza la PokeAPI para obtener los datos de un Pokémon concreto, a continuación los detalles de la especie y, finalmente, la cadena evolutiva a partir de la especie

// 10. Utiliza una herramienta como Postman o Thunder Client para probar diferentes endpoint de una API