// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

/*
Funcionalidades:
Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar".

Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.

Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.

Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.
*/

let listaAmigos = []; 
// Array donde guardamos los nombres de los amigos

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let input = document.querySelector('#amigo'); 
    // Obtenemos el input del HTML donde el usuario escribe el nombre
    
    let nombre = input.value.trim(); 
    // Guardamos el valor del input y eliminamos espacios extra
    
    if (nombre === "") {
        alert("Por favor, escribe un nombre."); 
        return; 
        // Si no hay nombre, mostramos alerta y detenemos la función
    }

    // Convertimos la primera letra en mayúscula y el resto en minúscula
    nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();

    listaAmigos.push(nombre); 
    // Agregamos el nombre al array

    console.log(listaAmigos); 
    // Mostramos el array en consola para verificar

    limpiarCaja(); 
    // Limpiamos el input después de agregar el nombre

    mostrarLista(); 
    // Actualizamos la lista visible en la página
}

// Función para mostrar la lista de amigos en pantalla
function mostrarLista() {
    let listaHTML = document.getElementById("listaAmigos"); 
    // Obtenemos el <ul> donde se mostrarán los nombres
    
    let contenido = ""; 
    // Variable donde armaremos todo el HTML de los <li>

    for (let i = 0; i < listaAmigos.length; i++) {
        contenido += `<li>${listaAmigos[i]}</li>`; 
        // Recorremos el array y agregamos cada nombre como <li>
    }

    listaHTML.innerHTML = contenido; 
    // Actualizamos el <ul> con todos los <li> generados
}

// Función para limpiar el input después de agregar un amigo
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("No hay amigos para sortear."); 
        return; 
        // Validamos que haya nombres en el array antes de sortear
    }

    let indice = Math.floor(Math.random() * listaAmigos.length); 
    // Generamos un índice aleatorio válido para el array

    let amigoSecreto = listaAmigos[indice]; 
    // Obtenemos el nombre correspondiente al índice aleatorio

    let resultadoHTML = document.getElementById("resultado"); 
    resultadoHTML.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`; 
    // Mostramos el resultado en pantalla
}