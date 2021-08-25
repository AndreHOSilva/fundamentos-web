/*
Aqui em java js tem essas maneiras para instanciar uma variável, o motivo dessas # é por que no caso de email
e do assunto eles são puxados pelo id, se fosse uma classe eu usaria o .
Outros métodos de chamar :
por tag :
let nome = window.document.getElementByTagName("nome")
por id :
window.document.getElementById("nome")
por nome :
window.document.getElementByName("nome")
por classe :
window.document.getElementByClassName("nome")
por seletor :
window.document.querySelector("nome")
*/
let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'
//Ao invés de utilizar o css eu faço direto por aqui.

//função para tamanho do nome
function validaNome(){
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3){
        txtNome.innerHTML = 'Nome inválido'
        txtNome.style.color = 'red'
    }else{
        txtNome.innerHTML = 'Nome válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}    

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
    }else{
        txtEmail.innerHTML = 'E-mail válido'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}  
function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')
    if(assunto.value.length >= 100){
        txtAssunto.innerHTML = 'Texto muito grande máximo de 100 autorizado'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    }else{
        txtAssunto.style.display = 'none'
        txtAssunto.style.color = 'green'
        assuntoOk = true
    }
}
function enviar(){

    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert('Formulário enviado com sucesso')
    }else{
        alert('Formulário não enviado, revise os campos')
    }
}
function mapazoom(){
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}
function mapanormal(){
    mapa.style.width = '300px'
    mapa.style.height = '150px'
}