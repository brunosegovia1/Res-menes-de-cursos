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

En otros lenguajes a esta palabra clave (constructor) se le llama "Class", que permite a 
partir de una especie de plantilla generar más objetos. En otros lenguajes la palabra Class
permite crear un objeto con sus propiedades y a raíz de ese objeto va creando nuevos.

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
 ".prototype.la_funcion_o_dato_que_quiero_agregar".

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

Plantilla.prototype.present = function ()
{
    return `Nombre de paciente: ${this.nomb} ${this.apell} \nEdad: ${this.edad} años` 
}   

const user1 = new Plantilla ("Arturo", "Casares", 34);
console.log (user1.present());

const user2 = new Plantilla ("Alejandra", "Pascarelli", 22);
console.log (user2.present());



NOTA: Usando "\n" colocamos un salto de línea.


*/




