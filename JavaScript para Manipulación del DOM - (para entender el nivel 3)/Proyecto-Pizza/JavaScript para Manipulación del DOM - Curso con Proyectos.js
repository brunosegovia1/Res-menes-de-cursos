
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
	PRIMERO QUE NADA:

	1. Instala Visual Studio Code: Si aún no tienes Visual Studio Code instalado, 
	   descárgalo e instálalo desde su sitio web oficial: Visual Studio Code.

	2. Abre tu Carpeta de Proyecto: Abre tu carpeta de proyecto en Visual Studio Code.

	3. Instala la Extensión "Live Server": Ve a la barra lateral izquierda, busca la 
	   pestaña de "Extensiones" (ícono de cubos) y busca "Live Server". Haz clic en el
	   primer resultado para instalar la extensión.

	4. Abre tu Página HTML: Abre el archivo HTML donde estás trabajando con JavaScript 
	   para la manipulación del DOM.

	5. Activa el "Live Server": Con el archivo HTML abierto, haz clic derecho en cual-
	   -quier parte del editor y selecciona "Open with Live Server" (Abrir con Live Ser-
	   -ver) en el menú contextual.
	
	6. Abajo a la derecha vas a ver un cartel que dice Go Live, apriétalo.
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

  <script src="nombre-de-narchivo.Js"></script>
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

      Ejemplo:

      const titulo= document.getElementById('titulo');
      console.log(titulo.innerHTML);


      NOTA: Si tenemos 2 elementos con el mismo id el el DOM trabajará solamente 
      sobre el primero que encuentre

    
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


      Ejemplo:

      const toppings= document.getElementsByClassName('topping');
      console.log(toppings[0].id);


      
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

	En Javascript hay varias formas de obtener el contenido interno de un elemento que contiene 
  texto.
  
  --ACCEDER AL TEXTO--

  Aquí veremos 3 formas distintas de acceder al texto. Para aplicar cualquiera de ellas primero
  debemos seleccionarlo como ya sabemos, por ejemplo:

  const listadeToppings = document.getElementsById ('lista-toppings');

  Una vez seleccionado, podemos usar los atributos innerText, textContent e innerHTML.

  console.log(listaDeToppings.innerText); --> PARA VER SOLO EL CONTENIDO DE TEXTO

  console.log(listaDeToppings.textContent); --> PARA VER EL CONTENIDO DE TEXTO CON TODOS LOS ESPACIOS QUE HAY EN ESA LÍNEA

  console.log(listaDeToppings.innerHTML); --> PARA VER EL CÓDIGO HTML

	
	--MODIFICAR EL TEXTO--

	Para modificar el texto solo debemos acceder a él y asignarle lo que queramos así:

	elemento.forma-de-acceder = 'texto que queremos colocar';

	Ejemplo:

	titulo.innerText = 'Mis Toppings Favoritos';
	
*/




/* 
	ATRIBUTOS
	====================================================================================

	También veamos cómo puedes eliminar o modificar los atributos de un elemento.

	Para eso tenemos removeAttribute y setAttribute.

	Para usarlos tenemos que seleccionar el elemento, como siempre. Ejemplo:

	const enlaces = document.getElementsByTagName ('a');

	Una vez seleccionado, haremos lo siguiente para removerlo o modificarlo:

	Para eliminarlo:
  acción(elemento.removeAttribute('atributo-que-quiero-personalizar', 'valor-que-quiero-asignarle'));

	Para modificarlo:
	elemento.removeAttribute('atributo-que-quiero-eliminar');

	Ejemplo:

  enlaces[0].setAttribute('href', 'https://www.freecodecamp.org/');
*/



/* 
	CLASES
	====================================================================================

  Como siempre, para trabajar con un elemento de una clase, debemos seleccionarlo.

  En Javascript cada uno de esos elementos que seleccionamos y que pertenecen a una 
  clase van a tener una propiedad llamada classList. Es una lista de todas las clases 
  que tiene ese elemento en el DOM.

	Ejecuten esto y verán:

	const primerTopping = document.querySelector('.topping');
  console.log(primerTopping.classList);


	--AGREGAR UNA CLASE--

  Para agregar una clase debemos llamar al método add(). Sería:

	elemento.classList.add('nombre-de-la-clase-que-queremos-añadir');

	Si queremos agregar más de una solo debemos separarlas con coma en donde van los 
	argumentos, así:

	elemento.classList.add('clase1', 'clase2', 'clase3', etc.);

	Ejemplo:

	const primerTopping = document.querySelector('.topping');
	primerTopping.classList.add('texto-verde');

	Luego en Css podremos aplicar estilos a la clase "texto-verde" y veremos cómo se 
	aplican a nuestra página.

	
	--VERIFICAR SI UNA CLASE EXISTE--

	Podemos averiguar si un elemento posee una clase o no. Para eso llamamos al método
	contains. Debemos colocarlo y ponerle como argumento el nombre de la clase que bus-
	-camos, así:

	console.log(elemento.classList.contains('nombre-de-la-clase'));

	Luego en la consola nos saldrá "true" si la posee y "false" si no.


	--ELIMINAR UNA CLASE--

	Para eliminar una clase usamos el método remove.

	elemento.classList.remove('nombre-de-la-clase');

*/



