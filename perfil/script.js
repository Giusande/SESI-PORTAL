let userLogado = JSON.parse(localStorage.getItem('userLogado'))

if(localStorage.getItem('token') == null){
  window.location.href = "../login/"
}

let logado = document.querySelector('#logado')

logado.innerHTML = 'Olá, ' + userLogado.nome;

let nome = document.querySelector('#nome')
let email = document.querySelector('#email')

nome.innerHTML = 'Olá, ' + userLogado.nome;

email.innerHTML = userLogado.user;

var x = document.querySelector('#x');
var menu = document.querySelector('#menu');
var navbar = document.querySelector('.mobile');

menu.onclick = () => {
    navbar.classList.add("active");
};

x.onclick = () => {
    navbar.classList.remove("active");
};

function logout(){
  localStorage.removeItem('token');
  window.location.href = "https://giusande.github.io/SESI-PORTAL/"
}

var perfilog = document.getElementById("perfil-log");
perfilog.addEventListener('click', () => {
  window.location.href = "../perfil/"
})
