window.onload = function ()  {
    var alphaNumberExpression = (/^[A-Za-z0-9]+$/);
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var inputName = document.getElementById("input-text");
    var inputEmail = document.getElementById("input-email");
    var inputTextArea = document.getElementById("input-text-area")
    var inputButton = document.getElementById("input-button")
    
    
    //Nombre
    var errorTextName = document.createElement("p");
    inputName.onblur = function(){
        if(!inputName.value == isNaN){
            inputName.classList.add("border-red");
            errorTextName.classList.add("parragraph-Email")
            errorTextName.innerHTML = "Usar nombre valido";
            inputName.parentNode.insertBefore(errorTextName, inputName.nextSibling)
            console.log(errorTextName)
        }else if(inputName.value.length < 3){
            inputName.classList.add("border-red");
            errorTextName.classList.add("parragraph-Email")
            errorTextName.innerHTML = "Usar nombre valido";
            inputName.parentNode.insertBefore(errorTextName, inputName.nextSibling)
            alert("necesita mas caracteres");
        }else{
            console.log('Nombre valido');
            inputName.classList.add("border-green")
        }
    }
    
    inputName.onfocus = function(){
        inputName.value = "";
        inputName.classList.remove("border-red");
        errorTextName.remove();
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


    var errorTextArea = document.createElement("p");
    inputTextArea.onblur = function(){
        if(inputTextArea.value == ""){
            inputTextArea.classList.add("border-red");
            errorTextArea.classList.add("parragraph-Email")
            errorTextArea.innerHTML = "Usar email valido";
            inputTextArea.parentNode.insertBefore(errorTextArea, inputTextArea.nextSibling)
            console.log(errorTextArea)
        }else if(inputTextArea.value.length < 3){
            inputTextArea.classList.add("border-red");
            errorTextArea.classList.add("parragraph-Email")
            errorTextArea.innerHTML = "Usar email valido";
            inputTextArea.parentNode.insertBefore(errorTextArea, inputTextArea.nextSibling)
            alert("necesita mas caracteres");
        }else{
            console.log('Email valido');
            inputTextArea.classList.add("border-green")
        }
    }
    
    inputTextArea.onfocus = function(){
        inputTextArea.value = "";
        inputTextArea.classList.remove("border-red");
        errorTextArea.remove();
    }

    var falseEmail= 'Email incorrecto: ';
    var falsePassword= 'Contrase;a incorrecta: ';
    var trueEmail= 'Email: ';
    var truePassword= 'Contrase;a: ';
    var falseText= "Texto no definido: ";
    var trueText = "Texto: ";
    inputButton.onclick = function(e){
        e.preventDefault();
        if (inputEmail.classList.contains("border-red") && inputPassword.classList.contains("border-red")&& inputTextArea.classList.contains("border-red")){
            falseEmail += inputEmail.value;
            falsePassword += inputPassword.value;
            falseText += inputTextArea.value;
            alert(falseEmail + '/n' + falsePassword + '/n' + falseText);
        }else if(inputEmail.classList.contains("border-red")){
            falseEmail += inputEmail.value;
            alert(falseEmail);
        }else if(inputPassword.classList.contains("border-red")){
            falsePassword += inputPassword.value;
            alert(falsePassword);
        }else if(inputTextArea.classList.contains("border-red")){
            falseText += inputTextArea.value;
            alert(falseText);
        }else{
            if(inputEmail.value =="" || inputPassword.value =="" || inputTextArea.value ==""){
                inputEmail.classList.add("border-red");
                inputPassword.classList.add("border-red");
                inputTextArea.classList.add("border-red")
                alert("Campo vacio");
            }else{
                trueEmail += inputEmail.value;
                console.log(trueEmail);
                truePassword += inputPassword.value;
                console.log(truePassword)
                trueText += inputTextArea.value;
                console.log(trueText)
                alert("Success "+ "\n" + trueEmail + "\n" + truePassword + "\n" + trueText)
            }
        }
    }
}