/* 
	CREAR UN ELEMENTO
	====================================================================================
	
	Podemos crear elementos desde cero y luego agregarlos al DOM de forma dinámica.

	Crear elementos es muy parecido a seleccionarlos, en vez de llamar al método getElementBy
	llamamos a createElement, así:

	const nombre-asignado-al-elemento = document.createElement ('elemento-que-queremos-crear');

	Ejemplo:

	const toppingNuevo = document.createElement('li');
				
*/



/* 
	AGREGAR UN ELEMENTO
	====================================================================================
	
	Podemos crear elementos, sí ¿Pero cómo los añadimos a nuestra página? 

	Pues, primero debemos saber dónde los queremos agregar. Para eso debemos seleccionar
	el elemento, la etiqueta o el espacio en nuestra página que hayamos elegido. Luego
	lo creamos y en una línea de código abajo colocamos lo siguiente:

	elemento-o-espacio-elegido.append(elemento-creado);

	Con esto ya podemos usar lo aprendido anteriormente para llenar ese elemento, veamos
	el ejemplo.

	Ejemplo:
	
	const listaDeToppings = document.getElementById('lista-toppings');

	const toppingNuevo = document.createElement('li');
	toppingNuevo.classList.add('topping', 'fondo-marron');
	toppingNuevo.innerText = 'Queso Extra';

	listaDeToppings.append(toppingNuevo);
				
*/



/* 
	REMOVER UN ELEMENTO
	====================================================================================
	
	Con el método remove podemos quitar un elemento. Ni siquiera necesitamos argumentos,
	tan solo colocar:

	elemento.remove();

	Y listo :)
				
*/



/* 
	RECORRER EL DOM
	====================================================================================
	
	Podemos seleccionar un elemento y ver o accionar sobre sus elementos padres, hijos y
	hermanos, al igual que con sus nodos padres, hijos y hermanos.

	Diferencia entre elementos y nodos: Los elementos son las etiquetas HTML, mientras 
	que los nodos abarcan etiquetas, texto y comentarios. Los nodos son más amplios.

	elemento.parentNode --> NODO PADRE DEL ELEMENTO
	elemento.parentNode.parentNode --> NODO PADRE DEL NODO PADRE DEL ELEMENTO	
	elemento.parentElement --> ELEMENTO PADRE DEL ELEMENTO
	elemento.parentElement.parentElement --> ELEMENTO PADRE DEL ELEMENTO PADRE DEL ELEMENTO	
	elemento.children --> NODOS O ELEMENTOS HIJOS
	elemento.firstChild --> PRIMER HIJO
	elemento.children[0] --> PRIMER HIJO
	elemento.firstElementChild --> PRIMER ELEMENTO HIJO
	elemento.lastElementChild --> ÚLTIMO ELEMENTO HIJO
	elemento.previousElementSibling --> HERMANO ANTERIOR DEL ELEMENTO
	elemento.nextElementSibling --> HERMANO SIGUIENTE DEL ELEMENTO
	elemento.previousSibling --> NODO HERMANO ANTERIOR DEL ELEMENTO
	elemento.nextSibling --> NODO HERMANO SIGUIENTE DEL ELEMENTO

	Aquí vimos estos, pero hay más.
*/



/* 
	EVENTOS DEL DOM
	====================================================================================
	
    Los eventos en el DOM son las acciones que realizamos con el cursor y el teclado que
	ejecutan una función, como hacer un clic y que algo pase, presionar teclas en un jue-
	-go, arrastrar archivos (por ej: imágenes), etc. 

	--CONCEPTOS IMPORTANTES--
	
	+ Elemento Target: "Target" significa "blanco" en inglés, pero no el color, sino un 
	  blanco al que apuntamos, como los de tiro al blanco. Este es el elemento con el que 
	  el usuario está intentando interactuar.
	+ Trigger: El Trigger es esa acción que va a desencadenar un evento, por ejemplo: un 
	  clic.
	+ Event Handler: Es la función que se ejecuta cuando ocurre el evento.
	+ Event Listener: Es la conexión entre los elementos anteriores.

	NOTA: Event Handler y Event Listener a veces se suelen usar como equivalentes.

*/



/* 
	EVENTOS CON onEvent EN HTML
	====================================================================================
	
	Una opción para ejecutar código cuando ocurra un evento específico es indicar esta
	asociación en HTML. Para eso tenemos los atributos onEvent, donde colocamos(dentro
	del archivo HTML):

	<etiqueta ontipodeevento = "nombredefunción()">texto</etiqueta>
	
	Luego, en JavaScript definimos la función:

	function nombredefunción()
	{
		acción que queremos aplicar;
	}

	Ejemplo:

	En HTML:
	<li onclick="mostrarClic()" class="topping fondo-marron">Almendras</li>
    
	En JavaScript:
	function mostrarClic()
	{
		console.log('Clic');
	}

	También podemos pasar parámetros. Ejemplo:

	En HTML:
	<li onclick="mostrarClic('Almendras')" class="topping fondo-marron">Almendras</li>
    
	En JavaScript:
	function mostrarClic(topping)
	{
		console.log(topping);
	}

*/



/* 
	.addEventListener()
	====================================================================================
	
	Recordemos que un Event Listener es la conexión entre el elemento con el que el usua-
	-rio está intentando interactuar, la acción desencadenante y la función que se ejecu-
	-tará.

	

*/
const almendras = document.getElementById('almendras');

function mostrarClic(topping)
{
	console.log(topping.target.innerText);
}

almendras.addEventListener('click', mostrarClic);