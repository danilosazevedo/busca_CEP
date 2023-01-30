$(document).ready(function () {

    $('#CEP').mask('00000-000')

    $('#btn-consulta').click(function () {
        const cep = $('#CEP').val()
        const endpoint = `https://viacep.com.br/ws/${cep}/json`;

        $.ajax(endpoint).done(function (resposta) {
            const rua = resposta.logradouro;
            const bairro = resposta.bairro;
            const cidade = resposta.localidade;
            const estado = resposta.uf;

            $('#btn-consulta').addClass('d-none')
            $('#pesquisando').removeClass('d-none');

            setTimeout(function () {
                $('#btn-consulta').removeClass('d-none')
                $('#pesquisando').addClass('d-none');
                const endereco = (`${rua}, ${bairro}, ${cidade}/${estado}`)

                $('#endereco').val(endereco)
            }, 1000)
        })
    })
})