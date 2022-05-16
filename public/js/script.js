window.addEventListener("load",()=>{

    //profile
    let profile = document.querySelector(".profile");
    let miniprofile = document.querySelector(".miniprofile");
    profile.addEventListener("click", (e)=>{
        miniprofile.classList.toggle("show");
    })
    
    
    // document.addEventListener("click", (e)=>{
    //     // if(miniprofile.classList.contains("show")&&
    //     // (window.screen.availWidth<414 && e.clientX<130)||(window.screen.availWidth>=414 && (e.screenX<635 || e.screenY>430 || e.screenY<215))){
    //     //     miniprofile.classList.toggle("show");
    //     // }
    // });
    
   
    
    


})