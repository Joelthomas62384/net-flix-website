let email = document.getElementById('email')
let label = document.getElementById('email-label')


email.addEventListener('focus',()=>{
    label.classList.add('active')
})

email.addEventListener('blur',()=>{
    label.classList.remove('active')
})