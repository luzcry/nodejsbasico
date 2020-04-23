¿Qué es node.js?
Es un entorno de ejecución de Javascript fuera del navegador. Se crea en 2009 y es orientado a servidores. No necesitas tener un navegador para ejecutarlo.
Caracteristicas de node.js
-concurrencia: todas sus entradas y salidas son asíncronas. Un proceso por cada núcleo del procesador
-Motor v8: Entorno de ejecución de js creado por google y libre desde 2008. Convierte js en código máquina en lugar de interpretarlo en tiempo real.
-Módulos: Todo lo que no sea sintaxis de programación son módulos, son piezas de códigos pequeñas, algunas vienen instaladas y podemos crear nuestros propios módulos.
-Orientado a eventos: Hay un bucle de eventos que se ejecuta constantemente. Puedes orientar tu código de forma reactiva.

Event loop: Un proceso con un bucle que gestiona, de forma asíncrona todos los eventos de tu aplicación. los eventos del bucle vienen de la cola de eventos, todas las lineas van a generar eventos(funcion, expresion, peticion) se van a encolar y se van mandando uno a uno al event loop y los va a procesar: si puede resolverlos los va a mandar a event queue y si no lo manda al thread pool, ahi se gestiona de forma asíncrona(no bloqueando el hilo principal) cada hilo se encarga de gestionar sus procesos. node js ejecuta de manera simultanea diferentes tareas.

datos almacenados vs en memoria

La información en memoria esta pensada para ser escrita rapida pero borrada tambien rapida.
La información almacenada en disco puede ser almacenada durante mucho mas tiempo pero es mucho mas lento escribir y leer en ellos.
