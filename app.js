// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value.trim();
    
    if (nombreAmigo === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }
    
    if (listaAmigos.includes(nombreAmigo)) {
        alert("Este nombre ya fue agregado.");
        return;
    }
    
    listaAmigos.push(nombreAmigo);
    actualizarListaAmigos();
    inputAmigo.value = "";
}
