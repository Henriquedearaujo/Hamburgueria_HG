$(document).ready(function () {
    $("#telefone").mask("(00) 0000-0000");

    $("form").validate({
        rules: {
            nome: {
                required: true,
            },
            email: {
                required: true,
                email: true,
            },
            telefone: {
                required: true,
            },
            menssagem: {
                required: true,
            },
        },
        messages: {
            nome: {
                required: "Por favor, informe seu nome.",
            },
            email: {
                required: "É necessário informar um email valido.",
            },
            telefone: {
                required: "Por favor digite um numero para contato.",
            },
            menssagem: {
                required: "A mensagem não pode ficar em branco.",
            },
        },
    });
});
