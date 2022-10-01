window.onload = function ()  {
    var inputEmail = document.getElementById("form-input");
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var inputPassword = document.getElementById("form-input-two");
    var inputButton = document.getElementById("form-button");
    var falseEmail= "Verify email: ";
    var falsePassword= "Verify password: ";
    var trueEmail= "Email: ";
    var truePassword= "Password: ";
    var errorTextEmail = document.createElement("p");
    var textError = document.createElement("p");

    function onlyLetters (inputValue){
        var inputLower = inputValue.value.toLowerCase();
        for(var i = 0; i < inputLower.length; i++){
            if ((inputLower.charCodeAt(i) >= 97 && inputLower.charCodeAt(i) <= 122)){
                return true;
            }else{
                return false;
            }
        }
    }

    function onlyNumbers (inputValue){
        for(var i = 0; i < inputValue.value.length; i++){
            if ((inputValue.value.charCodeAt(i) >= 48 && inputValue.value.charCodeAt(i) <= 57)){
                return true;
            }else{
                return false;
            }
        }
    }

    function onlyNumbersAndLetters (inputValue){
        var inputLower = inputValue.value.toLowerCase();
        for(var i = 0; i < inputLower.length; i++){
            if ((inputLower.charCodeAt(i) >= 97 && inputLower.charCodeAt(i) <= 122) 
            ||(inputLower.charCodeAt(i) >= 48 && inputLower.charCodeAt(i) <= 57)){
                return true;
            }else{
                return false;
            }
        }
    }


    inputEmail.onblur = function(){
        if(!inputEmail.value.match(emailExpression)){
            inputEmail.classList.add("border-red");
            errorTextEmail.classList.add("parragraph-Email")
            errorTextEmail.innerHTML = "Verify email";
            inputEmail.parentNode.insertBefore(errorTextEmail, inputEmail.nextSibling)
            console.log(errorTextEmail)
        }else if(inputEmail.value.length < 3){
            inputEmail.classList.add("border-red");
            errorTextEmail.classList.add("parragraph-Email")
            errorTextEmail.innerHTML = "Not enough characters";
            inputEmail.parentNode.insertBefore(errorTextEmail, inputEmail.nextSibling)
            alert("necesita mas caracteres");
        }else{
            console.log("Valid email");
            inputEmail.classList.add("border-green")
        }
    }
    
    inputEmail.onfocus = function(){
        inputEmail.value = "";
        inputEmail.classList.remove("border-red");
        errorTextEmail.remove();
    }


    inputPassword.onblur = function(){
        if(!onlyNumbersAndLetters(inputPassword)){
            inputPassword.classList.add("border-red");
                textError.classList.add("parragraph-Email")
                textError.innerHTML = "Verify password";
                inputPassword.parentNode.insertBefore(textError, inputPassword.nextSibling)
        }else if(inputPassword.value.length < 8){
            inputPassword.classList.add("border-red");
            textError.classList.add("parragraph-Email")
            textError.innerHTML = "Not enough characters";
            inputPassword.parentNode.insertBefore(textError, inputPassword.nextSibling)
        }else{
            inputPassword.classList.add("border-green");
        }
    }
    inputPassword.onfocus = function(){
            inputPassword.value = "";
            inputPassword.classList.remove("border-red");
            textError.remove()
        }

    
    inputButton.onclick = function(e){
        e.preventDefault();
        if (inputEmail.classList.contains("border-red") && inputPassword.classList.contains("border-red")){
            falseEmail += inputEmail.value;
            falsePassword += inputPassword.value;
            alert(falseEmail + "/n" + falsePassword);
        }else if(inputEmail.classList.contains("border-red")){
            falseEmail += inputEmail.value;
            alert(falseEmail);
        }else if(inputPassword.classList.contains("border-red")){
            falsePassword += inputPassword.value;
            alert(falsePassword);
        }else{
            if(inputEmail.value =="" || inputPassword.value ==""){
                inputEmail.classList.add("border-red");
                inputPassword.classList.add("border-red");
                alert("Campo vacio");
            }else{
                trueEmail += inputEmail.value;
                console.log(trueEmail);
                truePassword += inputPassword.value;
                console.log(truePassword)
                alert("Success "+ "\n" + trueEmail + "\n" + truePassword)
            }
        }
    }
    }