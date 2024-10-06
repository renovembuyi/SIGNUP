const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobSelect = document.querySelector("#job");
const messageTextarea = document.querySelector("#message");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    //Verifica se o nome está vazio
    if (nameInput.value === "") {
        alert("Por favor, preencha o teu nome");
        return;
    }

    //Verifica se o e-mail está preenchido e se é válido
    if(emailInput.value === "" || !isEmailValid(emailInput.value)) {
        alert("Por favor, preencha corretamente o teu email");
        return;
    }

    //Verifica se a senha está preenchida
    if(passwordInput.value === "" || !validatePassword(passwordInput.value, 8)) {
        alert("A tua senha precisa ter 8 digitos")
        return;
    }

    //Verificar se a situação foi selecionada
    if(jobSelect.value === "") {
        alert("Por favor, selecione a tua situação");
        return;
    }

    //Verificar se a mensagem está preenchida
    if(messageTextarea.value === "" || !sendMessage(messageTextarea.value, 20)) {
        alert("Texto minimum 20 caracteres");
        return;

    }

    if(messageTextarea.value === "" || !setMessage(messageTextarea.value, 50)) {
        alert("Texto maximum 50 caracteres");
        return;

    }

    //Se todos os campos estiverem corretamente preenchidos, envie o form
    form.submit();
});

//Função que valida e-mail
function isEmailValid(email) {

    //cria uma regex para validar email
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );
    
    if(emailRegex.test(email)) {
        return true;
    }

    return false;
}

//Função que valida a senha
function validatePassword(password, minDigits) {
    if(password.length >= minDigits) {
        // Senha válida
        return true;
    }

    return false;
}

// Função que valida a mensagem
function sendMessage(message, minDigits) {
    if(message.length >= minDigits) {
        //Mensagem enviada
        return true;
    }

    return false;
}

function setMessage(message, maxDigits) {
    if(message.length <= maxDigits) {
        //Mensagem enviada
        return true;
    }

    return false;
}

