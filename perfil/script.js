if(localStorage.getItem('token') == null){
    window.location.href = '../login/'
}

var x = document.querySelector('#x');
var menu = document.querySelector('#menu');
var navbar = document.querySelector('.mobile');

menu.onclick = () => {
    navbar.classList.add("active");
};

x.onclick = () => {
    navbar.classList.remove("active");
};

let nome = document.querySelector('#nome')
let email = document.querySelector('#email')
let userLogado = JSON.parse(localStorage.getItem('userLogado'))

nome.innerHTML = 'Olá, ' + userLogado.nome;

email.innerHTML = userLogado.user;

function logout(){
  window.location.href = '../login/'
}

perfilog.addEventListener('click', () => {
  window.location.href = "./perfil/"
})
