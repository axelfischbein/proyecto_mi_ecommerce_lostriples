window.addEventListener('load', ()=>{
    let dark = localStorage.getItem("botonSwitch");
    if(dark) document.body.classList.add('dark');
    let email = localStorage.getItem("email");
    let checkValidation = false;
    let cerrar = document.querySelector(".close");
    let modalContainerL = document.querySelector(".modal_container_l");

    
   

    if(email){
        document.querySelector('.email').value = email;
        document.querySelector('.check').checked = true;
        checkValidation = true;
    }

    let ableLogin = () =>{
        let name = document.querySelector('.email').value
        let password = document.querySelector('.password').value;
        let validate = 0;
    
        if(name.trim()  == '' || password.trim() ==''){
            validate ++;
        }
    
        validate == 0 ? document.querySelector('.login_button').disabled = false :
        document.querySelector('.login_button').disabled = true;
    
    }

    document.querySelector('.email').addEventListener('keyup', ableLogin);
    document.querySelector('.password').addEventListener('keyup', ableLogin);
    
    let check = document.querySelector('.check');
    
    check.addEventListener('change', (e) => {
        if (e.target.checked){
            checkValidation = true;
        }else {
            checkValidation = false;
        }
    })

    document.querySelector('.login_button').addEventListener('click', () => {
        if(checkValidation){
            let email = document.querySelector('.email').value;
            localStorage.setItem("email", email);
        }else{
            localStorage.removeItem("email");
        }
    })

    cerrar.addEventListener("click",()=> {
        modalContainerL.style.opacity = "0";
        modalContainerL.style.visibility = "hidden";
    });

    
})

