async function loginFormHandler(e) {

    e.preventDefault()
    
    const email = document.querySelector('#email-login').value.trim()
    const password = document.querySelector('#password-login').vale.trim()

    if (email && password) {
        const res = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        })

        if (res.ok) {
            document.location.replace('/')
        }else {
            alert(res.statusText)
        }
    }
}

async function signupFormHander(e) {
    
    e.preventDefault()

    const username = document.querySelector('#username-signup')
    const email = document.querySelector('#email-signup').value.trim()
    const password = document.querySelector('#password-signup').value.trim()
    const adminChecked = document.querySelector('#admin')

    if (username && password && email) {
        let admin = false

        if (adminChecked.checked) {
            admin = true
        }else {
            admin = false
        }

        const res = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                password,
                admin
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (res.ok) {
            document.location.replace('/')
        }else {
            alert(res.statusText)
        }
    }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHander)
document.querySelector('login-form').addEventListener('submit', loginFormHandler)