function validatefn() {
    try {
    
        let firstName = document.getElementById("firstname");
        let lastName = document.getElementById("lastname");
        let emailId = document.getElementById("email");
        let password = document.getElementById("psw");
        let rePassword = document.getElementById("psw-repeat");
        let mobileNum = document.getElementById("mobilenum");
        let message; 
        let color;



        let regFirstName = /[a-zA-Z]+/;
        let regLastName = /[a-zA-Z]+/;
        let regEmail = /^([A-Za-z0-9\.-_]+)@([A-Za-z0-9]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
        let regMobile1 = /[0-9]{10}/;
        let regMobile2 = /([0-9]{3}[- .]){2}([0-9]{4})/;
        // let regPswPoor = /[a-zA-Z]/;
        // let regPswMedium = /[[a-zA-Z0-9]+([a-zA-Z!,@,#,$,%,^,&,*,?,_,~,-,(,)])+]/;
        // let regPswStrong = /([a-zA-Z0-9!,@,#,$,%,^,&,*,?,_,~,-,(,)])/;

        let regChar=/[a-zA-Z]+/;
        let regInteger=/\d+/;
        let regSpecialChar=/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;


        let errorOccurred=false;

        if(firstName.value.trim() == "") {
            message="Firstname can not be blank";
            setErrorMsg("firstname",message);
            errorOccurred = true;
        }
        else if(!(regFirstName.test(firstName.value.trim()))){
            message="Enter valid name";
            setErrorMsg("firstname",message);
            errorOccurred = true;
          
        }
        else{
            setValid("firstname");
        }


        if(lastName.value.trim() == "") {
            message="Lastname can not be blank";
            setErrorMsg("lastname",message);
            errorOccurred = true;

        }
        else if (!(regLastName.test(lastName.value.trim()))){
            message="Enter valid Lastname";
            setErrorMsg("lastname",message);
            errorOccurred = true;
        }
        else{
            setValid("lastname");
        }
      
        if (emailId.value.trim() === "") {
            message="email can not be blank";
            setErrorMsg("email",message);
            errorOccurred = true;

        }
        else if (!emailId.value.trim().match(regEmail)) {
            message="Email should be in correct format";
            setErrorMsg("email",message);
            errorOccurred = true;

        } 
        else{
            setValid("email");
        }

        // if(password.value.length>=8) {
            

        //     if(regPswPoor.test(password.value.trim())) {
        //         // document.getElementById("password.id").style.borderColor = "red";
        //         message="Poor Password";
        //         color = "red";
        //         setErrorMsg("psw",message);
        //         setErrorPsw("poor-pass",color);
        //         errorOccurred = true;
        //     }
        //     else if (regPswMedium.test(password.value.trim())) {
        //         message="Medium Password";
        //         color = "orange";
        //         setErrorMsg("psw",message);
        //         setErrorPsw("medium-pass",color);
        //         errorOccurred = true;
        //     }
        //     else{
        //         document.getElementById("").style.backgroundColor="green";
        //         setValid("psw");
        //     }
        // }
        // else {
        //     message="PAssword should be atleast 8 charactors";
        //     setErrorMsg("psw",message);
        //     errorOccurred = true;
        // }
        document.getElementById("strength-psw").style.display="flex";
        if(password.value.trim() == "") {
            message="Password can not be blank";
            setErrorMsg("psw",message);
            errorOccurred = true;    
        }
        else{ 
            if(password.value.length>=8)  {
                if (password.value.match(regInteger) && password.value.match(regChar) && password.value.match(regSpecialChar)) {
                    message="Strong Password";
                    color = "green";
                    setErrorMsg("psw",message);
                    setErrorPsw("strong-pass",color);
                    setValid("psw");
                
                }
                else if ((password.value.match(regChar) && password.value.match(regInteger))|| (password.value.match(regChar) && password.value.match(regSpecialChar)) || (password.value.match(regInteger) && password.value.match(regSpecialChar))) {
                message="Medium Password.Password should contain digits and special chars";
                color = "orange";
                setErrorMsg("psw",message);
                setErrorPsw("medium-pass",color);
                errorOccurred = true;
                } else {
                    message="Poor Password. Length should be atleast 8 and must contain digits and special chars";
            
                    color = "red";
                    setErrorMsg("psw",message);
                    setErrorPsw("poor-pass",color);
                    errorOccurred = true;
                }
            } else {
                message="Poor Password. Length should be atleast 8 and must contain digits and special chars";
            
                color = "red";
                setErrorMsg("psw",message);
                setErrorPsw("poor-pass",color);
                errorOccurred = true;
            }
        }


        if(rePassword.value.trim() == "") {
            message="Repeat Password can not be blank";
            setErrorMsg("psw-repeat",message);
            errorOccurred = true;

        }
        else if(rePassword.value.trim()!=password.value.trim()){
            message="PAssword and repeat password should be equal";
            setErrorMsg("psw-repeat",message);
            errorOccurred = true;
        }
        else{
            setValid("psw-repeat");
        }

        if(mobileNum.value.trim() == "") {
            message="Mobile number can not be blank";
            setErrorMsg("mobilenum",message);
            errorOccurred = true;

        } else if(!(mobileNum.value.trim().match(regMobile1)||mobileNum.value.trim().match(regMobile2))) {
            message="number should be 10 digit";
            setErrorMsg("mobilenum",message);
            errorOccurred = true;
            
        }   
        else{
            setValid("mobilenum");
        }


        if (errorOccurred) {
            return false;
        }


       
    } catch(e) {
        console.log(e);
    }
}

function setErrorMsg(input,erMessage) {
    let errorid = input+"-error";

    document.getElementById(errorid).innerText = erMessage;
    document.getElementById(input).style.borderColor = "red";
   

}
function setErrorPsw(inp,color) {
    document.getElementById(inp).style.backgroundColor=color;

}
function setValid(element){
    
    document.getElementById(element).style.borderColor="green";
    let clearError = element+"-error";
    document.getElementById(clearError).innerText="";
} 