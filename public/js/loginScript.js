let dark = localStorage.getItem("botonSwitch");
if(dark) document.body.classList.add('dark');

let ableLogin = () =>{
    let name = document.querySelector('.email').value
    let password = document.querySelector('.password').value;
    let validate = 0;

    if(name == '' || password ==''){
        validate ++;
    }

    validate == 0 ? document.querySelector('.login_button').disabled = false :
    document.querySelector('.login_button').disabled = true;

}

document.querySelector('.email').addEventListener('keyup', ableLogin);
document.querySelector('.password').addEventListener('keyup', ableLogin);
