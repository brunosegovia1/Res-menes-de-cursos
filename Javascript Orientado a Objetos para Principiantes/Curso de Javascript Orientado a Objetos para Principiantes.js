/*
CURSO DE JAVASCRIPT ORIENTADO A OBJETOS PARA PRINCIPIANTES
==================================================================

¿Qué es la programación orientada a objetos?

La programación orientada a objetos es un paradigma de la programación
que se enfoca en objetos en lugar de funciones, se basa en modelar datos
de nuestra vida real a través de entidades llamadas "objetos". Para aprender
a usar la POO en Javascript, debemos saber qué son los objetos en Javascript, 
así que vamos a empezar.
*/



/*
¿QUÉ ES UN OBJETO EN JAVASCRIPT?
==================================================================

En JavaScript, un objeto es una entidad independiente con propiedades y tipos. 
Compáralo con una taza, por ejemplo. Una taza es un objeto con propiedades. Una 
taza tiene un color, un diseño, un peso, un material del que está hecha, etc.

Casi todo es un objeto en Javascript. Tanto los arrays, como los registros y las 
listas son objetos. Todo lo que esté entre [] o {}.

Por ejemplo:

let Paciente =
{
    nomb: "Nombre",
    apell: "Apellido",
    edad: 30,
    peso: 90, 
    diagn: ["Diabetes", "Hepatitis C", "Hipotiroidismo", "Tula fracturada"],
};
*/



/*
OBJETO LITERAL y PROPIEDADES
==================================================================

Tomando como referencia el ejemplo anterior, el objeto literal viene a ser 
"Paciente" y sus propiedades son los datos que coloqué dentro, tales como
"nomb", "apell", "edad", etc.

Pero primero aprendamos a crear un objeto. 
Un objeto se define utilizando corchetes {} . Las propiedades se separan con 
coma ( , ) y las llaves y valores se separan con dos puntos ( : ). Se escribe así:

let nombre_de_objeto_literal = 
{
    propiedad1: nombre_o_atributo_de_propiedad,  
    propiedad2: nombre_o_atributo_de_propiedad,
    propiedad3: nombre_o_atributo_de_propiedad,
}

Veamos un ejemplo:

let Paciente =  //OBJETO LITERAL
{
    nomb: "Nombre", //PROPIEDAD 1
    apell: "Apellido", //PROPIEDAD 2
    edad: 30, //PROPIEDAD 3
    peso: 90, //PROPIEDAD 4
    diagn: ["Diabetes", "Hepatitis C", "Hipotiroidismo", "Tula fracturada"], //PROPIEDAD 5
};

Así también, cada propiedad está formada por una clave y un valor. La clave va separada
de su valor por ":" y a su vez las claves se separan entre ellas con una coma.

Por ejemplo: en la propiedad 1 la clave es nombr y el valor es "Federico".
*/



/*
MÉTODOS
=====================================================================

Los métodos son acciones que realizamos sobre un objeto, lo que en Javascript se llama function...y
en C++ se llama subprograma.

En el ejemplo anterior teníamos un objeto que era Paciente, agreguémosle una función que muestre
el nombre completo del paciente:

let Paciente =
{
    nomb: "Cipo",
    apell: "te",
    edad: 30,
    peso: 90, 
    diagn: ["Diabetes", "Hepatitis C", "Hipotiroidismo", "Tula fracturada"],
    mostrar: mostrar
};

function mostrar (P)
{
    return `${P.nomb}${P.apell}`;
}

console.log(mostrar(Paciente));
*/



/*
THIS
=========================================================================

"this" es una palabra clave que utilizamos adentro de una función o de un objeto
para llamar a una propiedad dentro de esa función u objeto.

Veamos cómo se usa esta palabra clave en una versión simplificada del código anterior
provista por Openai.ChatGPT:

const Paciente =
{
    nomb: 'Bruno',
    ape: 'Segovia',
    edad: 23,
    Tipodoc: 'DNI',
    mostrar ()
    {
        return `${this.nomb} ${this.ape}`; //Con la palabra clave "this" puedo acceder a propiedades dentro del objeto Paciente y a su vez dentro de la función mostrar. 
    },
}

console.log(Paciente.mostrar());
*/



