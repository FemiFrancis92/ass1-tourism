function validate() {

let email = document.getElementById("email");
let password = document.getElementById("password");
let errorLabel = document.getElementById("errorlabel");

let regEmail = /^([A-Za-z0-9\.-_]+)@([A-Za-z0-9]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
 let valid = true;



if(email.value.trim()=="") {
   // console.log("error");
   message="Email can not be blank";
   setErrorMsg("email",message);
   valid=false;
}
else if (!email.value.trim().match(regEmail)) {
   message="Email should be in correct format";
   setErrorMsg("email",message);
   valid=false;
}
else {
   setValid("email");
}
if(password.value.trim()=="") {
   message="Password can not be blank";
   setErrorMsg("password",message);
   valid=false;
}
else {
   
      setValid("email");
   
}
setValid
return valid;
}

function setErrorMsg(input,erMessage) {
   let errorid = input+"-error";

   document.getElementById(errorid).innerText = erMessage;
   document.getElementById(input).style.borderColor = "red";
}
function setValid(element){
    
   document.getElementById(element).style.borderColor="green";
   let clearError = element+"-error";
   document.getElementById(clearError).innerText="";
} 

