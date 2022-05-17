

window.addEventListener('load', ()=>{
    let dark = localStorage.getItem("botonSwitch");
    if(dark) document.body.classList.add('dark');
    
    //register
    let regName = document.querySelector("#regName");
    let regLName = document.querySelector("#regLName");
    let regEmail = document.querySelector("#regEmail");
    let regPass1 = document.querySelector("#regPass1");
    let regPass2 = document.querySelector("#regPass2");
    regName.addEventListener('input',(e)=>{
        if(e.target.value.trim() == ""){
           e.target.parentNode.style.outline = " 2px solid red ";
           document.querySelector(".regnamev").style.display = "flex";
           document.querySelector(".regnamev").style.color = "red";
           document.querySelector(".regnamev").innerHTML = "<p> El nombre es requerido </p>";
        }else{
            e.target.parentNode.style.outline = " 2px solid green ";
            document.querySelector(".regnamev").style.display = "flex";
            document.querySelector(".regnamev").style.color = "green";
            document.querySelector(".regnamev").innerHTML = "<p> Perfecto ✓ <p>";
        }
    });
    regLName.addEventListener('input',(e)=>{
        if(e.target.value.trim() == ""){
            e.target.parentNode.style.outline = " 2px solid red ";
            document.querySelector(".reglnamev").style.display = "flex";
            document.querySelector(".reglnamev").style.color = "red";
            document.querySelector(".reglnamev").innerHTML = "<p> El apellido es requerido </p>";
        }else{
            e.target.parentNode.style.outline = " 2px solid green ";
            document.querySelector(".reglnamev").style.display = "flex";
            document.querySelector(".reglnamev").style.color = "green";
            document.querySelector(".reglnamev").innerHTML = "<p> Perfecto ✓ <p>";
        }
    });
    regEmail.addEventListener('input',(e)=>{
        if(e.target.value.trim() == ""){
            e.target.parentNode.style.outline = " 2px solid red ";
            document.querySelector(".regemailv").style.display = "flex";
            document.querySelector(".regemailv").style.color = "red";
            document.querySelector(".regemailv").innerHTML = "<p> El email es requerido </p>";
        }else if (!e.target.validity.valid){
            e.target.parentNode.style.outline = " 2px solid red ";
            document.querySelector(".regemailv").style.display = "flex";
            document.querySelector(".regemailv").style.color = "red";
            document.querySelector(".regemailv").innerHTML = "<p> El email debe ser válido </p>";
        }else{
            e.target.parentNode.style.outline = " 2px solid green ";
            document.querySelector(".regemailv").style.display = "flex";
            document.querySelector(".regemailv").style.color = "green";
            document.querySelector(".regemailv").innerHTML = "<p> Perfecto ✓ <p>";
        }
    });
    regPass1.addEventListener('input',(e)=>{
        if(e.target.value.trim() == ""){
            e.target.parentNode.style.outline = " 2px solid red ";
            document.querySelector(".regpass1v").style.display = "flex";
            document.querySelector(".regpass1v").style.color = "red";
            document.querySelector(".regpass1v").innerHTML = "<p> La contraseña es requerida </p>";
        }else if(!RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*.])").test(e.target.value.trim()) || e.target.value.trim().length < 8){
            e.target.parentNode.style.outline = " 2px solid red ";
            document.querySelector(".regpass1v").style.display = "flex";
            document.querySelector(".regpass1v").style.color = "red";
            document.querySelector(".regpass1v").innerHTML = "<p> El password debe contener un caracter en mayuscula, uno en minuscula, un numero y un caracter especial </p>";
            if(e.target.value.trim().length < 8){
                document.querySelector(".regpass1v").style.display = "flex";
                document.querySelector(".regpass1v").style.color = "red";
                document.querySelector(".regpass1v").innerHTML = "<p> Debe contener al menos 8 caracteres </p>";    
            }
        }else{
            e.target.parentNode.style.outline = " 2px solid green ";
            document.querySelector(".regpass1v").style.display = "flex";
            document.querySelector(".regpass1v").style.color = "green";
            document.querySelector(".regpass1v").innerHTML = "<p> Perfecto ✓ <p>";
        }
    });
    regPass2.addEventListener('input',(e)=>{
        if((regPass2.value.trim() != regPass1.value.trim())){
            e.target.parentNode.style.outline = " 2px solid red ";
            document.querySelector(".regpass2v").style.display = "flex";
            document.querySelector(".regpass2v").style.color = "red";
            document.querySelector(".regpass2v").innerHTML = "<p> La contraseña debe ser igual a la confirmacion </p>";
        }else{
            if(regPass2.value.trim() != ''){
                e.target.parentNode.style.outline = " 2px solid green ";
                document.querySelector(".regpass2v").style.display = "flex";
                document.querySelector(".regpass2v").style.color = "green";
                document.querySelector(".regpass2v").innerHTML = "<p> Perfecto ✓ <p>";
            }
        }
    });

    let ableRegister = () =>{
        let regName = document.querySelector('#regName').value;
        let regLName = document.querySelector('#regLName').value;
        let regEmail = document.querySelector('#regEmail').value;
        let regPass1 = document.querySelector('#regPass1').value;
        let regPass2 = document.querySelector('#regPass2').value;
        let validate = 0;
    
        if(regName== '' || regLName =='' || regEmail =='' || regPass1 =='' || regPass2 ==''){
            validate ++;
        }
    
        validate == 0 ? document.querySelector('.login_button').disabled = false :
        document.querySelector('.login_button').disabled = true;
    
    }
    document.querySelector('#regName').addEventListener('keyup', ableRegister);
    document.querySelector('#regLName').addEventListener('keyup', ableRegister);
    document.querySelector('#regEmail').addEventListener('keyup', ableRegister);
    document.querySelector('#regPass1').addEventListener('keyup', ableRegister);
    document.querySelector('#regPass2').addEventListener('keyup', ableRegister);

});


