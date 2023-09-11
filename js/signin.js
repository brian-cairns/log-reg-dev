let email = ''
let password = ''
const baseUrl = "https://energyscore-be.azurewebsites.net"

let message = document.getElementById('error')
message.style.display = 'none'

let loginButton = document.getElementById('login')
loginButton.addEventListener('click', async (e) => {
    let action = 'login'
    console.log(e.target.value)
    console.log('login email: ', email)
    console.log('password: ', password)
    let validation = {
        'email': email,
        'password': password
    }
    let valid = {}
    console.log('validation: ', validation)
    let uri = baseUrl + '/' + action
    try {
        await fetch(uri, {
            method: "POST",
            headers: {
                "Content-Type": 'application/json',
                "Access-Control-Allow-Origin": '*'
            },
            body: JSON.stringify(validation)
        })
            .then((res) => res.json())
            .then((data) => {
                valid = data
                console.log(valid)
            })
          
    } catch (error) {
        console.log(error)
    }
})

let emailField = document.getElementById('email')
emailField.addEventListener('change', (event) => {
    console.log(event.target.value)
    email = event.target.value
})

let passwordField = document.getElementById('password')
passwordField.addEventListener('change', (event) => {
    console.log(event.target.value)
    password = event.target.value
})



const data = {
    'email': email,
    'password' : password
}

