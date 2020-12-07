function selectId(id) {
    return document.getElementById(id);
}

function empty(input) {
    return input.value.trim() === "";
}

function errorMessage(message) {
    errorListUl.innerHTML += "<li>" + message + "</li>";
}

let form = selectId('contato-form');
let nome = selectId('nome');
let email = selectId('email');

let errorListUl = document.querySelector('#error-list ul');
let errorList = selectId('error-list');


form.addEventListener("submit", function(evento) {
    errorListUl.innerHTML = "";
    if (empty(nome)) {
        errorMessage("Campo <b>nome</b> não preenchido");
    } else if (empty(email)) {
        errorMessage("Campo <b>email</b> não preenchido");
    } else if (empty(mensagem)) {
        errorMessage("Campo <b>mensagem</b> não preenchido");
    } else {
        alert("Prezado " + nome.value + " o seu email: " + email.value + " foi cadastrado, entraremos em contato!");
    };

    if (errorList.querySelectorAll('li').length > 0) {
        evento.preventDefault();
        errorList.hidden = "";
    };

});



    