const emailHTML = document.getElementById('email')
const errorHTML = document.getElementById('error')
const formularioHTML = document.getElementById('formulario')

const validarEmail = () => {
  if(emailHTML.value == '') {
    errorHTML.innerHTML = `
    "¡Vaya! Agregue su correo electrónico"
    `
}else if(emailHTML.value.includes('@') && emailHTML.value.includes('.com')) {
    errorHTML.innerHTML = `
    "Bienvenido"
    `
}else{
    errorHTML.innerHTML = `
    "¡Vaya! Por favor, revise su correo electrónico"
    `
}
}

formularioHTML.addEventListener('submit', (event)=>{
       event.preventDefault()
       validarEmail()
    })
