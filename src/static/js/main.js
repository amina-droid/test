// Ты пирожок <3
    //я тебя люблю ^-^
    // Я тоже тебя люблю :3
var but_signIn = document.querySelector('.but_sign-in')
var email = document.querySelector('#e-m')
let name = document.querySelector('.name')

console.log(name)
console.log(document.querySelector('.name'))
function singIn(){
    name.innerText = email.value
    console.log(name)
}
but_signIn.addEventListener('click', singIn)
