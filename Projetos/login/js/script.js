var bd = document.querySelector("body")
var signin = document.getElementById('sign-in') 
var signup = document.getElementById('sign-up')

signin.addEventListener('click', () => {
    if (bd.classList.contains('sign-up-js')) {
        bd.classList.remove('sign-up-js')
    }
    bd.classList.add('sign-in-js')
});

signup.addEventListener('click', () => {
    bd.classList.remove('sign-in-js')
    bd.classList.add('sign-up-js')
})

// var tema = document.getElementById('ibtn-tema')

// tema.addEventListener('click', ()=> {

//     tema.innerHTML = '<i class="fa-regular fa-moon"></i>'
// })
