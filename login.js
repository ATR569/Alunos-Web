const formulario = document.getElementById('formulario')

formulario.addEventListener('submit', function (e) {
    e.preventDefault()
    e.stopPropagation();
    const url = URL_BASE + '/api/login'
    formulario.classList.add('was-validated');

    const formData = new FormData(this)

    if (formulario.checkValidity()) {
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({ "data": formData })
        }).then(async responseStream => {
            const data = await responseStream.json()
            alert(data.access_token)
            window.location.href = "./index.html";
        }).catch(error => console.log(error))
    }
}, false)
