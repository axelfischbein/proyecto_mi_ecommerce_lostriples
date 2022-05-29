window.addEventListener("load",()=>{

    let dark = localStorage.getItem("botonSwitch");
    if(dark) document.body.classList.add('dark');

    //profile
    document.querySelector(".profile").addEventListener("click", (e)=>{
        console.log("f");
        document.querySelector(".miniprofile").classList.toggle("show");
    })
    document.addEventListener("click", (e)=>{
        if (!e.target.classList.contains("prof")) document.querySelector(".miniprofile").classList.remove("show");
    });

    //session
    localStorage.setItem("session","usuario1");

    let session = localStorage.getItem("session");
    if(session){
        document.querySelector(".profile").classList.add("prof");
        document.querySelector(".profile").innerHTML = `<img src="/images/profile_pic.svg" alt="cart" class="prof">
        <p class="prof">Olivia</p>`;
    }else{
        document.querySelector(".profile").classList.remove("prof");
        document.querySelector(".profile").innerHTML = `<img src="/images/profileLogin.png" alt="cart" width="20px" height="20px">
        <p>Ingreso</p>`;
        document.querySelector(".profile p").addEventListener("click", ()=>{
            window.location = 'http://localhost:3030/login';
        });
    }

    document.querySelector(".cart").addEventListener("click",(e)=>{
        if(!session){
            e.preventDefault();
            window.location = 'http://localhost:3030/login';
        }
    })

    //modo oscuro
    const botonSwitch = document.querySelector('#switch');
    
    botonSwitch.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        if(document.body.classList.contains('dark')){
            localStorage.setItem("botonSwitch", "dark");
        }else{
            localStorage.removeItem("botonSwitch");
        }
    });
})