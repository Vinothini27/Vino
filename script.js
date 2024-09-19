// Get data 
const form = document.querySelector('#form');
const username= document.querySelector('#username');
const email= document.querySelector('#email');
const password = document.querySelector('#password');
const cpassword= document.querySelector('#cpassword');


form.addEventListener('register',(e)=>{
    e.preventDefault(); 
    ValidateInputs();


})


function ValidateInputs(){
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();

    if(usernameVal===''){
        setError(username,'Username is required')
    }
    else{
        setSuccess(username)
    }

    if(email===''){
        setError(email,'Email is required')
    }
    else if(!ValidateEmail(emailVal)){
    setError(email,'Please enter a valid email')
    }
    else{
        setSuccess(email)
    }

    if(password===''){
        setError(password,'Password is required')
    }
    else if(passwordVal.length<8){
        setError(password,'Password must be atleast 8 characters long')
    }
    else{
        setSuccess(password)
    }

    if(cpassword===''){
        setError(cpassword,'Confirm password is required')
    }
    else if(cpasswordVal!==passwordVal){
    setError(cpassword,'password does not match')
    }
    else{
        setSuccess(cpassword)
    }

        
    


}

//element - password, msg- pwd is reqd
function setError(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}

function setSuccess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = '';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
    }


































