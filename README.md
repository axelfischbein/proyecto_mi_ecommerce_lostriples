# Mi Ecommerce #

## Descripción ##
Se nos solicita crear la próxima versión de MiEcommerce (el e-commerce y club de beneficios para nuestros clientes) que permite a las personas usuarias navegar a través de una lista de productos, observar sus características y agregarlos a un carrito de compras para luego poder realizar el pago de la orden.  
**Estado:** _en proceso_

* * *

## Tecnologías ##
- **ejs:** _versión 3.1.7_
- **express:** _versión 4.18.0_
- **express-validator:** _versión 6.14.0_
- **node-fetch:** _versión 2.6.7_
- **nodemon:** _versión 2.0.16_

* * *

## Instalación ##
1. Abre la consola del sistema y clona este proyecto con el comando **git clone https://github.com/axelfischbein/proyecto_mi_ecommerce_lostriples.git**
2. Ve a la carpeta del proyecto con el comando **cd proyecto_mi_ecommerce_lostriples**
3. Instala las depencencias con el comando **npm install**
4. Una vez hecho esto levanta el servidor con el comando **npm start**

En el navegador de preferencia, el **_localhost:3030_** será el encargado de permitir visualizar las distintas páginas con las que cuenta nuestra aplicación.

* * *

## Rutas ##
- **/login**  
    En esta pantalla, el usuario podrá iniciar sesión con un usuario y contraseña.
- **/register**  
    En caso de no estar registrado, en esta página podrá hacerlo ingresando algunos datos.
- **/**  
    Lleva al usuario a nuestro index, es decir, a la página principal de nuestra aplicación. Allí podrá navegar a través de una lista de productos.
- **/product/detail/_id**  
    Cuando se selecciona un producto, esta es la ruta dinámica que lleva a la pantalla con el detalle del mismo, donde el usuario podrá observar sus características y agregarlo al carrito.
- **/cart**   
    Aquí el usuario podrá visualizar su carrito con los productos que haya seleccionado, para luego realizar el pago de la orden.

