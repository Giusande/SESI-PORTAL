let userLogado = JSON.parse(localStorage.getItem('userLogado'))

if(localStorage.getItem('token') == null){
  alert('Você precisa fazer o login para acessar esse site!');
  window.location.href = "./login/index.html"
}

let logado = document.querySelector('#logado')

logado.innerHTML = 'Olá, ' + userLogado.nome;

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