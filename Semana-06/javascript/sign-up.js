window.onload = function ()  {
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var inputName = document.getElementById("form-input");
    var inputLastName = document.getElementById("form-input-two");
    var inputDNI = document.getElementById("form-input-three");
    var inputBirth = document.getElementById("form-input-four");
    var inputPhone = document.getElementById("form-input-five");
    var inputDirection = document.getElementById("form-input-six");
    var inputCountry = document.getElementById("form-input-seven");
    var inputPostal = document.getElementById("form-input-eight");
    var inputEmail = document.getElementById("form-input-nine");
    var inputPassword = document.getElementById("form-input-ten");
    var inputSecondPassword = document.getElementById("form-input-eleven");
    var inputButton = document.getElementById("form-button")
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
    
    function onlyNumbersAndLettersDirection (inputValue){
        var inputLower = inputValue.value.toLowerCase();
        for(var i = 0; i < inputLower.length; i++){
            if ((inputLower.charCodeAt(i) >= 97 && inputLower.charCodeAt(i) <= 122) 
            ||(inputLower.charCodeAt(i) >= 48 && inputLower.charCodeAt(i) <= 57)
            || (inputLower.charCodeAt(i) = 32)){
                return true;
            }else{
                return false;
            }
        }
    }

    //Nombre
    inputName.onblur = function(){
        if(!onlyLetters(inputName)){
            inputName.classList.add("border-red");
                textError.classList.add("parragraph-Email")
                textError.innerHTML = "Usar parametro valido";
                inputName.parentNode.insertBefore(textError, inputName.nextSibling)
        }else if(inputName.value.length < 3){
            inputName.classList.add("border-red");
            textError.classList.add("parragraph-Email")
            textError.innerHTML = "Faltan letras";
            inputName.parentNode.insertBefore(textError, inputName.nextSibling)
        }else{
            inputName.classList.add("border-green");
        }
    }
    inputName.onfocus = function(){
            inputName.value = "";
            inputName.classList.remove("border-red");
            textError.remove()
        }

    //Apellido
    inputLastName.onblur = function(){
        if(!onlyLetters(inputLastName)){
            inputLastName.classList.add("border-red");
                textError.classList.add("parragraph-Email")
                textError.innerHTML = "Usar parametro valido";
                inputLastName.parentNode.insertBefore(textError, inputLastName.nextSibling)
        }else if(inputLastName.value.length < 3){
            inputLastName.classList.add("border-red");
            textError.classList.add("parragraph-Email")
            textError.innerHTML = "Faltan letras";
            inputLastName.parentNode.insertBefore(textError, inputLastName.nextSibling)
        }else{
            inputLastName.classList.add("border-green");
        }
    }
    inputLastName.onfocus = function(){
            inputLastName.value = "";
            inputLastName.classList.remove("border-red");
            textError.remove()
        }
    
    //DNI
    inputDNI.onblur = function(){
        if(!onlyNumbers(inputDNI)){
            inputDNI.classList.add("border-red");
                textError.classList.add("parragraph-Email")
                textError.innerHTML = "Usar parametro valido";
                inputDNI.parentNode.insertBefore(textError, inputDNI.nextSibling)
        }else if(inputDNI.value.length < 7){
            inputDNI.classList.add("border-red");
            textError.classList.add("parragraph-Email")
            textError.innerHTML = "Faltan letras";
            inputDNI.parentNode.insertBefore(textError, inputDNI.nextSibling)
        }else{
            inputDNI.classList.add("border-green");
        }
    }
    inputDNI.onfocus = function(){
            inputDNI.value = "";
            inputDNI.classList.remove("border-red");
            textError.remove()
        }
    
    //Fecha de nacimiento
    inputBirth.onblur = function(){
        if(inputBirth.value == ""){
            inputBirth.classList.add("border-red");
            errorTextBirth.classList.add("parragraph-Email")
            errorTextBirth.innerHTML = "Usar fecha de nacimiento valido";
            inputBirth.parentNode.insertBefore(errorTextBirth, inputBirth.nextSibling)
            console.log(errorTextBirth)

        }else{
            console.log('Fecha de nacimieto valido');
            inputBirth.classList.add("border-green")
        }
    }
    
    inputBirth.onfocus = function(){
        inputBirth.value = "";
        inputBirth.classList.remove("border-red");
        errorTextBirth.remove();
    }

    //Telefono
    inputPhone.onblur = function(){
        if(!onlyNumbers(inputPhone)){
            inputPhone.classList.add("border-red");
                textError.classList.add("parragraph-Email")
                textError.innerHTML = "Usar parametro valido";
                inputPhone.parentNode.insertBefore(textError, inputPhone.nextSibling)
        }else if(inputPhone.value.length < 10){
            inputPhone.classList.add("border-red");
            textError.classList.add("parragraph-Email")
            textError.innerHTML = "Faltan letras";
            inputPhone.parentNode.insertBefore(textError, inputPhone.nextSibling)
        }else{
            inputPhone.classList.add("border-green");
        }
    }
    inputPhone.onfocus = function(){
            inputPhone.value = "";
            inputPhone.classList.remove("border-red");
            textError.remove()
        }

    //Direccion
    inputDirection.onblur = function(){
        if(!onlyNumbersAndLettersDirection(inputDirection)){
            inputDirection.classList.add("border-red");
                textError.classList.add("parragraph-Email")
                textError.innerHTML = "Usar parametro valido";
                inputDirection.parentNode.insertBefore(textError, inputDirection.nextSibling)
        }else if(inputDirection.value.length < 3){
            inputDirection.classList.add("border-red");
            textError.classList.add("parragraph-Email")
            textError.innerHTML = "Faltan letras";
            inputDirection.parentNode.insertBefore(textError, inputDirection.nextSibling)
        }else if (!inputDirection.value.includes(" ")){
            alert("Falta un espacion")
        }else{
            inputDirection.classList.add("border-green");
        }
    }
    inputDirection.onfocus = function(){
            inputDirection.value = "";
            inputDirection.classList.remove("border-red");
            textError.remove()
        }
    //Localidad
    inputCountry.onblur = function(){
        if(!onlyNumbersAndLetters(inputCountry)){
            inputCountry.classList.add("border-red");
                textError.classList.add("parragraph-Email")
                textError.innerHTML = "Usar parametro valido";
                inputCountry.parentNode.insertBefore(textError, inputCountry.nextSibling)
        }else if(inputCountry.value.length < 3){
            inputCountry.classList.add("border-red");
            textError.classList.add("parragraph-Email")
            textError.innerHTML = "Faltan letras";
            inputCountry.parentNode.insertBefore(textError, inputCountry.nextSibling)
        }else{
            inputCountry.classList.add("border-green");
        }
    }
    inputCountry.onfocus = function(){
            inputCountry.value = "";
            inputCountry.classList.remove("border-red");
            textError.remove()
        }

    //Codigo postal
    inputPostal.onblur = function(){
        if(!onlyNumbers(inputPostal)){
            inputPostal.classList.add("border-red");
                textError.classList.add("parragraph-Email")
                textError.innerHTML = "Usar parametro valido";
                inputPostal.parentNode.insertBefore(textError, inputPostal.nextSibling)
        }else if(inputPostal.value.length <= 4 && inputPostal.value.length >= 5){
            inputPostal.classList.add("border-red");
            textError.classList.add("parragraph-Email")
            textError.innerHTML = "Faltan letras";
            inputPostal.parentNode.insertBefore(textError, inputPostal.nextSibling)
        }else{
            inputPostal.classList.add("border-green");
        }
    }
    inputPostal.onfocus = function(){
            inputPostal.value = "";
            inputPostal.classList.remove("border-red");
            textError.remove()
        }

    //Email
    var errorTextEmail = document.createElement("p");
    inputEmail.onblur = function(){
        if(!inputEmail.value.match(emailExpression)){
            inputEmail.classList.add("border-red");
            errorTextEmail.classList.add("parragraph-Email")
            errorTextEmail.innerHTML = "Usar email valido";
            inputEmail.parentNode.insertBefore(errorTextEmail, inputEmail.nextSibling)
            console.log(errorTextEmail)
        }else if(inputEmail.value.length < 3){
            inputEmail.classList.add("border-red");
            errorTextEmail.classList.add("parragraph-Email")
            errorTextEmail.innerHTML = "Usar email valido";
            inputEmail.parentNode.insertBefore(errorTextEmail, inputEmail.nextSibling)
            alert("necesita mas caracteres");
        }else{
            console.log('Email valido');
            inputEmail.classList.add("border-green")
        }
    }
    
    inputEmail.onfocus = function(){
        inputEmail.value = "";
        inputEmail.classList.remove("border-red");
        errorTextEmail.remove();
    }

    //contrase;a
    inputPassword.onblur = function(){
        if(!onlyNumbersAndLetters(inputPassword)){
            inputPassword.classList.add("border-red");
                textError.classList.add("parragraph-Email")
                textError.innerHTML = "Usar parametro valido";
                inputPassword.parentNode.insertBefore(textError, inputPassword.nextSibling)
        }else if(inputPassword.value.length < 8){
            inputPassword.classList.add("border-red");
            textError.classList.add("parragraph-Email")
            textError.innerHTML = "Faltan letras";
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

    //repetir contrase;a
    var errorTextPaswordConfirm = document.createElement("p");
    inputSecondPassword.onblur = function(){
        if(!inputSecondPassword.value === inputPassword){
            inputSecondPassword.classList.add("border-red");
            errorTextPaswordConfirm.classList.add("parragraph-Email")
            errorTextPaswordConfirm.innerHTML = "Usar misma contrase;a";
            inputSecondPassword.parentNode.insertBefore(errorTextPaswordConfirm, inputSecondPassword.nextSibling)
            console.log(errorTextPaswordConfirm)
        }else if(inputSecondPassword.value.length === ""){
            inputSecondPassword.classList.add("border-red");
            errorTextPaswordConfirm.classList.add("parragraph-Email")
            errorTextPaswordConfirm.innerHTML = "Usar misma contrase;a";
            inputSecondPassword.parentNode.insertBefore(errorTextPaswordConfirm, inputSecondPassword.nextSibling)
        }else{
            console.log('Contrase;as iguales');
            inputSecondPassword.classList.add("border-green")
        }
    }
    
    inputSecondPassword.onfocus = function(){
        inputSecondPassword.value = "";
        inputSecondPassword.classList.remove("border-red");
        errorTextPaswordConfirm.remove();
    }


    inputButton.onclick = function(e){
        e.preventDefault()
        if(inputName.classList.contains("border-red") ||inputLastName.classList.contains("border-red")
        ||inputDNI.classList.contains("border-red")||inputBirth.classList.contains("border-red")
        ||inputDirection.classList.contains("border-red")||inputCountry.classList.contains("border-red")
        ||inputPhone.classList.contains("border-red")||inputPostal.classList.contains("border-red")
        ||inputPassword.classList.contains("border-red")||inputSecondPassword.classList.contains("border-red")
        ||inputEmail.classList.contains("border-red")){
            alert("Dato invalido")
        }else if(inputName.value ==="" || inputLastName.value ==="" || inputDNI.value ==="" 
        || inputBirth.value ==="" || inputDirection.value ==="" || inputCountry.value ==="" 
        || inputPhone.value ==="" || inputPostal.value ==="" || inputPassword.value ==="" 
        || inputEmail.value ==="" || inputSecondPassword.value ===""){
            alert("Llenar campo vacio")
        }
        else{
            alert("Nombre :" + inputName.value +"\n" + "Apellido: " + inputLastName.value+"\n" 
            + "DNI :" + inputDNI.value +"\n" + "Fecha de nacimiento :" + inputBirth.value +"\n" 
            + "Telefono :" + inputPhone.value +"\n" + "Direccion :" + inputDirection.value + "\n"
            + "Ciudad/Pais :" + inputCountry.value +"\n" + "Codigo Postal" + inputPostal.value + "\n"
            + "Email :" + inputEmail.value +"\n" + "Contrase;a: " + inputPassword.value +"\n"
            + "Contrase;a confirmada: " + inputSecondPassword.value)
        }
    }
}
