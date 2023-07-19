
/*
¡HOLA! BIENVENIDOS A ESTE NUEVO CURSO. 

HA SIDO CREADO DEBIDO A QUE ESTOY HACIENDO EL CURSO DE JAVASCRIPT DE REDDIT LLAMADO 
"ARGENTINA PROGRAMA" Y PUES NO ENTIENDO UN CARAJO DE TODO LO QUE EL TIPO EXPLICA EN 
LA CLASE #5. ASÍ ES COMO YA HE CREADO UNA GUÍA DE CÓMO USAR HTML Y CSS UTILIZANDO 
DE REFERENCIA TODO EL TIEMPO UN VIDEO DE FREECODECAMP ESPAÑOL.

PUES ESTE CASO ES LO MISMO, VENGO A CREAR UNA GUÍA PARA USAR DOM TOMANDO COMO REFE-
-RENCIA UN VIDEO DE YOUTUBE LLAMADO "JavaScript para Manipulación del DOM - Curso 
con Proyectos".

NOTA: PARA HACER ESTE CURSO ES NECESARIO TENER UNA BASE DE HTML Y CSS.

¡¡¡¡¡A DARLE!!!!!
*/



/*
  ¿QUÉ ES EL DOM?
  ==========================================================================

  En HTML definimos la estructura de los elementos de la página, pero al fin 
  y al cabo es solo un archivo, el DOM es lo que le dará esa capacidad pode-
  -rosa y funcional de ser interactiva para el usuario. Eso lo logra haciendo
  que el archivo html sea manipulable desde Javascript.

  "DOM"= "DOCUMENT OBJECT MODEL" (Modelo de objetos del documento)
*/



/*
  VINCULAR JAVASCRIPT A HTML
  ============================================================================

  Debemos tener el archivo html ya completo para comenzar a trabajarlo en Js.
  Para vincularlo, debemos ir al final de la etiqueta <body> (dentro de ella)
  y colocar la etiqueta <script></script> y dentro de ella colocar el nombre 
  del archivo Javascript, así:

  <scriptsrc="nombre-de-narchivo.Js"></script>
*/



/*
  SELECCIONAR ELEMENTOS
  ================================================================================

  Desde Javascript podemos seleccionar tanto elementos de html como de Css.

  -->HTML

    1) .getElementById()

      Si nosotros le hemos colocado un id a un elemento, podemos seleccionarlo a 
      partir de este. Es muy parecido a crear una constante, se hace así:

      const nombre = document.getElementById('nombre del id');

    
    2) .getElementByClassName()

      Así como cuando tenemos un id, si tenemos una clase también podemos seleccionar
      ese elemento por su clase. El tema con las clases es que, a diferencia de los id,
      se repiten; entonces si por ejemplo, tengo varias clases cuyos valores empiezan 
      con la palabra "topping", SE VAN A SELECCIONAR TODAS ESAS CLASES.
      
      se crea así:

      const nombre = document.getElementByClassName('nombre de la clase');

      En el caso de tener varias clases con el mismo nombre, podemos aplicar acciones 
      solo a una o alguna de ellas. Por ejemplo así:

      Supongamos que tengo 4 clases con el mismo nombre, pero quiero imprimir en panta-
      -lla solo la primera y la tercera, entonces pongo:

      console.log (nombre[0],nombre[2]);

      También puedo querer trabajar sobre el atributo de un elemento, entonces (siguiendo
      le ejemplo de imprimirlo en pantalla) pongo:

      console.log(nombre.atributo);


    3) .getElementByTagName()

      De la misma forma que seleccionamos elementos por su clase, podemos hacerlo por el
      nombre de su etiqueta, así:

      const nombre= document.getElementsByTagName('nombre de la etiqueta');

      Ejemplo:

      const input= document.getElementsByTagName('input');

   
			
  -->CSS
  
		1) .querySelector()

			Este selector nos permite seleccionar el primer elemento que tenga el nombre que 
			buscamos. Puede ser un id, una clase o un elemento, cualquier cosa que esté aplica-
			-da en Css. Se escribe así:

			const nombre= document.queryselector('elemento que buscamos en css');


		2) .querySelectorAll()

			Este selector es como querySelector() normal solo que nos mostrará todos los elemen-
			-tos que tengan el nombre que colocamos.  
*/



/*
	ASIGNAR ESTILO CON JAVASCRIPT
	==========================================================================================

	Podemos modificar el estilo de un elemento tal como lo hacemos en Css, pero desde Javascript.
	Una vez seleccionado el elemento, solo debemos mencionarlo y añadir el atributo .style para
	aplicar los cambios.

	Supongamos que quiero cambiarle el color de fondo, de letra y convertir el texto de un ele-
	-mento en mayúscula, entonces hago lo siguiente:

	Lo selecciono con .querySelector():

	const nombre= document.queryselector('elemento que buscamos en css');

	y aplico la acción:

	nombre.style.background= 'blue';
	nombre.style.color= '#6dff00';
	nombre.style.textTransform= 'uppercase';
*/



/*
  TEXTO EN EL DOM
	==============================================================================================

	ACCEDER AL TEXTO

	
*/