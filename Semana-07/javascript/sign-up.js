window.onload = function ()  {
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var inputName = document.getElementById("form-input-name");
    var inputLastName = document.getElementById("form-input-lastName");
    var inputDNI = document.getElementById("form-input-ID");
    var inputBirth = document.getElementById("form-input-birth");
    var inputPhone = document.getElementById("form-input-phone");
    var inputAddress = document.getElementById("form-input-direction");
    var inputCountry = document.getElementById("form-input-localization");
    var inputPostal = document.getElementById("form-input-postal-code");
    var inputEmail = document.getElementById("form-input-mail");
    var inputPassword = document.getElementById("form-input-password");
    var inputSecondPassword = document.getElementById("form-input-rpassword");
    var inputButton = document.getElementById("form-button");
    var textError = document.createElement("p");
    var year = inputBirth.value.substring(0, inputBirth.value.indexOf("-"));
    var month = inputBirth.value.substring(inputBirth.value.indexOf("-")+1, inputBirth.value.indexOf("-")+3);
    var day = inputBirth.value.substring(inputBirth.value.indexOf("-")+4);
    var dateArray = [month, day, year];
    var dateString = dateArray.join("/");
    localStorage.getItem("Name", inputName.value);
    localStorage.getItem("Last name", inputLastName.value);
    localStorage.getItem("ID", inputDNI.value);
    localStorage.getItem("Birth", dateString);
    localStorage.getItem("Phone", inputPhone.value);
    localStorage.getItem("Addres", inputAddress.value);
    localStorage.getItem("Country/city", inputCountry.value);
    localStorage.getItem("Postal code", inputPostal.value);
    localStorage.getItem("Email", inputEmail.value);
    localStorage.getItem("Password", inputPassword.value);
    
    
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
    
    function onlyNumbersAndLettersAddress (inputValue){
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


    inputName.onblur = function(){
        if(!onlyLetters(inputName)){
            inputName.classList.add("border-red");
                textError.classList.add("parragraph-Email")
                textError.innerHTML = "Verify name";
                inputName.parentNode.insertBefore(textError, inputName.nextSibling)
        }else if(inputName.value.length < 3){
            inputName.classList.add("border-red");
            textError.classList.add("parragraph-Email")
            textError.innerHTML = "Not enough characters";
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


    inputLastName.onblur = function(){
        if(!onlyLetters(inputLastName)){
            inputLastName.classList.add("border-red");
                textError.classList.add("parragraph-Email")
                textError.innerHTML = "Verify last name";
                inputLastName.parentNode.insertBefore(textError, inputLastName.nextSibling)
        }else if(inputLastName.value.length < 3){
            inputLastName.classList.add("border-red");
            textError.classList.add("parragraph-Email")
            textError.innerHTML = "Not enough characters";
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
    

    inputDNI.onblur = function(){
        if(!onlyNumbers(inputDNI)){
            inputDNI.classList.add("border-red");
                textError.classList.add("parragraph-Email")
                textError.innerHTML = "Verify ID";
                inputDNI.parentNode.insertBefore(textError, inputDNI.nextSibling)
        }else if(inputDNI.value.length < 7){
            inputDNI.classList.add("border-red");
            textError.classList.add("parragraph-Email")
            textError.innerHTML = "Not enough characters";
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
    

    inputBirth.onblur = function(){
        if(inputBirth.value == ""){
            inputBirth.classList.add("border-red");
            errorTextBirth.classList.add("parragraph-Email")
            errorTextBirth.innerHTML = "Verify date";
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


    inputPhone.onblur = function(){
        if(!onlyNumbers(inputPhone)){
            inputPhone.classList.add("border-red");
                textError.classList.add("parragraph-Email")
                textError.innerHTML = "Verify phone number";
                inputPhone.parentNode.insertBefore(textError, inputPhone.nextSibling)
        }else if(inputPhone.value.length < 10){
            inputPhone.classList.add("border-red");
            textError.classList.add("parragraph-Email")
            textError.innerHTML = "Not enough characters";
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


    inputAddress.onblur = function(){
        if(!onlyNumbersAndLettersAddress(inputAddress)){
            inputAddress.classList.add("border-red");
                textError.classList.add("parragraph-Email")
                textError.innerHTML = "Verify Address log";
                inputAddress.parentNode.insertBefore(textError, inputAddress.nextSibling)
        }else if(inputAddress.value.length < 3){
            inputAddress.classList.add("border-red");
            textError.classList.add("parragraph-Email")
            textError.innerHTML = "Not enough characters";
            inputAddress.parentNode.insertBefore(textError, inputAddress.nextSibling)
        }else if (!inputAddress.value.includes(" ")){
            alert("Space character not included")
        }else{
            inputAddress.classList.add("border-green");
        }
    }
    inputAddress.onfocus = function(){
            inputAddress.value = "";
            inputAddress.classList.remove("border-red");
            textError.remove()
        }


    inputCountry.onblur = function(){
        if(!onlyNumbersAndLetters(inputCountry)){
            inputCountry.classList.add("border-red");
                textError.classList.add("parragraph-Email")
                textError.innerHTML = "Verify country log";
                inputCountry.parentNode.insertBefore(textError, inputCountry.nextSibling)
        }else if(inputCountry.value.length < 3){
            inputCountry.classList.add("border-red");
            textError.classList.add("parragraph-Email")
            textError.innerHTML = "Not enough characters";
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


    inputPostal.onblur = function(){
        if(!onlyNumbers(inputPostal)){
            inputPostal.classList.add("border-red");
                textError.classList.add("parragraph-Email")
                textError.innerHTML = "Verify postal number";
                inputPostal.parentNode.insertBefore(textError, inputPostal.nextSibling)
        }else if(inputPostal.value.length <= 4 && inputPostal.value.length >= 5){
            inputPostal.classList.add("border-red");
            textError.classList.add("parragraph-Email")
            textError.innerHTML = "Not enough characters";
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


    var errorTextEmail = document.createElement("p");
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
            alert("Not enough characters");
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


    var errorTextPaswordConfirm = document.createElement("p");
    inputSecondPassword.onblur = function(){
        if(!inputSecondPassword.value === inputPassword){
            inputSecondPassword.classList.add("border-red");
            errorTextPaswordConfirm.classList.add("parragraph-Email")
            errorTextPaswordConfirm.innerHTML = "Use same password";
            inputSecondPassword.parentNode.insertBefore(errorTextPaswordConfirm, inputSecondPassword.nextSibling)
            console.log(errorTextPaswordConfirm)
        }else if(inputSecondPassword.value.length === ""){
            inputSecondPassword.classList.add("border-red");
            errorTextPaswordConfirm.classList.add("parragraph-Email")
            errorTextPaswordConfirm.innerHTML = "Use same password";
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
        ||inputAddress.classList.contains("border-red")||inputCountry.classList.contains("border-red")
        ||inputPhone.classList.contains("border-red")||inputPostal.classList.contains("border-red")
        ||inputPassword.classList.contains("border-red")||inputSecondPassword.classList.contains("border-red")
        ||inputEmail.classList.contains("border-red")){
            alert("Invalid data")
        }else if(inputName.value ==="" || inputLastName.value ==="" || inputDNI.value ==="" 
        || inputBirth.value ==="" || inputAddress.value ==="" || inputCountry.value ==="" 
        || inputPhone.value ==="" || inputPostal.value ==="" || inputPassword.value ==="" 
        || inputEmail.value ==="" || inputSecondPassword.value ===""){
            alert("Fill requierd fields")
        }
        else{
            alert("Name :" + inputName.value +"\n" + "Last name: " + inputLastName.value+"\n" 
            + "ID :" + inputDNI.value +"\n" + "Birth date :" + inputBirth.value +"\n" 
            + "Phone number :" + inputPhone.value +"\n" + "Address :" + inputAddress.value + "\n"
            + "City/Country :" + inputCountry.value +"\n" + "Postal code" + inputPostal.value + "\n"
            + "Email :" + inputEmail.value +"\n" + "Password: " + inputPassword.value +"\n"
            + "Password confirmation: " + inputSecondPassword.value)

            var url = "https://basp-m2022-api-rest-server.herokuapp.com/signup?name=" + inputName.value + 
            "&lastName=" + inputLastName.value + "&dni=" + inputDNI.value + "&dob=" + dateString + 
            "&phone=" + inputPhone.value + "&address=" + inputAddress.value + "&city=" + inputCountry.value + 
            "&zip=" + inputPostal.value + "&email=" + inputEmail.value + "&password=" + inputPassword.value;
            var promise = fetch(url);
                promise.then(function(resp){
                    return resp.json();
                })
                .then(function(data){
                    console.log(data.msg)
                })
                .then(function(storage){
                    localStorage.setItem("Name", inputName.value);
                    localStorage.setItem("Last name", inputLastName.value);
                    localStorage.setItem("ID", inputDNI.value);
                    localStorage.setItem("Birth", dateString);
                    localStorage.setItem("Phone", inputPhone.value);
                    localStorage.setItem("Addres", inputAddress.value);
                    localStorage.setItem("Country/city", inputCountry.value);
                    localStorage.setItem("Postal code", inputPostal.value);
                    localStorage.setItem("Email", inputEmail.value);
                    localStorage.setItem("Password", inputPassword.value);
                })
                .catch(function(error){
                    throw new Error(error)
                    alert(error.mgs)
                })
        }
    }
}
