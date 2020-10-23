const toRow = aluno => {
    const tr = $('<tr>')
    const id = $('<td>').html(aluno.id)
    const name = $('<td>').html(aluno.nome)
    const email = $('<td>').html(aluno.email)
    const btnDetalhes = $('<td>').append($('<button>').addClass('button-detalhes btn btn-primary').html('Detalhes'))
    
    const url = `${URL_BASE}/api/alunos/${aluno.id}`
    
    btnDetalhes.on('click', event => {
        event.preventDefault()

        fetch(url)
            .then(response => response.json())
            .then(aluno => console.log(aluno))
            .catch(error => console.log(error))
    })

    tr.append(id).append(name).append(email).append(btnDetalhes)

    return tr
}

const getAlunos = () => {
    const url = URL_BASE + '/api/alunos'

    fetch(url)
        .then(response => response.json())
        .then(alunos =>
            alunos.map(aluno => toRow(aluno))
        )
        .then(rows => {
            const table = $('#body-tabela')

            rows.forEach(row => {
                table.append(row)
            })
        })
        .catch(error => console.log(error))
}

getAlunos()