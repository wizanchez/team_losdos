# TEAM Los 2s @team_losdos

project Uber a realizar con reactjs como frontend, express y un framework a definir como backend, y React native para realizar una app tanto en `android` como para `IOS`.

## Team

- Ivan Sanchez @xxxxxxxxx, developer Fullstack
- Luis Sanchez @wizanchez, developer Fullstack

## Pasos

- ✅ [1.history](https://github.com/wizanchez/team_losdos/tree/master/1.history)
- ✅ [2.mokups](https://github.com/wizanchez/team_losdos/tree/master/2.mokups)
- ✖ 3.maquetacion
- ✖ 4.definir el MpV
- ✖ 5.modelo MER (definicion DB engine)
- ✖ 6.definicion Arquitectura de Folder
- ✖ 7.Patron de Disenho
- ✖ 8.Definir componentes reutilizables
- ✖ 9.realizar maquetacion en en reactjs
- ✖ 10.realizar los APIREST para cada servicio
- ✖ 11.tareas a trabajar

## Herramientas

- **sketch:** para realizar los mockups
- **vscode:** herramienta de desarrollo

## Librerias

- **Bootstrap:** Libreria css para utilizar responsive design
- **Reactjs:** Libreria para web component , en frontend

## Tips

- generate key

```bash
ssh-kygen -t rsa -b 4069 -C "NAME_KEY"
```

- For default save in `/var/root/.ssh/id_rsa`

```bash
ls -l
 -rw-------  1 root  wheel  3306 Sep  8 08:59 id_rsa
 -rw-r--r--  1 root  wheel   727 Sep  8 08:59 id_rsa.pub
```

## Instalacion SASS 

- Instalar paquete sass 
```bash
npm install -g sass
```

- Para poder visualizar tus proyectos de sass en el navegador, debes escribir en tu consola
```bash
sass --watch DF_NOMBRE_RUTA/initial/styles.scss DF_NOMBRE_RUTA/initial/styles.css
```

## Fundamentos JavaScript

- Algunas funciones
```javascript
var.toUpperCase(); # Pasar a Mayusuculas
var.toLowerCase(); # Pasar a Minuscula
var.charAt(0); # Traer la primera letra del nombre
var.length(); # count del string
`${var1} ${var2.toUpperCase()}` # Interpolar o concatenar, lo mismo que var1 + ' ' + var2
var.substr( 1 , 4 ); # hacer un substring
debugger # Hacer debug desde la consola del  navegador 
{} #indica Objetos
[] # indica Array
miFuncion = varget => varget +1 # forma de funcion llamada Arrows functions
var miVar = MyArray.filter( funcionDefiltro ) # para filtrar un array 
var miVar = MyArray.filter( function ( this ){  return this.altura >=1.8 } ) # otra forma de filtrar
var miVar = persona.map(( persona ) => { return { ... persona , altura +=22};}); # mapiar un arreglo
``` 

- ejemplo reduce
```javascript
# Forma 1
var acum = 0;
for ( var i = 0 ; personas.lenght ; i++ ){

	acum = acum + personas[ i ].cantidadDeLibros
}

# Forma 2
var acum = 0;
var totalLibro = personas.reduce( reducer , 0 );

const reducer = ( acum , { cantidadDeLibros } ) => acum + persona.cantidadDeLibros;
```

- definir prototypes JS 
```javascript
function Persona( nombre , apellido ){

	this.nombre   = nombre;
	this.apellido = apellido;
	this.edad = 37;

	console.log('se ejecuto la funcion =' );
}

Persona.prototype.saludar = function (){

	console.log(`hola me llamo ${this.nombre} y la edad ${ this.edad }`);
}

var sacha = new Persona( 'sacha Fer' , 'sanchez');

sacha.saludar();
```

- Portotypes heredadas
```javascript
function HeredaDe( prototipoHijo , prototipoPadre ){

	var fn                  = function (){}
	fn.prototype            = prototipoPadre.prototype;
	prototipoHijo.prototype = new fn;

		prototipoHijo.prototype.constructor = prototipoHijo;
}

/**
 * function and constructor
 */
function Desarrollador( nombre , apellido){

	this.nombre   = nombre;
	this.apellido = apellido;

}

Desarrollador.prototype.saludar =  function (){

	console.log(`hola me llamo ${this.nombre} y el apellido ${ this.apellido }`);
}

/**
 * function and constructor
 */	
function Persona( nombre , apellido ){

	this.nombre   = nombre;
	this.apellido = apellido;
	this.edad = 37;

	console.log('se ejecuto la funcion =' );
}

Persona.prototype.saludar = function (){

	console.log(`hola me llamo ${this.nombre} y la edad ${ this.edad }`);
}

HeredaDe( Desarrollador , Persona );
var sacha = new Persona( 'sacha Fer' , 'sanchez');
sacha.saludar();
```

- Forma mas sencilla de hacer herencia con ECMASCRIPT
```javascript
class Persona{

	constructor( nombre , apellido ){

		this.nombre   = nombre;
		this.apellido = apellido;
		this.edad     = 37;

		console.log('se ejecuto la funcion =' );

	};

	saludar(){

		console.log(`hola me llamo ${this.nombre} y el apellido ${ this.apellido }`);
	};

}

class Desarrollador extends Persona{

	constructor( nombre , apellido ){
		
		super( nombre , apellido);

		this.nombre   = nombre;
		this.apellido = apellido;
		this.edad     = 37;

		console.log('se ejecuto la funcion =Desarrollador' );

	};

	saludar(){

		console.log(`hola me llamo ${this.nombre} y el apellido ${ this.apellido } desde el desarrollador`);
	};


}
var sacha = new Desarrollador( 'sacha Fer' , 'sanchez');
```

- Pasar funcion para parametro
```javascript
class Persona{

	constructor( nombre , apellido ){

		this.nombre   = nombre;
		this.apellido = apellido;
		this.edad     = 37;

		console.log('se ejecuto la funcion =' );

	};

	saludar( fn ){

		console.log(`hola me llamo ${this.nombre} y el apellido ${ this.apellido }`);

		if (fn) {


			fn( this.nombre, this.apellido );
		}
	};
}

class Desarrollador extends Persona{

	constructor( nombre , apellido ){
		
		super( nombre , apellido);

		this.nombre   = nombre;
		this.apellido = apellido;
		this.edad     = 37;

		console.log('se ejecuto la funcion =Desarrollador' );

	};

	saludar( fn ){

		var { nombre , apellido } = this;

		console.log(`hola me llamo ${nombre} y el apellido ${apellido} desde el desarrollador`);


		if (fn) {


			fn( nombre, apellido, true );
		}
	};
}

var sacha = new Persona( 'sacha Fer' , 'sanchez');
var kaka = new Desarrollador( 'kaka Fer' , 'Garcia');
var remiro = new Desarrollador( 'remiro' , 'Fernandes');



function responderSaludo(nombre, apellido , esDev){

	console.log(`Good Morning my name is ${nombre} ${apellido}`);

	if(esDev){

		console.log(`ooooooooooooooooooooooooooooooooooooohh es Dev ${nombre} ${apellido}`);
	}
}


sacha.saludar( responderSaludo );
kaka.saludar(  );
remiro.saludar( responderSaludo );
```

## EventLoop
JavaScript poseé un modelo de concurrencia basado en un "loop de eventos". Este modelo es bastante diferente al modelo de otros lenguajes como C o Java.
[EventLoop](https://developer.mozilla.org/es/docs/Web/JavaScript/EventLoop)

### Montículo (Heap)
- Los objetos son colocados en un montículo, el cual, como su nombre lo dice, denota una gran región de memoria, mayormente sin estructura u orden.

### Cola (Queue)
- Un programa en ejecución en JavaScript contiene una cola de mensajes, la cual es una lista de mensajes a ser procesados. Cada mensaje se asocia con una función. Cuando la pila está vacía, un mensaje es sacado de la cola y procesado. Procesar un mensaje consiste en llamar a la función asociada al mensaje (y por ende crear una frame en la pila). El mensaje procesado termina cuando la pila está vacía de nuevo.

### Promises
-Una Promise (promesa en castellano) es un objeto que representa la terminación o el fracaso eventual de una operación asíncrona. Dado que la mayoría de las personas consumen promises ya creadas, esta guía explicará primero cómo consumirlas, y luego  cómo crearlas.
- [pending] 
	--> si resuelve [ fulfilled] => .then() # exitoso
	-->  si reject [ rejected ] => .catch()


## References

URLs references:

- [ssh: connect to host github.com](http://www.inanzzz.com/index.php/post/wa1f/solution-for-ssh-connect-to-host-github-com-port-22-connection-timed-out-error)
- [10 herramientas imprescindibles para crear mockups](https://www.creativosonline.org/blog/10-herramientas-imprescindibles-para-crear-mockups.html)
- [instalacion SASS preprocesador ](https://github.com/teffcode/sass-workshop)