/*
CONSTRUCTOR
===============================================================================

Supongamos que queremos crear una base de datos de Pacientes, entonces para cada
paciente creamos un objeto que contenga las propiedades nombre, apellido, número de 
documento, etc. Sin embargo ¿Cómo haríamos el código? ¿Crearíamos un nuevo objeto con 
dichas propiedades cada vez que llegue un nuevo paciente?

Eso no tiene sentido.

Para este tipo de casos existen los constructores, que no son más que funciones que nos
permiten generar objetos automáticamente.

Esta palabra clave (constructor) permite a partir de una especie de plantilla generar 
más objetos. 

En otros lenguajes la palabra "class" permite crear un objeto con sus propiedades y a raíz 
de ese objeto va creando nuevos.

La función constructor tendrá una tarea muy similar.

El constructor consta de una función "plantilla", en la que pondremos los datos que
queremos utilizar, pero asignándoles un valor vacío. Así:

function nombre_de_constructor ()
{
    this.dato = 0  //esto si es de valor numérico
    this.dato = "" //esto si es texto
    this.nombre_de_funcion = function ()
    {
        lo que vaya dentro de la función
        return this.lo_que_quiera_retornar_del_constructor
    }
}

Luego, para utilizarla, creamos un dato y hacemos lo siguiente:

const/let nombre_del_dato = new nombre_de_constructor ()

"new" para crear una nueva función en base al constructor.

Una vez creado el dato, podemos asignarle valores.

Veamos un ejemplo:



function Plantilla ()
{
    this.nomb = ""
    this.apell = ""
    this.edad = 0
    this.mostrar = function ()
    {
        return `${this.nomb} ${this.apell} Edad:${this.edad}`;
    }
}

const Paciente2 = new Plantilla ()

    Paciente2.nomb = "Alberto"
    Paciente2.apell = "Gómez"
    Paciente2.edad = 39
    console.log(Paciente2.mostrar())


También odemos simplificar el pasaje de parámetros colocando referencias en los
paréntesis del constructor. 
 Explico paso a paso cómo hacerlo:
 - En el constuctor coloco los nombres que tendrán los datos a usar, separados
 por comas.
 - Luego igualo los datos creados dentro del constructor a esos nombres de arriba.
 - Cada vez que cree un nuevo objeto en base al constructor, le coloco dentro el
 valor de los datos que quiero usar. IMPORTANTE es colocarlos en el mismo lugar que
 los del constructor original.

 Veamos un ejemplo:

 function Plantilla (nomb, apell, edad)
{
    this.nomb = nomb
    this.apell = apell
    this.edad = edad
    this.mostrar = function ()
    {
        return `${this.nomb} ${this.apell} Edad: ${this.edad} años`;
    }
}
    
const user1 = new Plantilla ("Arturo", "Casares", 34);
console.log (user1.mostrar());

const user2 = new Plantilla ("Alejandra", "Pascarelli", 22);
console.log (user2.mostrar());
*/ 



 /*
 PROTOTYPE
 ===================================================================

 ¿Y si quiero alterar el constructor después de que ya fue creado? (sin modificarlo)

 Para eso existe la palabra clave "prototype". 

 Una vez ya creado el constructor, podemos añadirle cosas llamándolo y colocando
 "nombre_de_constructor.prototype.nombre_de_la_funcion_o_dato_que_quiero_agregar".

 NOTA: al nombre de la función o dato que quiero agregar le puedes el nombre, ya que 
 tu mismo definirás la acción que va a realizar.

 Veamos un ejemplo tomando como referencia el ejemplo anterior. Supongamos que a los
 nombres quiero añadirles antes un "Nombre de Paciente: "
 

 function Plantilla (nomb, apell, edad)
{
    this.nomb = nomb
    this.apell = apell
    this.edad = edad
    this.mostrar = function ()
    {
        return `${this.nomb} ${this.apell} Edad: ${this.edad} años`;
    }
}

Plantilla.prototype.presentacion = function ()
{
    return `Nombre de paciente: ${this.nomb} ${this.apell} \nEdad: ${this.edad} años` 
}   

const user1 = new Plantilla ("Arturo", "Casares", 34);
console.log (user1.presentacion());

const user2 = new Plantilla ("Alejandra", "Pascarelli", 22);
console.log (user2.presentacion());



NOTA: Usando "\n" colocamos un salto de línea.
 */



