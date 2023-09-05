let newPassword = ""
const Trigger = document.getElementById('wf-update-password')
Trigger.addEventListener('change', (e) => {return newPassword = e.target.value})

async function listenForTriggers(newPassword){
    const timer = setInterval(() => {
       let done = check(assword)
       if(done) {
        clearInterval(timer)
        record(newPassword)
       } else {check(newPassword)}
    }, 500);
}

function check (e,p)  {
    if(e !="" && p !="") { return true } else {return false}
}

async function record(newPassword) {
    let data = {
        'p':newPassword
    }
    console.log(data)
    uri = 'https://energyscore-test.azurewebsites.net/user/update'
    // fetch(uri, {
    //     method: "POST",
    //     headers: {
    //         'Conetent-Type': 'application/json',
    //         'Access-Control-Allow-Origin': "*"
    //     },
    //     body: JSON.stringify(data)
    // })
    //     .then(() => console.log('all good'))
    //     .catch((err) => console.log('The following Error', err, ' occurred'))
    }