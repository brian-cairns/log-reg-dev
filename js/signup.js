let data = {}
let error = document.getElementById('error')
error.style.display = "none"
const baseUrl = "https://energyscore-be.azurewebsites.net"

let email = ''
let password = ''
let name = ''
let streetAddress = ''
let city = ''
let state = ''
let zip = ''
let address = {}

let getemail = document.getElementById('email')
getemail.addEventListener('change', (e) => {
    console.log(e)
    console.log(e.target)
    console.log(e.target.value)
    email = e.target.value
})

let getpassword = document.getElementById('password')
getpassword.addEventListener('change', (e) => {
    console.log(e)
    console.log(e.target)
    console.log(e.target.value)
    password = e.target.value
})

let getname = document.getElementById('name')
getname.addEventListener('change', (e) => {
    console.log(e)
    console.log(e.target)
    console.log(e.target.value)
    name = e.target.value
})

let getaddress = document.getElementById('streetAddress')
getaddress.addEventListener('change', (e) => {
    console.log(e)
    console.log(e.target)
    console.log(e.target.value)
    streetAddress = e.target.value
})

let getcity = document.getElementById('city')
getcity.addEventListener('change', (e) => {
    console.log(e)
    console.log(e.target)
    console.log(e.target.value)
    city = e.target.value
})

let getstate = document.getElementById('state')
getstate.addEventListener('change', (e) => {
    console.log(e)
    console.log(e.target)
    console.log(e.target.value)
    state = e.target.value
})

let getzip = document.getElementById('zip')
getzip.addEventListener('change', (e) => {
    console.log(e)
    console.log(e.target)
    console.log(e.target.value)
    zip = e.target.value
})

const stdHeaders = {
    'Content-Type': 'x-www-form-encoded',
    'Access Control Allow Origin': '*'
}

const register = document.getElementById('register')

register.addEventListener ('click', (e) => {
 console.log(e)
 console.log(e.target)
})
    


async function sendForm(data) {
    let uri = baseUrl + '/register'
    console.log('sending ', data, ' to ', uri, ' and awaiting a reply')
    let result
    let options = {
        method: "POST", 
        headers: {
            "Content-Type": "application/json",
            'Access Control Allow Origin': '*',
            'Cross-Origin-Resource-Policy': 'same-site' | 'same-origin' | 'cross-origin'
        },
        body: JSON.stringify(data),
        mode: 'no cors'
    }
    try {
        await fetch(url, options)
            .then((response) => response.json())
            .then((body) => result = body)
    } catch (error) {
        console.log(error)
        result = error
    }
    console.log(result)
    return result
}

/*
('submit', async () => {
    console.log(email != '' && password != '' && name != '' && streetAddress != '' && city != '' && state != '' && zip != '')
    if(email != '' && password != '' && name != '' && streetAddress != '' && city != '' && state != '' && zip != '') {
        address = {
            'street': streetAddress,
            'city': city,
            'state' : state,
            'zip' : zip
        }
        data = {
            'name': name,
            'email' : email,
            'password' : password,
            'address': address
        }
        sendForm(data)*/

