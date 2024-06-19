let email = document.getElementById('email')
let label = document.getElementById('email-label')


email.addEventListener('focus',()=>{
    label.classList.add('active')
})

email.addEventListener('blur',()=>{
    label.classList.remove('active')
})



let mail2 = document.getElementById('email2')
let label2 = document.getElementById('email-label2')
mail2.addEventListener('focus',()=>{
    label2.classList.add('active')
})

mail2.addEventListener('blur',()=>{
    label2.classList.remove('active')
    
})