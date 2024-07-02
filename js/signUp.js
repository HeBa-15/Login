let userName=document.getElementById('userName');
let email= document.getElementById('email');
let password =document.getElementById('password');
let signUpBtn=document.getElementById('signUpBtn');
let alertMessage=document.getElementById('alertMessage');

let userContainer=[];

if(localStorage.getItem('Users')!=null){
    userContainer=JSON.parse(localStorage.getItem('Users'));
}

function checkInputsEmpty(){
    if (userName.value==''||email.value=='' ||password.value =='' )
        return true;
    else
    return false;
}

function getAlertMessage(text,color){
    alertMessage.classList.replace('d-none','d-block');
    alertMessage.innerHTML=text;
    alertMessage.style.color=color;

}

function clrForm(){
    userName.value='';
    email.value='';
    password.value='';
}

function checkifEmaileExist(){
    for(let i=0;i<userContainer.length;i++){
        if(userContainer[i].email==email.value)
            return true;
    }
}



function signUp()
{
    let data={
        userName:userName.value,
        email:email.value,
        password:password.value

    }

    if(checkInputsEmpty()==true){
        getAlertMessage('All inputs is required', 'red')
        
    }else{
        if(checkifEmaileExist()==true){
            getAlertMessage('email already exists','red')
        }else{

            userContainer.push(data);
            localStorage.setItem('Users',JSON.stringify(userContainer));
            clrForm();
            getAlertMessage('Success', 'green');
    
        }
       
    }
}





signUpBtn.addEventListener('click',signUp)