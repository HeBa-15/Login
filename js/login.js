let emailLogin=document.getElementById('emailLogin');
let passwordLogin=document.getElementById('passwordLogin');
let loginBtn= document.getElementById('loginBtn');
let alertMessage= document.getElementById('alertMessage');

let userContainer=[];

if(localStorage.getItem('Users')!=null){
    userContainer=JSON.parse(localStorage.getItem('Users'))
}

function getAlertMessage(text,color){
    alertMessage.classList.replace('d-none','d-block');
    alertMessage.innerHTML=text;
    alertMessage.style.color=color;

}

function checkInputsEmpty(){
    if (emailLogin.value=='' || passwordLogin.value =='' )
        {
            return true;
        }
    else{
        return false;
    }
    
}

function checkEmailPassword(){
    for(let i=0;i<userContainer.length;i++){
        if (userContainer[i].email==emailLogin.value && userContainer[i].password== passwordLogin.value){
            localStorage.setItem('userName',userContainer[i].userName)
            return true;
        }
    }
}


function login() {
    if(checkInputsEmpty() == true)
    {
       
        getAlertMessage('All inputs is required','red')
    }
    else
    {
        if(checkEmailPassword() == true)
        {
          
            window.location.href='home.html';
        }
        else
        {
            
            getAlertMessage('incorrect email or password','red');
        }
    }
   
}

loginBtn.addEventListener('click',login);