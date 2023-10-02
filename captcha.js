function validarRespuesta() {
    var respuestaUsuario = document.getElementById('respuesta').value.toLowerCase();
    
    if (respuestaUsuario === 'comer') {
        window.location.href = 'carta.html';
    } else {
        alert('Respuesta incorrecta. Intenta de nuevo.');
    }
}