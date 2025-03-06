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
function actualizarListaAmigos() {
    let listaElement = document.getElementById("listaAmigos");
    listaElement.innerHTML = "";
    
    listaAmigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        listaElement.appendChild(li);
    });
}
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }
    
    let indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    let amigoSecreto = listaAmigos[indiceSorteado];
    
    let resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSecreto}</strong> 🎉</li>`;
}
