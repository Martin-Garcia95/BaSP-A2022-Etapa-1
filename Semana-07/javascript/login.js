window.onload = function ()  {
    var inputEmail = document.getElementById("form-input-user");
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var inputPassword = document.getElementById("form-input-password");
    var inputButton = document.getElementById("form-button");
    var invalidFieldsBoth = document.getElementById("invalid-fields-both");
    var invalidFieldsEmail = document.getElementById("invalid-fields-email");
    var invalidFieldsPassword = document.getElementById("invalid-fields-password");
    var invalidFieldsEmpty = document.getElementById("invalid-fields-empty");
    var span = document.getElementsByClassName("close")[0];
    var falseEmail= "Verify email: ";
    var falsePassword= "Verify password: ";
    var trueEmail= "Email: ";
    var truePassword= "Password: ";
    var errorTextEmail = document.createElement("p");
    var textError = document.createElement("p");

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
            inputEmail.parentNode.insertBefore(errorTextEmail, inputEmail.nextSibling);
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
            invalidFieldsBoth.style.display = "block";
                span.onclick = function() {
                    invalidFieldsBoth.style.display = "none";
            }
            window.onclick = function(event) {
                if (event.target == invalidFieldsBoth) {
                invalidFieldsBoth.style.display = "none";
                }
            }
        }else if(inputEmail.classList.contains("border-red")){
            invalidFieldsEmail.style.display = "block";
            span.onclick = function() {
                invalidFieldsEmail.style.display = "none";
        }
        window.onclick = function(event) {
            if (event.target == invalidFieldsEmail) {
            invalidFieldsEmail.style.display = "none";
            }
        }
        }else if(inputPassword.classList.contains("border-red")){
            invalidFieldsPassword.style.display = "block";
            span.onclick = function() {
                invalidFieldsPassword.style.display = "none";
        }
        window.onclick = function(event) {
            if (event.target == invalidFieldsPassword) {
            invalidFieldsPassword.style.display = "none";
            }
        }
        }else{
            if(inputEmail.value =="" || inputPassword.value ==""){
                inputEmail.classList.add("border-red");
                inputPassword.classList.add("border-red");
                invalidFieldsEmpty.style.display = "block";
                span.onclick = function() {
                    invalidFieldsEmpty.style.display = "none";
            }
            window.onclick = function(event) {
                if (event.target == invalidFieldsEmpty) {
                invalidFieldsEmpty.style.display = "none";
                }
            }
            }else{
                var url = "https://basp-m2022-api-rest-server.herokuapp.com/login?email=" + inputEmail.value + 
                "&password=" + inputPassword.value;
                var promise = fetch(url);
                promise.then(function(response){
                    console.log(response);
                if(response.status >= 400){
                    throw new Error(response);
                    }else{
                        return response.json();
                    }
                })
                .then(function(data){
                    console.log(data.msg);
                    alert (data.msg + "Success "+ "\n" + trueEmail + "\n" + truePassword)
                    trueEmail= "Email: "
                    truePassword="Password: "
                })
                .catch(function(error){
                    alert(error + "\n" + "Check Email or Password")
                })
            };
        }
    }
}