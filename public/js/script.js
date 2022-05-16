/*----------------------- Modo oscuro ------------------------ */
window.addEventListener('load', () => {
    const boton = document.querySelector('#switch')
    console.log(boton);
    console.log('estoy!!');
    boton.addEventListener('click', () => {
        console.log('esta vivo!!');
        document.body.classList.toggle('dark');
    }); 
});






/*-----------------------  ------------------------ */