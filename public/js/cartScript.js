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