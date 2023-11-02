var x = document.querySelector('#x');
var menu = document.querySelector('#menu');
var navbar = document.querySelector('.mobile');

menu.onclick = () => {
    navbar.classList.add("active");
};

x.onclick = () => {
    navbar.classList.remove("active");
};