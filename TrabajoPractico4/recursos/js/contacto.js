const formContacto = document.getElementById("form-contacto")

formContacto.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const nombre = document.getElementById("id-nombre").value;

    alert(`Gracias ${nombre}. Tu consulta ha sido enviada con exito. Nos pondremos en contacto a la brevedad.`)
    formContacto.reset();
})