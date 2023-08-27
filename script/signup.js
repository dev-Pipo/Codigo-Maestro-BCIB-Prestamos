//VALIDACION INICIO DE SESION
const username = document.getElementById('username')
const password = document.getElementById('password')
const button = document.getElementById('button-login1')

button.addEventListener('click'), (e) => {
    e.preventDefault()
    const data = {
        username: username.value ,
        password: password.value
    }

    window.location = 'profile.html';
    console.log(data)
}