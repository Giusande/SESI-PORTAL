var logLog = document.querySelector(".login");
var cadLog = document.querySelector(".cadastro");
var logCad = document.querySelector(".log-cad");
var cadEnt = document.querySelector(".cad-ent");

cadEnt.addEventListener('click', function(){
  logLog.style.display = "block"
  cadLog.style.display = "none"
});

logCad.addEventListener('click', function(){
  logLog.style.display = "none"
  cadLog.style.display = "block"
});

function entrar(){
  let usuario = document.querySelector('#usuario')
  let senha = document.querySelector('#senha')
  
  let msgError = document.querySelector('#msgError')
  let msgError1 = document.querySelector('#msgError1')
  let listaUser = []
  
  let userValid = {
    nome: '',
    user: '',
    senha: ''
  }
  
  listaUser = JSON.parse(localStorage.getItem('listaUser'))
  
  listaUser.forEach((item) => {
    if(usuario.value == item.user && senha.value == item.senha){
       
      userValid = {
         nome: item.nome,
         user: item.user,
         senha: item.senha
       }
      
    }
  })
   
  if(usuario.value == userValid.user && senha.value == userValid.senha){
    window.location.href = 'https://giusande.github.io/SESI-PORTAL/'
    
    let mathRandom = Math.random().toString(16).substr(2)
    let token = mathRandom + mathRandom
    
    localStorage.setItem('token', token)
    localStorage.setItem('userLogado', JSON.stringify(userValid))
    msgError.innerHTML = 'Sucesso!'
    msgError1.innerHTML = 'Sucesso!'
    msgError.style.color = 'green'
    msgError1.style.color = 'green'
  } else {
    msgError.innerHTML = 'Usuário ou senha incorretos'
    msgError1.innerHTML = 'Usuário ou senha incorretos'
    msgError.style.color = 'red'
    msgError1.style.color = 'red'
    usuario.focus()
  }
}

let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let usuario1 = document.querySelector('#usuario1')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false

let senha1 = document.querySelector('#senha1')
let labelSenha1 = document.querySelector('#labelSenha1')
let validSenha = false

let confirmSenha = document.querySelector('#confirmSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmSenha = false

let errinho = document.querySelector('#errinho')

nome.addEventListener('keyup', () => {
  if(nome.value.length <= 2){
    labelNome.setAttribute('style', 'color: red')
    labelNome.innerHTML = 'Nome *Insira no minimo 3 caracteres'
    validNome = false
  } else {
    labelNome.setAttribute('style', 'color: #000000')
    labelNome.innerHTML = 'Nome'
    validNome = true
  }
})

usuario1.addEventListener('keyup', () => {
  if(usuario1.value.length <= 4){
    labelUsuario1.setAttribute('style', 'color: red')
    labelUsuario1.innerHTML = 'E-mail *Insira no minimo 5 caracteres'
    validUsuario = false
  } else {
    labelUsuario1.setAttribute('style', 'color: #000000')
    labelUsuario1.innerHTML = 'E-mail'
    validUsuario = true
  }
})

senha1.addEventListener('keyup', () => {
  if(senha1.value.length <= 7){
    labelSenha1.setAttribute('style', 'color: red')
    labelSenha1.innerHTML = 'Senha *Insira no minimo 8 caracteres'
    validSenha = false
  } else {
    labelSenha1.setAttribute('style', 'color: #000000')
    labelSenha1.innerHTML = 'Senha'
    validSenha = true
  }
})

confirmSenha.addEventListener('keyup', () => {
  if(senha1.value != confirmSenha.value){
    labelConfirmSenha.setAttribute('style', 'color: red')
    labelConfirmSenha.innerHTML = 'Confirme senha *As senhas não conferem*'
    validConfirmSenha = false
  } else {
    labelConfirmSenha.setAttribute('style', 'color: #000000')
    labelConfirmSenha.innerHTML = 'Confirme senha'
    validConfirmSenha = true
  }
})

function cadastrar(){
  if(validNome && validUsuario && validSenha && validConfirmSenha){
    let listaUser = JSON.parse(localStorage.getItem('Usuario') || '[]')
    
    listaUser.push(
    {
      nome: nome.value,
      user: usuario1.value,
      senha: senha1.value
    }
    )
    
    localStorage.setItem('listaUser', JSON.stringify(listaUser))
    
    setTimeout(()=>{
        logLog.style.display = "block"
        cadLog.style.display = "none"
    }, 1000)
  
  } else {
    errinho.innerHTML = 'Todos os campos devem está preenchidos corretamente, verique-os novamente!'
    errinho.setAttribute('style', 'color: red')
  }
}