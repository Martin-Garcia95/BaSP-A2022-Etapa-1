window.onload = function ()  {
    var inputEmail = document.getElementById("form-input-user");
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var inputPassword = document.getElementById("form-input-password");
    var inputButton = document.getElementById("form-button");
    var invalidFieldsEmail = document.getElementById("invalid-fields-email");
    var span = document.getElementsByClassName("close");
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
            errorTextEmail.innerHTML = "Verify email";
            inputEmail.parentNode.insertBefore(errorTextEmail, inputEmail.nextSibling);
        }else if(inputEmail.value.length < 3){
            inputEmail.classList.add("border-red");
            errorTextEmail.innerHTML = "Not enough characters";
            inputEmail.parentNode.insertBefore(errorTextEmail, inputEmail.nextSibling)
            alert("necesita mas caracteres");
        }else{
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
                textError.innerHTML = "Verify password";
                inputPassword.parentNode.insertBefore(textError, inputPassword.nextSibling)
        }else if(inputPassword.value.length < 8){
            inputPassword.classList.add("border-red");
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
        if(inputEmail.classList.contains("border-red") && inputPassword.classList.contains("border-red")){
            invalidFieldsEmail.style.display = "block";
            document.getElementById("span-alert").innerHTML="Invalid fields"
            span.onclick = function() {
                invalidFieldsEmail.style.display = "none";
        }
        window.onclick = function(event) {
            if (event.target == invalidFieldsEmail) {
            invalidFieldsEmail.style.display = "none";
            }
        }
        }else if(inputEmail.classList.contains("border-red")){
            invalidFieldsEmail.style.display = "block";
            document.getElementById("span-alert").innerHTML="Invalid email"
            span.onclick = function() {
                invalidFieldsEmail.style.display = "none";
        }
        window.onclick = function(event) {
            if (event.target == invalidFieldsEmail) {
            invalidFieldsEmail.style.display = "none";
            }
        }
        }else if(inputPassword.classList.contains("border-red")){
            invalidFieldsEmail.style.display = "block";
            document.getElementById("span-alert").innerHTML="Invalid password"
            span.onclick = function() {
                invalidFieldsEmail.style.display = "none";
        }
        window.onclick = function(event) {
            if (event.target == invalidFieldsEmail) {
            invalidFieldsEmail.style.display = "none";
            }
        }
        }else if(inputEmail.value =="" || inputPassword.value ==""){
                inputEmail.classList.add("border-red");
                invalidFieldsEmail.style.display = "block";
            document.getElementById("span-alert").innerHTML="Empty fields"
            span.onclick = function() {
                invalidFieldsEmail.style.display = "none";
            }
            window.onclick = function(event) {
            if (event.target == invalidFieldsEmail) {
            invalidFieldsEmail.style.display = "none";
            }
            }
        }else{
                var url = "https://basp-m2022-api-rest-server.herokuapp.com/login?email=" 
                + inputEmail.value + "&password=" + inputPassword.value;
                fetch(url)
                .then(function(response){
                if(response.status >= 400){
                    throw new Error(response);
                    }else{
                        return response.json();
                    }
                })
                .then(function(data){
                    invalidFieldsEmail.style.display = "block";
                    document.getElementById("span-alert").innerHTML=(data.msg)
                    span.onclick = function() {
                        invalidFieldsEmail.style.display = "none";
                    }
                    window.onclick = function(event) {
                        if (event.target == invalidFieldsEmail) {
                            invalidFieldsEmail.style.display = "none";
                        }
                    }
                })
                .catch(function(error){
                    alert(error + "\n" + "Check Email or Password");
                })
            };
        }
}