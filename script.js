const form = document.getElementById('form')
const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const email = document.getElementById('email')
const password = document.getElementById('password')
const  inputs = document.querySelectorAll('input')
const showBtn = document.querySelector('#showPassword')

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    vaildateForm();
})
let verifyCount=0;
function checkIfEmpty(inputValue,input,placeholder){
    if(inputValue === ''){
        setError(input,`${placeholder} cannot be empty`)
      
        return true
    }
    return false
}

function vaildateForm(){
    let firstNameValue=firstName.value.trim();
    let lastNameValue=lastName.value.trim();
    let emailValue=email.value.trim();
    let pwdValue=password.value.trim();
    if(!checkIfEmpty(firstNameValue,firstName,'First Name')){
        setSuccess(firstName)
      
    }
    if(!checkIfEmpty(lastNameValue,lastName,'Last Name') ){
        setSuccess(lastName)
      
    }
    checkIfEmpty(pwdValue,password,'Password') || checkPassword(pwdValue);
    checkIfEmpty(emailValue,email,'Email') || checkEmail(emailValue);
    registerSuccessful()
}

function registerSuccessful(){
    var time;
    const formControl = document.getElementsByClassName('form-control')
    var count=0;
    for(var i=0;i< formControl.length;i++){
        if(formControl[i].className ==='form-control success'){
           count++;
        }
    }
   if(count === 4){

    const confetti =document.querySelector('.confetti-container');
    time= setTimeout(()=>{
        confetti.style.visibility = 'visible';
       
    },1000)
    
    setTimeout(function( ) { 
         clearInterval( time );
         firstName.value='';
         lastName.value='';
         email.value='';
         password.value='';
         confetti.style.visibility = 'hidden';
        
         for(var i=0;i< formControl.length;i++){
            formControl[i].classList.remove('success')
        }
     }, 3000);
   }
  }
function checkPassword(passwordValue){
    let re=/[!@#$%_^&*]/g
    if(passwordValue.length < 8){
        setError(password,'Passwords should contain at lease 8 characters')

    }
    else if(!passwordValue.match(re)){
        setError(password,'Passwords should contain special characters')
    }
    else if(!passwordValue.match(/\d/)){
        setError(password,'Passwords should contain numbers')
    }
    else{
        setSuccess(password)
      
    }
  }
function checkEmail(emailValue){
    let regex= /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,20})(\.[a-z]{2,8})?$/
   
     if(!emailValue.includes('@')){
        setError(email,'Please include @ in the email address')
    }
    else if(!regex.test(emailValue)){
        setError(email,'Invalid email address')
    }
    else{
        setSuccess(email)
        
    }
}
function setSuccess(input){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
    if(formControl.classList.contains('error')){
        formControl.classList.remove('error')
        
    } 
    formControl.classList.add('success')
	small.innerText = '';
}
function setError(input, message){
    const formControl = input.parentElement;
  
    const small = formControl.querySelector('small')

    formControl.className = 'form-control error';
	small.innerText = message;
}
showBtn.addEventListener('click',()=>{
    const type = password.getAttribute("type") === "password" ? 'text' : "password";
    password.setAttribute("type",type);
    showBtn.classList.toggle("fa-eye"); 

})
