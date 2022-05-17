window.addEventListener('load', ()=>{


    let productimgs = document.querySelectorAll(".img_gallery");
    productimgs.forEach(img => {
        img.addEventListener("click", (e)=>{
            console.log(e.target.attributes)
            document.querySelector(".img_detail").innerHTML = `<img src=${e.target.attributes[1].value}   alt= ${e.target.attributes[2].value} >`;
        })
    });

})