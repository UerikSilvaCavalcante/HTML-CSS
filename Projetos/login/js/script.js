var bd = document.querySelector("body")
var signin = document.getElementById('sign-in') 
var signup = document.getElementById('sign-up')

signin.addEventListener('click', () => {
    bd.className = 'sign-in-js'
});

signup.addEventListener('click', () => {
    bd.className = 'sign-up-js'
})