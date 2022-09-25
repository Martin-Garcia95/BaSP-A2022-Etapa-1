window.onload = function ()  {
    var inputEmail = document.getElementById("form-input");
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var passwordExpression = /^[A-Za-z0-9]*$/;
    var inputPassword = document.getElementById("form-input-two");
    var inputButton = document.getElementById("form-button")
    
    //Email
    var errorTextEmail = document.createElement("p");
    inputEmail.onblur = function(){
        if(!inputEmail.value.match(emailExpression)){
            inputEmail.classList.add("border-red");
            errorTextEmail.classList.add("parragraph-Email")
            errorTextEmail.innerHTML = "Poner buen Email";
            inputEmail.parentNode.insertBefore(errorTextEmail, inputEmail.nextSibling)
            console.log(errorTextEmail)
        }else if(inputEmail.value.length < 3){
            inputEmail.classList.add("border-red");
            errorTextEmail.classList.add("parragraph-Email")
            errorTextEmail.innerHTML = "Poner buen Email";
            inputEmail.parentNode.insertBefore(errorTextEmail, inputEmail.nextSibling)
            alert("necesita mas caracteres");
        }else{
            console.log('Buen email');
            inputEmail.classList.add("border-green")
        }
    }
    
    inputEmail.onfocus = function(){
        inputEmail.value = "";
        inputEmail.classList.remove("border-red");
        errorTextEmail.remove();
    }

    //Password
    var errorTextPassword = document.createElement("p");
    inputPassword.onblur = function(){
        if(!inputPassword.value.match(passwordExpression)){
            inputPassword.classList.add("border-red");
            errorTextPassword.classList.add("parragraph-password")
            errorTextPassword.innerHTML = "Poner buen password";
            inputPassword.parentNode.insertBefore(errorTextPassword, inputPassword.nextSibling)
            console.log(errorTextPassword)
        }else if(inputPassword.value.length < 3){
            inputPassword.classList.add("border-red");
            errorTextPassword.classList.add("parragraph-password")
            errorTextPassword.innerHTML = "Poner buen password";
            inputPassword.parentNode.insertBefore(errorTextPassword, inputPassword.nextSibling)
            console.log("necesita mas caracteres");
        }else{
            console.log('Buen passwprd');
            inputPassword.classList.add("border-green")
        }
    }
    
    inputPassword.onfocus = function(){
        inputPassword.value = "";
        inputPassword.classList.remove("border-red");
        errorTextPassword.remove();
    }

    var falseEmail= 'Email incorrecto: ';
    var falsePassword= 'Contrase;a incorrecta: '
    var trueEmail= 'Email: ';
    var truePassword= 'Contrase;a: ';
    inputButton.onclick = function(e){
        e.preventDefault();
        if (inputEmail.classList.contains("border-red") && inputPassword.classList.contains("border-red")){
            falseEmail += inputEmail.value;
            falsePassword += inputPassword.value;
            alert(falseEmail + '\n' + falsePassword);
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
                alert(trueEmail + "\n" + truePassword)
            }
        }
    }
    }