/*
CLASS
=====================================================================================

Se dice que Javascript no es un lenguaje orientado a objetos porque no tiene la palabra
clave "class", que se utiliza en otros lenguajes orientados a objetos como Java y C++.

Básicamente class actúa como una plantilla y define el comportamiento y las características
de un objeto. Osea que hace exactamente lo mismo que un objeto constructor. No es más que 
otra forma de ordenar nuestras funciones.

Ahora, para utilizarla, debo crearla como un objeto. Defino el objeto con el tipo "class", 
le doy un nombre y entre las {} coloco el constructor, UTILIZANDO LA PALABRA CLAVE "constructor"
para crear una plantilla y listo.

Veamos las dos formas de crear un objeto, con class y sin class:

CON CLASS:

class plantilla 
{
    constructor (user1)
    {
        this.cosa = user1;
    }
}

const user1 = new plantilla ('cosa');

console.log(user1);


NOTA: cuando uso class, si yo creo un objeto nuevo llamando a la clase y lo coloco antes de la clase, dará error. Ejemplo a continuación:

const user1 = new plantilla ('cosa');

class plantilla 
{
    constructor (user1)
    {
        this.cosa = user1;
    }
}


console.log(user1);


VM449:1 Uncaught ReferenceError: plantilla is not defined





SIN CLASS:

function ()
{
    this.cosa;
}

const user1 = 'cosa';

console.log(user1);
*/




/*
¿Qué hace entonces que un lenguaje sea orientado a objetos?
==========================================================================================

Para que un lenguaje sea pueda modelar problemas a través de objetos debe cumplir con 2 cosas.
La primera consiste en la capacidad de describir la realidad usando objetos y relacionándolos.
Dicha capacidad consiste en cumplir con las siguientes características:

ASOCIACIÓN:
    La asociación permite unir dos objetos y enlazarlos en código.

AGREGACIÓN:
    La agregación habla de la capacidad de un objeto para referir a otros objetos indepen-
    -dientes. Es decir, yo puedo crear un objeto grande con objetos pequeños dentro y si
    saco esos objetos pequeños funcionarán como objetos independientes en mi código.

COMPOSICIÓN:
    La composición habla de la capacidad de un objeto para referir a otros objetos depen-
    -dientes. Imaginemos un objeto grande conformado por múltiples objetos pequeños. Si 
    saco uno, este no funcionará de manera independiente en el código.


La segunda consiste en la capacidad de garantizar la modularidad (la posibilidad de subdividir
el código en partes más pequeñas, siendo todas funcionales de forma independiente del resto) y 
la reutilización de código.
Este segundo requerimiento consiste en los siguientes principios:

ENCAPSULACIÓN:
    La encapsulación consiste en ocultar data y código dentro de una entidad para que esta pueda
    ser fácilmente manipulada. De tal manera funcionan muchos objetos de la realidad, como un auto,
    que es de manejo súper accesible, pero tiene muchos mecanismos internos a los cuales el usuario
    no suele tener que acceder para manipularlo.

HERENCIA:
    La herencia permite crear un objeto a partir de características de otros objetos. Pensemos otra
    vez en la vida real, cuando tenemos un hijo y este hereda características de ambos progenitores.

POLIMORFISMO:
    El polimorfismo es la capacidad de, a partir de un mismo método/función se puedan obtener respuestas
    diferentes.
*/




/*
ASOCIACIÓN
=======================================================================================================

Si yo creo dos objetos: John y María; y a uno de estos objetos, sea María, le coloco ".parent = John", el
código detectará que John es el padre de María. Entonces cuando imprima el objeto María en la consola nos
saldrá que su padre es John.

Veamoslo directamente en código:


class persona
{
    constructor (user1)
    {
        this.nomb = user1;
    }
}

const user2 = new persona('John');
const user1 = new persona('María');
user1.parent = user2;

console.log(user1);
*/




