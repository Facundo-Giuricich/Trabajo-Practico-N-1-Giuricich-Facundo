Documentación del Proyecto
1. Descripción del Proyecto

El proyecto consiste en el desarrollo de una página web sencilla que utiliza JavaScript para interactuar con el usuario.
La aplicación permite ingresar texto en una caja y mostrarlo mediante una ventana emergente cuando se presiona la tecla Enter.

Además, incluye un botón que permite cambiar los colores del fondo y del texto de la página, alternando entre tres combinaciones diferentes.

El ejercicio fue implementado en dos modalidades:

Implementación 1: JavaScript puro ejecutado directamente en el navegador.

Implementación 2: JavaScript utilizando un servidor web con Node.js.


INSTRUCCIONES PARA EJECUTAR EL PROYECTO 

Implementación 1: JavaScript puro

Descargar o clonar el proyecto.

Buscar el archivo:

index.html

Abrir el archivo directamente con cualquier navegador web (Chrome, Edge, Firefox, etc.).

No es necesario ejecutar ningún servidor.

Implementación 2: JavaScript con servidor Node.js
Requisitos

Tener instalado Node.js en el sistema.

Pasos

Abrir una terminal en la carpeta del proyecto.

Ejecutar el siguiente comando:

node servidor.js

Luego abrir el navegador e ingresar a la siguiente dirección:

http://localhost:3000

El sitio web se cargará desde el servidor local.


FUNCIONAMIENTOS DEL SISTEMA

La página contiene dos elementos principales:

1. Caja de texto

El usuario puede escribir cualquier texto en el campo de entrada.

Se implementa un evento de teclado (keydown) que detecta cuando el usuario presiona la tecla Enter.
Cuando esto ocurre, el sistema muestra una ventana emergente (alert) con el texto ingresado.

Ejemplo:

Usuario escribe: Hola mundo
Presiona Enter
Se muestra una ventana emergente con: Hola mundo

Botón para cambiar colores

Debajo de la caja de texto se encuentra un botón llamado "Cambiar colores".

Cada vez que el usuario hace clic en el botón, el sistema modifica el estilo de la página alternando entre tres estados:

Fondo blanco – texto negro

Fondo negro – texto blanco

Fondo celeste – texto rojo

Esto se logra utilizando JavaScript para modificar las propiedades CSS del elemento body.


TECNOLOGÍAS UTILIZADAS

HTML → estructura de la página web

JavaScript → lógica de interacción

Node.js → servidor web para la segunda implementación