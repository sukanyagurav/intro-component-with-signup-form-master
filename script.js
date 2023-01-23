const form = document.getElementById('form')
const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const email = document.getElementById('email')
const password = document.getElementById('password')
const  inputs = document.querySelectorAll('input')
const showBtn = document.querySelector('.fa-eye-slash')
const hideBtn = document.querySelector('.fa-eye')
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    vaildateForm();
})

function vaildateForm(){
    let firstNameValue=firstName.value.trim();
    let lastNameValue=lastName.value.trim();
    let emailValue=email.value.trim();
    let pwdValue=password.value.trim();
    let re=/[!@#$%^&*]/g
    if(firstNameValue ===''){
        setError(firstName,'First name cannot be empty')
    }
   
    if(lastNameValue===''){
        setError(lastName,'Last name cannot be empty')
    }

    if(pwdValue ===''){
        setError(password,'Password cannot be empty')
    }
    else{
        
        if(pwdValue.length < 8){
            setError(password,'Passwords should contain at lease 8 characters')
    
        }
        else if(!pwdValue.match(re)){
            setError(password,'Passwords should contain special characters')
        }
        else if(!pwdValue.match(/[0-9]/g)){
            setError(password,'Passwords should contain numbers')
        }
    }
}
function setError(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
    formControl.className = 'form-control error';
	small.innerText = message;
}
showBtn.addEventListener('click',()=>{
    if(password.type === 'password'){
        password.type='text';
        hideBtn.classList.add('show')
        showBtn.classList.add('hide')
        // hideBtn.style.visibility ='visible'
        // showBtn.style.visibility = 'hidden'
    }
    else{
        password.type='password';
        hideBtn.classList.remove('show')
        showBtn.classList.remove('hide')
    }
})
// hideBtn.addEventListener('click',()=>{
//     hideBtn.style.visibility ='hidden'
//     showBtn.style.visibility = 'visible'
// })