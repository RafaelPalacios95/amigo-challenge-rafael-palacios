// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Variables para definir el arreglo de la lista  amigos.
let listaAmigos = [];

//Función para asignar texto en un elemento de html
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

//Funcion para quitar la lista de amigos
function limpiarTexto(elemento) {
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.value = "";
    return;
}

//Función para limpiar el texto del input
function limpiarLista() {
    let elementoHTML = document.getElementById("listaAmigos");
    while (elementoHTML.firstChild) {
        elementoHTML.removeChild(elementoHTML.firstChild);
    }
    return;
}

//Función para mostrar la lista de amigos
function actualizarLista(arreglo){
    let lista = document.getElementById("listaAmigos");
    listaAmigos.forEach(function(elemento) {
        listaElemento = document.createElement('li');
        listaElemento.textContent = elemento;
        lista.appendChild(listaElemento);
    });
}

//Funcion para agregar un amigo a la lista
function agregarAmigo(){
    asignarTextoElemento("resultado","");
    limpiarLista();

    let amigoAgregar = document.getElementById('amigo').value;
    if(amigoAgregar){
        listaAmigos.push(amigoAgregar);
        console.log(listaAmigos);
        actualizarLista(listaAmigos);
    }
    else{
        alert("Agregar texto");
    }
    limpiarTexto("amigo");
}

//Funcion para realizar el sorteo del amigo
function sortearAmigo(){
    limpiarLista();    

    if(listaAmigos != ""){
        let numeroAzar = Math.floor(Math.random()*listaAmigos.length);
        let AmigoSorteado = listaAmigos[numeroAzar];
        console.log(AmigoSorteado);

        asignarTextoElemento("resultado", `El amigo secreto es: ${AmigoSorteado}`);
        // listaAmigos = [];
    }
    else{
        alert("No se han agregando amigos");
    }


}
