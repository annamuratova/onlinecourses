let form = document.forms.form;
let email = form.elements.email;
let password = form.elements.password;
let registr =  document.forms.sign_up;
let registrEmail = registr[2];


registr.addEventListener('submit', function(event){
  event.preventDefault();
      let error = document.createElement('span');
      if (!registrEmail.value.includes('@gmail.com')) { 
       error.innerHTML = 'Please enter a valid email.';
       error.className = "error";
       registrEmail.after(error);
      }
      registrEmail.onfocus = ()=>{
        error.remove();
        this.value = '';
      }
  
})

form.addEventListener('submit', function(event){
  event.preventDefault();
  let error = document.createElement('span');
  if(email.value == ''){
    error.innerHTML = 'fill in these fields';
    error.className = "error";
    email.after(error);
  }
   else if (!email.value.includes('@gmail.com')) { 
     error.innerHTML = 'Please enter a valid email.';
     error.className = "error";
     email.after(error);
    }
    email.onfocus = ()=>{
          error.remove();
          email.value = '';
        }
      
      valid(password, error); 
}
)


function valid (input, error){
  if(input.value == ''){
    error.innerHTML = 'fill in these fields';
    error.className = "error";
    input.after(error);
  }
  input.onfocus = ()=>{
    error.remove();
    input.value = '';
  }
}
