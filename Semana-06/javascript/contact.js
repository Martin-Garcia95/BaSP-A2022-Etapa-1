window.onload = function ()  {
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var inputName = document.getElementById("input-text");
    var inputEmail = document.getElementById("input-email");
    var inputTextArea = document.getElementById("input-text-area");
    var inputButton = document.getElementById("input-button");
    var errorTextEmail = document.createElement("p");
    var falseEmail= "Verify email: ";
    var falseName= "Verify name: ";
    var trueEmail= "Email: ";
    var trueName= "Name: ";
    var falseText= "Verify text content: ";
    var trueText = "Text content: ";
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
    

    inputName.onblur = function(){
        if(!onlyLetters(inputName)){
            inputName.classList.add("border-red");
                textError.classList.add("parragraph-Email")
                textError.innerHTML = "Verify parameters";
                inputName.parentNode.insertBefore(textError, inputName.nextSibling)
        }else if(inputName.value.length < 3){
            inputName.classList.add("border-red");
            textError.classList.add("parragraph-Email")
            textError.innerHTML = "Faltan caracteres";
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
            errorTextEmail.innerHTML = "Verify email";
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


    inputTextArea.onblur = function(){
        if(!onlyNumbersAndLetters(inputTextArea)){
            inputTextArea.classList.add("border-red");
                textError.classList.add("parragraph-Email")
                textError.innerHTML = "Verify parameters";
                inputTextArea.parentNode.insertBefore(textError, inputTextArea.nextSibling)
        }else if(inputTextArea.value.length < 3){
            inputTextArea.classList.add("border-red");
            textError.classList.add("parragraph-Email")
            textError.innerHTML = "Not enough characters";
            inputTextArea.parentNode.insertBefore(textError, inputTextArea.nextSibling)
        }else{
            inputTextArea.classList.add("border-green");
        }
    }
    inputTextArea.onfocus = function(){
            inputTextArea.value = "";
            inputTextArea.classList.remove("border-red");
            textError.remove()
        }


    
    inputButton.onclick = function(e){
        e.preventDefault();
        if (inputEmail.classList.contains("border-red") && inputName.classList.contains("border-red")&& inputTextArea.classList.contains("border-red")){
            falseEmail += inputEmail.value;
            falseName += inputName.value;
            falseText += inputTextArea.value;
            alert(falseEmail + "\n" + falseName + "\n" + falseText);
        }else if(inputEmail.classList.contains("border-red")){
            falseEmail += inputEmail.value;
            alert(falseEmail);
        }else if(inputName.classList.contains("border-red")){
            falseName += inputName.value;
            alert(falseName);
        }else if(inputTextArea.classList.contains("border-red")){
            falseText += inputTextArea.value;
            alert(falseText);
        }else{
            if(inputEmail.value =="" || inputName.value =="" || inputTextArea.value ==""){
                inputEmail.classList.add("border-red");
                inputName.classList.add("border-red");
                inputTextArea.classList.add("border-red")
                alert("Campo vacio");
            }else{
                trueEmail += inputEmail.value;
                console.log(trueEmail);
                trueName += inputName.value;
                console.log(trueName)
                trueText += inputTextArea.value;
                console.log(trueText)
                alert("Success "+ "\n" + trueEmail + "\n" + trueName + "\n" + trueText)
            }
        }
    }
}