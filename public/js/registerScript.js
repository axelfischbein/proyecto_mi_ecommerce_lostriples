
let ableRegister = () =>{
    let regName = document.querySelector('.regName').value;
    let regLName = document.querySelector('.regLName').value;
    let regEmail = document.querySelector('.regEmail').value;
    let regPass1 = document.querySelector('.regPass1').value;
    let regPass2 = document.querySelector('.regPass2').value;
    let validate = 0;

    if(regName== '' || regLName =='' || regEmail =='' || regPass1 =='' || regPass2 ==''){
        validate ++;
    }

    validate == 0 ? document.querySelector('.login_button').disabled = false :
    document.querySelector('.login_button').disabled = true;

}
document.querySelector('.regName').addEventListener('keyup', ableRegister);
document.querySelector('.regLName').addEventListener('keyup', ableRegister);
document.querySelector('.regEmail').addEventListener('keyup', ableRegister);
document.querySelector('.regPass1').addEventListener('keyup', ableRegister);
document.querySelector('.regPass2').addEventListener('keyup', ableRegister);

