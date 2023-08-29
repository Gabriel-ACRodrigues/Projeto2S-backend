const form = document.getElementById('form');
const nome = document.getElementById('nome');
const nasc = document.getElementById('nasc');
const cpf = document.getElementById('cpf');
const mae = document.getElementById('mae');
const email = document.getElementById('email');
const genero = document.getElementById('genero');
const tel = document.getElementById('tel');
const cel = document.getElementById('cel');
const endereco = document.getElementById('endereco');
const usuario = document.getElementById('usuario');
const senha1 = document.getElementById('senha1');
const senha2 = document.getElementById('senha2');
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

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
    const nomeValor = nome.value.trim();
    const nascValor = nasc.value.trim();
    const cpfValor = cpf.value.trim();
    const maeValor = mae.value.trim();
    const emailValor = email.value.trim();
    const generoValor = genero.value.trim();
    const telValor = tel.value.trim();
    const celValor = cel.value.trim();
    const enderecoValor = endereco.value.trim();
    const usuarioValor = usuario.value.trim();
    const senha1Valor = senha1.value.trim();
    const senha2Valor = senha2.value.trim();
    var x = 0;

    if (nomeValor === ''){
        setError(nome, 'O nome é obrigatório.');
    } else if(nomeValor.length < 15){
        setError(nome, 'Mínimo 15 caracteres.')
    } else{
        setSuccess(nome);
        x++;
    }

    if (nascValor === ''){
        setError(nasc, 'A data de nascimento é obrigatória.');
    } else{
        setSuccess(nasc);
        x++;
    }

    if (cpfValor === ''){
        setError(cpf, 'O CPF é obrigatório.');
    } else if (cpfValor.length < 14){
        setError(cpf, "CPF incompleto.")
    } else{
        setSuccess(cpf);
        x++;
    }

    if (maeValor === ''){
        setError(mae, 'O nome da mãe é obrigatório.');
    } else if(maeValor.length < 15){
        setError(mae, 'Mínimo 15 caracteres.')
    } else{
        setSuccess(mae);
        x++;
    }

    if (emailValor === ''){
        setError(email, 'O e-mail é obrigatório.');
    } else if (!isValidEmail(emailValor)){
        setError(email, 'Insira um e-mail válido.')
    } else{
        setSuccess(email);
        x++;
    }

    if (generoValor === ''){
        setError(genero, 'O gênero é obrigatório.');
    } else{
        setSuccess(genero);
        x++;
    }

    if (telValor === ''){
        setError(tel, 'O telefone fixo é obrigatório.');
    } else if (telValor.length < 14){
        setError(tel, 'Telefone completo.')
    } else{
        setSuccess(tel);
        x++;
    }

    if (celValor === ''){
        setError(cel, 'O telefone celular é obrigatório.');
    } else if (celValor.length < 15){
        setError(cel, 'Celular incompleto.')
    } else{
        setSuccess(cel);
        x++;
    }

    if (enderecoValor ===''){
        setError(endereco, 'O endereço é obrigatório')
    } else {
        setSuccess(endereco);
        x++;
    }

    if (usuarioValor === ''){
        setError(usuario, 'O usuário é obrigatório.');
    } else if (usuarioValor.length < 6){
        setError(usuario, 'O usuário deve conter exatamente 6 letras')
    } else{
        setSuccess(usuario);
        x++;
    }

    if (senha1Valor === ''){
        setError(senha1, 'A senha é obrigatória.');
    } else if (senha1Valor.length < 8){
        setError(senha1, 'A senha deve conter exatamente 8 letras')
    } else{
        setSuccess(senha1);
        x++;
    }

    if (senha2Valor === ''){
        setError(senha2, 'A confirmação de senha é obrigatória.');
    } else if (senha1Valor !== senha2Valor){
        setError(senha2, 'As senhas não são iguais.');
    } else {        
        setSuccess(senha2);
        x++;
    }

    if (x === 12){
        return true;
    }


}

function store(){
    if (validateInputs()){
        var usuario = document.getElementById('user').value;
        var senha = document.getElementById('senha2').value;
        localStorage.setItem("username",usuario);
        localStorage.setItem("password",senha);
        window.location="login.html";
    }
}

/* Ajustar o formato do CPF */
function ajustaCpf(v) {
    v.value = v.value.replace(/\D/g, "");
    v.value = v.value.replace(/^(\d{3})(\d)/, "$1.$2");
    v.value = v.value.replace(/(\d{3})(\d)/, "$1.$2");
    v.value = v.value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}

/* Ajustar o formato do telefone */

function ajustaTelefone(v) {
    v.value = v.value.replace(/\D/g, "");
    v.value = v.value.replace(/^(\d\d)(\d)/g, "($1) $2");
    v.value = v.value.replace(/(\d{4})(\d)/, "$1-$2");
}

/* Ajusta o usuário e a senha para que aceitem apenas letras */

function ajustaUsuario(v) {
    v.value = v.value.match(/^[A-Za-z]+$/,"");
 }

 function telaLogin(){
    window.location="login.html"
 }