window.addEventListener("load",()=>{

    //profile
<<<<<<< HEAD
    document.querySelector(".profile").addEventListener("click", (e)=>{
        document.querySelector(".miniprofile").classList.toggle("show");
    })
    document.addEventListener("click", (e)=>{
        if (!e.target.classList.contains("prof")) document.querySelector(".miniprofile").classList.remove("show");
    });
=======
    let profile = document.querySelector(".profile");
    let miniprofile = document.querySelector(".miniprofile");
    
    
    // document.addEventListener("click", (e)=>{
    //     if(miniprofile.classList.contains("show")&&
    //     (window.screen.availWidth<414 && e.clientX<130)||(window.screen.availWidth>=414 && (e.screenX<635 || e.screenY>430 || e.screenY<215))){
    //         miniprofile.classList.remove("show");
    //     }
    // });
    
    profile.addEventListener("click", (e)=>{
        miniprofile.classList.toggle("show");
    })
   
    
    
>>>>>>> 146d789aa3b1a57e5481a1632c50a0bab326a659


})