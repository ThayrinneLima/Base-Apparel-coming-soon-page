var form = document.querySelector('#email')
var iconError = document.querySelector('.error')
var messageError = document.querySelector('.msgErro')
function enviar(){
   
  if(ValidateEmail(form.value))
    {
      iconError.style.display = 'none'
      messageError.style.visibility = 'hidden'
    }else{
       iconError.style.display = 'flex'
       messageError.style.visibility = 'visible'
    }
}

function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    
    return (false)
}

function rest(){
    form.value = ''
    iconError.style.display = 'none'
    messageError.style.visibility = 'hidden'
}