/*
AGREGACIÓN
========================================================================

La agregación consiste en relacionar componentes del mismo código que aún separados
puedan funcionar de forma independiente cada uno.

Veamos un ejemplo usando un push en el código anterior:


const Empresa =
{
    nombre: "Mansa compañía",
    empleados: []
}

class persona
{
    constructor (user1)
    {
        this.nomb = user1;
    }
}

const user2 = new persona('John');
const user1 = new persona('María');
user1.parent = user2;

console.log(user1);

Empresa.empleados.push(user1, user2)
console.log (Empresa.empleados)
*/




/*
COMPOSICIÓN
=======================================================================

La composición, opuesto a la agregación, consiste en relacionar un objeto 
con otro que sea totalmente dependiente de este. 
Un ejemplo de esto son las propiedades dentro de los objetos:

const persona =
{
    nombre: "Carlos",
    apellido: "Pérez",
    dirección:
    {
        calle: "123 baker street",
        provincia: "Entre Ríos",
        País: "Argentina"
    }
}

Si quitamos alguna de las propiedades como la dirección o el nombre estas 
pierden el sentido y no tenemos qué uso darles.
*/




/*
ENCAPSULACIÓN
=======================================================================

La encapsulación consiste en simplificar el uso de un objeto. El usuario
no tiene que saber cómo funciona internamente, solo debe saber que funciona.

Cuando hacemos encapsulamiento logramos que el usuario no tenga acceso directo
al objeto, sino que nosotros le damos funciones para que pueda acceder a traves
de ellas. Es decir, solo modifica del objeto lo que nosotros le permitimos a 
traves de un intermediario.

Para hacer un encapsulamiento debo simplemente crear un constructor, crear en él 
las variables que necesito y utilizar "this" para crear funciones que le den
acceso al usuario.

Veamos un ejemplo:

function empresa (nombre)
{
    let empleados = [];

    this.nombreempresa = nombre;

    this.mostraremp = function ()
    {
        return empleados;
    }

    this.añadiremp = function (nuevo)
    {
        empleados.push(nuevo);
    }
}

const Pepsico = new empresa ("Pepsico");

console.log(Pepsico);

Pepsico.añadiremp("Bruno");
Pepsico.mostraremp();
*/





/*
HERENCIA 
========================================================================

La herencia consiste en crear objetos especializados a partir de uno más
genérico. Es decir, crearé objeto que, a pesar de ser distintos de los demás,
heredarán todas las propiedades de un objeto base.

Ahora, hay dos formas distintas de hacer herencia en javascript. una es solo
aplicable en este lenguaje y otra es aplicable en otros lenguajes orientados
a objetos, como lo es Java.

La primera forma es utilizando la palabra clave "prototype" para añadir todo
lo que hay en un objeto a otro nuevo.

Ejemplo:

function Persona ()
{
    this.nomb = ''
    this.apell = ''
}

function Programador ()
{
    this.lenguaje = ''
}

Programador.prototype = new Persona ()


const usuario1 = new Persona ()
usuario1.nomb = 'Anastacia'
usuario1.apell = 'Nikolayevna'   

const programador1 = new Programador ()
programador1.nomb = 'Mara'
programador1.apell = 'Estevez'   
programador1.lenguaje = 'Java'  


console.log (usuario1)
console.log (programador1)




La segunda forma sería usando una clase como plantilla. Creamos la clase 
padre y luego en la clase que la herede colocamos: 

"class nombredelaclasehijo extends nombredelaclasepadre
{
    constructor (parametroheredado1, parametroheredado2,..., parametronuevo1, parametronuevo2,...)"

Luego, dentro de esta clase hijo, en el constructor, dejamos una línea de
código para colocar la palabra "super". Esta nos permitirá heredar las 
propiedades de la clase padre y si no la colocamos saltará error.
Se escribe de la siguiente manera:

super(parametroheredado1, parametroheredado2,...)


Ahora un ejemplo del mismo código anterior pero aplicado de esta segunda
forma:
class Persona 
{
    constructor (nomb, apell)
    {
       this.nomb = nomb
       this.apell = apell   
    }
}

class Programador extends Persona
{
    constructor (nomb, apell, leng)
    {
        super(nomb,apell)
        this.lenguaje = leng
    }
}


const usuario1 = new Persona ('Anastacia', 'Nikolayevna')
const programador1 = new Programador ('Mara', 'Estevez', 'Java')

console.log (usuario1)
console.log (programador1)
*/





