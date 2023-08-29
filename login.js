const form = document.getElementById('form');
const usuario = document.getElementById('usuario');
const senha = document.getElementById('senha');


form.addEventListener('submit', e => { 
    e.preventDefault();

    validateInputs();
    
})

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');

}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const isValidEmail = email => {
    const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usuarioValor = usuario.value.trim();
    const senhaValor = senha.value.trim();

    if (usuarioValor === ''){
        setError(usuario, 'O usuário é obrigatório.');
    } else{
        setSuccess(usuario);
    }

    if (senhaValor === ''){
        setError(senha, 'A senha é obrigatória.');
    } else {        
        setSuccess(senha);
    }
}

function telaCadastro(){
    window.location="cadastro.html"
}