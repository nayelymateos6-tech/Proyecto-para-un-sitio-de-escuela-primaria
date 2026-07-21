function abrirModal() {
    document.getElementById("modal").style.display = "flex";
}

function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}

window.onclick = function(event) {
    let modal = document.getElementById("modal");

    if (event.target == modal) {
        modal.style.display = "none";
    }
}