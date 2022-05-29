window.addEventListener('load', ()=>{

    document.querySelectorAll(".cart_item").forEach(item => {

        item.querySelector(".agregarprod").addEventListener("click", (e)=>{
            let id = e.target.parentNode.parentNode.parentNode.firstElementChild.firstElementChild.getAttribute("value");
            fetch(`http://localhost:3030/api/agregarProducto/${id}`, {
                method: "POST",
            })
            window.location.reload();
        });
        item.querySelector(".quitarprod").addEventListener("click", (e)=>{
            let id = e.target.parentNode.parentNode.parentNode.firstElementChild.firstElementChild.getAttribute("value");
            fetch(`http://localhost:3030/api/quitarProducto/${id}`, {
                method: "DELETE",
            })
            window.location.reload();
        });

    });
});

let abrir = document.querySelector(".btn_pagar");
let cerrar = document.querySelector(".aceptar");
let modalContainer = document.querySelector(".modal_container")

abrir.addEventListener("click", ()=> {
    modalContainer.style.opacity = "1";
    modalContainer.style.visibility = "visible";
})

cerrar.addEventListener("click", ()=> {
    modalContainer.style.opacity = "0";
    modalContainer.style.visibility = "hidden";
})