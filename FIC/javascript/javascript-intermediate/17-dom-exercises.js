// 1. Crea un elemento (por ejemplo, un <h1 id="title">) y cambia su contenido a "¡Hola Mundo!"
// al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    const titleElement = document.createElement("h1")
    titleElement.id = "title"
    titleElement.textContent = "¡Hola Mundo!"
    document.body.appendChild(titleElement)

    // 2. Inserta una imagen con id="myImage" y cambia su atributo src a otra URL
    const imageElement = document.createElement("img")
    imageElement.id = "myImage"
    imageElement.src = "https://picsum.photos/150"
    document.body.appendChild(imageElement)

    setTimeout(() => {
        imageElement.src = "https://picsum.photos/300"
    }, 2000)


    // 3. Crea un <div id="box"> sin clases y agrega la clase resaltado cuando se cargue la página
    const boxElement = document.createElement("div")
    boxElement.id = "box"
    boxElement.textContent = "div with resalted class"
    document.body.appendChild(boxElement)
    boxElement.classList.add("resalted")

    // 4. Crea un párrafo con id="paragraph" y cambia su color de texto a azul
    const paragraphElement = document.createElement("p")
    paragraphElement.id = "paragraph"
    paragraphElement.textContent = "my blue paragraph"
    document.body.appendChild(paragraphElement)
    paragraphElement.style.color = "blue"

    // 5. Agrega un botón que, al hacer clic, cree un nuevo elemento <li> con el texto "Nuevo elemento"
    // y lo agregue a una lista <ul id="list">
    const listElement = document.createElement("ul")
    listElement.id = "list"
    document.body.appendChild(listElement)

    const buttonElement = document.createElement("button")
    buttonElement.textContent = "add element"
    document.body.appendChild(buttonElement)

    buttonElement.addEventListener("click", () => {
        const newItem = document.createElement("li")
        newItem.textContent = "new element"
        listElement.appendChild(newItem)
    })

    // 6. Crea un párrafo con id="deleteParagraph" y un botón. Al hacer clic en el botón,
    // elimina el párrafo del DOM
    const newParagraph = document.createElement("p")
    newParagraph.id = "deleteParagraph"
    newParagraph.textContent = "new paragraph"
    document.body.appendChild(newParagraph)
    const deleteButton = document.createElement("button")
    deleteButton.textContent = "delete"
    document.body.appendChild(deleteButton)

    deleteButton.addEventListener("click", () => {
        newParagraph.remove()
    })

    // 7. Crea un <div id="content"> con algún texto y reemplaza su contenido por un <h2> con
    // el mensaje "Nuevo Contenido"
    const content = document.createElement("div")
    content.id = "content"
    content.textContent = "some text"
    document.body.appendChild(content)

    setTimeout(() => {
        content.innerHTML = "<h2>new content</h2>"
    }, 3000);

    // 8. Crea un botón con id="greetBtn" y añade un evento que muestre una alerta con el mensaje "¡Hola!"
    // al hacer clic
    const greenButton = document.createElement("button")
    greenButton.id = "greenBtn"
    greenButton.textContent = "click"
    greenButton.style.background = "green"
    document.body.appendChild(greenButton)

    greenButton.addEventListener("click", () => {
        alert("hello")
    })

    // 9. Crea un <input id="textInput"> y un <div id="result">.
    // Al escribir en el input, el <div> se debe actualizarse mostrando lo que se escribe
    const inputElement = document.createElement("input")
    inputElement.id = "textInput"
    inputElement.type = "text"
    inputElement.placeholder = "write something"
    document.body.appendChild(inputElement)

    const divElement = document.createElement("div")
    divElement.id = "result"
    divElement.textContent = "text will be shown here"
    document.body.appendChild(divElement)

    inputElement.addEventListener("input", () => {
        divElement.textContent = inputElement.value
    })

    // 10. Crea un botón con id="backgroundBtn" y, al hacer clic, cambia el color de fondo del <body>
    // a un color diferente
    const backgroundButton = document.createElement("button")
    backgroundButton.id = "backgroundBtn"
    backgroundButton.textContent = "change background colour"
    document.body.appendChild(backgroundButton)

    backgroundButton.addEventListener("click", () => {
        const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
        document.body.style.backgroundColor = randomColor
    })
})