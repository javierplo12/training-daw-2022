window.onload = function (e) {
    console.log('documento cargado')

    document.getElementsByTagName('h2')[1].innerText = 'titulo cambiado'
    document.getElementById('username');
    const firstElements = document.querySelectorAll("article .first");

    firstElements.forEach(element => {
        element.style.color = "red"; 
    })

    document.querySelectorAll('li.item')


    const buttonsInButtonsClass = document.querySelectorAll(".buttons button");
    
    buttonsInButtonsClass.forEach(button => {
        button.innerText = "Nuevo Texto"; // Cambia el texto del botón
        button.style.backgroundColor = "blue"; // Cambia el color de fondo del botón
    });
    
    





}