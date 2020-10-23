const formulario = $('#formulario')[0]
const url = URL_BASE + '/api/alunos'

formulario.addEventListener('submit', event => {
    event.preventDefault()
    event.stopPropagation();

    formulario.classList.add('was-validated');

    const formData = new FormData(formulario)

    if (formulario.checkValidity()) {
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({ "data": formData })
        }).then(async responseStream => {
            const data = await responseStream.json()
            
            console.log(data)
            alert(`Aluno cadastrado: ${data.nome}`)
            
            window.location.href = "./index.html";
        }).catch(error => console.log(error))
    }
}, false)
