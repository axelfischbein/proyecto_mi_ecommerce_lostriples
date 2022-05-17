window.addEventListener("load",()=>{

    //profile
    document.querySelector(".profile").addEventListener("click", (e)=>{
        document.querySelector(".miniprofile").classList.toggle("show");
    })
    document.addEventListener("click", (e)=>{
        if (!e.target.classList.contains("prof")) document.querySelector(".miniprofile").classList.remove("show");
    });


})